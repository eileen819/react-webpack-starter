export type Column<T> = {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  align?: "left" | "right";
};

type Props<T> = {
  caption?: string;
  columns: Column<T>[];
  rows: T[];
};

export default function Table<T>({ caption, columns, rows }: Props<T>) {
  return (
    <div className="dash-table-wrap">
      <table className="dash-table">
        {caption ? (
          <caption className="dash-table-caption">{caption}</caption>
        ) : null}
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                className={c.align === "right" ? "is-right" : undefined}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={c.align === "right" ? "is-right" : undefined}
                >
                  {c.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
