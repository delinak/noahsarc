import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function RegistrationForm() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Registration",
      detail: "bneway@noahsarccare.com",
      description: "Send us an email with your registration details and we'll respond within 24 hours.",
      available: "We check email regularly throughout the day"
    },
    {
      icon: Phone,
      title: "Call to Register",
      detail: "(615) 782-1842",
      description: "Speak directly with our caring team about registration and your care needs.",
      available: "Monday - Friday, 8:00 AM - 6:00 PM"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      detail: "Nolensville, Tennessee",
      description: "7211 Halye Industrial Blvd, Nolensville, TN 37135",
      available: "Schedule an in-person consultation"
    }
  ];

  const registrationSteps = [
    {
      step: "1",
      title: "Contact Us",
      description: "Reach out via phone, email, or visit our office to begin the registration process."
    },
    {
      step: "2", 
      title: "Initial Consultation",
      description: "Our team will schedule an in-depth consultation to understand your care needs."
    },
    {
      step: "3",
      title: "Care Plan Development",
      description: "Together, we'll develop a personalized care plan that addresses your specific goals."
    },
    {
      step: "4",
      title: "Service Implementation",
      description: "We begin providing services according to the care plan with ongoing support."
    }
  ];

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Client Registration</h2>
          <p className="text-xl text-medium-gray">
            Ready to get started? Contact us directly to begin your journey with Noah's Arc Care.
          </p>
        </div>
        
        {/* Contact Methods for Registration */}
        <div className="bg-green-50 rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-dark-gray mb-6 text-center">How to Register</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-hope-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-gray mb-2">{method.title}</h3>
                  <p className="text-xl font-bold text-hope-green mb-2">{method.detail}</p>
                  <p className="text-medium-gray mb-3 text-sm leading-relaxed">{method.description}</p>
                  <p className="text-xs text-medium-gray font-medium">{method.available}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Registration Process */}
        <div className="bg-purple-50 rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-dark-gray mb-6 text-center">Our Registration Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationSteps.map((item, index) => (
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

        {/* What to Prepare */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-dark-gray mb-6 text-center">What to Prepare</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-dark-gray mb-4">Client Information</h4>
              <ul className="text-sm text-medium-gray space-y-2">
                <li>• Client's full name and date of birth</li>
                <li>• Insurance information (if applicable)</li>
                <li>• Medical history and current medications</li>
                <li>• Special needs or support requirements</li>
                <li>• Goals and aspirations for care</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-dark-gray mb-4">Contact Information</h4>
              <ul className="text-sm text-medium-gray space-y-2">
                <li>• Primary contact person's name</li>
                <li>• Relationship to the client</li>
                <li>• Phone number and email address</li>
                <li>• Preferred contact method</li>
                <li>• Best times to reach you</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-purple-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-dark-gray mb-3">Ready to Get Started?</h4>
            <p className="text-medium-gray mb-4">
              Contact us today to begin your registration process. Our team is ready to help you take the first step toward quality care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:(615) 782-1842"
                className="inline-flex items-center justify-center px-6 py-3 bg-hope-green text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call (615) 782-1842
              </a>
              <a 
                href="mailto:bneway@noahsarccare.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-royal-purple text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
