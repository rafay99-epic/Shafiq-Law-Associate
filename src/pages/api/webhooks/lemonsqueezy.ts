import type { APIRoute } from "astro";
import crypto from "crypto";

interface LemonSqueezyWebhookPayload {
  meta: {
    event_name: string;
    custom_data?: Record<string, string>;
  };
  data: {
    id: string;
    type: string;
    attributes: {
      store_id: number;
      customer_id: number;
      order_number: number;
      user_name: string;
      user_email: string;
      subtotal: number;
      total: number;
      currency: string;
      status: string;
      first_order_item?: {
        product_id: number;
        variant_id: number;
        product_name: string;
        variant_name: string;
      };
      [key: string]: unknown;
    };
  };
}

/**
 * Verify the webhook signature from Lemon Squeezy
 */
function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const signature = request.headers.get("X-Signature");
    const rawBody = await request.text();

    // Verify webhook signature if secret is configured
    const webhookSecret = import.meta.env.LEMONSQUEEZY_WEBHOOK_SECRET;

    if (webhookSecret && signature) {
      const isValid = verifyWebhookSignature(rawBody, signature, webhookSecret);

      if (!isValid) {
        console.error("Invalid webhook signature");
        return new Response(JSON.stringify({ error: "Invalid signature" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    const payload: LemonSqueezyWebhookPayload = JSON.parse(rawBody);
    const eventName = payload.meta.event_name;

    console.log(`Received Lemon Squeezy webhook: ${eventName}`);

    // Handle different webhook events
    switch (eventName) {
      case "order_created": {
        const order = payload.data.attributes;
        console.log("New order received:", {
          orderNumber: order.order_number,
          email: order.user_email,
          name: order.user_name,
          total: order.total,
          currency: order.currency,
          customData: payload.meta.custom_data,
        });

        // TODO: Add your order processing logic here
        // Examples:
        // - Send welcome email
        // - Create user account
        // - Update database
        // - Notify team via Slack/Discord

        break;
      }

      case "subscription_created": {
        const subscription = payload.data.attributes;
        console.log("New subscription created:", {
          email: subscription.user_email,
          name: subscription.user_name,
          status: subscription.status,
          customData: payload.meta.custom_data,
        });

        // TODO: Add subscription handling logic here
        // Examples:
        // - Grant access to premium features
        // - Update user subscription status
        // - Send onboarding email

        break;
      }

      case "subscription_updated": {
        const subscription = payload.data.attributes;
        console.log("Subscription updated:", {
          status: subscription.status,
          customData: payload.meta.custom_data,
        });

        // TODO: Handle subscription updates (upgrades, downgrades, etc.)

        break;
      }

      case "subscription_cancelled": {
        const subscription = payload.data.attributes;
        console.log("Subscription cancelled:", {
          email: subscription.user_email,
          customData: payload.meta.custom_data,
        });

        // TODO: Handle subscription cancellation
        // Examples:
        // - Revoke access
        // - Send cancellation confirmation
        // - Trigger retention email

        break;
      }

      case "subscription_payment_success": {
        const subscription = payload.data.attributes;
        console.log("Subscription payment successful:", {
          email: subscription.user_email,
          total: subscription.total,
        });

        // TODO: Handle successful recurring payment

        break;
      }

      case "subscription_payment_failed": {
        const subscription = payload.data.attributes;
        console.log("Subscription payment failed:", {
          email: subscription.user_email,
        });

        // TODO: Handle failed payment
        // Examples:
        // - Send payment reminder
        // - Notify team
        // - Implement grace period

        break;
      }

      default:
        console.log(`Unhandled webhook event: ${eventName}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return new Response(JSON.stringify({ error: "Webhook processing failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
