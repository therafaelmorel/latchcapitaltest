import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <section id="thesis" className="section container">
        <p className="kicker">Investment Thesis</p>
        <h2 className="h2">We back exceptional ideas with a long-term ownership mindset.</h2>
        <p className="copy" style={{maxWidth:'700px',marginTop:'24px'}}>
          Latch Capital operates as both a holding company and venture capital platform. We are category agnostic and focus on founders, operators and opportunities capable of creating durable value.
        </p>
      </section>

      <section id="platform" className="section light">
        <div className="container">
          <p className="kicker">Platform</p>
          <h2 className="h2">Capital. Strategy. Ownership.</h2>
          <p className="copy" style={{maxWidth:'700px',marginTop:'24px'}}>
            A modern capital platform designed for ambitious builders and long-term thinking.
          </p>
        </div>
      </section>
    </main>
  );
}
