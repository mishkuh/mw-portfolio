import { BlurScrollContainer } from "./animations";  

export function About() {
  return (
    <section className="py-24 px-6 relative">
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,64,55,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <BlurScrollContainer>
          <h2 className="text-4xl md:text-5xl mb-12 text-center">About Me</h2>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate developer and designer with a keen eye for detail and a love for
              creating seamless user experiences. With expertise in modern web technologies,
              I bring ideas to life through thoughtful design and clean code.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              My approach combines aesthetic sensibility with technical precision, ensuring that
              every project not only looks beautiful but also performs flawlessly. I believe in
              the power of simplicity and the importance of user-centered design.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring design trends, on{' '}
              <a
                href="https://www.airbnb.com/h/caphillhideaway"
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                superhost duty
              </a>
              , getting buckets on the court, or scheming up my next big idea with some jasmine green tea.
            </p>
          </div>
        </BlurScrollContainer>
      </div>
    </section>
  );
}
