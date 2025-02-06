export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_section">
        <h1 className="hero_title"></h1>
        <div className="hero_description"></div>
        {/* <a className button button_primary href="#contacts">
          Contact ME
        </a> */}
      </div>
      <div className="hero_illustrations">
        <img src="/logo-outline.svg" alt="" className="hero_logo" />
        <img src="/hero.png" alt="Johannes" className="hero_image" />
        <div className="hero_status">::before "open for new opportunities"</div>
      </div>
    </section>
  );
};
