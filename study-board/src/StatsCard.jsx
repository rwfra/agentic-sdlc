export default function StatsCard({ label, value }) {
  return (
    <div className="stats-card">
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  )
}