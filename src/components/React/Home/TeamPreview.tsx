import { motion } from "framer-motion";
import { Users, ArrowRight, Award, Star } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  specializations?: string[];
  experience?: string;
}

interface TeamPreviewProps {
  team: TeamMember[];
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

const gradients = [
  "from-dracula-cyan to-dracula-green",
  "from-dracula-green to-dracula-pink",
  "from-dracula-pink to-dracula-cyan",
];

const TeamPreview: React.FC<TeamPreviewProps> = ({ team }) => {
  if (!team || team.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 -mx-6 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dracula-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dracula-pink/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Section label */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-dracula-cyan" />
            Our Legal Team
            <span className="w-8 h-px bg-dracula-cyan" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-foreground leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Meet the <span className="text-dracula-cyan">Experts</span>
          </h2>

          <p className="text-dracula-comment max-w-2xl mx-auto text-lg">
            Our team of dedicated legal professionals brings decades of combined
            experience to serve you with excellence and integrity.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => {
            const gradient = gradients[index % gradients.length];
            const isLeader = index === 0;

            return (
              <motion.div
                key={member.name}
                variants={cardVariants}
                className="group"
              >
                <div className="relative bg-dracula-bg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-dracula-current-line overflow-hidden">
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Top gradient accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Image */}
                    <div className="relative mb-6 flex justify-center">
                      <div className="relative">
                        <div
                          className={`w-32 h-32 rounded-full bg-gradient-to-br ${gradient} p-1`}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full rounded-full object-cover bg-white"
                          />
                        </div>

                        {/* Leader badge */}
                        {isLeader && (
                          <div className="absolute -top-1 -right-1 w-8 h-8 bg-dracula-pink rounded-full flex items-center justify-center shadow-lg">
                            <Star className="w-4 h-4 text-dracula-bg fill-current" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Name and position */}
                    <div className="text-center mb-4">
                      <h3
                        className="text-xl font-bold text-dracula-foreground mb-1 group-hover:text-dracula-cyan transition-colors"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                      >
                        {member.position}
                      </p>
                    </div>

                    {/* Experience badge */}
                    {member.experience && (
                      <div className="flex justify-center mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dracula-cyan/10 text-dracula-cyan text-xs font-medium rounded-full">
                          <Award className="w-3 h-3" />
                          {member.experience}
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-dracula-comment text-sm text-center leading-relaxed line-clamp-3">
                      {member.description}
                    </p>

                    {/* Specializations */}
                    {member.specializations &&
                      member.specializations.length > 0 && (
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                          {member.specializations.slice(0, 2).map((spec, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-dracula-current-line/50 text-xs text-dracula-comment rounded-md"
                            >
                              {spec}
                            </span>
                          ))}
                          {member.specializations.length > 2 && (
                            <span className="px-2 py-1 text-xs text-dracula-comment">
                              +{member.specializations.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                  </div>
                </div>
              </motion.div>
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
          <a
            href="/our-team"
            className="inline-flex items-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl hover:bg-dracula-pink transition-colors"
          >
            <Users className="w-5 h-5" />
            View Full Team
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
