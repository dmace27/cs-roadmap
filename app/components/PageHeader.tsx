type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1>{title}</h1>
      {description ? <p className="text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}
