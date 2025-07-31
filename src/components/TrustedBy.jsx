import React from 'react';

const companies = [
  "Ethio Telecom",
  "Ethiopian Airlines",
  "Dashen Bank",
  "MIDROC Ethiopia",
  "Commercial Bank of Ethiopia",
  "Ethiopian Electric Power",
  "Zemen Bank",
  "National Oil Ethiopia",
  "Awash Bank",
  "United Bank",
];

const TrustedByCompanies = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-primaryText">Trusted By Leading Ethiopian Companies</h2>
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="inline-block animate-marquee whitespace-nowrap">
            {companies.map((company, idx) => (
              <span
                key={idx}
                className="inline-block mx-8 text-2xl font-semibold text-secondary"
              >
                {company}
              </span>
            ))}
            {/* Duplicate to ensure seamless loop */}
            {companies.map((company, idx) => (
              <span
                key={"dup-" + idx}
                className="inline-block mx-8 text-2xl font-semibold text-secondary"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          padding-left: 0;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default TrustedByCompanies;
