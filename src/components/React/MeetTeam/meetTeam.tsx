import { motion } from "framer-motion";
import {
  Users,
  Scale,
  Award,
  Briefcase,
  ArrowRight,
  Phone,
  Mail,
  Linkedin,
  GraduationCap,
  Star,
} from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  specializations?: string[];
  experience?: string;
  education?: string;
}

interface MeetTheTeamProps {
  team: TeamMember[] | null | undefined;
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const gradients = [
  "from-dracula-cyan to-dracula-orange",
  "from-dracula-green to-dracula-cyan",
  "from-dracula-pink to-dracula-green",
  "from-dracula-cyan to-dracula-pink",
];

// Team Member Card Component
const TeamMemberCard: React.FC<{
  member: TeamMember;
  index: number;
  isLeader?: boolean;
}> = ({ member, index, isLeader = false }) => {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      variants={cardVariants}
      className={`relative group ${isLeader ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-dracula-current-line">
        {/* Top gradient accent */}
        <div className={`h-2 bg-gradient-to-r ${gradient}`} />

        {/* Card content */}
        <div className="p-6 sm:p-8">
          {/* Image container */}
          <div className="relative mb-6">
            {/* Decorative background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 rounded-2xl transform rotate-3 scale-105`}
            />

            {/* Image wrapper */}
            <div className="relative">
              <div className="w-40 h-40 mx-auto relative">
                {/* Outer ring */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} p-1`}
                >
                  <div className="w-full h-full rounded-full bg-white" />
                </div>

                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover"
                />

                {/* Badge for leader */}
                {isLeader && (
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-dracula-pink rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-5 h-5 text-dracula-bg fill-current" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name and position */}
          <div className="text-center mb-4">
            <h3
              className="text-xl sm:text-2xl font-bold text-dracula-foreground mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {member.name}
            </h3>
            <p
              className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              {member.position}
            </p>
          </div>

          {/* Description */}
          <p className="text-dracula-comment text-sm text-center leading-relaxed mb-6">
            {member.description}
          </p>

          {/* Specializations */}
          {member.specializations && member.specializations.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2">
                {member.specializations.map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-dracula-bg text-xs font-medium text-dracula-foreground rounded-full border border-dracula-current-line"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Experience & Education */}
          <div className="space-y-2 mb-6">
            {member.experience && (
              <div className="flex items-center justify-center gap-2 text-sm text-dracula-comment">
                <Award className="w-4 h-4 text-dracula-cyan" />
                <span>{member.experience}</span>
              </div>
            )}
            {member.education && (
              <div className="flex items-center justify-center gap-2 text-sm text-dracula-comment">
                <GraduationCap className="w-4 h-4 text-dracula-green" />
                <span>{member.education}</span>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="pt-4 border-t border-dracula-current-line">
            <a
              href="/contact"
              className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-dracula-bg text-dracula-foreground hover:bg-gradient-to-r hover:${gradient} hover:text-dracula-bg group-hover:shadow-md`}
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function MeetTheTeam({ team }: MeetTheTeamProps) {
  // Empty state
  if (!team || team.length === 0) {
    return (
      <div className="min-h-screen bg-dracula-bg">
        {/* Hero Section */}
        <section className="relative bg-dracula-cyan overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-dracula-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-dracula-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-dracula-bg/10 backdrop-blur-sm rounded-full mb-8">
                <Users className="w-4 h-4 text-dracula-bg" />
                <span className="text-sm font-medium text-dracula-bg">
                  Our Legal Experts
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dracula-bg leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Meet Our Team
              </h1>

              <p className="text-lg sm:text-xl text-dracula-bg/85 leading-relaxed max-w-3xl mx-auto">
                Dedicated professionals shaping justice and making a difference.
              </p>
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

        {/* Coming Soon Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/Images/noTeam.png"
                alt="Team Coming Soon"
                className="mx-auto w-48 sm:w-64 md:w-72 h-auto mb-8"
              />
              <h2
                className="text-2xl sm:text-3xl font-bold text-dracula-foreground mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Coming Soon
              </h2>
              <p className="text-lg text-dracula-comment mb-8 max-w-xl mx-auto">
                We are working hard to introduce our incredible team of legal
                experts. Stay tuned for updates!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl hover:bg-dracula-pink transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dracula-bg">
      {/* Hero Section */}
      <section className="relative bg-dracula-cyan overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dracula-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-dracula-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dracula-pink/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dracula-bg/10 backdrop-blur-sm rounded-full mb-8">
              <Users className="w-4 h-4 text-dracula-bg" />
              <span className="text-sm font-medium text-dracula-bg">
                Our Legal Experts
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dracula-bg leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Meet Our Team
            </h1>

            <p className="text-lg sm:text-xl text-dracula-bg/85 leading-relaxed max-w-3xl mx-auto mb-8">
              A team of dedicated legal professionals committed to protecting
              your rights and delivering exceptional results. Each member brings
              unique expertise to serve you better.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-dracula-bg/80">
              {[
                { value: `${team.length}`, label: "Legal Experts" },
                { value: "20+", label: "Years Combined Experience" },
                { value: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-2xl sm:text-3xl font-bold text-dracula-bg"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm">{stat.label}</div>
                </motion.div>
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

      {/* Team Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              Legal Excellence
              <span className="w-8 h-px bg-dracula-cyan" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Experienced{" "}
              <span className="text-dracula-cyan">Legal Professionals</span>
            </h2>
            <p className="text-dracula-comment max-w-2xl mx-auto">
              Our attorneys combine decades of experience with a passion for
              justice. Get to know the people who will fight for your rights.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                isLeader={index === 0}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What Drives Our Team
            </h2>
            <p className="text-dracula-comment max-w-2xl mx-auto">
              Our values guide every case we take and every client we serve.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Scale,
                title: "Commitment to Justice",
                description:
                  "We believe everyone deserves fair representation and access to justice, regardless of their circumstances.",
                gradient: "from-dracula-cyan to-dracula-green",
              },
              {
                icon: Users,
                title: "Client-First Approach",
                description:
                  "Your needs are our priority. We listen, understand, and craft personalized legal strategies for your success.",
                gradient: "from-dracula-green to-dracula-pink",
              },
              {
                icon: Award,
                title: "Excellence in Practice",
                description:
                  "We continuously update our knowledge and skills to provide you with the most effective legal solutions.",
                gradient: "from-dracula-pink to-dracula-cyan",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-8 rounded-2xl bg-dracula-bg border border-dracula-current-line hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg`}
                >
                  <value.icon className="w-8 h-8 text-dracula-bg" />
                </div>
                <h3
                  className="text-xl font-bold text-dracula-foreground mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-dracula-comment text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
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
              <Briefcase className="w-10 h-10 text-dracula-cyan" />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-bg mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to Work With Us?
            </h2>

            <p className="text-dracula-comment text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with one of our experienced attorneys
              and take the first step towards resolving your legal matters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl hover:bg-dracula-pink transition-colors"
              >
                <Mail className="w-5 h-5" />
                Schedule Free Consultation
              </a>
              <a
                href="tel:+920309817389"
                className="inline-flex items-center gap-2 bg-dracula-bg/10 text-dracula-bg font-semibold py-4 px-8 rounded-xl border border-dracula-bg/20 hover:bg-dracula-bg/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call: +92 300 9817389
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
