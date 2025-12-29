export function getNextDates(count = 5) {
  const dates = [];

  for (let i = 0; i < count; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    const id = `${day}-${month}-${year}`; // ✅ dd-mm-yyyy

    const label =
      i === 0
        ? "Today"
        : i === 1
        ? "Tomorrow"
        : d.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
          });

    dates.push({ id, label });
  }

  return dates;
}
