import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Phone, Mail, Users, Heart, Shield, Clock, Award, MapPin } from "lucide-react";

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: "Competitive Compensation",
      description: "Competitive salary and comprehensive benefits package including health, dental, and vision insurance."
    },
    {
      icon: Award,
      title: "Professional Development",
      description: "Ongoing training opportunities, certification support, and career advancement paths."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Work-life balance with flexible scheduling options to fit your lifestyle."
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Stable employment with a growing company that values long-term relationships."
    }
  ];

  const positions = [
    {
      title: "Direct Support Professional",
      type: "Full-time / Part-time",
      description: "Provide direct care and support to individuals with intellectual and developmental disabilities in their homes and community settings.",
      requirements: [
        "High school diploma or equivalent",
        "Compassionate and patient personality",
        "Reliable transportation",
        "Background check and drug screening"
      ]
    },
    {
      title: "Personal Care Assistant",
      type: "Full-time / Part-time",
      description: "Assist individuals with daily living activities including personal hygiene, meal preparation, and household tasks.",
      requirements: [
        "Previous caregiving experience preferred",
        "Ability to lift up to 50 pounds",
        "CPR certification (or willing to obtain)",
        "Excellent communication skills"
      ]
    },
    {
      title: "Respite Care Provider",
      type: "Part-time / As needed",
      description: "Provide temporary relief care for families, offering short-term support and supervision.",
      requirements: [
        "Flexible schedule availability",
        "Experience with developmental disabilities",
        "Valid driver's license",
        "First aid certification preferred"
      ]
    },
    {
      title: "Community Support Specialist",
      type: "Full-time",
      description: "Support individuals in accessing community resources and developing independent living skills.",
      requirements: [
        "Bachelor's degree in related field preferred",
        "Knowledge of community resources",
        "Strong organizational skills",
        "Bilingual abilities a plus"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 royal-purple mx-auto mb-6" />
            <h1 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
              Join Our <span className="royal-purple">Team</span>
            </h1>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Make a meaningful difference in the lives of individuals with intellectual and developmental disabilities. 
              Join our compassionate team in Nashville, Tennessee.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray mb-4">Why Choose Noah's Arc Care?</h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              We believe in supporting our team members so they can provide the best possible care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="w-14 h-14 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-gray mb-3">{benefit.title}</h3>
                  <p className="text-medium-gray text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray mb-4">Open Positions</h2>
            <p className="text-lg text-medium-gray">
              Explore current opportunities to join our team and make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-dark-gray">{position.title}</h3>
                  <span className="text-sm text-royal-purple font-medium bg-purple-100 px-3 py-1 rounded-full">
                    {position.type}
                  </span>
                </div>
                <p className="text-medium-gray mb-4 text-sm leading-relaxed">{position.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-dark-gray text-sm">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-medium-gray flex items-start space-x-2">
                        <span className="text-royal-purple mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray mb-4">How to Apply</h2>
            <p className="text-lg text-medium-gray">
              Ready to start your rewarding career with us? Here's how to get started.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-gray mb-6">Submit Your Application</h3>
              
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
                
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="h-5 w-5 text-royal-purple" />
                  <div>
                    <p className="font-medium text-dark-gray">Visit Our Office</p>
                    <p className="text-sm text-medium-gray">Suite D-106, 2201 Murfreesboro Pike<br />Nashville, TN 37217</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-dark-gray">What to Include</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-dark-gray">Current Resume</p>
                    <p className="text-sm text-medium-gray">Include relevant work experience and education</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-dark-gray">Cover Letter</p>
                    <p className="text-sm text-medium-gray">Tell us why you want to join our team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-royal-purple rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-dark-gray">References</p>
                    <p className="text-sm text-medium-gray">Professional references who can speak to your abilities</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-medium-gray">
                  <strong>Equal Opportunity Employer:</strong> Noah's Arc Care is committed to providing equal employment 
                  opportunities regardless of race, color, religion, gender, age, disability, or veteran status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}