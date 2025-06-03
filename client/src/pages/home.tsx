import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const quickServices = [
    "Supportive Living",
    "Respite Care", 
    "Community Transportation",
    "Personal Assistance"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-dark-gray leading-tight">
                  Empowering Lives Through{" "}
                  <span className="royal-purple">Compassionate Care</span>
                </h1>
                <p className="text-xl text-medium-gray leading-relaxed">
                  Providing quality in-home support services for individuals with intellectual and developmental disabilities, 
                  helping them achieve independence and live fulfilling lives in their communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-royal-purple text-white hover:bg-purple-700 px-8 py-4">
                    Explore Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4">
                    Ask Questions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/nathan-anderson-GM5Yn5XRVqA-unsplash.jpg"
                alt="Happy family with individual with developmental disabilities showing love and support"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-royal-purple text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Guided by compassion and expertise, we create pathways to independence and meaningful lives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-royal-purple rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">Our Mission</h3>
              <p className="text-medium-gray leading-relaxed mb-6">
                To foster independence and advocate for the rights and needs of those we serve. 
                We create a supportive and inclusive community where individuals with disabilities 
                can thrive, connect, and achieve their goals.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-lavender-purple rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">Our Vision</h3>
              <p className="text-medium-gray leading-relaxed mb-6">
                To be a beacon of hope and excellence in the lives of individuals with intellectual 
                and developmental disabilities. We envision a world where every person is valued, 
                respected, and given the opportunity to flourish.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray mb-4">Our Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-royal-purple rounded"></div>
                </div>
                <h3 className="font-semibold text-dark-gray">{service}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-royal-purple text-white hover:bg-purple-700 px-8 py-4">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray">What Inspired Us?</h2>
              <div className="space-y-4 text-medium-gray leading-relaxed">
                <p>
                  For over twenty years, we have had the privilege of supporting individuals with a range 
                  of developmental disabilities in various roles. Our dedication to providing high-quality 
                  care, empowering individuals, and advocating for their rights and needs has been the 
                  foundation of our careers.
                </p>
                <p>
                  Inspired by this commitment, we founded Noah's Arc Care, LLC, 
                  to continue our mission of enhancing lives and fostering independence.
                </p>
              </div>
              <Link href="/about">
                <Button className="bg-royal-purple text-white hover:bg-purple-700">
                  Read Our Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/pexels-cliff-booth-4058053.jpg"
                alt="Professional caregiver providing compassionate support in a comfortable environment"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-purple-100 text-lg leading-relaxed mb-8">
                At Noah's Arc Care, we believe that exceptional care comes from understanding, 
                experience, and genuine commitment to each individual's success and well-being.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0" />
                  <span className="text-purple-100">Licensed and certified care provider in Tennessee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0" />
                  <span className="text-purple-100">Over 20 years of combined experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0" />
                  <span className="text-purple-100">Specialized training in developmental disabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0" />
                  <span className="text-purple-100">Strong community partnerships and referral network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0" />
                  <span className="text-purple-100">Commitment to ongoing professional development</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/pexels-shkrabaanthony-6281432.jpg"
                alt="Professional care team member working with confidence and dedication"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Ready to learn more about our services? We're here to answer your questions and help you get started.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-12 w-12 text-purple-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-purple-100">(615) 782-1842</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-purple-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-purple-100">bneway@noahsarccare.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-purple-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nashville Office</h3>
              <p className="text-purple-100">Suite D-106, 2201 Murfreesboro Pike</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-purple-600 bg-white hover:bg-purple-50 px-8 py-4 font-semibold">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
