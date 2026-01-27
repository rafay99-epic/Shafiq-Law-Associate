import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";

interface MainIntroProps {
  tagline: string;
  subheadline: string;
  yearsExperience: number;
  phoneNumber: string;
}

export default function MainIntro({
  tagline,
  subheadline,
  yearsExperience,
  phoneNumber,
}: MainIntroProps) {
  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mx-6 bg-dracula-foreground">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle vertical line accent */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dracula-cyan/20 to-transparent hidden lg:block" />

      {/* Large decorative watermark - intentional, centered */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none">
        <span
          className="text-[28rem] font-bold text-dracula-bg/[0.02] leading-none tracking-tighter -mr-20"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          SLA
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-4 text-dracula-pink text-sm tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-dracula-pink/50" />
              Rawalpindi · Since 2004
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-dracula-bg leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {tagline}
            </span>
          </motion.h1>

          {/* Subheadline - bolder, tighter, declaration not whisper */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-dracula-bg/70 font-medium mb-12 max-w-2xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {subheadline}
          </motion.p>

          {/* Value line - sharper, more emotional */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-dracula-comment text-lg mb-12 max-w-xl leading-relaxed"
          >
            {yearsExperience} years of standing before Pakistan's High Courts and
            Supreme Court — defending what matters most.
          </motion.p>

          {/* CTA - more presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-dracula-pink text-dracula-foreground font-semibold py-4 px-8 rounded-lg hover:bg-dracula-bg transition-colors shadow-lg shadow-dracula-pink/20 border border-dracula-pink/80"
            >
              Discuss Your Case
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-3 text-dracula-bg/70 font-medium py-4 px-8 rounded-lg border border-dracula-bg/20 hover:border-dracula-bg/40 hover:text-dracula-bg transition-all"
            >
              <Phone className="w-4 h-4" />
              {phoneNumber}
            </a>
          </motion.div>

          {/* Trust markers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-x-8 gap-y-4 text-sm"
          >
            {["High Court Practice", "Supreme Court Practice", "500+ Criminal Cases"].map(
              (item, index) => (
                <span key={index} className="flex items-center gap-2 text-dracula-bg/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-dracula-cyan" />
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-dracula-cyan/20 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dracula-bg/30 hover:text-dracula-bg/60 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
