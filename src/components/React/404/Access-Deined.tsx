const AccessDeniedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dracula-bg text-dracula-foreground">
      <h1 className="text-6xl font-bold text-dracula-red">403</h1>
      <h2 className="text-2xl mt-4 text-dracula-orange">Access Denied</h2>
      <p className="mt-2 text-dracula-comment text-center max-w-lg">
        You don’t have permission to access this page. If you believe this is a
        mistake, please contact support.
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

export default AccessDeniedPage;
