const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dracula-bg text-dracula-foreground">
      <h1 className="text-6xl font-bold text-dracula-red">404</h1>
      <h2 className="text-2xl mt-4 text-dracula-orange">Page Not Found</h2>
      <p className="mt-2 text-dracula-comment text-center max-w-lg">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-dracula-green text-white text-lg font-semibold rounded-md shadow-md hover:text-dracula-cyan hover:bg-opacity-90 transition duration-300"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
