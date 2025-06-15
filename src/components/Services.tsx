
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const serviceList = [
  {
    title: "House Washing",
    description: "Restore the look of vinyl, brick, and siding with soft washing.",
  },
  {
    title: "Driveway & Sidewalk Cleaning",
    description: "Remove dirt, oil stains, and buildup from high-traffic surfaces.",
  },
  {
    title: "Deck & Patio Cleaning",
    description: "Refresh wood and stone patios with safe, effective power washing.",
  },
  {
    title: "Roof Cleaning",
    description: "Soft wash systems to safely remove moss, algae, and debris.",
  },
  {
    title: "Commercial Power Washing",
    description: "Clean storefronts, walkways, parking lots, and more.",
  },
  {
    title: "Gutter Cleaning",
    description: "Prevent water damage by clearing out leaves and debris from your gutters.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We offer a wide range of power washing services to meet your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <Card key={service.title} className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-t-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Image Placeholder</span>
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground flex-grow">{service.description}</p>
                <Button variant="link" className="p-0 mt-4 self-start">Learn More &rarr;</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
