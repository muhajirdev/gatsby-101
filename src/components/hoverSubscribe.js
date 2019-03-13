import React from "react";

import "./hoverSubscribe.scss";

export default ({ children }) => (
  <section className="portfolio-experiment">
    <a>
      <span className="text">{children}</span>
      <span className="line -right" />
      <span className="line -top" />
      <span className="line -left" />
      <span className="line -bottom" />
    </a>
  </section>
);
