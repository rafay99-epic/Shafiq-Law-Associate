// Lemon Squeezy client-side utilities

declare global {
  interface Window {
    createLemonSqueezy?: () => void;
    LemonSqueezy?: {
      Setup: (config: { eventHandler: (event: LemonSqueezyEvent) => void }) => void;
      Url: {
        Open: (url: string) => void;
        Close: () => void;
      };
      Refresh: () => void;
    };
  }
}

export interface LemonSqueezyEvent {
  event: "Checkout.Success" | "Checkout.Closed" | "PaymentMethodUpdate.Mounted" | "PaymentMethodUpdate.Closed" | "PaymentMethodUpdate.Updated";
  data?: {
    type: string;
    id: string;
    attributes: {
      store_id: number;
      customer_id: number;
      identifier: string;
      order_number: number;
      user_name: string;
      user_email: string;
      subtotal: number;
      total: number;
      currency: string;
      status: string;
      [key: string]: unknown;
    };
  };
}

export interface CheckoutOptions {
  variantId: string;
  planName: string;
  billingCycle: "monthly" | "yearly";
  customData?: Record<string, string>;
  onSuccess?: (event: LemonSqueezyEvent) => void;
  onClose?: () => void;
}

/**
 * Load the Lemon Squeezy script
 */
export function loadLemonSqueezyScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.LemonSqueezy) {
      resolve();
      return;
    }

    // Check if script is already in DOM
    const existingScript = document.querySelector('script[src*="lemon.js"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      return;
    }

    // Create and load script
    const script = document.createElement("script");
    script.src = "https://app.lemonsqueezy.com/js/lemon.js";
    script.defer = true;
    script.onload = () => {
      // Initialize Lemon Squeezy
      if (window.createLemonSqueezy) {
        window.createLemonSqueezy();
      }
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load Lemon Squeezy script"));
    document.head.appendChild(script);
  });
}

/**
 * Setup Lemon Squeezy event handler
 */
export function setupLemonSqueezyEvents(
  onSuccess?: (event: LemonSqueezyEvent) => void,
  onClose?: () => void
): void {
  if (!window.LemonSqueezy) {
    console.warn("Lemon Squeezy not loaded");
    return;
  }

  window.LemonSqueezy.Setup({
    eventHandler: (event: LemonSqueezyEvent) => {
      switch (event.event) {
        case "Checkout.Success":
          onSuccess?.(event);
          break;
        case "Checkout.Closed":
          onClose?.();
          break;
        default:
          break;
      }
    },
  });
}

/**
 * Create a checkout session via server API and open overlay
 */
export async function createCheckout(options: CheckoutOptions): Promise<void> {
  const { variantId, planName, billingCycle, customData, onSuccess, onClose } = options;

  // Ensure Lemon Squeezy is loaded
  await loadLemonSqueezyScript();

  // Setup event handlers
  setupLemonSqueezyEvents(onSuccess, onClose);

  // Create checkout via our server API
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      variantId,
      planName,
      billingCycle,
      customData,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create checkout");
  }

  const { checkoutUrl } = await response.json();

  // Open checkout overlay
  if (window.LemonSqueezy) {
    window.LemonSqueezy.Url.Open(checkoutUrl);
  } else {
    // Fallback: redirect to checkout URL
    window.location.href = checkoutUrl;
  }
}

/**
 * Close the checkout overlay
 */
export function closeCheckout(): void {
  if (window.LemonSqueezy) {
    window.LemonSqueezy.Url.Close();
  }
}
