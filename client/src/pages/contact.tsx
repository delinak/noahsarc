import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock, MessageSquare, Heart, Users } from "lucide-react";

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
    { day: "24/7 Emergency", hours: "Always available for urgent needs" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
              Get In <span className="royal-purple">Touch</span>
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              We're here to answer your questions, provide information about our services, 
              and help you take the next step toward quality care and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">How to Reach Us</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Choose the method that works best for you. We're committed to responding promptly and thoroughly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-3">{method.title}</h3>
                  <p className="text-2xl font-bold royal-purple mb-3">{method.detail}</p>
                  <p className="text-medium-gray mb-4 leading-relaxed">{method.description}</p>
                  <p className="text-sm text-medium-gray font-medium">{method.available}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Hours & Location Info */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
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

      {/* Work with Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 royal-purple mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Work with Us</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Join our compassionate team of caregivers dedicated to empowering individuals with intellectual and developmental disabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-dark-gray">Why Work at Noah's Arc Care?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2"></div>
                  <p className="text-medium-gray">Competitive compensation and benefits package</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2"></div>
                  <p className="text-medium-gray">Comprehensive training and professional development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2"></div>
                  <p className="text-medium-gray">Flexible scheduling options</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2"></div>
                  <p className="text-medium-gray">Meaningful work that makes a real difference</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2"></div>
                  <p className="text-medium-gray">Supportive team environment in Nashville, TN</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-dark-gray mb-3">We're Looking For:</h4>
                <div className="space-y-2 text-sm text-medium-gray">
                  <p>• Direct Support Professionals</p>
                  <p>• Personal Care Assistants</p>
                  <p>• Respite Care Providers</p>
                  <p>• Community Support Specialists</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-dark-gray mb-6">Apply Today</h3>
              <p className="text-medium-gray mb-6">
                Ready to make a difference? Send us your resume and tell us why you'd like to join our team.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Mail className="h-5 w-5 text-royal-purple" />
                  <div>
                    <p className="font-medium text-dark-gray">Email Your Resume</p>
                    <p className="text-sm text-medium-gray">careers@noahsarccare.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Phone className="h-5 w-5 text-royal-purple" />
                  <div>
                    <p className="font-medium text-dark-gray">Call Us</p>
                    <p className="text-sm text-medium-gray">(615) 782-1842</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-xs text-medium-gray">
                  <strong>Equal Opportunity Employer:</strong> Noah's Arc Care is committed to providing equal employment opportunities regardless of race, color, religion, gender, age, disability, or veteran status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageSquare className="h-16 w-16 royal-purple mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Send Us a Message</h2>
            <p className="text-xl text-medium-gray">
              Fill out the form below and we'll get back to you as soon as possible with the information you need.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-medium-gray">
              Quick answers to common questions about our services and how we can help.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-3">How quickly can services begin?</h3>
              <p className="text-medium-gray leading-relaxed">
                Service timelines vary based on individual needs and availability. We work to begin services 
                as quickly as possible while ensuring proper planning and preparation. During your initial 
                consultation, we'll provide a realistic timeline for your specific situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-3">What areas do you serve?</h3>
              <p className="text-medium-gray leading-relaxed">
                We proudly serve communities throughout Kansas, with our primary service area centered around 
                Wichita. Contact us to confirm service availability in your specific location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Do you accept insurance or Medicaid?</h3>
              <p className="text-medium-gray leading-relaxed">
                Yes, we work with various insurance providers and participate in Medicaid waiver programs, 
                including the Katie Beckett program. We'll help you understand your coverage options and 
                work with you to maximize available benefits.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-3">What makes Noah's Arc Care different?</h3>
              <p className="text-medium-gray leading-relaxed">
                Our 20+ years of experience, person-centered approach, and genuine commitment to each individual's 
                success sets us apart. We focus on building long-term relationships and empowering independence 
                rather than just providing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}