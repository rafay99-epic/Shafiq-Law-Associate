import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Briefcase,
  ChevronDown,
  CheckCircle,
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

interface ServicesPageProps {
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

const gradients = [
  "from-dracula-cyan to-dracula-orange",
  "from-dracula-green to-dracula-cyan",
  "from-dracula-pink to-dracula-green",
  "from-dracula-cyan to-dracula-pink",
  "from-dracula-orange to-dracula-cyan",
  "from-dracula-green to-dracula-pink",
  "from-dracula-pink to-dracula-cyan",
  "from-dracula-cyan to-dracula-green",
];

// Service Card Component
const ServiceCard: React.FC<{
  service: Service;
  index: number;
}> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[service.icon] || Scale;
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div variants={cardVariants}>
      <div className="bg-white rounded-2xl border border-dracula-current-line overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Top gradient accent */}
        <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-5 mb-4">
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
            >
              <IconComponent className="w-7 h-7 text-dracula-bg" />
            </div>

            {/* Title & Description */}
            <div className="flex-1 min-w-0">
              <h3
                className="text-xl font-bold text-dracula-foreground mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {service.title}
              </h3>
              <p className="text-dracula-comment text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          {/* Sub-services toggle */}
          {service.subServices && service.subServices.length > 0 && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between py-3 px-4 bg-dracula-bg rounded-xl text-sm font-medium text-dracula-foreground hover:bg-dracula-current-line transition-colors mt-4"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-dracula-cyan rounded-full" />
                  {service.subServices.length} Specialized Services
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-dracula-comment" />
                </motion.div>
              </button>

              {/* Expanded sub-services */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 grid sm:grid-cols-2 gap-3">
                      {service.subServices.map((subService, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                          className="flex items-start gap-3 p-3 bg-dracula-bg rounded-lg border border-dracula-current-line hover:border-dracula-cyan/50 transition-colors group"
                        >
                          <CheckCircle className="w-4 h-4 text-dracula-cyan flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-semibold text-dracula-foreground group-hover:text-dracula-cyan transition-colors">
                              {subService.title}
                            </h4>
                            <p className="text-xs text-dracula-comment mt-0.5 leading-relaxed">
                              {subService.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA inside expanded */}
                    <div className="mt-4 pt-4 border-t border-dracula-current-line">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan hover:text-dracula-green transition-colors"
                      >
                        Get consultation for {service.title.toLowerCase()}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  return (
    <div className="min-h-screen bg-dracula-bg">
      {/* Hero Section */}
      <section className="relative bg-dracula-cyan overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dracula-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-dracula-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dracula-bg/10 backdrop-blur-sm rounded-full mb-8">
              <Briefcase className="w-4 h-4 text-dracula-bg" />
              <span className="text-sm font-medium text-dracula-bg">
                Comprehensive Legal Solutions
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dracula-bg leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Legal Services
            </h1>

            <p className="text-lg sm:text-xl text-dracula-bg/85 leading-relaxed max-w-3xl mx-auto mb-8">
              Expert legal solutions tailored to your needs. Each practice area
              includes specialized services to address your specific legal
              requirements.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-dracula-bg/80">
              {[
                { value: `${services.length}`, label: "Practice Areas" },
                {
                  value: `${services.reduce((acc, s) => acc + (s.subServices?.length || 0), 0)}+`,
                  label: "Specialized Services",
                },
                { value: "20+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-2xl font-bold text-dracula-bg"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave decoration */}
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
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              All Practice Areas
              <span className="w-8 h-px bg-dracula-cyan" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Explore Our Services
            </h2>
            <p className="text-dracula-comment max-w-2xl mx-auto">
              Click on any service to view specialized sub-services and get
              detailed information about how we can help you.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dracula-foreground py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-dracula-cyan/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Scale className="w-10 h-10 text-dracula-cyan" />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-bg mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Need Legal Assistance?
            </h2>

            <p className="text-dracula-comment text-lg mb-8 max-w-2xl mx-auto">
              Our experienced legal team is ready to help you with any of the
              services listed above. Schedule a free consultation to discuss
              your case.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl hover:bg-dracula-pink transition-colors"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+920309817389"
                className="inline-flex items-center gap-2 bg-dracula-bg/10 text-dracula-bg font-semibold py-4 px-8 rounded-xl border border-dracula-bg/20 hover:bg-dracula-bg/20 transition-colors"
              >
                Call: +92 300 9817389
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
