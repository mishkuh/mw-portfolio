import { Mail, MapPin, Phone } from "lucide-react";
import { BlurScrollContainer } from "./animations";

export function Contact() {
  return (
    <section className="py-24 px-6 bg-muted/30 relative">
      <BlurScrollContainer>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(93,64,55,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">Get In Touch</h2>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl">
          <p className="text-lg text-center text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h4 className="mb-2">Email</h4>
              <a
                href="mailto:mwiens253@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                mwiens253@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h4 className="mb-2">Phone</h4>
              <a
                href="tel:+12063198837"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (206) 319-8837
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h4 className="mb-2">Location</h4>
              <p className="text-muted-foreground">
                Capitol Hill, Seattle, WA
              </p>
            </div>
          </div>
        </div>
      </div>
      </BlurScrollContainer>
    </section>
  );
}
