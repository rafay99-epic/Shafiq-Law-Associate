import { ShieldCheck, Lock, Scale, Trophy, Handshake, Eye } from "lucide-react";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of ethics and honesty in every case we handle.",
    icon: Scale,
  },
  {
    title: "Commitment",
    description:
      "We are dedicated to providing unwavering support and excellent legal representation.",
    icon: Lock,
  },
  {
    title: "Justice",
    description:
      "We are passionate about ensuring fairness and justice for all, championing your rights.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in all we do, delivering top-notch legal services every time.",
    icon: Trophy,
  },
  {
    title: "Respect",
    description:
      "We treat every client with dignity and respect, valuing their trust in us.",
    icon: Handshake,
  },
  {
    title: "Transparency",
    description:
      "We maintain open and honest communication, ensuring you are informed every step of the way.",
    icon: Eye,
  },
];

export default function CoreValueSection() {
  return (
    <section className="bg-dracula-bg py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-dracula-foreground mb-4">
          Our Core Values
        </h2>
        <p className="text-lg text-dracula-comment mb-12">
          The foundation of our firm is built on strong values that guide every
          decision and action we take.
        </p>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-dracula-foreground p-8 rounded-xl shadow-lg transform transition-all duration-300 
                      hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center justify-center mb-4">
              <value.icon className="text-dracula-green w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-dracula-bg mb-3">
              {value.title}
            </h3>
            <p className="text-dracula-comment leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
