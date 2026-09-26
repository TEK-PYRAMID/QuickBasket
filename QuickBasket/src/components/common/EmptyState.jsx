const EmptyState = ({
  title = "No Data Found",
  message = "There is nothing to display.",
  action,
}) => {
  return (
    <div className="empty-state">
      <h2>{title}</h2>

      <p>{message}</p>

      {action && (
        <div className="empty-state-action">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
