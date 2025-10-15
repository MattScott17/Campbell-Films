export default function WhyFilmSection() {
  const reasons = [
    {
      title: "It Feels Different",
      text: "There's something about film that just feels different. It's warm, dreamy, and honest in a way that brings you right back to the moment.",
    },
    {
      title: "The In-Between Moments",
      text: "Film loves the in-between moments. The way you looked at each other when you thought no one was watching. Your mom fixing your veil. That burst of laughter during cocktail hour.",
    },
    {
      title: "Super8 Magic",
      text: "Super8 has this beautiful, nostalgic quality, like watching home movies from another era, but it's your story.",
    },
    {
      title: "35mm Beauty",
      text: "35mm film gives your photos a timeless look with warm, vibrant, and true to life colors.",
    },
    {
      title: "Authentically You",
      text: "I'm there to capture it all as it naturally unfolds, staying out of the way so you can be fully present. What you get is a collection of images and films that feel alive, real, and unmistakably yours.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-coral-600 mb-16 text-center">
          Why Super8 / Film?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="space-y-4"
            >
              <h3 className="text-2xl font-serif text-burntOrange-600">
                {reason.title}
              </h3>
              <p className="text-olive-700 leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
