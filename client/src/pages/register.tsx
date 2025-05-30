import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import RegistrationForm from "@/components/registration-form";
import { UserPlus, Shield, Clock, CheckCircle } from "lucide-react";

export default function Register() {
  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Assessment",
      description: "We conduct thorough evaluations to understand your unique needs and develop personalized care plans."
    },
    {
      icon: Clock,
      title: "Quick Response Time",
      description: "Our team typically responds to registration requests within 24 hours to begin the process."
    },
    {
      icon: CheckCircle,
      title: "Seamless Transition",
      description: "We ensure a smooth transition into services with careful planning and gradual implementation."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Submit Registration",
      description: "Complete our comprehensive registration form with all necessary information about care needs and preferences."
    },
    {
      step: "2", 
      title: "Initial Consultation",
      description: "Our team will contact you within 24 hours to schedule an in-depth consultation and assessment."
    },
    {
      step: "3",
      title: "Care Plan Development",
      description: "Together, we'll develop a personalized care plan that addresses specific goals and requirements."
    },
    {
      step: "4",
      title: "Service Implementation",
      description: "We begin providing services according to the care plan with ongoing monitoring and support."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <UserPlus className="h-16 w-16 royal-purple mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
              Start Your <span className="royal-purple">Care Journey</span>
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Take the first step toward quality care and support. Our registration process is designed 
              to understand your unique needs and connect you with the right services.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Why Register With Us?</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our registration process ensures you receive the most appropriate and effective care services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 royal-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-3">{benefit.title}</h3>
                  <p className="text-medium-gray leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Our Registration Process</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              A simple, straightforward process designed to get you connected with the care you need quickly and efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-gray mb-3">{item.title}</h3>
                <p className="text-sm text-medium-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Services Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">See Our Care in Action</h2>
            <p className="text-xl text-medium-gray">
              Real moments of support, growth, and independence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="space-y-4">
              <img
                src="/catt-liu-hQOHDAibf6A-unsplash.jpg"
                alt="Daily living skills support - helping with personal care routines"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="font-semibold text-dark-gray">Daily Living Support</h3>
              <p className="text-sm text-medium-gray">Assisting with personal care and daily routines</p>
            </div>
            
            <div className="space-y-4">
              <img
                src="/pexels-cliff-booth-4058053.jpg"
                alt="Individual with developmental disabilities sharing a meal with caregiver"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="font-semibold text-dark-gray">Mealtime Support</h3>
              <p className="text-sm text-medium-gray">Nutrition assistance and social interaction during meals</p>
            </div>
            
            <div className="space-y-4">
              <img
                src="/alireza-attari-SBIak0pKUIE-unsplash.jpg"
                alt="Technology-assisted learning and skill development"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="font-semibold text-dark-gray">Skills Development</h3>
              <p className="text-sm text-medium-gray">Technology-assisted learning and independence training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Client Registration Form</h2>
            <p className="text-xl text-medium-gray">
              Please provide detailed information to help us understand your care needs and preferences.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-dark-gray mb-6 text-center">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-3">Privacy & Confidentiality</h4>
                <ul className="text-sm text-medium-gray space-y-2">
                  <li>• All information is kept strictly confidential</li>
                  <li>• HIPAA compliant data handling practices</li>
                  <li>• Information shared only with authorized care team members</li>
                  <li>• Secure data storage and transmission</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-3">What Happens Next</h4>
                <ul className="text-sm text-medium-gray space-y-2">
                  <li>• Registration review within 24 hours</li>
                  <li>• Follow-up call to schedule consultation</li>
                  <li>• In-person or virtual assessment meeting</li>
                  <li>• Personalized care plan development</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-medium-gray text-center">
                <strong>Questions about registration?</strong> Contact us at (316) 530-1515 or 
                info@noahsarccare.com for assistance with the registration process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}