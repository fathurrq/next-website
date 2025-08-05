'use client';

import { useState, useEffect, type TouchEvent } from 'react';

const sections = [
  {
    id: 0,
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#26476c]">Visions 2016-2021</h3>
        <p className="text-gray-700 leading-relaxed">
          To become a world-class classification society and independent assurance provider
        </p>
        <h3 className="text-2xl font-semibold text-[#26476c] pt-4">Missions 2016-2021</h3>
        <p className="text-gray-700 leading-relaxed">
          To provide the best possible added value to customers of the classificaiton and statutory services through international standard handling, operation, and rules research, in terms of quality, safety and social responsibility as well as responsibility towards the marine environment (classification). To maximize the resources of BKI towards its full potential to become the market leader in the independent marine assurance business (nonclassification).
        </p>
      </div>
    )
  },
  {
    id: 1,
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#26476c]">
          The company motto is RELIABLE containing mean:
        </h3>
        <ol className="list-decimal ml-5 space-y-2 text-gray-700">
          <li>Quality of services provided by the Company is really high quality, carried out efficiently and on time</li>
          <li>Every employee of the company has a reliable qualification in each field task / profession</li>
          <li>BKI designations trademarks / trade mark meaningful superior product</li>
        </ol>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#26476c]">
          As a basis in managing the company, especially in carrying out the mission and duties, the Company adopted the philosophy that was developed through a paradigm RELIABLE:
        </h3>
        <ol className="list-decimal ml-5 space-y-2 text-gray-700">
          <li>Ensuring quality and services based on a strong commitment to safety concerns</li>
          <li>Improving the quality of human resources in a consistent and sustainable enterprise</li>
          <li>Responsiveness and concern for the development of science and technology, especially with regard to the safety of the ship</li>
        </ol>
      </div>
    )
  }
];

const OurGoals = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % sections.length);
  const prev = () => setCurrent((prev) => (prev - 1 + sections.length) % sections.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) {
      next();
    } else if (diff < -50) {
      prev();
    }
    setTouchStart(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="our-goal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#26476c] mb-12">
          Our Goal
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Slider */}
          <div
            className="relative overflow-hidden flex-1" 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {sections.map((section) => (
                <div key={section.id} className="min-w-full px-4 py-2">
                  <div className="p-6 bg-white rounded-xl shadow-md h-full flex items-center">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {sections.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === idx ? 'bg-[#ecb143] scale-110' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 w-full md:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 text-center transform transition-transform duration-300 hover:-translate-y-2">
              <p className="text-4xl font-bold text-[#26476c]">2</p>
              <p className="mt-2 text-gray-600">Strategic Business Unit</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center transform transition-transform duration-300 hover:-translate-y-2">
              <p className="text-4xl font-bold text-[#26476c]">36</p>
              <p className="mt-2 text-gray-600">Branches</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center transform transition-transform duration-300 hover:-translate-y-2">
              <p className="text-4xl font-bold text-[#26476c]">5120</p>
              <p className="mt-2 text-gray-600">Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoals;

