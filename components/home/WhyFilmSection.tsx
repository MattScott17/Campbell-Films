"use client";

import { useEffect, useRef } from "react";

export default function WhyFilmSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-peach-50 via-peach-100 to-sage-50 py-28 px-6 text-olive-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-32">

        {/* Main Header */}
        <div className="text-center fade-up opacity-0 translate-y-10 transition-all duration-1000">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-coral-600 mb-12">
            Why I Choose to Shoot Film
          </h1>
        </div>

        {/* Block 1 */}
        <div className="text-center fade-up opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-4xl md:text-4xl font-script text-sage-600 mb-6">
            It Feels Different
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-olive-800 max-w-3xl mx-auto">
            There’s something about film that just feels different. It’s warm,
            dreamy, and honest in a way that brings you right back to the moment.
          </p>
        </div>

        {/* Block 2 */}
        <div className="md:text-left text-center fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-200">
          <h2 className="text-4xl md:text-4xl font-script text-sage-600 mb-6">
            The In-Between Moments
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-olive-800 max-w-3xl mx-auto">
            Film loves the in-between moments — the way you looked at each other
            when you thought no one was watching. Your mom fixing your veil.
            That burst of laughter during cocktail hour.
          </p>
        </div>

        {/* Block 3 */}
        <div className="text-center fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <h2 className="text-4xl md:text-4xl font-script text-sage-600 mb-6">
            Super 8 Magic & 35mm Beauty
          </h2>
          <p className="text-lg md:text-xl leading-relaxed italic text-olive-700 max-w-3xl mx-auto">
            Super 8 has this beautiful, nostalgic quality — like watching home
            movies from another era, but it’s your story. 35mm film gives your
            photos a timeless look with warm, vibrant, true-to-life colors.
          </p>
        </div>

        {/* Block 4 */}
        <div className="md:text-right text-center fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-500">
          <h2 className="text-4xl md:text-4xl font-script text-sage-600 mb-6">
            Authentically You
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-olive-800 max-w-3xl mx-auto">
            I’m there to capture it all as it naturally unfolds, staying out of
            the way so you can be fully present. What you get is a collection of
            images and films that feel alive, real, and unmistakably yours.
          </p>
        </div>

      </div>
    </section>
  );
}
