"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Silk from "@/components/Silk";
import { BlurScrollContainer } from "./animations";
import { milkywalky } from "../fonts/fonts";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 w-full h-full opacity-[0.3] pointer-events-none">
          <Silk
            speed={2.9}
            scale={0.9}
            color="#98847a"
            noiseIntensity={1.5}
            rotation={0}
          />
      </div>

      <BlurScrollContainer>
        <div className="max-w-4xl mx-auto text-center relative z-10">

        <h1 className={`text-7xl md:text-9xl mb-6 tracking-wide ${milkywalky.className}`}>
          Michael Wiens
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Engineer & Design Technologist
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting beautiful digital experiences with a focus on user-centered design
          and clean, efficient code. Passionate about turning ideas into reality.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/mishkuh"
            className="p-3 rounded-lg bg-card border border-border hover:bg-accent transition-all hover:scale-105 shadow-md"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-wiens/"
            className="p-3 rounded-lg bg-card border border-border hover:bg-accent transition-all hover:scale-105 shadow-md"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mwiens253@gmail.com"
            className="p-3 rounded-lg bg-card border border-border hover:bg-accent transition-all hover:scale-105 shadow-md"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </BlurScrollContainer>
    </section>
  );
}
