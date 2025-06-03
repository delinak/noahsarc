import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Home, Clock, Bus, Users, HandHeart, Route, GraduationCap, Wrench, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Supportive Living",
      description: "Personalized living support that promotes independence while providing necessary assistance for daily activities and community integration.",
      features: [
        "On-call support available",
        "Assistance with daily living activities",
        "Medication management and health monitoring",
        "Community integration support",
        "Skill development and training"
      ],
      color: "bg-purple-50 text-royal-purple"
    },
    {
      icon: Clock,
      title: "Respite Care",
      description: "Temporary relief care services that provide families with breaks while ensuring continuous, quality support for their loved ones.",
      features: [
        "Flexible scheduling options",
        "Trained and certified caregivers",
        "Maintaining familiar routines",
        "Emergency respite services",
        "Family consultation and planning"
      ],
      color: "bg-purple-100 text-deep-purple"
    },
    {
      icon: Bus,
      title: "Community Transportation",
      description: "Safe, reliable transportation services that connect individuals to community activities, medical appointments, and social opportunities.",
      features: [
        "Door-to-door transportation",
        "Wheelchair accessible vehicles",
        "Trained transportation staff",
        "Medical appointment coordination",
        "Social and recreational outings"
      ],
      color: "bg-purple-50 text-royal-purple"
    },
    {
      icon: Users,
      title: "Family Model",
      description: "Comprehensive family-centered approach that supports both individuals and their families through integrated care planning and support.",
      features: [
        "Family training and education",
        "Collaborative care planning",
        "Regular family meetings",
        "Resource coordination",
        "Crisis intervention support"
      ],
      color: "bg-purple-100 text-deep-purple"
    },
    {
      icon: HandHeart,
      title: "Personal Assistance",
      description: "One-on-one support services tailored to individual needs, promoting autonomy while providing necessary assistance with daily living skills.",
      features: [
        "Customized care plans",
        "Personal care assistance",
        "Household management support",
        "Social skills development",
        "Independent living coaching"
      ],
      color: "bg-purple-50 text-royal-purple"
    },
    {
      icon: Route,
      title: "Stabilization & Transition",
      description: "Specialized support during life transitions, providing stability and guidance as individuals navigate changes in their living situations.",
      features: [
        "Crisis stabilization services",
        "Transition planning and support",
        "Environmental assessments",
        "Behavioral support strategies",
        "Gradual transition processes"
      ],
      color: "bg-purple-100 text-deep-purple"
    },
    {
      icon: GraduationCap,
      title: "Adult Habilitation Day Facility",
      description: "Structured day programs that focus on skill development, social interaction, and meaningful activities in a supportive environment.",
      features: [
        "Structured daily activities",
        "Skill-building workshops",
        "Social interaction opportunities",
        "Vocational training programs",
        "Community outings and events"
      ],
      color: "bg-purple-50 text-royal-purple"
    },
    {
      icon: Wrench,
      title: "Independent Living Skills Training",
      description: "Comprehensive training programs that teach essential life skills, promoting independence and self-sufficiency in daily activities.",
      features: [
        "Life skills assessment",
        "Customized training plans",
        "Hands-on learning approach",
        "Progress monitoring",
        "Family involvement and support"
      ],
      color: "bg-purple-100 text-deep-purple"
    },
    {
      icon: Shield,
      title: "Katie Beckett Program",
      description: "Specialized Medicaid waiver program support that helps children with disabilities receive necessary care while remaining in their family homes.",
      features: [
        "Medicaid waiver navigation",
        "Care coordination services",
        "Family support and training",
        "Service plan development",
        "Regular case management"
      ],
      color: "bg-purple-50 text-royal-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
              Our <span className="royal-purple">Services</span>
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive support services designed to empower independence, enhance quality of life, 
              and help individuals with intellectual and developmental disabilities thrive in their communities.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-royal-purple text-white hover:bg-purple-700 px-8 py-4">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Service Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <img
              src="/alireza-attari-SBIak0pKUIE-unsplash.jpg"
              alt="Individual with developmental disabilities engaged in learning activities with supportive technology"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-4">{service.title}</h3>
                  <p className="text-medium-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-dark-gray text-sm">Key Features:</h4>
                    <ul className="text-sm text-medium-gray space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-royal-purple mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Why Choose Noah's Arc Care?</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our commitment to excellence and person-centered care sets us apart in the Tennessee community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Experienced Team</h3>
              <p className="text-medium-gray">
                Over 20 years of combined experience in developmental disability support services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-lavender-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Compassionate Care</h3>
              <p className="text-medium-gray">
                Every service is delivered with empathy, respect, and genuine care for each individual.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Licensed & Certified</h3>
              <p className="text-medium-gray">
                Fully licensed and certified to provide quality care services throughout Tennessee.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <HandHeart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Person-Centered</h3>
              <p className="text-medium-gray">
                All services are tailored to each individual's unique needs, goals, and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">How We Work With You</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our collaborative approach ensures that every individual receives the right support at the right time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold royal-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Initial Consultation</h3>
              <p className="text-medium-gray">
                We meet with you to understand needs, goals, and preferences for care services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold royal-purple">2</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Care Planning</h3>
              <p className="text-medium-gray">
                Together, we develop a personalized care plan that addresses specific needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold royal-purple">3</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Service Delivery</h3>
              <p className="text-medium-gray">
                Our trained team provides services according to the care plan with ongoing support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold royal-purple">4</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Ongoing Review</h3>
              <p className="text-medium-gray">
                Regular evaluations ensure services continue to meet evolving needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Contact us today to learn more about our services and how we can support you or your loved one 
            in achieving greater independence and quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 font-semibold">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4">
                Register for Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}