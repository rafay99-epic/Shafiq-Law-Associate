import { motion } from "framer-motion";
import { Scale, Award, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-dracula-cyan" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dracula-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dracula-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-dracula-bg/10 backdrop-blur-sm rounded-full mb-8"
            >
              <Scale className="w-4 h-4 text-dracula-bg" />
              <span className="text-sm font-medium text-dracula-bg">
                Trusted Legal Excellence Since 2004
              </span>
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dracula-bg leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              About{" "}
              <span className="relative">
                Shafiq Law Chamber
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 4 150 2 298 10"
                    stroke="#C09970"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-dracula-bg/85 leading-relaxed max-w-3xl mx-auto mb-12">
              Specializing in{" "}
              <span className="font-semibold text-dracula-bg">
                Civil, Corporate, Criminal, and Family Law
              </span>
              , our skilled team provides tailored legal solutions with a proven
              track record of success. We prioritize your needs and deliver
              results that matter.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { icon: Award, value: "20+", label: "Years Experience" },
                { icon: Users, value: "1000+", label: "Cases Won" },
                { icon: Scale, value: "100%", label: "Client Focused" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-dracula-bg/10 backdrop-blur-sm rounded-2xl p-6 border border-dracula-bg/20"
                >
                  <stat.icon className="w-8 h-8 text-dracula-pink mx-auto mb-3" />
                  <div
                    className="text-3xl font-bold text-dracula-bg mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-dracula-bg/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
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
      </div>
    </section>
  );
}
