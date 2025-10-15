export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-coral-600 mb-12 text-center">
          About
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image Placeholder */}
          <div className="aspect-[3/4] bg-gradient-to-br from-peach-200 via-gold-200 to-dustyBlue-200 rounded-sm">
            {/* Replace with actual profile image */}
          </div>

          <div className="space-y-6 text-olive-700 leading-relaxed">
            <p>
              Hi, I&apos;m Zoe! I&apos;m a photographer and Super 8 filmmaker based in
              Southern California. I shoot primarily on film to create nostalgic,
              warm, and candid images and videos that feel timeless and true to the
              moment. I&apos;m drawn to the way film captures real, in-the-moment
              emotions and turns them into something you can feel.
            </p>
            <p>
              Outside of shooting, I love spending time outdoors, at the beach,
              camping, traveling, and finding new ways to be creative through
              painting and crafting.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-sage-50 p-8 md:p-12 rounded-sm">
            <h2 className="text-3xl font-serif text-coral-600 mb-6">
              Services
            </h2>
            <p className="text-olive-700 leading-relaxed mb-4">
              Available for weddings, elopements, brands, lifestyle, and portrait
              sessions.
            </p>
          </div>

          <div className="bg-peach-100 p-8 md:p-12 rounded-sm">
            <h2 className="text-3xl font-serif text-burntOrange-600 mb-6">
              My Approach
            </h2>
            <div className="space-y-4 text-olive-700 leading-relaxed">
              <p>
                I shoot primarily on Super8 and 35mm film, giving your wedding or
                session a warm, nostalgic, and personal feel. Film captures the
                small, candid moments—the glances, laughter, and gestures you might
                not even notice in the moment.
              </p>
              <p>
                Super8 has a dreamy, timeless quality, while 35mm stills add depth,
                color, and richness. Together, they create a story that feels both
                real and beautiful.
              </p>
              <p>
                My fly-on-the-wall approach blends editorial and documentary styles.
                I let your day unfold naturally while keeping an eye on the
                details—the venue, the little touches, the people, and all the
                in-between moments. I love capturing close-ups, stills, and
                spontaneous movement, making sure your day feels alive on film.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
