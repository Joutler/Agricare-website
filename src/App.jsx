import React from 'react';

const contacts = {
  primaryPhone: '+265 990 660 020',
  secondaryPhone: '+265 880 605 779',
  primaryTel: '+265990660020',
  secondaryTel: '+265880605779',
  email: 'agricarechemicalsandseeds@gmail.com',
  facebook: 'Agricare Chemicals and Seeds',
};

const whatsappMessage = encodeURIComponent(
  'Hello AgriCare, I would like to ask about seeds, chemicals, fertilizers, or farmer advisory support.',
);

const productCards = [
  {
    title: 'Certified Seeds',
    text: 'Hybrid maize seed and selected vegetable seeds supplied through trusted channels, with guidance on the right variety for the season.',
  },
  {
    title: 'Crop Protection',
    text: 'Herbicides, pesticides, fungicides, and related chemicals stocked for practical field needs and explained in simple farmer language.',
  },
  {
    title: 'Fertilizer Guidance',
    text: 'Support on fertilizer timing, safe handling, and responsible application so farmers do not just buy inputs, they use them well.',
  },
  {
    title: 'Field Advisory',
    text: 'Farm visits, demonstration learning, and practical advice that connects shop recommendations with what is happening in the field.',
  },
];

const proofPoints = [
  'Certified seed and crop input access closer to rural communities',
  'In-house maize seed production to strengthen local availability',
  'Farmer-facing advisory support before and during the growing season',
  'Simple contact channels for farmers, groups, NGOs, and partners',
];

const gallery = [
  {
    src: '/assets/field-production.jpg',
    title: 'Seed production fields',
    text: 'In-house field production helps AgriCare stay closer to the realities farmers face every season.',
  },
  {
    src: '/assets/extension-visit.jpg',
    title: 'Extension support',
    text: 'Farmers receive practical field guidance, including crop establishment and input application support.',
  },
  {
    src: '/assets/shop-seeds.jpg',
    title: 'Reliable shop stock',
    text: 'Seeds and crop inputs are kept visible and accessible so farmers can buy what they need on time.',
  },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AgriCare home">
          <img src="/assets/logo.jpg" alt="AgriCare Chemicals & Seeds logo" />
          <span>
            <strong>AgriCare</strong>
            <small>Chemicals & Seeds</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#field">Field Work</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Lilongwe, Malawi / Est. 2023</p>
          <h1>Quality seeds and farm inputs, closer to the farmers who need them most.</h1>
          <p className="hero-copy">
            AgriCare Chemicals & Seeds supplies certified seeds, fertilizers,
            agrochemicals, and practical field advice to help smallholder farmers
            plant on time, protect their crops, and improve harvests.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${contacts.primaryTel}`}>
              Call AgriCare
            </a>
            <a
              className="button button-secondary"
              href={`https://wa.me/${contacts.primaryTel.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="AgriCare quick facts">
          <img src="/assets/logo.jpg" alt="" />
          <p>
            Building stronger visibility for a local agribusiness serving farmers
            with inputs, advice, and field-based trust.
          </p>
        </aside>
      </section>

      <section className="stats" aria-label="AgriCare highlights">
        <div>
          <strong>3,000+</strong>
          <span>farmers served</span>
        </div>
        <div>
          <strong>5+</strong>
          <span>years lived agriculture experience</span>
        </div>
        <div>
          <strong>1</strong>
          <span>local team serving Lilongwe farmers</span>
        </div>
        <div>
          <strong>Direct</strong>
          <span>phone, WhatsApp, and email support</span>
        </div>
      </section>

      <section className="intro section-pad">
        <div>
          <p className="section-label">What AgriCare does</p>
          <h2>We combine retail inputs, local production, and farmer advice in one practical model.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Many farmers lose time and money travelling for inputs or buying from
            sources they cannot fully trust. AgriCare responds by bringing
            certified seed, crop protection products, and plain-language guidance
            closer to rural farming communities.
          </p>
          <ul>
            {proofPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="products section-pad" id="products">
        <div className="section-heading">
          <p className="section-label">Products & services</p>
          <h2>Farm inputs selected for real field conditions.</h2>
          <p>
            The focus is simple: stock what farmers need, explain how to use it
            safely, and stay available when the season becomes difficult.
          </p>
        </div>

        <div className="product-grid">
          {productCards.map((card) => (
            <article className="product-card" key={card.title}>
              <span aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-feature section-pad">
        <div className="feature-image">
          <img src="/assets/shop-chemicals.jpg" alt="Crop chemicals stocked at the AgriCare shop" />
        </div>
        <div className="feature-copy">
          <p className="section-label">Shop + field</p>
          <h2>Advice does not stop at the counter.</h2>
          <p>
            Farmers can ask about seed choice, chemical use, fertilizer timing,
            and safe handling before they buy. Where needed, the team also
            supports field visits and practical demonstrations.
          </p>
          <a className="text-link" href="#contact">
            Ask about current stock and availability
          </a>
        </div>
      </section>

      <section className="field section-pad" id="field">
        <div className="section-heading narrow">
          <p className="section-label">In the field</p>
          <h2>Proof from the farm, not just promises from the shop.</h2>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.src} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team section-pad" id="team">
        <div className="section-heading narrow">
          <p className="section-label">Founders</p>
          <h2>Built by people close to the farmers AgriCare serves.</h2>
          <p>
            The founding team combines commercial, operational, and field
            production experience, supported by farmer engagement and retail
            staff on the ground.
          </p>
        </div>

        <div className="team-grid">
          <article className="person-card">
            <img src="/assets/wisdom.jpg" alt="Wisdom Changala" />
            <div>
              <p>Co-founder</p>
              <h3>Wisdom Changala</h3>
              <span>
                Leads enterprise development, supplier relationships, commercial
                planning, and the digital systems that help AgriCare grow with
                discipline.
              </span>
            </div>
          </article>
          <article className="person-card">
            <img src="/assets/patience.jpg" alt="Patience Sawa" />
            <div>
              <p>Co-founder</p>
              <h3>Patience Sawa</h3>
              <span>
                Leads seed production systems, field coordination, and practical
                farmer engagement so product advice stays grounded in real crop
                conditions.
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="section-label">Ready to grow?</p>
          <h2>Call, WhatsApp, or email AgriCare for seeds, chemicals, fertilizers, and field support.</h2>
        </div>
        <a className="button button-light" href={`mailto:${contacts.email}`}>
          Email AgriCare
        </a>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-card">
          <p className="section-label">Contact</p>
          <h2>AgriCare Chemicals & Seeds</h2>
          <p>
            For product availability, farmer advisory support, or partnership
            enquiries, use any of the contacts below.
          </p>
          <div className="contact-actions">
            <a href={`tel:${contacts.primaryTel}`}>{contacts.primaryPhone}</a>
            <a href={`tel:${contacts.secondaryTel}`}>{contacts.secondaryPhone}</a>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </div>
          <p className="facebook">Facebook: {contacts.facebook}</p>
        </div>
        <div className="contact-note">
          <img src="/assets/shop-seeds.jpg" alt="Seed bags stocked at AgriCare" />
          <div>
            <strong>For farmers and partners</strong>
            <p>
              If you are checking stock, mention your crop, location, and the
              product you need. If you are a farmer group, cooperative, NGO, or
              institution, share the quantity and expected delivery period.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <span>AgriCare Chemicals & Seeds</span>
        <span>Lilongwe, Malawi</span>
        <span>Quality inputs. Practical advice. Better harvests.</span>
      </footer>
    </main>
  );
}

export default App;
