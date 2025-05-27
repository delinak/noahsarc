import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray leading-tight">
                Empowering Lives Through{" "}
                <span className="text-trust-blue">Compassionate Care</span>
              </h1>
              <p className="text-xl text-medium-gray leading-relaxed">
                For over twenty years, we've supported individuals with developmental disabilities. 
                Now, through Noah's Arc Care, we continue our mission of fostering independence and enhancing lives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-trust-blue text-white hover:bg-blue-700 px-8 py-4"
              >
                Explore Our Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white px-8 py-4"
              >
                Ask Questions
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Diverse group of caregivers and individuals with disabilities in supportive community setting"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-hope-green text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
