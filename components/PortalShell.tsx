const portalModules = [
  { title: 'Portfolio', detail: 'Active holdings, venture positions, and strategic notes.' },
  { title: 'Reports', detail: 'Quarterly updates, performance summaries, and founder memos.' },
  { title: 'Documents', detail: 'Private files, agreements, diligence rooms, and investor materials.' },
  { title: 'Opportunities', detail: 'Reviewed deals, new ideas, and emerging market signals.' },
];

export function PortalShell() {
  return (
    <section className="portalShell">
      <div className="portalTop">
        <div>
          <p className="kicker">Private Command Center</p>
          <h2>Investor Portal</h2>
        </div>
        <div className="portalStatus">Access pending</div>
      </div>

      <div className="portalGrid">
        {portalModules.map((item) => (
          <article className="portalCard" key={item.title}>
            <span>{item.title}</span>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
