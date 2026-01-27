import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative bg-dracula-bg py-20 sm:py-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dracula-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section label */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-6">
            <span className="w-8 h-px bg-dracula-cyan" />
            Get In Touch
            <span className="w-8 h-px bg-dracula-cyan" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-foreground mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's Discuss Your{" "}
            <span className="text-dracula-cyan">Legal Needs</span>
          </h2>

          <p className="text-lg text-dracula-comment max-w-2xl mx-auto mb-10">
            Get expert legal advice tailored to your case. Our team is ready to
            help you navigate through any legal challenge with confidence and
            expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-dracula-orange transition-colors duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="tel:+920309817389"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white text-dracula-foreground font-semibold py-4 px-8 rounded-xl border-2 border-dracula-current-line hover:border-dracula-cyan hover:text-dracula-cyan transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "+92 300 9817389",
                href: "tel:+920309817389",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "slclaw@gmail.com",
                href: "mailto:slclaw@gmail.com",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+92 321 5134315",
                href: "https://wa.me/923215134315",
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-xl p-6 border border-dracula-current-line hover:border-dracula-cyan hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-dracula-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-dracula-cyan/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-dracula-cyan" />
                </div>
                <div className="text-sm text-dracula-comment mb-1">
                  {contact.label}
                </div>
                <div className="font-semibold text-dracula-foreground group-hover:text-dracula-cyan transition-colors">
                  {contact.value}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-dracula-cyan via-dracula-green to-dracula-pink" />
    </section>
  );
}
