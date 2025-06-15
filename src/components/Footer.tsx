
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm">
          &copy; {year} Name. All rights reserved.
        </p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">Services</a>
          <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground">Gallery</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
