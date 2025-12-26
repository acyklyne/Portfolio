import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-8">
          <div className="flex items-center space-x-4">
            <Icons.logo className="h-6 w-6 text-primary" />
            <p className="text-sm font-medium">ACY KLYNE B. AGUILAR</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        <Separator />
        <div className="py-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ACY KLYNE B. AGUILAR. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
