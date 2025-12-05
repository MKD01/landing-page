import { useState } from "react";
import { sectionTop, sectionBottom } from "../content/footer.json";
import Button from "./Button";

const defaultIcons = [
  "facebook",
  "youtube",
  "twitter",
  "pinterest",
  "instagram",
];

const Footer = () => {
  return (
    <div id='footer-container'>
      <section id='footer-top'>
        <h2 id='top-footer-heading'>{sectionTop.heading}</h2>
        <Button text='Get Started' style='reverse' />
      </section>
      <section id='footer-bottom'>
        <div id='footer-logos'>
          <img
            className='logo'
            src='/content/logo-white.svg'
            alt='Manage Logo'
          />
          <div id='footer-icon-container'>
            {defaultIcons.map((iconName) => (
              <img
                key={iconName}
                className='icon'
                src={`/icons/icon-${iconName}.svg`}
                alt={`${iconName} Icon`}
              />
            ))}
          </div>
        </div>

        <div id='footer-navigation'>
          <ul className='footer-navigation-list'>
            {sectionBottom.middle.leftColumn.map((text, i) => (
              <li key={i}>
                <a>{text}</a>
              </li>
            ))}
          </ul>

          <ul className='footer-navigation-list'>
            {sectionBottom.middle.rightColumn.map((text, i) => (
              <li key={i}>
                <a>{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div id='footer-form'>
          <div id='footer-right'>
            <div>
              <input
                id='footer-input'
                placeholder={sectionBottom.right.inputText}
              ></input>
              <Button text='Go' />
            </div>

            <p>{sectionBottom.right.copyRightText}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
