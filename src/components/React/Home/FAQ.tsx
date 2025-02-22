import { useState } from "react";
import { motion } from "framer-motion";
interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto my-16 px-6">
      <h2 className="text-5xl font-bold mx-auto  text-dracula-foreground text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-dracula-current-line rounded-lg p-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-dracula-foreground font-medium text-lg"
            >
              {faq.question}
              <span className="text-dracula-pink">
                {openIndex === index ? "▲" : "▼"}{" "}
              </span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-dracula-comment mt-2">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
