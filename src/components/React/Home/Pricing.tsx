import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Shield,
  Zap,
  Crown,
  Sparkles,
  Loader2,
} from "lucide-react";
import { useLemonSqueezy } from "../../../hooks/useLemonSqueezy";
import type { LemonSqueezyEvent } from "../../../utils/lemonSqueezy";

interface PricingPlan {
  name: string;
  monthly: string;
  yearly: string;
  monthlyVariantId?: string;
  yearlyVariantId?: string;
  features: string[];
}

interface PricingPreviewProps {
  pricingPlans: PricingPlan[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const planIcons: { [key: string]: React.ElementType } = {
  Basic: Shield,
  Professional: Zap,
  Premium: Crown,
};

const planGradients: { [key: string]: string } = {
  Basic: "from-dracula-cyan to-dracula-green",
  Professional: "from-dracula-green to-dracula-pink",
  Premium: "from-dracula-pink to-dracula-cyan",
};

// Success Modal Component
const SuccessModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  orderData?: LemonSqueezyEvent["data"];
}> = ({ isOpen, onClose, orderData }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-dracula-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-dracula-green" />
            </div>
            <h3
              className="text-2xl font-bold text-dracula-foreground mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Payment Successful!
            </h3>
            <p className="text-dracula-comment mb-6">
              Thank you for subscribing. We'll be in touch shortly to get you started.
            </p>
            {orderData && (
              <p className="text-sm text-dracula-comment mb-6">
                Order #{orderData.attributes.order_number}
              </p>
            )}
            <button
              onClick={onClose}
              className="w-full bg-dracula-cyan text-dracula-bg font-semibold py-3 px-6 rounded-xl hover:bg-dracula-green transition-colors"
            >
              Continue
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PricingPreview: React.FC<PricingPreviewProps> = ({ pricingPlans }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderData, setOrderData] = useState<LemonSqueezyEvent["data"] | undefined>();

  const { checkout, isLoading } = useLemonSqueezy({
    onSuccess: (event) => {
      setLoadingPlan(null);
      setOrderData(event.data);
      setShowSuccess(true);
    },
    onClose: () => {
      setLoadingPlan(null);
    },
    onError: (err) => {
      setLoadingPlan(null);
      console.error("Checkout error:", err);
    },
  });

  const handleCheckout = async (plan: PricingPlan, cycle: "monthly" | "yearly") => {
    const variantId = cycle === "monthly" ? plan.monthlyVariantId : plan.yearlyVariantId;

    if (!variantId) {
      // If no variant ID, redirect to pricing page
      window.location.href = "/pricing";
      return;
    }

    setLoadingPlan(`${plan.name}-${cycle}`);

    try {
      await checkout({
        variantId,
        planName: plan.name,
        billingCycle: cycle,
      });
    } catch (err) {
      console.error("Failed to initiate checkout:", err);
    }
  };

  return (
    <section className="py-20 sm:py-28 -mx-6 bg-dracula-bg relative overflow-hidden">
      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        orderData={orderData}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-dracula-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-dracula-pink/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Section label */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-dracula-cyan" />
            Pricing Plans
            <span className="w-8 h-px bg-dracula-cyan" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-foreground leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Transparent <span className="text-dracula-cyan">Pricing</span>
          </h2>

          <p className="text-dracula-comment max-w-2xl mx-auto text-lg mb-8">
            Choose a plan that fits your legal needs. All plans include access
            to our experienced legal team with no hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white rounded-xl p-1.5 shadow-lg border border-dracula-current-line">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-dracula-cyan text-dracula-bg shadow-md"
                  : "text-dracula-comment hover:text-dracula-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-dracula-cyan text-dracula-bg shadow-md"
                  : "text-dracula-comment hover:text-dracula-foreground"
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 bg-dracula-green/20 text-dracula-green text-xs font-bold rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pricingPlans.map((plan, index) => {
            const isPopular = index === 1;
            const IconComponent = planIcons[plan.name] || Shield;
            const gradient =
              planGradients[plan.name] || "from-dracula-cyan to-dracula-green";

            const variantId =
              billingCycle === "monthly"
                ? plan.monthlyVariantId
                : plan.yearlyVariantId;
            const hasVariantId = Boolean(variantId);
            const isThisPlanLoading =
              isLoading && loadingPlan === `${plan.name}-${billingCycle}`;

            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                className={`relative ${isPopular ? "md:-mt-4 md:mb-4 z-10" : ""}`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-dracula-pink to-dracula-cyan text-dracula-bg text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                    isPopular
                      ? "bg-dracula-foreground text-dracula-bg shadow-2xl ring-2 ring-dracula-pink"
                      : "bg-white border border-dracula-current-line hover:border-dracula-cyan/50 hover:shadow-xl"
                  }`}
                >
                  {/* Top gradient accent */}
                  <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

                  <div className="p-6 sm:p-8">
                    {/* Plan icon and name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 text-dracula-bg" />
                      </div>
                      <h3
                        className={`text-xl font-bold ${
                          isPopular
                            ? "text-dracula-bg"
                            : "text-dracula-foreground"
                        }`}
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <span
                        className={`text-3xl sm:text-4xl font-bold ${
                          isPopular
                            ? "bg-gradient-to-r from-dracula-pink to-dracula-cyan bg-clip-text text-transparent"
                            : "text-dracula-cyan"
                        }`}
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {billingCycle === "monthly"
                          ? plan.monthly
                          : plan.yearly}
                      </span>
                    </div>

                    {/* Features - show only first 3 */}
                    <ul className="space-y-3 mb-6">
                      {plan.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isPopular
                                ? "bg-dracula-cyan/20 text-dracula-cyan"
                                : "bg-dracula-cyan/10 text-dracula-cyan"
                            }`}
                          >
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </div>
                          <span
                            className={`text-sm ${
                              isPopular
                                ? "text-dracula-bg/80"
                                : "text-dracula-comment"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                      {plan.features.length > 3 && (
                        <li
                          className={`text-sm ${
                            isPopular
                              ? "text-dracula-bg/60"
                              : "text-dracula-comment"
                          } pl-8`}
                        >
                          +{plan.features.length - 3} more features
                        </li>
                      )}
                    </ul>

                    {/* CTA Button */}
                    {hasVariantId ? (
                      <button
                        onClick={() => handleCheckout(plan, billingCycle)}
                        disabled={isLoading}
                        className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                          isPopular
                            ? "bg-gradient-to-r from-dracula-pink to-dracula-cyan text-dracula-bg hover:shadow-lg"
                            : "bg-dracula-bg text-dracula-foreground hover:bg-dracula-cyan hover:text-dracula-bg"
                        }`}
                      >
                        {isThisPlanLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Subscribe
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    ) : (
                      <a
                        href="/pricing"
                        className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
                          isPopular
                            ? "bg-gradient-to-r from-dracula-pink to-dracula-cyan text-dracula-bg hover:shadow-lg"
                            : "bg-dracula-bg text-dracula-foreground hover:bg-dracula-cyan hover:text-dracula-bg"
                        }`}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-dracula-comment mb-6">
            Need a custom plan? Contact us for enterprise solutions tailored to
            your needs.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 text-dracula-cyan font-semibold hover:text-dracula-pink transition-colors"
          >
            View All Pricing Details
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
