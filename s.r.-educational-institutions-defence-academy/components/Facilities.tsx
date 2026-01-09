
import React from 'react';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm">Infrastructure</h2>
          <h3 className="text-4xl font-bold text-slate-900">World-Class Facilities</h3>
          <p className="text-slate-600 text-lg">
            We provide an environment that inspires students to learn, explore, and grow with modern infrastructure and cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-100 transform hover:-translate-y-2"
            >
              <div className="bg-orange-50 text-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {facility.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{facility.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
