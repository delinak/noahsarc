import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock, MessageSquare, Heart, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Contact() {
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
      detail: "Nashville, Tennessee",
      description: "Suite D-106, 2201 Murfreesboro Pike, Nashville TN 37217",
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
              Get In <span className="royal-purple">Touch</span>
            </h1>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              We're here to answer your questions and help you take the next step toward quality care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray mb-4">Send Us a Message</h2>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-dark-gray mb-3">Contact Information</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-gray mb-2">{method.title}</h3>
                  <p className="text-xl font-bold royal-purple mb-2">{method.detail}</p>
                  <p className="text-medium-gray mb-3 text-sm leading-relaxed">{method.description}</p>
                  <p className="text-xs text-medium-gray font-medium">{method.available}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Hours & Location Info */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 royal-purple mr-3" />
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

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 royal-purple mr-3" />
                <h3 className="text-2xl font-bold text-dark-gray">What to Expect</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medium-gray">
                    <strong>Quick Response:</strong> We typically respond to inquiries within 24 hours, often much sooner.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medium-gray">
                    <strong>Personalized Consultation:</strong> Every conversation is tailored to your specific needs and questions.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medium-gray">
                    <strong>No Pressure:</strong> We're here to provide information and support, not to pressure you into decisions.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medium-gray">
                    <strong>Complete Confidentiality:</strong> All conversations and information shared are kept strictly confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-medium-gray">
              Quick answers to common questions about our services.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-dark-gray hover:no-underline">
                How quickly can services begin?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-medium-gray leading-relaxed">
                Service timelines vary based on individual needs and availability. We work to begin services 
                as quickly as possible while ensuring proper planning and preparation. During your initial 
                consultation, we'll provide a realistic timeline for your specific situation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-dark-gray hover:no-underline">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-medium-gray leading-relaxed">
                We proudly serve communities throughout Tennessee, with our primary service area centered around 
                Nashville. Contact us to confirm service availability in your specific location.
              </AccordionContent>
            </AccordionItem>
            

            
            <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-dark-gray hover:no-underline">
                What makes Noah's Arc Care different?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-medium-gray leading-relaxed">
                Our 20+ years of experience, person-centered approach, and genuine commitment to each individual's 
                success sets us apart. We focus on building long-term relationships and empowering independence 
                rather than just providing services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}