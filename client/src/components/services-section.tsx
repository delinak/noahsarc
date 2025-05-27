import { Home, Clock, Bus, Users, HandHeart, Route, GraduationCap, Wrench, Shield } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Supportive Living",
      description: "Personalized living support that promotes independence while providing necessary assistance for daily activities and community integration.",
      color: "bg-blue-50 text-trust-blue"
    },
    {
      icon: Clock,
      title: "Respite Care",
      description: "Temporary relief care services that provide families with breaks while ensuring continuous, quality support for their loved ones.",
      color: "bg-green-50 text-hope-green"
    },
    {
      icon: Bus,
      title: "Community Transportation",
      description: "Safe, reliable transportation services that connect individuals to community activities, medical appointments, and social opportunities.",
      color: "bg-amber-50 text-warm-amber"
    },
    {
      icon: Users,
      title: "Family Model",
      description: "Comprehensive family-centered approach that supports both individuals and their families through integrated care planning and support.",
      color: "bg-blue-50 text-trust-blue"
    },
    {
      icon: HandHeart,
      title: "Personal Assistance",
      description: "One-on-one support services tailored to individual needs, promoting autonomy while providing necessary assistance with daily living skills.",
      color: "bg-green-50 text-hope-green"
    },
    {
      icon: Route,
      title: "Stabilization & Transition",
      description: "Specialized support during life transitions, providing stability and guidance as individuals navigate changes in their living situations.",
      color: "bg-amber-50 text-warm-amber"
    },
    {
      icon: GraduationCap,
      title: "Adult Habilitation Day Facility",
      description: "Structured day programs that focus on skill development, social interaction, and meaningful activities in a supportive environment.",
      color: "bg-blue-50 text-trust-blue"
    },
    {
      icon: Wrench,
      title: "Independent Living Skills Training",
      description: "Comprehensive training programs that teach essential life skills, promoting independence and self-sufficiency in daily activities.",
      color: "bg-green-50 text-hope-green"
    },
    {
      icon: Shield,
      title: "Katie Beckett Program",
      description: "Specialized Medicaid waiver program support that helps children with disabilities receive necessary care while remaining in their family homes.",
      color: "bg-amber-50 text-warm-amber"
    }
  ];

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Our Services</h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Comprehensive support services designed to empower independence and enhance quality of life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-dark-gray mb-3">{service.title}</h3>
                <p className="text-medium-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
