import { ShieldCheck, Lock, Scale, Trophy, Handshake, Eye } from "lucide-react";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of ethics and honesty in every case we handle.",
    icon: <Scale size={40} className="text-dracula-green" />,
  },
  {
    title: "Commitment",
    description:
      "We are dedicated to providing unwavering support and excellent legal representation.",
    icon: <Lock size={40} className="text-dracula-green" />,
  },
  {
    title: "Justice",
    description:
      "We are passionate about ensuring fairness and justice for all, championing your rights.",
    icon: <ShieldCheck size={40} className="text-dracula-green" />,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in all we do, delivering top-notch legal services every time.",
    icon: <Trophy size={40} className="text-dracula-green" />,
  },
  {
    title: "Respect",
    description:
      "We treat every client with dignity and respect, valuing their trust in us.",
    icon: <Handshake size={40} className="text-dracula-green" />,
  },
  {
    title: "Transparency",
    description:
      "We maintain open and honest communication, ensuring you are informed every step of the way.",
    icon: <Eye size={40} className="text-dracula-green" />,
  },
];

export default function CoreValueSection() {
  return (
    <>
      <div className="absolute left-1/2 -bottom-6 w-24 h-1 bg-dracula-pink rounded-full transform -translate-x-1/2"></div>

      <section className="bg-dracula-bg py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dracula-foreground">
            Our Core Values
          </h2>
          <p className="text-lg text-dracula-comment mt-3">
            The foundation of our firm is built on strong values that guide
            every decision and action we take.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-dracula-current-line shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-dracula-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-dracula-comment">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="absolute left-1/2 -bottom-6 w-24 h-1 bg-dracula-pink rounded-full transform -translate-x-1/2"></div>
      </section>
    </>
  );
}
