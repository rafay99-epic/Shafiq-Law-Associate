import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Scale,
  Trophy,
  Handshake,
  Eye,
} from "lucide-react";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of ethics and honesty in every case we handle.",
    icon: Scale,
    color: "from-dracula-cyan to-dracula-orange",
  },
  {
    title: "Commitment",
    description:
      "We are dedicated to providing unwavering support and excellent legal representation.",
    icon: Lock,
    color: "from-dracula-green to-dracula-cyan",
  },
  {
    title: "Justice",
    description:
      "We are passionate about ensuring fairness and justice for all, championing your rights.",
    icon: ShieldCheck,
    color: "from-dracula-pink to-dracula-green",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in all we do, delivering top-notch legal services every time.",
    icon: Trophy,
    color: "from-dracula-cyan to-dracula-pink",
  },
  {
    title: "Respect",
    description:
      "We treat every client with dignity and respect, valuing their trust in us.",
    icon: Handshake,
    color: "from-dracula-orange to-dracula-cyan",
  },
  {
    title: "Transparency",
    description:
      "We maintain open and honest communication, ensuring you are informed every step of the way.",
    icon: Eye,
    color: "from-dracula-green to-dracula-pink",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function CoreValueSection() {
  return (
    <section className="relative bg-dracula-foreground py-20 sm:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-dracula-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dracula-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-pink uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-dracula-pink" />
            What We Stand For
            <span className="w-8 h-px bg-dracula-pink" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-bg mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Core Values
          </h2>

          <p className="text-lg text-dracula-comment max-w-2xl mx-auto">
            The foundation of our firm is built on strong values that guide
            every decision and action we take in serving our clients.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="h-full bg-dracula-bg/5 backdrop-blur-sm border border-dracula-bg/10 rounded-2xl p-8 transition-all duration-300 hover:bg-dracula-bg/10 hover:border-dracula-cyan/30 hover:-translate-y-1">
                {/* Icon with gradient background */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-7 h-7 text-dracula-bg" />
                </div>

                <h3
                  className="text-xl font-bold text-dracula-bg mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {value.title}
                </h3>

                <p className="text-dracula-comment leading-relaxed">
                  {value.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-dracula-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
