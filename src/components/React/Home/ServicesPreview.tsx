import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  HandHelping,
  Building,
  Scale,
  FileText,
  Globe,
  Calculator,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Shield,
  Users,
  HandHelping,
  Building,
  Scale,
  FileText,
  Globe,
  Calculator,
};

interface SubService {
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  subServices?: SubService[];
}

interface ServicesPreviewProps {
  services: Service[];
}

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesPreview: React.FC<ServicesPreviewProps> = ({ services }) => {
  // Show only first 6 services on home page
  const displayServices = services.slice(0, 6);

  const gradients = [
    "from-dracula-cyan to-dracula-orange",
    "from-dracula-green to-dracula-cyan",
    "from-dracula-pink to-dracula-green",
    "from-dracula-cyan to-dracula-pink",
    "from-dracula-orange to-dracula-cyan",
    "from-dracula-green to-dracula-pink",
  ];

  return (
    <section className="py-20 sm:py-28 -mx-6 bg-dracula-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-dracula-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-dracula-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-pink uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-pink" />
              Our Services
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-bg leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Comprehensive{" "}
              <span className="text-dracula-pink">Legal Services</span>
            </h2>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-2 text-dracula-pink font-semibold hover:text-dracula-bg transition-colors group flex-shrink-0"
          >
            View All {services.length} Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Scale;
            const subServicesCount = service.subServices?.length || 0;

            return (
              <motion.a
                key={index}
                href="/services"
                variants={cardVariants}
                className="group block"
              >
                <div className="h-full bg-dracula-bg/5 backdrop-blur-sm border border-dracula-bg/10 rounded-2xl p-6 transition-all duration-300 hover:bg-dracula-bg/10 hover:border-dracula-cyan/30 hover:-translate-y-1">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-dracula-bg" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-dracula-bg mb-3 group-hover:text-dracula-pink transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dracula-comment text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Sub-services hint */}
                  {subServicesCount > 0 && (
                    <div className="flex items-center gap-2 text-xs text-dracula-bg/60 mb-4">
                      <span className="w-1.5 h-1.5 bg-dracula-cyan rounded-full" />
                      {subServicesCount} specialized services
                    </div>
                  )}

                  {/* Link */}
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-dracula-cyan group-hover:text-dracula-pink transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-dracula-comment mb-6">
            Need help with a specific legal matter? We offer{" "}
            {services.reduce((acc, s) => acc + (s.subServices?.length || 0), 0)}+
            specialized services across {services.length} practice areas.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl hover:bg-dracula-pink transition-colors"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
