import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-20 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Middle and Right Section - Text */}
          <div className="md:col-span-2 flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-coral-600 mb-8 text-center">
              Hi I&apos;m Zoe
            </h2>
            <div className="prose prose-xl max-w-none text-olive-700 space-y-6">
              <p className="text-center leading-relaxed text-lg md:text-xl">
                I&apos;m a photographer and Super 8 filmmaker based in Southern California.
                I shoot primarily on film to create nostalgic, warm, and candid images and
                videos that feel timeless and true to the moment. I&apos;m drawn to the way
                film captures real, in-the-moment emotions and turns them into something you can feel.
              </p>
              <p className="text-center leading-relaxed text-lg md:text-xl">
                Film loves the in-between moments. The way you looked at each other when you
                thought no one was watching. Your mom fixing your veil. That burst of laughter
                during cocktail hour. These are the moments that make your story yours.
              </p>
            </div>
          </div>

          {/* Left Section - Photo */}
          <div className="relative aspect-[3/4] bg-peach-200 rounded-sm overflow-hidden order-2 md:order-1 md:w-4/5">
            <Image
              src="/images/Hiimzoepic.JPG"
              alt="Zoe Campbell - Film Photographer and Videographer"
              fill
              sizes="(max-width: 768px) 100vw, 27vw"
              className="object-cover scale-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
