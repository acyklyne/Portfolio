import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Cpu, Database, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const services = [
  {
    title: "PC & Laptop Repair",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    items: [
      "Overall Diagnostics",
      "Advanced Troubleshooting",
      "OS Installation & Licensing",
      "Hardware Repair & Replacement",
      "Performance & BSOD Fix",
      "Reformat and Configuration",
      "Full System Cleaning",
      "Laptop Internal Cleaning & Fan Maintenance",
    ],
  },
  {
    title: "Data Services",
    icon: <Database className="h-8 w-8 text-primary" />,
    items: [
      "Basic Data Recovery",
      "Advanced Troubleshooting",
      "Secure Data Backup & Transfer",
      "Storage Cloning / Migration",
      "Cloud Storage Setup",
      "Storage Debugging/Mitigation",
      "Firewall & VPN Setup",
      "Virus & Malware Removal",
    ],
  },
  {
    title: "Custom PC/Laptop Building & Upgrades",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    items: [
      "Custom PC Assembly",
      "Hardware Upgrades (SSD, etc.)",
      "Overclocking & Cooling Setup",
      "Cable Management & PC Aesthetic Setup",
      "RGB Lighting Setup (Fans, Strips, Controllers)",
    ],
  },
  {
    title: "Coding & Academic Services",
    icon: <Code className="h-8 w-8 text-primary" />,
    items: [
      "Academic Research Support",
      "Data Gathering & Analysis",
      "Coding Support (Python, Java, React, SQL, etc.)",
      "Logo & Branding Design",
      "Technopreneurship Support",
      "Video Editing",
    ],
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection as="section" id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Services Offered
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A wide range of tech solutions to meet your needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                   <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                      <span className="text-muted-foreground">And many more...</span>
                    </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
