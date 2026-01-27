import type { APIRoute } from "astro";

interface CheckoutRequest {
  variantId: string;
  planName: string;
  billingCycle: "monthly" | "yearly";
  customData?: Record<string, string>;
}

interface LemonSqueezyCheckoutResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      url: string;
      expires_at: string | null;
    };
  };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: CheckoutRequest = await request.json();
    const { variantId, planName, billingCycle, customData } = body;

    // Validate required fields
    if (!variantId) {
      return new Response(
        JSON.stringify({ error: "Variant ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = import.meta.env.LEMONSQUEEZY_API_KEY;
    const storeId = import.meta.env.LEMONSQUEEZY_STORE_ID;

    if (!apiKey || !storeId) {
      console.error("Missing Lemon Squeezy configuration");
      return new Response(
        JSON.stringify({ error: "Payment system not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create checkout via Lemon Squeezy API
    const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
      method: "POST",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        data: {
          type: "checkouts",
          attributes: {
            checkout_options: {
              embed: false,
              media: true,
              logo: true,
              desc: true,
              discount: true,
              button_color: "#3D5233", // dracula-cyan color
            },
            checkout_data: {
              custom: {
                plan_name: planName,
                billing_cycle: billingCycle,
                ...customData,
              },
            },
            product_options: {
              redirect_url: `${new URL(request.url).origin}/payment/success`,
              receipt_button_text: "Return to Dashboard",
              receipt_link_url: `${new URL(request.url).origin}/payment/success`,
            },
          },
          relationships: {
            store: {
              data: {
                type: "stores",
                id: storeId,
              },
            },
            variant: {
              data: {
                type: "variants",
                id: variantId,
              },
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Lemon Squeezy API error:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to create checkout session" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const checkoutData: LemonSqueezyCheckoutResponse = await response.json();
    const checkoutUrl = checkoutData.data.attributes.url;

    return new Response(
      JSON.stringify({
        success: true,
        checkoutUrl,
        checkoutId: checkoutData.data.id,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Checkout creation error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
