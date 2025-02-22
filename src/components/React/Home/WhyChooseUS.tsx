import { ShieldCheck, Users, Scale, HelpCircle } from "lucide-react";

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

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ reasons }) => {
  return (
    <section className="bg-dracula-bg py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-dracula-foreground mb-6">
          Why Choose Shafiq Law Associates?
        </h2>
        <p className="text-dracula-comment max-w-2xl mx-auto mb-12">
          Our firm stands for trust, excellence, and results. We fight for our
          clients with a dedication that sets us apart.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon] || HelpCircle;

            return (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12 text-dracula-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-dracula-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-dracula-orange text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
