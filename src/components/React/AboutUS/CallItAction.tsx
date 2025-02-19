export default function CallToAction() {
  return (
    <>
      <div className="absolute left-1/2 -bottom-6 w-24 h-1 bg-dracula-pink rounded-full transform -translate-x-1/2"></div>

      <section className="bg-dracula-bg py-16 px-6 text-center transition-colors duration-300">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dracula-foreground leading-tight">
            Let's Discuss Your Legal Needs
          </h2>
          <p className="mt-4 text-dracula-comment text-lg">
            Get expert legal advice tailored to your case. Book a consultation
            today.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-dracula-green text-dracula-bg font-semibold py-3 px-8 rounded-lg shadow-md 
                      transition-all duration-300 hover:bg-dracula-red hover:scale-105 focus:ring-4 focus:ring-dracula-purple"
          >
            Schedule a Consultation
          </a>
        </div>
        <div className="absolute left-1/2 -bottom-6 w-24 h-1 bg-dracula-pink rounded-full transform -translate-x-1/2"></div>
      </section>
    </>
  );
}
