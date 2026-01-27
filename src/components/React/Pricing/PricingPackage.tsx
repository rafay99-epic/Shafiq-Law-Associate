import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Users,
  Scale,
  Zap,
  Crown,
  Sparkles,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

interface PricingPlan {
  name: string;
  monthly: string;
  yearly: string;
  features: string[];
  description?: string;
  highlight?: string;
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
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

const planDescriptions: { [key: string]: string } = {
  Basic:
    "Perfect for individuals seeking occasional legal guidance and document review.",
  Professional:
    "Ideal for businesses and individuals requiring regular legal support and representation.",
  Premium:
    "Comprehensive legal coverage for complex matters and ongoing legal needs.",
};

// Pricing Card Component
const PricingCard: React.FC<{
  plan: PricingPlan;
  index: number;
  isPopular: boolean;
  billingCycle: "monthly" | "yearly";
}> = ({ plan, index, isPopular, billingCycle }) => {
  const IconComponent = planIcons[plan.name] || Scale;
  const gradient = planGradients[plan.name] || "from-dracula-cyan to-dracula-green";
  const description = plan.description || planDescriptions[plan.name] || "";

  return (
    <motion.div
      variants={cardVariants}
      className={`relative ${isPopular ? "md:-mt-6 md:mb-6 z-10" : ""}`}
    >
      {/* Popular badge */}
      {isPopular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-dracula-pink to-dracula-cyan text-dracula-bg text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </div>
        </motion.div>
      )}

      <div
        className={`h-full rounded-3xl overflow-hidden transition-all duration-500 ${
          isPopular
            ? "bg-dracula-foreground text-dracula-bg shadow-2xl ring-2 ring-dracula-pink transform hover:scale-[1.02]"
            : "bg-white border border-dracula-current-line hover:border-dracula-cyan/50 hover:shadow-xl"
        }`}
      >
        {/* Top gradient accent */}
        <div className={`h-2 bg-gradient-to-r ${gradient}`} />

        <div className="p-8 sm:p-10">
          {/* Plan icon and name */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
            >
              <IconComponent className="w-7 h-7 text-dracula-bg" />
            </div>
            <div>
              <h3
                className={`text-2xl font-bold ${
                  isPopular ? "text-dracula-bg" : "text-dracula-foreground"
                }`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm ${
                  isPopular ? "text-dracula-bg/60" : "text-dracula-comment"
                }`}
              >
                {plan.name === "Basic"
                  ? "For Individuals"
                  : plan.name === "Professional"
                    ? "For Growing Needs"
                    : "For Comprehensive Coverage"}
              </p>
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed mb-6 ${
              isPopular ? "text-dracula-bg/70" : "text-dracula-comment"
            }`}
          >
            {description}
          </p>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span
                className={`text-4xl sm:text-5xl font-bold ${
                  isPopular
                    ? "bg-gradient-to-r from-dracula-pink to-dracula-cyan bg-clip-text text-transparent"
                    : "text-dracula-cyan"
                }`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {billingCycle === "monthly" ? plan.monthly : plan.yearly}
              </span>
            </div>
            {billingCycle === "yearly" && (
              <p
                className={`text-sm mt-2 ${
                  isPopular ? "text-dracula-green" : "text-dracula-green"
                }`}
              >
                Save 15% with yearly billing
              </p>
            )}
          </div>

          {/* Features */}
          <div className="mb-8">
            <p
              className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                isPopular ? "text-dracula-bg/50" : "text-dracula-comment"
              }`}
            >
              What's included:
            </p>
            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isPopular
                        ? "bg-dracula-cyan/20 text-dracula-cyan"
                        : "bg-dracula-cyan/10 text-dracula-cyan"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span
                    className={`text-sm leading-relaxed ${
                      isPopular ? "text-dracula-bg/85" : "text-dracula-comment"
                    }`}
                  >
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-4 px-6 rounded-xl transition-all duration-300 ${
              isPopular
                ? "bg-gradient-to-r from-dracula-pink to-dracula-cyan text-dracula-bg hover:shadow-lg hover:scale-[1.02]"
                : "bg-dracula-bg text-dracula-foreground hover:bg-dracula-cyan hover:text-dracula-bg"
            }`}
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// FAQ Item Component
const FAQItem: React.FC<{
  question: string;
  answer: string;
  index: number;
}> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-dracula-current-line"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-dracula-foreground font-semibold pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-dracula-comment" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-dracula-comment leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function PricingPage({ pricingPlans }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const pricingFAQs = [
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. The difference will be prorated based on your remaining billing period.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, online banking, and cash payments. For yearly plans, we also offer flexible payment arrangements.",
    },
    {
      question: "Is there a minimum contract period?",
      answer:
        "Monthly plans have no minimum commitment. Yearly plans are billed annually but can be cancelled with 30 days notice.",
    },
    {
      question: "What if I need services outside my plan?",
      answer:
        "Additional services can be purchased separately at our standard hourly rates, or you can upgrade to a higher tier plan for better value.",
    },
  ];

  return (
    <div className="min-h-screen bg-dracula-bg">
      {/* Hero Section */}
      <section className="relative bg-dracula-cyan overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dracula-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-dracula-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dracula-pink/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dracula-bg/10 backdrop-blur-sm rounded-full mb-8">
              <Scale className="w-4 h-4 text-dracula-bg" />
              <span className="text-sm font-medium text-dracula-bg">
                Transparent Legal Pricing
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dracula-bg leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Simple, Honest Pricing
            </h1>

            <p className="text-lg sm:text-xl text-dracula-bg/85 leading-relaxed max-w-3xl mx-auto mb-8">
              Choose a plan that fits your legal needs. All plans include access
              to our experienced legal team with no hidden fees.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-dracula-bg/80">
              {[
                { icon: Shield, label: "No Hidden Fees" },
                { icon: Clock, label: "Flexible Terms" },
                { icon: Users, label: "Expert Support" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <badge.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F5F0E8"
            />
          </svg>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header with toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              Pricing Plans
              <span className="w-8 h-px bg-dracula-cyan" />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Choose Your{" "}
              <span className="text-dracula-cyan">Legal Plan</span>
            </h2>

            <p className="text-dracula-comment max-w-2xl mx-auto mb-8">
              Select a billing cycle and plan that works best for your legal
              requirements. All plans can be customized upon request.
            </p>

            {/* Billing toggle */}
            <div className="inline-flex items-center bg-white rounded-2xl p-2 shadow-lg border border-dracula-current-line">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-dracula-cyan text-dracula-bg shadow-md"
                    : "text-dracula-comment hover:text-dracula-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  billingCycle === "yearly"
                    ? "bg-dracula-cyan text-dracula-bg shadow-md"
                    : "text-dracula-comment hover:text-dracula-foreground"
                }`}
              >
                Yearly
                <span className="px-2 py-1 bg-dracula-green/20 text-dracula-green text-xs font-bold rounded-full">
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
            className="grid md:grid-cols-3 gap-8 lg:gap-6"
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                index={index}
                isPopular={index === 1}
                billingCycle={billingCycle}
              />
            ))}
          </motion.div>

          {/* Custom plan note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-dracula-comment">
              Need a custom plan?{" "}
              <a
                href="/contact"
                className="text-dracula-cyan font-semibold hover:text-dracula-green transition-colors inline-flex items-center gap-1"
              >
                Contact us
                <ArrowRight className="w-4 h-4" />
              </a>{" "}
              for enterprise solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Why Choose Our Plans?
            </h2>
            <p className="text-dracula-comment max-w-2xl mx-auto">
              All our plans come with these essential benefits to ensure you get
              the best legal support.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Shield,
                title: "Confidential",
                description: "Your information is protected with strict confidentiality",
                gradient: "from-dracula-cyan to-dracula-green",
              },
              {
                icon: Clock,
                title: "Responsive",
                description: "Quick response times for all your legal queries",
                gradient: "from-dracula-green to-dracula-pink",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Access to experienced lawyers in various practice areas",
                gradient: "from-dracula-pink to-dracula-cyan",
              },
              {
                icon: Scale,
                title: "Fair Pricing",
                description: "Transparent pricing with no surprise fees",
                gradient: "from-dracula-cyan to-dracula-orange",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6 rounded-2xl bg-dracula-bg border border-dracula-current-line hover:shadow-lg transition-all duration-300 text-center"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md`}
                >
                  <feature.icon className="w-7 h-7 text-dracula-bg" />
                </div>
                <h3
                  className="text-lg font-bold text-dracula-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-dracula-comment">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              FAQ
              <span className="w-8 h-px bg-dracula-cyan" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Common Questions
            </h2>
            <p className="text-dracula-comment">
              Got questions about our pricing? Here are some answers.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-dracula-current-line">
            {pricingFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-dracula-comment">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-dracula-cyan font-semibold hover:text-dracula-green transition-colors"
              >
                Contact our team
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dracula-foreground py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-dracula-cyan/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <HelpCircle className="w-10 h-10 text-dracula-cyan" />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-bg mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Not Sure Which Plan?
            </h2>

            <p className="text-dracula-comment text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and we'll help you find the perfect
              plan for your legal needs. No obligation, no pressure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl hover:bg-dracula-pink transition-colors"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+920309817389"
                className="inline-flex items-center gap-2 bg-dracula-bg/10 text-dracula-bg font-semibold py-4 px-8 rounded-xl border border-dracula-bg/20 hover:bg-dracula-bg/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call: +92 300 9817389
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
