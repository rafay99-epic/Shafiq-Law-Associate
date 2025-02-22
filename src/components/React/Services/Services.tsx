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
const iconMap: { [key: string]: React.ElementType } = {
  Shield,
  Users,
  HandHelping,
  Building,
  Scale,
  FileText,
  Globe,
};

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesPageProps {
  services: Service[];
}
const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  return (
    <section className="bg-dracula-bg py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-dracula-foreground mb-4">
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
              {React.createElement(iconMap[service.icon], {
                className: "text-dracula-green w-12 h-12",
              })}
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
