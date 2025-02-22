import { useState } from "react";
import { motion } from "framer-motion";

interface Office {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

interface ContactSectionProps {
  offices: Office[];
}
export default function ContactSection({ offices }: ContactSectionProps) {
  const [currentOffice, setCurrentOffice] = useState(0);

  return (
    <section className="bg-dracula-bg text-dracula-foreground py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Contact Us</h2>
        <p className="text-dracula-comment mb-8">
          Get in touch with us at the most convenient office.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          {offices.map((office, index) => (
            <button
              key={index}
              onClick={() => setCurrentOffice(index)}
              className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                currentOffice === index
                  ? "bg-dracula-green text-white"
                  : "bg-dracula-current-line text-dracula-orange hover:bg-dracula-foreground hover:text-white"
              }`}
            >
              {office.name}
            </button>
          ))}
        </div>

        <motion.div
          key={currentOffice}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-lg rounded-xl p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-2">
            {offices[currentOffice].name}
          </h3>
          <p className="text-dracula-comment mb-1">
            {offices[currentOffice].address}
          </p>
          <p className="text-dracula-foreground font-medium mb-3">
            📞 {offices[currentOffice].phone}
          </p>
          <motion.div
            key={offices[currentOffice].hours}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-dracula-green font-semibold"
          >
            🕒 {offices[currentOffice].hours}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
