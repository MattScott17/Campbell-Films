import Image from "next/image";

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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-coral-600 mb-8">
            Bucket List Destinations
          </h2>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto">
            I offer discounts for destination shoots. Let&apos;s make your dream location happen!
          </p>
        </div>

        {/* Map and Destinations Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left: Destinations List Vertical */}
          <div className="flex flex-col gap-4">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-peach-100 p-4 rounded-sm border border-sage-200 hover:border-coral-400 transition-colors text-center"
              >
                <p className="text-olive-800 font-medium text-xl">
                  {destination}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Map */}
          <div className="md:col-span-2">
            <div className="relative w-full aspect-[16/10] rounded-sm overflow-hidden">
              <Image
                src="/images/CampbellFilmsMap.png"
                alt="Campbell Films - Bucket List Destinations Map"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
