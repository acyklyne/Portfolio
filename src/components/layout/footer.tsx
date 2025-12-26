import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-center min-h-[80px] text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ACY KLYNE B. AGUILAR. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
