interface CEOImageProps {
  CEOImage: string;
}

export default function IntroductionSection({ CEOImage }: CEOImageProps) {
  return (
    <>
      {/* Separated by a horizontal divider */}
      <div className="w-full h-[2px] bg-dracula-gray my-12 opacity-50"></div>

      <section className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-20">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={CEOImage}
            alt="Founder"
            className="rounded-xl shadow-lg w-[280px] md:w-[340px] lg:w-[380px] object-cover border-4 border-dracula-pink"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 px-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-dracula-foreground">
            Meet <span className="text-dracula-pink">Saqib Shafiq</span>, CEO
          </h2>
          <p className="mt-6 text-lg text-dracula-foreground leading-relaxed">
            <span className="text-dracula-pink font-semibold">
              Saqib Shafiq
            </span>
            , CEO of Shafiq Law Chamber, is a seasoned legal professional with
            expertise in{" "}
            <strong className="text-dracula-red">
              Business, Criminal, Family, Civil, and Corporate Law
            </strong>
            . His extensive experience allows him to navigate complex legal
            matters, providing tailored solutions for businesses and individuals
            alike.
          </p>
          <p className="mt-4 text-lg text-dracula-foreground leading-relaxed">
            From corporate governance and contracts to defending clients in
            criminal cases and resolving family and civil disputes, Saqib
            combines strategic insight with a deep commitment to his clients'
            success. His expertise in guiding businesses through legal
            frameworks and regulatory challenges underscores his role as a
            trusted advisor in the legal community.
          </p>
        </div>
        <div className="absolute left-1/2 -bottom-6 w-24 h-1 bg-dracula-pink rounded-full transform -translate-x-1/2"></div>
      </section>
    </>
  );
}
