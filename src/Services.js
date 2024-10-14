import React from 'react';
import { motion } from 'framer-motion';
import servicesData from './servicesData';

const Services = () => {
  return (
    <div className="services-section" id = "service-c">
      <div className="services-cards">
        {servicesData.map(service => (
          <motion.div
            className="service-card"
            key={service.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: service.id * 0.2 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
      <div class="services-title">
        <h2 class="service-heading">Our</h2>
        <h2 class="service-heading">Services</h2>
      </div>

    </div>
  );
};

export default Services;
