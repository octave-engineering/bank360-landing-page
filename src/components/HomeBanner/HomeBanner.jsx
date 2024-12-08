// Imports
import React from 'react';
import { HomeBannerStyles } from "./style";
import Illustration from "./../../assets/illustrations/banner.png";

// Destructure imports
const { Wrapper, HeaderText, SubHeaderText, FieldSet } = HomeBannerStyles;

const HomeBanner = () => {
  return (
    <Wrapper className="main-wrapper">
      <section>
        <aside>
          <HeaderText data-aos="fade-up">
            All of your bank accounts unified
          </HeaderText>
          <SubHeaderText data-aos="fade-up">
            Get a 360 view of all your finances across multiple banks accounts,
            at once.
          </SubHeaderText>
          <FieldSet className="btn-group">
            <button
              className="register-btn"
              data-aos="fade-up"
              onClick={() => {
                window.location.href = "https://cashflow-frontend.netlify.app/";
              }}
            >
              Get Started Now
            </button>
            <button className="contact-btn" data-aos="fade-up">
              Contact Sales
            </button>
          </FieldSet>
        </aside>

        <img src={Illustration} alt="Bank360 dashboard" />
      </section>{" "}
    </Wrapper>
  );
};

export default HomeBanner;
