import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "How can I register a company in Pakistan?",
    answer:
      "To register a company in Pakistan, you need to submit an application to SECP, reserve a company name, draft the memorandum and articles of association, and complete the incorporation process.",
  },
  {
    question: "What are the legal requirements for divorce in Pakistan?",
    answer:
      "In Pakistan, divorce procedures vary by personal law. Muslim couples must follow the Talaq process, including notification to the Union Council. For other faiths, legal separation follows civil court procedures.",
  },
  {
    question: "How do I resolve a property dispute in Pakistan?",
    answer:
      "Property disputes are resolved through civil courts. If you have valid ownership documents, you can file a case under the Transfer of Property Act or Specific Relief Act.",
  },
  {
    question: "Can a foreigner own property in Pakistan?",
    answer:
      "Yes, foreigners can own property in Pakistan with special approval from the Board of Investment and compliance with local land laws.",
  },
  {
    question: "What are the steps for filing a criminal case in Pakistan?",
    answer:
      "To file a criminal case, visit your local police station to register an FIR. If the police refuse, you can approach the Magistrate under Section 22-A of the CrPC for complaint registration.",
  },
];

const FAQSection = () => {
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
