export default function BucketListSection() {
  const destinations = [
    "Iceland",
    "Australia",
    "Ireland",
    "Portugal",
    "Maine",
    "Indonesia",
  ];

  return (
    <section className="py-20 px-6 bg-mustard-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-coral-600 mb-8">
          Bucket List Destinations
        </h2>
        <p className="text-lg text-olive-700 mb-12 max-w-2xl mx-auto">
          I offer discounts for destination shoots. Let&apos;s make your dream location happen!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-peach-100 p-6 rounded-sm border border-sage-200 hover:border-coral-400 transition-colors"
            >
              <p className="text-olive-800 font-medium text-lg">
                {destination}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
