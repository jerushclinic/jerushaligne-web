import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function BookingModal({ slot, slots, dateId, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert("Please fill Name and Phone number");
      return;
    }

    if (!Array.isArray(slots) || slots.length === 0) {
      alert("Slots not loaded. Please refresh and try again.");
      return;
    }

    if (!slot.available) {
      alert("This slot is already booked.");
      return;
    }

    if (loading) return;
    setLoading(true);

    // WhatsApp message (NO personal data)
    const service = problem?.trim()
      ? problem + " appointment"
      : "appointment";

    const message =
      "Hello, I would like to book a " + service + ".\n\n" +
      "Preferred Time: " + slot.time + "\n" +
      "I will share my details here.";

    const phoneNumber = "911234567890";
    const url =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      encodeURIComponent(message);

    try {
      const ref = doc(db, "appointments", dateId);

      const updatedSlots = slots.map((s) =>
        s.time === slot.time
          ? { ...s, available: false }
          : s
      );

      console.log("Updating slots:", updatedSlots);

      await updateDoc(ref, { slots: updatedSlots });

      window.open(url, "_blank");
      onClose();
    } catch (error) {
      console.error("Firebase update error:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Book Appointment – {slot.time}
        </h2>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded mb-3"
          placeholder="Problem / Service (Dental, Hair, Skin, Cosmetic)"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`px-4 py-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-green-600"
            }`}
          >
            {loading ? "Booking..." : "Confirm & WhatsApp"}
          </button>
        </div>
      </div>
    </div>
  );
}
