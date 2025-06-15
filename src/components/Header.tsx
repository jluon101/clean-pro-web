
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-foreground">
          Name
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
           <div className="flex items-center gap-2 text-sm text-muted-foreground">
             <Phone className="h-4 w-4" />
             <span>(555) 555-5555</span>
           </div>
           <div className="flex items-center gap-2 text-sm text-muted-foreground">
             <Mail className="h-4 w-4" />
             <span>contact@email.com</span>
           </div>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
              <a href="#home" className="text-xl font-bold text-foreground" onClick={() => setIsOpen(false)}>
                Name
              </a>
              <nav className="grid gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
               <div className="flex flex-col gap-4 mt-4">
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                   <Phone className="h-4 w-4" />
                   <span>(555) 555-5555</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                   <Mail className="h-4 w-4" />
                   <span>contact@email.com</span>
                 </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
