import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

interface MeetTheTeamProps {
  team: TeamMember[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function MeetTheTeam({ team }: MeetTheTeamProps) {
  return (
    <section className="bg-[var(--dracula-bg)] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--dracula-foreground)] mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-[var(--dracula-comment)] mb-12">
          Dedicated professionals shaping justice and making a difference.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[var(--dracula-current-line)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[var(--dracula-cyan)]"
              />
              <h3 className="mt-6 text-xl font-semibold text-[var(--dracula-foreground)]">
                {member.name}
              </h3>
              <p className="text-[var(--dracula-green)] text-sm font-medium mb-2">
                {member.position}
              </p>
              <p className="text-[var(--dracula-comment)] text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
