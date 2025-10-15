interface Addon {
  name: string;
  price: string;
}

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  addons?: Addon[];
  featured?: boolean;
}

export default function PricingSection() {
  const packages: Package[] = [
    {
      name: "Engagements",
      price: "$1,500",
      description: "Perfect for intimate celebrations",
      features: [
        "Super 8 Film + 35mm film photos",
        "2 hours of coverage",
        "Short highlight video",
        "Film photo gallery",
      ],
      addons: [
        { name: "Just film photos", price: "$850" },
        { name: "Just Super 8", price: "$950" },
      ],
    },
    {
      name: "Elopements",
      price: "$3,200",
      description: "Your intimate day, beautifully captured",
      features: [
        "Super 8 + 35mm film photos",
        "4 hours of coverage",
        "Highlight video reel",
        "Film photo gallery",
      ],
      addons: [
        { name: "Just film photos", price: "$1,300" },
        { name: "Just Super 8", price: "$2,200" },
      ],
      featured: true,
    },
    {
      name: "Weddings",
      price: "$6,400",
      description: "Full-day storytelling on film",
      features: [
        "Super 8 + 35mm film photos",
        "10 hours of full-day coverage",
        "Highlight video",
        "Film photo gallery",
      ],
      addons: [
        { name: "Just film photos", price: "$2,700" },
        { name: "Just Super 8", price: "$3,800" },
      ],
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif text-coral-600 mb-4 text-center">
        Packages
      </h2>
      <p className="text-center text-olive-700 mb-12 max-w-2xl mx-auto">
        Each package is designed to capture your story authentically. Custom
        packages available to fit your specific needs.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`rounded-sm p-8 transition-transform hover:scale-105 ${
              pkg.featured
                ? "bg-coral-500 text-peach-50 shadow-lg"
                : "bg-sage-50 border border-sage-200"
            }`}
          >
            <h3
              className={`text-3xl font-serif mb-2 ${
                pkg.featured ? "text-peach-50" : "text-coral-600"
              }`}
            >
              {pkg.name}
            </h3>
            <div
              className={`text-4xl font-bold mb-4 ${
                pkg.featured ? "text-peach-50" : "text-burntOrange-600"
              }`}
            >
              {pkg.price}
            </div>
            <p
              className={`mb-6 ${
                pkg.featured ? "text-peach-100" : "text-olive-700"
              }`}
            >
              {pkg.description}
            </p>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                      pkg.featured ? "text-peach-100" : "text-olive-600"
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span
                    className={
                      pkg.featured ? "text-peach-100" : "text-olive-700"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {pkg.addons && pkg.addons.length > 0 && (
              <div
                className={`pt-6 border-t ${
                  pkg.featured ? "border-peach-200/20" : "border-sage-300"
                }`}
              >
                <h4
                  className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                    pkg.featured ? "text-peach-100" : "text-burntOrange-600"
                  }`}
                >
                  Add-ons
                </h4>
                <ul className="space-y-2">
                  {pkg.addons.map((addon, idx) => (
                    <li
                      key={idx}
                      className={`flex justify-between text-sm ${
                        pkg.featured ? "text-peach-100" : "text-olive-700"
                      }`}
                    >
                      <span>{addon.name}</span>
                      <span className="font-medium">{addon.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
