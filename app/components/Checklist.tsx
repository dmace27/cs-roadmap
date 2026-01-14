type ChecklistProps = {
  title?: string;
  items: string[];
};

export default function Checklist({ title, items }: ChecklistProps) {
  return (
    <div className="space-y-4">
      {title ? <h3 className="text-slate-900">{title}</h3> : null}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1 h-4 w-4 rounded border border-slate-300 bg-white"
            />
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
