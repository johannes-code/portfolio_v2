import data from "/src/locales/en.json";

export const Hero = () => {
  const heroData = data.pages.home.hero;

  return (
    <section className="hero">
      <div className="hero-section">
        <h1 dangerouslySetInnerHTML={{ __html: heroData.title }}></h1>
        <div className="hero-description">{heroData.description}</div>
        <a className="button button-primary" href="#contacts">
          {heroData.button}
        </a>
        <div className="hero-illustrations">
          <img src="/logo-outline.svg" alt="" className="hero-logo" />
          <img src="/hero.png" alt="Johannes" className="hero-image" />
          <div className="hero-status">{heroData.status}</div>
        </div>
      </div>
    </section>
  );
};
