import Link from 'next/link';

export function Hero() {
  return (
    <section className="heroShell">
      <div className="heroCopy">
        <p className="kicker">Holding Company · Venture Capital</p>
        <h1 className="display">Capital for <span className="serif">enduring</span> ideas.</h1>
        <p className="copy heroText">
          Latch Capital invests in exceptional founders, operators, and ideas with a long-term view toward ownership, leverage, and durable value creation.
        </p>
        <div className="heroActions">
          <Link className="btn primary" href="/portal">Private Access</Link>
          <Link className="btn" href="#thesis">Explore Thesis</Link>
        </div>
      </div>
      <div className="heroVisual" aria-label="Premium capital visualization">
        <div className="orbSymbol">A</div>
        <div className="orbit orbitOne" />
        <div className="orbit orbitTwo" />
        <div className="metricPanel">
          <div><strong>Long-term</strong><span>Ownership view</span></div>
          <div><strong>Category agnostic</strong><span>Good ideas first</span></div>
          <div><strong>Private</strong><span>Disciplined capital</span></div>
        </div>
      </div>
    </section>
  );
}
