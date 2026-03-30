import Card from "@/components/ui/Card";
import Table, { Column } from "@/components/ui/Table";

type Row = {
  name: string;
  plan: "Free" | "Pro" | "Business";
  status: "Active" | "Past due" | "Canceled";
  mrr: number;
};

const rows: Row[] = [
  { name: "Acme Inc.", plan: "Business", status: "Active", mrr: 4200 },
  { name: "Northwind", plan: "Pro", status: "Active", mrr: 890 },
  { name: "Umbrella", plan: "Pro", status: "Past due", mrr: 890 },
  { name: "Initech", plan: "Free", status: "Canceled", mrr: 0 },
];

const columns: Column<Row>[] = [
  {
    key: "name",
    header: "Customer",
    render: (r) => <span className="dash-strong">{r.name}</span>,
  },
  { key: "plan", header: "Plan", render: (r) => r.plan },
  {
    key: "status",
    header: "Status",
    render: (r) => (
      <span
        className={`dash-pill is-${r.status.replace(" ", "-").toLowerCase()}`}
      >
        {r.status}
      </span>
    ),
  },
  {
    key: "mrr",
    header: "MRR",
    align: "right",
    render: (r) => `$${r.mrr.toLocaleString()}`,
  },
];

export default function Overview() {
  return (
    <>
      <section className="dash-grid">
        <Card label="Revenue" value="$12,430" hint="+18.2% vs last month" />
        <Card
          label="Active customers"
          value="1,204"
          hint="+6.1% vs last month"
        />
        <Card label="Conversion" value="3.9%" hint="-0.3% vs last month" />
        <Card label="Churn" value="1.2%" hint="Healthy" />
      </section>

      <section className="dash-panel">
        <div className="dash-panel-header">
          <h2 className="dash-h2">Customers</h2>
          <p className="dash-muted">Recent subscriptions and billing status.</p>
        </div>
        <Table caption="Customer list" columns={columns} rows={rows} />
      </section>
    </>
  );
}
