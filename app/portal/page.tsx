export default function PortalPage() {
  const modules = [
    'Portfolio',
    'Reports',
    'Documents',
    'Opportunities',
    'Access'
  ];

  return (
    <main className="container section">
      <p className="kicker">Investor Portal</p>
      <h1 className="display">Private Access</h1>
      <p className="copy" style={{maxWidth:'720px',marginTop:'24px'}}>
        A secure environment for investors, operators and strategic partners.
      </p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'20px',marginTop:'60px'}}>
        {modules.map((item) => (
          <div key={item} style={{padding:'28px',border:'1px solid rgba(255,255,255,.12)',borderRadius:'24px'}}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
