"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight, Eye, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedCert !== null) {
      setSelectedCert((selectedCert + 1) % certifications.length);
    }
  };

  const handlePrev = () => {
    if (selectedCert !== null) {
      setSelectedCert((selectedCert - 1 + certifications.length) % certifications.length);
    }
  };
  
  const currentCert = selectedCert !== null ? certifications[selectedCert] : null;
  const currentCertImage = currentCert ? PlaceHolderImages.find((img) => img.id === currentCert.image) : null;

  return (
    <AnimatedSection as="section" id="certifications" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">My Certifications</h2>
          <p className="mt-4 text-lg text-muted-foreground">A showcase of my credentials and achievements.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                    <CardTitle className="font-headline text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">Issued: {cert.date}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    Verify <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" className="w-full" onClick={() => setSelectedCert(index)}>
                  Preview <Eye className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert !== null && currentCert && currentCertImage && (
           <Dialog open={selectedCert !== null} onOpenChange={(open) => !open && setSelectedCert(null)}>
            <DialogContent className="p-0 max-w-5xl w-full bg-transparent border-0 flex flex-col items-center justify-center">
                <DialogTitle className="sr-only">{currentCert.title}</DialogTitle>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full aspect-video"
                >
                    <Image 
                        src={currentCertImage.imageUrl} 
                        alt={currentCert.title}
                        fill
                        className="object-contain"
                        data-ai-hint={currentCertImage.imageHint}
                    />
                </motion.div>
                <div className="absolute top-4 right-4 z-50">
                     <Button variant="ghost" size="icon" onClick={() => setSelectedCert(null)} className="text-white bg-black/50 hover:bg-black/75 hover:text-white">
                        <X className="h-6 w-6" />
                     </Button>
                </div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
                    <Button variant="ghost" size="icon" onClick={handlePrev} className="text-white bg-black/50 hover:bg-black/75 hover:text-white">
                        <ChevronLeft className="h-8 w-8" />
                    </Button>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
                    <Button variant="ghost" size="icon" onClick={handleNext} className="text-white bg-black/50 hover:bg-black/75 hover:text-white">
                        <ChevronRightIcon className="h-8 w-8" />
                    </Button>
                </div>
            </DialogContent>
           </Dialog>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
