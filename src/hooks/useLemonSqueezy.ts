import { useState, useEffect, useCallback } from "react";
import {
  loadLemonSqueezyScript,
  createCheckout,
  type CheckoutOptions,
  type LemonSqueezyEvent,
} from "../utils/lemonSqueezy";

interface UseLemonSqueezyOptions {
  onSuccess?: (event: LemonSqueezyEvent) => void;
  onClose?: () => void;
  onError?: (error: Error) => void;
}

interface UseLemonSqueezyReturn {
  isLoading: boolean;
  isReady: boolean;
  error: Error | null;
  checkout: (options: Omit<CheckoutOptions, "onSuccess" | "onClose">) => Promise<void>;
}

export function useLemonSqueezy(options: UseLemonSqueezyOptions = {}): UseLemonSqueezyReturn {
  const { onSuccess, onClose, onError } = options;
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Load Lemon Squeezy script on mount
  useEffect(() => {
    let mounted = true;

    loadLemonSqueezyScript()
      .then(() => {
        if (mounted) {
          setIsReady(true);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          onError?.(err);
        }
      });

    return () => {
      mounted = false;
    };
  }, [onError]);

  const checkout = useCallback(
    async (checkoutOptions: Omit<CheckoutOptions, "onSuccess" | "onClose">) => {
      setIsLoading(true);
      setError(null);

      try {
        await createCheckout({
          ...checkoutOptions,
          onSuccess: (event) => {
            setIsLoading(false);
            onSuccess?.(event);
          },
          onClose: () => {
            setIsLoading(false);
            onClose?.();
          },
        });
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Checkout failed");
        setError(error);
        setIsLoading(false);
        onError?.(error);
        throw error;
      }
    },
    [onSuccess, onClose, onError]
  );

  return {
    isLoading,
    isReady,
    error,
    checkout,
  };
}
