export default function ConfirmDialog({ title, message, onConfirm, onCancel, loading }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(5,5,5,0.5)" }}>
      <div
        style={{ backgroundColor: "#fff", borderColor: "#DDD9CE" }}
        className="rounded-2xl border p-6 w-full max-w-sm shadow-xl"
      >
        <h2
          style={{ color: "#050505" }}
          className="text-base font-semibold mb-2"
        >
          {title}
        </h2>
        <p style={{ color: "#AC9C8D" }} className="text-sm mb-6">
          {message}
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            style={{ borderColor: "#DDD9CE", color: "#AC9C8D" }}
            className="flex-1 border py-2.5 rounded-lg text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            style={{ backgroundColor: "#610C27", color: "#EFECE9" }}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}