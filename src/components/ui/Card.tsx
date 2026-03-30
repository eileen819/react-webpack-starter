type Props = {
  label: string;
  value: string;
  hint?: string;
};

export default function Card({ label, value, hint }: Props) {
  return (
    <section className="dash-card" aria-label={label}>
      <div className="dash-card-label">{label}</div>
      <div className="dash-card-value">{value}</div>
      {hint ? <div className="dash-card-hint">{hint}</div> : null}
    </section>
  );
}
