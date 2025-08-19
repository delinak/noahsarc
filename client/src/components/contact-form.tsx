import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactForm() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "(615) 782-1842",
      description: "Speak directly with our caring team about your needs and questions.",
      available: "Monday - Friday, 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "bneway@noahsarccare.com",
      description: "Send us a detailed message and we'll respond within 24 hours.",
      available: "We check email regularly throughout the day"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      detail: "Nolensville, Tennessee",
      description: "7211 Halye Industrial Blvd, Nolensville, TN 37135",
      available: "Serving Tennessee communities with quality care"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Emergency calls only" },
    { day: "Emergency Contact", hours: "Available for urgent needs during business hours" }
  ];

  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Have Questions?</h2>
          <p className="text-xl text-medium-gray">
            We're here to help. Reach out with any questions about our services or how we can support you.
          </p>
        </div>
        
        {/* Contact Methods */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-dark-gray mb-6 text-center">How to Reach Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-purple-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-gray mb-2">{method.title}</h3>
                  <p className="text-xl font-bold text-royal-purple mb-2">{method.detail}</p>
                  <p className="text-medium-gray mb-3 text-sm leading-relaxed">{method.description}</p>
                  <p className="text-xs text-medium-gray font-medium">{method.available}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Office Hours & Location Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-royal-purple mr-3" />
                <h3 className="text-2xl font-bold text-dark-gray">Office Hours</h3>
              </div>
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-purple-100 last:border-b-0">
                    <span className="font-medium text-dark-gray">{schedule.day}</span>
                    <span className="text-medium-gray">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-medium-gray">
                  <strong>Emergency Support:</strong> For urgent situations outside of business hours, 
                  please call our main number and follow the prompts for emergency assistance.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-royal-purple mr-3" />
                <h3 className="text-2xl font-bold text-dark-gray">Location & Directions</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-medium text-dark-gray mb-2">Our Office Address:</p>
                  <p className="text-medium-gray text-sm">
                    7211 Halye Industrial Blvd<br />
                    Nolensville, TN 37135
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-medium text-dark-gray mb-2">Service Area:</p>
                  <p className="text-medium-gray text-sm">
                    We proudly serve communities throughout Tennessee, with our primary service area centered around Nashville.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-dark-gray mb-6 text-center">Ready to Connect?</h3>
          <p className="text-lg text-medium-gray text-center mb-8">
            Our team is standing by to answer your questions and discuss how we can support you and your loved ones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(615) 782-1842"
              className="inline-flex items-center justify-center px-8 py-4 bg-royal-purple text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </a>
            <a 
              href="mailto:bneway@noahsarccare.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-hope-green text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </div>
          
          <div className="mt-8 p-4 bg-purple-50 rounded-lg text-center">
            <p className="text-sm text-medium-gray">
              <strong>Response Time:</strong> We typically respond to inquiries within 24 hours, often much sooner. 
              For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
