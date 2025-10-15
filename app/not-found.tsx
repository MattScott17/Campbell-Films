import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-peach-50 via-coral-50 to-gold-50">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* Film frame decoration */}
        <div className="relative mb-8">
          {/* Decorative film sprocket holes */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-30">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-sm border-2 border-coral-400" />
            ))}
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-30">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-sm border-2 border-coral-400" />
            ))}
          </div>

          {/* 404 Number */}
          <div className="text-9xl md:text-[12rem] font-bold text-coral-300 opacity-20 leading-none">
            404
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-coral-600 mb-6 leading-tight">
          Looks like this frame didn&apos;t make the final cut
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-olive-700 mb-4 max-w-lg mx-auto">
          The page you&apos;re looking for seems to have been left on the cutting room floor.
        </p>

        <p className="text-base md:text-lg text-olive-600 mb-12 italic">
          Don&apos;t worry—the best shots are still waiting for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-coral-500 rounded-lg overflow-hidden transition-all duration-300 hover:bg-coral-600 hover:shadow-lg hover:scale-105"
          >
            <span className="relative z-10">Return Home</span>
            <span className="absolute inset-0 bg-gradient-to-r from-coral-600 to-burntOrange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-coral-600 bg-white border-2 border-coral-400 rounded-lg transition-all duration-300 hover:bg-coral-50 hover:border-coral-500 hover:shadow-md hover:scale-105"
          >
            <span>View Portfolio</span>
            <svg
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Decorative camera icon */}
        <div className="mt-16 flex justify-center opacity-40">
          <svg
            className="w-16 h-16 text-coral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* Film strip bottom decoration */}
        <div className="mt-12 flex justify-center gap-2 opacity-20">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-12 border-2 border-coral-400 rounded-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
