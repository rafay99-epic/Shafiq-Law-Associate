import { motion } from "framer-motion";
import { Quote, Briefcase, GraduationCap, Award } from "lucide-react";

interface CEOImageProps {
  CEOImage: string;
}

export default function IntroductionSection({ CEOImage }: CEOImageProps) {
  return (
    <section className="bg-dracula-bg py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-dracula-cyan via-dracula-green to-dracula-pink rounded-2xl opacity-20 blur-sm" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-dracula-cyan rounded-tl-2xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-dracula-green rounded-br-2xl" />

            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={CEOImage}
                alt="Saqib Shafiq - Founder & CEO"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Overlay gradient */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dracula-foreground/90 to-transparent p-6">
                <h3
                  className="text-2xl font-bold text-dracula-bg"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Saqib Shafiq
                </h3>
                <p className="text-dracula-pink font-medium">
                  Founder & Chief Executive Officer
                </p>
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -left-4 bg-dracula-cyan text-dracula-bg px-6 py-4 rounded-xl shadow-lg"
            >
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                20+
              </div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              Meet Our Leader
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Visionary Leadership,{" "}
              <span className="text-dracula-cyan">Exceptional Results</span>
            </h2>

            {/* Quote */}
            <div className="relative bg-dracula-current-line rounded-xl p-6 mb-8">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-dracula-cyan/30" />
              <p className="text-dracula-comment italic text-lg pl-8">
                "Our commitment is not just to win cases, but to provide peace
                of mind and justice to every client who trusts us with their
                legal matters."
              </p>
            </div>

            <p className="text-dracula-comment text-lg leading-relaxed mb-6">
              <span className="font-semibold text-dracula-foreground">
                Saqib Shafiq
              </span>
              , CEO of Shafiq Law Chamber, is a seasoned legal professional with
              expertise in{" "}
              <span className="text-dracula-cyan font-medium">
                Business, Criminal, Family, Civil, and Corporate Law
              </span>
              . His extensive experience allows him to navigate complex legal
              matters, providing tailored solutions for businesses and
              individuals alike.
            </p>

            <p className="text-dracula-comment leading-relaxed mb-8">
              From corporate governance and contracts to defending clients in
              criminal cases and resolving family and civil disputes, Saqib
              combines strategic insight with a deep commitment to his clients'
              success.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Briefcase, label: "Senior Advocate" },
                { icon: GraduationCap, label: "LLB, LLM" },
                { icon: Award, label: "Bar Council Member" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 border border-dracula-current-line"
                >
                  <div className="w-10 h-10 bg-dracula-cyan/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-dracula-cyan" />
                  </div>
                  <span className="text-sm font-medium text-dracula-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
