import { Navigation } from '../../components/Navigation';
import { PortalShell } from '../../components/PortalShell';

export default function PortalPage() {
  return (
    <main>
      <Navigation />
      <section className="container section">
        <p className="kicker">Investor Portal</p>
        <h1 className="display">Private Access</h1>
        <p className="copy" style={{maxWidth:'720px',marginTop:'24px'}}>
          A secure environment for investors, operators and strategic partners.
        </p>
        <PortalShell />
      </section>
    </main>
  );
}
