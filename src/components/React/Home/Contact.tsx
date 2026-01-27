import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";

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
    <section className="py-20 sm:py-28 -mx-6 bg-dracula-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dracula-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dracula-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-pink uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-pink" />
              Get In Touch
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-bg mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Visit Our <span className="text-dracula-pink">Offices</span>
            </h2>

            <p className="text-lg text-dracula-comment leading-relaxed mb-8">
              Get in touch with us at the most convenient location. Our team is
              ready to assist you with all your legal needs.
            </p>

            {/* Quick contact options */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a
                href="tel:+920309817389"
                className="group flex items-center gap-4 bg-dracula-bg/5 backdrop-blur-sm rounded-xl p-4 border border-dracula-bg/10 hover:border-dracula-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 bg-dracula-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-dracula-cyan/30 transition-colors">
                  <Phone className="w-5 h-5 text-dracula-cyan" />
                </div>
                <div>
                  <div className="text-xs text-dracula-comment mb-1">
                    Call Us
                  </div>
                  <div className="font-semibold text-dracula-bg">
                    +92 300 9817389
                  </div>
                </div>
              </a>

              <a
                href="mailto:slclaw@gmail.com"
                className="group flex items-center gap-4 bg-dracula-bg/5 backdrop-blur-sm rounded-xl p-4 border border-dracula-bg/10 hover:border-dracula-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 bg-dracula-green/20 rounded-xl flex items-center justify-center group-hover:bg-dracula-green/30 transition-colors">
                  <Mail className="w-5 h-5 text-dracula-green" />
                </div>
                <div>
                  <div className="text-xs text-dracula-comment mb-1">
                    Email Us
                  </div>
                  <div className="font-semibold text-dracula-bg">
                    slclaw@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/923215134315"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-dracula-bg/5 backdrop-blur-sm rounded-xl p-4 border border-dracula-bg/10 hover:border-dracula-cyan/50 transition-colors sm:col-span-2"
              >
                <div className="w-12 h-12 bg-dracula-pink/20 rounded-xl flex items-center justify-center group-hover:bg-dracula-pink/30 transition-colors">
                  <MessageCircle className="w-5 h-5 text-dracula-pink" />
                </div>
                <div>
                  <div className="text-xs text-dracula-comment mb-1">
                    WhatsApp
                  </div>
                  <div className="font-semibold text-dracula-bg">
                    +92 321 5134315
                  </div>
                </div>
              </a>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl hover:bg-dracula-pink transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right content - Office cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Office tabs */}
            <div className="flex gap-2 mb-6">
              {offices.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentOffice(index)}
                  className={`flex-1 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                    currentOffice === index
                      ? "bg-dracula-cyan text-dracula-bg shadow-lg"
                      : "bg-dracula-bg/10 text-dracula-bg/70 hover:bg-dracula-bg/20"
                  }`}
                >
                  {office.name}
                </button>
              ))}
            </div>

            {/* Office card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOffice}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-dracula-bg rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Map placeholder / decorative header */}
                <div className="h-40 bg-gradient-to-br from-dracula-cyan/20 via-dracula-green/20 to-dracula-pink/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-dracula-cyan rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-dracula-bg" />
                    </div>
                  </div>
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #3D5233 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </div>
                </div>

                {/* Office details */}
                <div className="p-6 sm:p-8">
                  <h3
                    className="text-2xl font-bold text-dracula-foreground mb-6"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {offices[currentOffice].name}
                  </h3>

                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-dracula-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-dracula-cyan" />
                      </div>
                      <div>
                        <div className="text-xs text-dracula-comment uppercase tracking-wider mb-1">
                          Address
                        </div>
                        <div className="text-dracula-foreground">
                          {offices[currentOffice].address}
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-dracula-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-dracula-green" />
                      </div>
                      <div>
                        <div className="text-xs text-dracula-comment uppercase tracking-wider mb-1">
                          Phone
                        </div>
                        <a
                          href={`tel:${offices[currentOffice].phone}`}
                          className="text-dracula-foreground hover:text-dracula-cyan transition-colors"
                        >
                          {offices[currentOffice].phone}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-dracula-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-dracula-pink" />
                      </div>
                      <div>
                        <div className="text-xs text-dracula-comment uppercase tracking-wider mb-1">
                          Office Hours
                        </div>
                        <div className="text-dracula-foreground font-medium">
                          {offices[currentOffice].hours}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Get directions button */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(offices[currentOffice].address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-dracula-current-line text-dracula-foreground font-semibold py-3 px-6 rounded-xl hover:bg-dracula-cyan hover:text-dracula-bg transition-colors"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
