import { motion } from "framer-motion";
import { ShieldCheck, Users, Scale, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  ShieldCheck,
  Users,
  Scale,
};

interface Reason {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  reasons: Reason[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ reasons }) => {
  return (
    <section className="py-20 sm:py-28 -mx-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              Why Choose Us
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Why Choose{" "}
              <span className="text-dracula-cyan">Shafiq Law Associates?</span>
            </h2>

            <p className="text-lg text-dracula-comment leading-relaxed mb-8">
              Our firm stands for trust, excellence, and results. With over two
              decades of experience, we fight for our clients with a dedication
              that sets us apart from the rest.
            </p>

            {/* Key points */}
            <ul className="space-y-4 mb-8">
              {[
                "Personalized legal strategies for every case",
                "Transparent communication and fair pricing",
                "Proven track record with 98% success rate",
                "Expert attorneys across all practice areas",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-dracula-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-dracula-cyan" />
                  </div>
                  <span className="text-dracula-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-dracula-cyan font-semibold hover:text-dracula-green transition-colors group"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right content - Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {reasons.map((reason, index) => {
              const IconComponent = iconMap[reason.icon] || HelpCircle;
              const gradients = [
                "from-dracula-cyan to-dracula-orange",
                "from-dracula-green to-dracula-cyan",
                "from-dracula-pink to-dracula-green",
              ];

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl p-6 border border-dracula-current-line shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Accent line */}
                    <div
                      className={`absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b ${gradients[index % gradients.length]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                    />

                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-dracula-bg" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3
                          className="text-xl font-bold text-dracula-foreground mb-2 group-hover:text-dracula-cyan transition-colors"
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                          }}
                        >
                          {reason.title}
                        </h3>
                        <p className="text-dracula-comment leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
