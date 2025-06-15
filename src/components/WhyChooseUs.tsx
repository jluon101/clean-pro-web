
import { Award, Leaf, ShieldCheck, Smile } from "lucide-react";

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Eco-Friendly Cleaning Solutions",
    description: "We use environmentally safe products that are tough on dirt but gentle on your property and the planet.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Licensed & Insured Technicians",
    description: "Our team is fully licensed and insured, giving you peace of mind with every service.",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "Satisfaction Guarantee",
    description: "We stand by our work. If you're not 100% satisfied, we'll make it right.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Free Estimates",
    description: "Get a transparent, no-obligation quote for your project so you know exactly what to expect.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Name?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Experience the difference with our commitment to quality and customer service.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
