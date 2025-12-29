import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import SlotCard from "../components/SlotCard";
import BookingModal from "../components/BookingModal";
import { getNextDates } from "../utils/dateHelpers";

export default function AppointmentSlots() {
  const dates = getNextDates(5);
  const [selectedDate, setSelectedDate] = useState(dates[0].id);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    if (!selectedDate) return;

    const ref = doc(db, "appointments", selectedDate);

    return onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setSlots(snap.data().slots || []);
      } else {
        setSlots([]);
      }
    });
  }, [selectedDate]);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Book an Appointment
      </h1>

      {/* DATE SELECTOR */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {dates.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDate(d.id)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition
              ${
                selectedDate === d.id
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white border-gray-300 hover:bg-gray-100"
              }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* SLOTS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slots.length > 0 ? (
          slots.map((slot, i) => (
            <SlotCard
              key={i}
              slot={slot}
              onBook={() => setSelectedSlot(slot)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No slots available
          </p>
        )}
      </div>

      {/* MODAL */}
      {selectedSlot && (
        <BookingModal
          slot={selectedSlot}
          slots={slots}
          dateId={selectedDate}
          onClose={() => setSelectedSlot(null)}
        />
      )}
    </section>
  );
}
