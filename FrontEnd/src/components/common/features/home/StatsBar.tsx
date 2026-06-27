import { HERO_STATS } from "@/constants";

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {HERO_STATS.map((s, i) => (
        <div
          key={s.label}
          className={`stats-bar__item${i > 0 ? " stats-bar__item--bordered" : ""}`}
        >
          <div className="stats-bar__value">{s.value}</div>
          <div className="stats-bar__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
