export default function PageHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-center justify-between mb-6 gap-4">
      <div>
        <h1
          style={{ color: "#050505" }}
          className="text-2xl font-bold tracking-tight"
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: "#AC9C8D" }} className="text-sm mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}