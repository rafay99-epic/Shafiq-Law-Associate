import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

interface PricingPlan {
  name: string;
  monthly: string;
  yearly: string;
  features: string[];
}

interface PricingSectionProps {
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

export default function PricingPage({ pricingPlans }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section className="py-20 sm:py-28 -mx-6">
      <div className="max-w-7xl mx-auto px-6">
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
            Pricing
            <span className="w-8 h-px bg-dracula-cyan" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-foreground mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Transparent <span className="text-dracula-cyan">Pricing</span> Plans
          </h2>

          <p className="text-lg text-dracula-comment max-w-2xl mx-auto mb-8">
            Choose a plan that fits your legal needs. All plans include access
            to our experienced legal team.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-dracula-current-line rounded-xl p-1.5">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                billingCycle === "monthly"
                  ? "bg-dracula-cyan text-dracula-bg shadow-md"
                  : "text-dracula-comment hover:text-dracula-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
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
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => {
            const isPopular = index === 1;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative ${isPopular ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="inline-flex items-center gap-1.5 bg-dracula-cyan text-dracula-bg text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                    isPopular
                      ? "bg-dracula-foreground text-dracula-bg shadow-2xl border-2 border-dracula-cyan"
                      : "bg-white border border-dracula-current-line hover:border-dracula-cyan/50 hover:shadow-xl"
                  }`}
                >
                  {/* Top accent */}
                  {!isPopular && (
                    <div className="h-1 bg-gradient-to-r from-dracula-cyan via-dracula-green to-dracula-pink" />
                  )}

                  <div className="p-8">
                    {/* Plan name */}
                    <h3
                      className={`text-xl font-bold mb-2 ${
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

                    {/* Price */}
                    <div className="mb-6">
                      <span
                        className={`text-4xl font-bold ${
                          isPopular ? "text-dracula-pink" : "text-dracula-cyan"
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

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isPopular
                                ? "bg-dracula-cyan/20 text-dracula-cyan"
                                : "bg-dracula-cyan/10 text-dracula-cyan"
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <span
                            className={
                              isPopular
                                ? "text-dracula-bg/80"
                                : "text-dracula-comment"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-4 px-6 rounded-xl transition-all ${
                        isPopular
                          ? "bg-dracula-cyan text-dracula-bg hover:bg-dracula-pink"
                          : "bg-dracula-current-line text-dracula-foreground hover:bg-dracula-cyan hover:text-dracula-bg"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-dracula-comment mt-12"
        >
          Need a custom plan?{" "}
          <a
            href="/contact"
            className="text-dracula-cyan font-semibold hover:text-dracula-green transition-colors"
          >
            Contact us
          </a>{" "}
          for enterprise solutions.
        </motion.p>
      </div>
    </section>
  );
}
