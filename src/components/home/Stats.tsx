import React, { useEffect, useState } from 'react';
import { Statistic } from '../../types';

const stats: Statistic[] = [
  { value: "500 µg/m³", label: "Material particulado durante queimadas na Amazônia" },
  { value: "80%", label: "Da biodiversidade global se encontra em florestas tropicais" },
  { value: "50%", label: "Dos recifes de coral foram perdidos nos últimos 30 anos" },
  { value: "8 milhões", label: "De toneladas de plástico chegam aos oceanos anualmente" },
];

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    
    const target = document.querySelector('#stats-section');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);
  
  return (
    <section id="stats-section" className="bg-forest-green text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;