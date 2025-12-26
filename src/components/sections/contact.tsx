import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function ContactSection() {
  return (
    <AnimatedSection as="section" id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Get In Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <a href="mailto:hello@klyne.com">
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
