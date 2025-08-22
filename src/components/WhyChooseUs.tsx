const points = [
  "Proven Expertise",
  "Faster Delivery",
  "Cost-Effective QA",
  "Dedicated Consultants",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 px-8">
      <h3 className="text-3xl font-semibold text-center mb-10 text-[#0056A6]">
        Why Choose Us?
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {points.map((point, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow-sm bg-white hover:border-[#FF9800] transition"
          >
            <p className="font-medium">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
