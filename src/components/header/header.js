import { header } from "../../assets/locales/en.json";

export function HeaderHtml = () => {
  return( /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["discord", "github", "email"]
                      .map((contactinfo) => contactinfo({}))
                      .join("")}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.svg" alt="Johannes logo">
                        <span class="logo__name">Johannes</span>
                    </a>
                    <div class="header__links">
                        <div class="header__links">
                            <a href="${header.home}" class="header__link ${
    window.location.pathname === header.home ? "header__link_active" : ""
  }">${t["home"]}</a>
                                                        <a href="${
                                                          header.projects
                                                        }" class="header__link ${
    window.location.pathname === header.projects ? "header__link_active" : ""
  }">${t["projects"]}</a>
                                                        <a href="${
                                                          header.about
                                                        }" class="header__link ${
    window.location.pathname === header.about ? "header__link_active" : ""
  }">${t["about"]}</a>
                                                        <a href="${
                                                          header.contacts
                                                        }" class="header__link ${
    window.location.pathname === header.contacts ? "header__link_active" : ""
  }">${t["contacts"]}</a>
                        </div>

                    </div>
                    <div class="dropdown">
                        <span class="dropdown__label">en</span>

                        <div class="dropdown__list">
                            <div class="dropdown__option">no</div>
                        </div>
                    </div>

                </div>
            </div>
            

        </header>
    `;
};
