import React from 'react';
import FlipCard from './FlipCard';
import './styles.css';

const About = () => {
  const cardsData = [
    {
      title: 'Understanding CODE911',
      backContent: (
        <ul>
          <li>CODE911 envisions a world powered by clean, renewable energy.</li>
          <li>Aims to meet global energy demands while protecting the planet.</li>
          <li>Focuses on developing sustainable, efficient, and accessible green energy solutions.</li>
        </ul>
      ),
    },
    {
      title: 'Our Expertise at CODE911',
      backContent: (
        <ul>
          <li>CODE911 is committed to a sustainable, environmentally friendly future.</li>
          <li>Provides 100% sustainable solutions for energy independence.</li>
          <li>Aims to reduce fossil fuel reliance and promote renewable energy to mitigate climate change.</li>
        </ul>
      ),
    },
    {
      title: 'Understanding Our Workflow',
      backContent: (
        <ul>
          <li>CODE911 takes a collaborative, results-oriented approach with project teams.</li>
          <li>Conducts research to identify sustainable solutions and develops tailored plans.</li>
          <li>Ensures efficient implementation for maximum impact on energy independence and sustainability.</li>
        </ul>
      ),
    },
    {
      title: 'Strategic Goals for Tomorrow',
      backContent: (
        <ul>
          <li>CODE911 envisions energy independence and sustainability.</li>
          <li>Drives innovation in renewable technologies.</li>
          <li>Future goals include global impact, technological advancements, and education.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="about-section">
      <h2>About Us</h2>
      <div className="cards">
        {cardsData.map((card, index) => (
          <FlipCard key={index} title={card.title} frontContent={card.frontContent} backContent={card.backContent} />
        ))}
      </div>
    </div>
  );
};

export default About;
