const STATUS_STYLES = {
  Pending:    { bg: "#FEF3C7", color: "#92400E" },
  Processing: { bg: "#DBEAFE", color: "#1E40AF" },
  Shipped:    { bg: "#D1FAE5", color: "#065F46" },
  Delivered:  { bg: "#E3C1B4", color: "#610C27" },
  Cancelled:  { bg: "#FEE2E2", color: "#991B1B" },
};

export default function OrderStatusBadge({ status }) {
  const style = STATUS_STYLES[status] ?? { bg: "#DDD9CE", color: "#050505" };

  return (
    <span
      style={{ backgroundColor: style.bg, color: style.color }}
      className="text-xs font-semibold px-3 py-1 rounded-full tracking-wide"
    >
      {status}
    </span>
  );
}