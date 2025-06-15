
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=3000&auto=format&fit=crop"
        alt="Power washing background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Restore Your Property's Shine
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 drop-shadow-md">
          Professional Power Washing for Homes, Driveways & More
        </p>
        <Button size="lg" className="mt-8 text-lg font-semibold px-8 py-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <a href="#contact">Request a Free Quote</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
