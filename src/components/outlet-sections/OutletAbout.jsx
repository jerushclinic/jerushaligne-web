import "../../styles/outlet-showcase.css";

export default function OutletAbout({
  title,
  description,
  stats = [],
}) {
  return (
    <section className="outlet-about">
      {/* STATS BAR */}
      {stats.length > 0 && (
        <div className="outlet-about-stats">
          {stats.map((item, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-icon">{item.icon}</span>
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* CONTENT */}
      <div className="outlet-about-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
