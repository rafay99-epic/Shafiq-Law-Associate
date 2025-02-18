export default function HeroSection() {
  return (
    <section className="relative py-24 text-center bg-gradient-to-b from-dracula-background to-gray-900">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-5xl font-extrabold text-dracula-foreground">
          About <span className="text-dracula-pink">Shafiq Law Chamber</span>
        </h1>
        <p className="mt-6 text-xl text-dracula-foreground leading-relaxed">
          Shafiq Law Chamber specializes in{" "}
          <strong className="text-dracula-red">
            Civil, Corporate, Criminal, and Family Law
          </strong>
          . Our skilled team provides tailored legal solutions with a proven
          track record of success. We prioritize your needs and deliver results.
        </p>
      </div>

      {/* Stylish Divider */}
      <div className="absolute left-1/2 -bottom-6 w-24 h-1 bg-dracula-pink rounded-full transform -translate-x-1/2"></div>
    </section>
  );
}
