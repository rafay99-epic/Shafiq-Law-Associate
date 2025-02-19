import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    price: "PKR 5,000/month",
    features: [
      "Legal Consultation (2 Sessions)",
      "Drafting Basic Legal Documents",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "PKR 15,000/month",
    features: [
      "Legal Consultation (5 Sessions)",
      "Contract Drafting & Review",
      "Priority Email Support",
      "Court Representation (Limited)",
    ],
  },
  {
    name: "Premium",
    price: "PKR 35,000/month",
    features: [
      "Unlimited Legal Consultation",
      "Comprehensive Contract Drafting",
      "24/7 Legal Support",
      "Full Court Representation",
      "Dedicated Legal Advisor",
    ],
  },
];

export default function PricePackages() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-5xl font-bold text-center text-dracula-foreground mb-10">
        Our Pricing Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`border border-dracula-current-line p-6 rounded-xl text-center shadow-lg ${
              index === 1 ? "bg-dracula-selection" : "bg-dracula-background"
            }`}
          >
            <h3 className="text-2xl font-semibold text-dracula-foreground">
              {plan.name}
            </h3>
            <p className="text-xl font-bold text-dracula-green my-4">
              {plan.price}
            </p>
            <ul className="text-dracula-comment space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-lg flex items-center gap-2">
                  <span>✅</span> {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-dracula-green text-white px-6 py-3 rounded-lg shadow-md hover:opacity-80 transition">
              Subscribe Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
