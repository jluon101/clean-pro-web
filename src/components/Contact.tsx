
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Ready to restore your property's shine? Contact us today for a free quote!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <span>(555) 555-5555</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <span>contact@email.com</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <span>123 Main Street, Anytown, USA 12345</span>
              </div>
            </div>
            <div className="mt-8">
               <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Google Map Placeholder</span>
                </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <Input placeholder="Name" className="h-12" />
              <Input type="email" placeholder="Email" className="h-12" />
              <Input type="tel" placeholder="Phone" className="h-12" />
              <Textarea placeholder="Message" rows={5} />
              <Button type="submit" size="lg" className="w-full text-lg font-semibold py-6 shadow-md">
                Send Message
              </Button>
            </form>
            <p className="text-center text-muted-foreground my-4 text-sm">OR</p>
            <Button variant="outline" size="lg" className="w-full text-lg font-semibold py-6 shadow-md">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get a Text Quote
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              This can be connected to an SMS automation service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
