const ErrorState = ({
  title = "Something went wrong",
  message = "Unable to load the requested data.",
  onRetry,
}) => {
  return (
    <div className="error-state">
      <h2>{title}</h2>

      <p>{message}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
