
const timeline = [
  {
    year: '1964',
    title: 'Founding Era',
    description: 'Company was established with a commitment to maritime excellence.'
  },
  {
    year: '1980',
    title: 'Regional Expansion',
    description: 'Expanded services across the region with new offices.'
  },
  {
    year: '2000',
    title: 'Technological Innovation',
    description: 'Introduced modern classification systems to improve safety.'
  },
  {
    year: '2010',
    title: 'Global Recognition',
    description: 'Achieved recognition from major international bodies.'
  },
  {
    year: '2020',
    title: 'Sustainable Future',
    description: 'Focused on sustainability and digital transformation initiatives.'
  }
];

export default function CompanyHistoryPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-[#26476c] to-[#1b3350] text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Company History</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            A brief timeline of the milestones that shaped our growth.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto mt-16">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20" />
          <div className="space-y-12">
            {timeline.map((event) => (
              <div key={event.year} className="relative pl-12 pb-12 border-l border-white/20 last:border-none">
                <div className="absolute -left-3 top-1 w-6 h-6 bg-[#ecb143] rounded-full ring-4 ring-white/20" />
                <h3 className="text-2xl font-semibold text-[#ecb143]">{event.year}</h3>
                <h4 className="text-xl font-medium mt-1 mb-2">{event.title}</h4>
                <p className="text-white/80">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

