
import { Card } from "@/components/ui/card";

const galleryItems = [
  { label: "Driveway - Before & After" },
  { label: "House Wash Project" },
  { label: "Patio Cleaning" },
  { label: "Roof Soft Wash" },
  { label: "Commercial Building" },
  { label: "Siding Restoration" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            See the difference our professional power washing makes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.label} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Image Placeholder</span>
              </div>
              <div className="p-4 bg-background">
                <p className="font-medium text-center">{item.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
