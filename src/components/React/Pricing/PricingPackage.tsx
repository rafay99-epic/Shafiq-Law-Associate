import { useState } from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    monthly: "PKR 5,000/month",
    yearly: "PKR 50,000/year",
    features: [
      "Legal Consultation (2 Sessions)",
      "Drafting Basic Legal Documents",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    monthly: "PKR 15,000/month",
    yearly: "PKR 150,000/year",
    features: [
      "Legal Consultation (5 Sessions)",
      "Contract Drafting & Review",
      "Priority Email Support",
      "Court Representation (Limited)",
    ],
  },
  {
    name: "Premium",
    monthly: "PKR 35,000/month",
    yearly: "PKR 350,000/year",
    features: [
      "Unlimited Legal Consultation",
      "Comprehensive Contract Drafting",
      "24/7 Legal Support",
      "Full Court Representation",
      "Dedicated Legal Advisor",
    ],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 text-center">
      <h2 className="text-5xl font-bold text-dracula-foreground mb-6">
        Pricing & Packages
      </h2>

      {/* Toggle Tabs */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-6 py-2 text-lg font-semibold transition-all border-b-2 ${
            billingCycle === "monthly"
              ? "text-dracula-green border-dracula-green"
              : "text-dracula-comment border-transparent hover:border-dracula-comment"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`px-6 py-2 text-lg font-semibold transition-all border-b-2 ${
            billingCycle === "yearly"
              ? "text-dracula-green border-dracula-green"
              : "text-dracula-comment border-transparent hover:border-dracula-comment"
          }`}
        >
          Yearly (Save 15%)
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`border border-dracula-current-line p-8 rounded-xl shadow-xl relative overflow-hidden ${
              index === 1
                ? "bg-dracula-selection scale-105 shadow-2xl"
                : "bg-dracula-background"
            }`}
          >
            {index === 1 && (
              <span className="absolute top-0 left-0 bg-dracula-green text-white text-xs px-4 py-1 font-bold uppercase">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold text-dracula-foreground">
              {plan.name}
            </h3>
            <p className="text-xl font-bold text-dracula-green my-4">
              {billingCycle === "monthly" ? plan.monthly : plan.yearly}
            </p>
            <ul className="text-dracula-comment space-y-3 text-left mt-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-lg flex items-center gap-3">
                  <span className="bg-dracula-green text-dracula-bg rounded-full p-1 text-xs">
                    ✔
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-dracula-green text-white px-6 py-3 rounded-lg shadow-md hover:opacity-80 transition w-full font-semibold">
              Subscribe Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
