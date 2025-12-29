export default function SlotCard({ slot, onBook }) {
  return (
    <button
      disabled={!slot.available}
      onClick={onBook}
      className={`rounded-xl p-4 border text-center transition
        ${
          slot.available
            ? "border-green-500 bg-green-50 hover:bg-green-100"
            : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
    >
      <div className="font-semibold text-lg">{slot.time}</div>
      <div className="text-sm mt-1">
        {slot.available ? "Available" : "Booked"}
      </div>
    </button>
  );
}
