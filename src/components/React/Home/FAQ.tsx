import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 -mx-6 bg-dracula-current-line/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              Got Questions?
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Frequently Asked{" "}
              <span className="text-dracula-cyan">Questions</span>
            </h2>

            <p className="text-lg text-dracula-comment leading-relaxed mb-8">
              Find answers to common legal questions. Can't find what you're
              looking for? Our team is always ready to help.
            </p>

            {/* Contact CTA */}
            <div className="bg-white rounded-2xl p-6 border border-dracula-current-line">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dracula-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-dracula-cyan" />
                </div>
                <div>
                  <h4
                    className="font-bold text-dracula-foreground mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Still have questions?
                  </h4>
                  <p className="text-sm text-dracula-comment mb-3">
                    Our legal experts are here to help you.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan hover:text-dracula-green transition-colors"
                  >
                    Contact Us
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content - FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={`bg-white rounded-xl border transition-all duration-300 ${
                    openIndex === index
                      ? "border-dracula-cyan shadow-lg"
                      : "border-dracula-current-line hover:border-dracula-cyan/50"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start gap-4 p-5 text-left"
                  >
                    {/* Number badge */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                        openIndex === index
                          ? "bg-dracula-cyan text-dracula-bg"
                          : "bg-dracula-current-line text-dracula-comment"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question text */}
                    <span
                      className={`flex-1 font-semibold transition-colors ${
                        openIndex === index
                          ? "text-dracula-cyan"
                          : "text-dracula-foreground"
                      }`}
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {faq.question}
                    </span>

                    {/* Toggle icon */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        openIndex === index
                          ? "bg-dracula-cyan text-dracula-bg"
                          : "bg-dracula-current-line text-dracula-comment"
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-[4.5rem]">
                          <p className="text-dracula-comment leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
