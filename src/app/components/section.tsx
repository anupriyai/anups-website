type Props = React.PropsWithChildren<{ id: string; className?: string }>;
export default function Section({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`relative z-20 section-y section-anchor ${className}`}>
      <div className="section-container">{children}</div>
    </section>
  );
}
