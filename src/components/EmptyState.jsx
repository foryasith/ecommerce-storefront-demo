import { Link } from "react-router-dom";

export default function EmptyState({ icon, title, description, actionLabel, actionTo, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-5xl mb-4">{icon}</p>
      <p style={{ color: "#050505" }} className="text-lg font-semibold mb-1">
        {title}
      </p>
      {description && (
        <p style={{ color: "#AC9C8D" }} className="text-sm mb-6 max-w-xs">
          {description}
        </p>
      )}
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          style={{ backgroundColor: "#610C27", color: "#EFECE9" }}
          className="px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          {actionLabel}
        </Link>
      )}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          style={{ backgroundColor: "#610C27", color: "#EFECE9" }}
          className="px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}