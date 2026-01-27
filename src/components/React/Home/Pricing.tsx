import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Shield,
  Zap,
  Crown,
  Sparkles,
} from "lucide-react";

interface PricingPlan {
  name: string;
  monthly: string;
  yearly: string;
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

const PricingPreview: React.FC<PricingPreviewProps> = ({ pricingPlans }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section className="py-20 sm:py-28 -mx-6 bg-dracula-bg relative overflow-hidden">
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
