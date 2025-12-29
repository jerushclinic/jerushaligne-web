import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import SlotCard from "../components/SlotCard";

export default function AdminSlots() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const ref = doc(db, "appointments", "today");

    return onSnapshot(ref, (docSnap) => {
      setSlots(docSnap.data()?.slots || []);
    });
  }, []);

  const toggleSlot = async (index) => {
    const updated = [...slots];
    updated[index].available = !updated[index].available;

    await updateDoc(doc(db, "appointments", "today"), {
      slots: updated,
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-2xl font-bold mb-6">
        Admin – Manage Appointments
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slots.map((slot, i) => (
          <SlotCard
            key={i}
            slot={slot}
            admin
            onClick={() => toggleSlot(i)}
          />
        ))}
      </div>
    </div>
  );
}
