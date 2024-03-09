import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Importăm componenta Footer
import './LearnAbout.css'; // Importăm fișierul de stil pentru pagina LearnAbout

function LearnAbout() {
  return (
    <div>
      <Header />
      <div className="learn-about-container">
        <div className="background-image">
          <div className="content">
            <h1>Welcome to the World of Green Technology</h1>
            <p>
              Green technology, also known as clean technology, is a concept that promotes the use of technology and science to create products and services that are environmentally friendly and sustainable. It encompasses a wide range of practices and innovations aimed at reducing the environmental impact of human activities.
            </p>
            <h2>Key Areas of Green Technology</h2>
            <p>
              Green technology covers various sectors including renewable energy, sustainable agriculture, green transportation, waste management, and energy efficiency. Let's explore some of these areas in detail:
            </p>
            <ul>
              <li><strong>Renewable Energy:</strong> This includes solar power, wind energy, hydroelectric power, and geothermal energy. These sources of energy are renewable and have minimal impact on the environment compared to fossil fuels.</li>
              <li><strong>Sustainable Agriculture:</strong> Practices such as organic farming, permaculture, and agroforestry aim to minimize the use of synthetic inputs like pesticides and fertilizers, while promoting soil health and biodiversity.</li>
              <li><strong>Green Transportation:</strong> Electric vehicles (EVs), bicycles, and public transportation systems are examples of green transportation alternatives that reduce greenhouse gas emissions and dependence on fossil fuels.</li>
              <li><strong>Waste Management:</strong> Recycling, composting, and waste-to-energy technologies are used to minimize the amount of waste sent to landfills and reduce environmental pollution.</li>
              <li><strong>Energy Efficiency:</strong> This involves using technology to reduce energy consumption in buildings, appliances, and industrial processes. Energy-efficient lighting, insulation, and smart thermostats are examples of energy-saving solutions.</li>
            </ul>
            <p>
              By embracing green technology, we can mitigate climate change, conserve natural resources, and create a more sustainable future for generations to come.
            </p>
            <h1>How we can improve nature</h1>
            <h7>examples</h7>
          </div>
          <div className="problems-and-solutions">
            <div className="content problem">
              <h3>Problem:</h3>
              <p>High levels of air pollution due to combustion of fossil fuels.</p>
            </div>
            <div className="content solution">
              <h3>Solution:</h3>
              <p>1. Reducing fossil fuel consumption:
               Promote renewable energy and low-carbon technologies such as solar, wind and hydropower.
               Implement energy efficiency policies to reduce fossil fuel consumption in the industrial, commercial and residential sectors.
               Incentivize sustainable transport, such as public transport, cycling and the use of electric vehicles.</p>
               <p>2. Adoption of pollution control measures:
                Implement stricter emission standards for vehicles, power plants and other sources of pollution.
                Introduction of pollution control technologies such as particulate filters and greenhouse gas emission reduction devices.
                Strict industry monitoring and regulation to ensure compliance with environmental norms.</p>
                <p>3. Promoting public awareness and engagement:
               Education and public awareness on the negative effects of air pollution on human health and the environment.
               Support community and government initiatives that promote sustainable alternatives and emissions reduction.
               Incentivize environmentally friendly behaviors such as reducing energy consumption and using sustainable transport.</p>
               <p>By implementing these steps, we can significantly reduce air pollution levels and help protect human health and the environment.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Adăugăm componenta Footer la sfârșitul componentei LearnAbout */}
    </div>
  );
}

export default LearnAbout;
