import { ShieldCheck, Users, Scale } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-dracula-cyan" />,
      title: "Proven Legal Expertise",
      description:
        "With years of experience, we have successfully handled complex cases across various legal domains.",
    },
    {
      icon: <Users className="w-10 h-10 text-dracula-green" />,
      title: "Client-Centered Approach",
      description:
        "We prioritize our clients' needs, offering personalized legal strategies for the best outcomes.",
    },
    {
      icon: <Scale className="w-10 h-10 text-dracula-purple" />,
      title: "Trusted & Respected",
      description:
        "Our reputation is built on integrity, professionalism, and a commitment to justice.",
    },
  ];

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
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-dracula-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-dracula-orange text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
