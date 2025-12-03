import Button from "./Button";
import { section1, section2, section3 } from "../content/landingPageText.json";
import ListItem from "./ListItem";
import TeamCard from "./TeamCard";
import CustomCarousel from "./CustomCarousel";

const Main = () => {
  return (
    <div id='main-container'>
      <section className='main-section'>
        <div className='section-left'>
          <h1>{section1.heading}</h1>
          <p className='main-p space-below'>{section1.body}</p>
          <Button text='Get Started' />
        </div>

        <div className='section-right'>
          <img
            className='illustration'
            src='/content/illustration-intro.svg'
            alt='Manage Logo'
          />
        </div>
      </section>

      <section className='main-section'>
        <div className='section-left'>
          <h2>{section2.heading}</h2>
          <p className='main-p space-below'>{section2.body}</p>
        </div>

        <div className='section-right'>
          <ul id='list'>
            {section2.list.map(({ heading, body }, index) => {
              const num = "0" + (index + 1);

              return (
                <ListItem key={num} num={num} heading={heading} body={body} />
              );
            })}
          </ul>
        </div>
      </section>

      <section id='main-section-bottom'>
        <h2 id='main-section-bottom-header'>{section3.heading}</h2>

        <CustomCarousel items={section3.cards} />
      </section>
    </div>
  );
};

export default Main;
