import React from "react";
import {
  Shield,
  Users,
  HandHelping,
  Building,
  Scale,
  FileText,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Criminal Defense",
    description:
      "Defend your rights with expert legal representation. We ensure the best possible outcome for your case.",
    icon: Shield,
  },
  {
    title: "Family Law",
    description:
      "Compassionate legal support for divorce, custody, and family matters. We guide you through every step.",
    icon: Users,
  },
  {
    title: "Personal Injury",
    description:
      "We help you secure the compensation you deserve for injuries caused by negligence or accidents.",
    icon: HandHelping,
  },
  {
    title: "Civil Corporate Law",
    description:
      "Comprehensive legal guidance for businesses, covering contracts, compliance, and corporate matters.",
    icon: Building,
  },
  {
    title: "Arbitration & Mediation",
    description:
      "Resolve disputes efficiently outside of court through arbitration and mediation with expert facilitators.",
    icon: Scale,
  },
  {
    title: "Estate Planning",
    description:
      "Plan for the future with wills, trusts, and estate management services to protect your assets.",
    icon: FileText,
  },
  {
    title: "Immigration Law",
    description:
      "Navigate the complexities of immigration law with expert assistance for visas, green cards, and citizenship.",
    icon: Globe,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <section className="bg-dracula-bg py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-dracula-foreground mb-4">
          Our Legal Services
        </h1>
        <p className="text-lg text-dracula-comment mb-12">
          Expert legal solutions tailored to your needs. Explore our areas of
          practice.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-dracula-foreground p-8 rounded-xl shadow-lg transform transition-all duration-300 
                      hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center justify-center mb-4">
              <service.icon className="text-dracula-green w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold text-dracula-bg mb-3">
              {service.title}
            </h2>
            <p className="text-dracula-comment leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
