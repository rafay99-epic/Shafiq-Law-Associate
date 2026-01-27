import { motion } from "framer-motion";
import { Scale, Award, Users, ArrowRight, Phone, ChevronDown } from "lucide-react";

interface MainIntroProps {
  imageUrl: string;
  LandingPageIntroText: string;
  LandingPageSecondLineText: string;
}

export default function MainIntro({
  imageUrl,
  LandingPageIntroText,
  LandingPageSecondLineText,
}: MainIntroProps) {
  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mx-6">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dracula-foreground via-dracula-foreground/95 to-dracula-cyan/90" />
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-dracula-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-dracula-green/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dracula-pink/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-dracula-bg/10 backdrop-blur-sm border border-dracula-bg/20 rounded-full mb-8"
            >
              <Scale className="w-4 h-4 text-dracula-pink" />
              <span className="text-sm font-medium text-dracula-bg/90">
                Trusted Legal Excellence Since 2004
              </span>
            </motion.div>

            {/* Main heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dracula-bg leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {LandingPageIntroText}
              <span className="block text-dracula-pink mt-2">With Confidence</span>
            </h1>

            <p className="text-lg sm:text-xl text-dracula-bg/75 leading-relaxed mb-8 max-w-xl">
              {LandingPageSecondLineText}. Our experienced attorneys provide
              personalized solutions for all your legal needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-dracula-pink text-dracula-bg font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-dracula-green transition-colors"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+920309817389"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-dracula-bg/10 backdrop-blur-sm text-dracula-bg font-semibold py-4 px-8 rounded-xl border border-dracula-bg/20 hover:bg-dracula-bg/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Award, value: "20+", label: "Years Experience" },
                { icon: Users, value: "1000+", label: "Cases Won" },
                { icon: Scale, value: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-dracula-pink mx-auto mb-2" />
                  <div
                    className="text-2xl sm:text-3xl font-bold text-dracula-bg"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-dracula-bg/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-dracula-pink/30 rounded-2xl" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-dracula-cyan/30 rounded-2xl" />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt="Legal Excellence"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dracula-foreground/50 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-dracula-bg rounded-xl p-6 shadow-xl max-w-xs"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dracula-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-dracula-cyan" />
                </div>
                <div>
                  <h4
                    className="font-bold text-dracula-foreground mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Expert Legal Team
                  </h4>
                  <p className="text-sm text-dracula-comment">
                    Specialized attorneys for every practice area
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dracula-bg/60 hover:text-dracula-bg transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
