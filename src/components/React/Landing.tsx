interface MainIntroProps {
  imageUrl: string;
  LandingPageIntroText: string;
  LandingPageSecondLineText: string;
}

export default function MainIntro({
  imageUrl,
  LandingPageIntroText,
  LandingPageSecondLineText,
}: MainIntroProps) {
  return (
    <div className="bg-dracula-bg min-h-screen flex items-center justify-center text-dracula-foreground">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center text-center sm:text-left justify-center">
        <div className="relative sm:w-1/2 p-4 flex flex-col justify-center items-center sm:items-start  overflow-hidden">
          <h1 className="text-3xl sm:text-6xl font-bold text-gray-800 shadow-lg">
            {LandingPageIntroText}
          </h1>
          <h2 className="mt-6 text-xl sm:text-4xl font-normal text-gray-600">
            {LandingPageSecondLineText}
          </h2>
          <a
            href="/contact"
            className="mt-8 inline-block bg-dracula-pink text-dracula-bg hover:bg-dracula-dark hover:text-dracula-light px-6 py-3 rounded-md text-lg font-medium transition-transform transform hover:scale-105"
          >
            Book a consultation
          </a>
        </div>

        <div className="sm:w-1/2 p-4 flex justify-center sm:justify-end mt-8 sm:mt-0">
          <img
            className="w-full h-auto rounded-lg"
            src={imageUrl}
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
}
