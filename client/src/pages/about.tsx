import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Heart, Users, Award, Target, CheckCircle } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide care with empathy, respect, and understanding, recognizing each person's unique dignity and worth."
    },
    {
      icon: Users,
      title: "Person-Centered Approach",
      description: "Every individual is at the center of their care plan, with services tailored to their specific needs and goals."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We maintain the highest standards of care through continuous training, best practices, and quality improvement."
    },
    {
      icon: Target,
      title: "Independence Focus",
      description: "Our goal is to maximize each person's independence and help them achieve their fullest potential in the community."
    }
  ];

  const achievements = [
    "Licensed and certified care provider in Kansas",
    "Over 20 years of combined experience",
    "Specialized training in developmental disabilities",
    "Strong community partnerships and referral network",
    "Commitment to ongoing professional development"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
              About <span className="royal-purple">Noah's Arc Care</span>
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Dedicated to empowering individuals with intellectual and developmental disabilities 
              through personalized, compassionate care that fosters independence and enhances quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray">Our Story</h2>
              <div className="space-y-4 text-medium-gray leading-relaxed">
                <p>
                  For over twenty years, we have had the privilege of supporting individuals with a range 
                  of developmental disabilities in various roles. Our dedication to providing high-quality 
                  care, empowering individuals, and advocating for their rights and needs has been the 
                  foundation of our careers.
                </p>
                <p>
                  We have developed a profound understanding of each person's unique character, dreams, 
                  challenges, and potential. This deep experience has taught us that with the right support, 
                  every individual can achieve greater independence and live a fulfilling life in their community.
                </p>
                <p>
                  Inspired by this commitment and driven by our passion for making a difference, we founded 
                  Noah's Arc Care, LLC, to continue our mission of enhancing lives and fostering independence 
                  through comprehensive, person-centered care services.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/priscilla-du-preez-aPa843frIzI-unsplash.jpg"
                alt="Caring hands providing support and connection in professional care setting"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-royal-purple text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years of Dedicated Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-royal-purple rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">Our Mission</h3>
              <p className="text-medium-gray leading-relaxed mb-6">
                To foster independence and advocate for the rights and needs of those we serve. 
                We create a supportive and inclusive community where individuals with disabilities 
                can thrive, connect, and achieve their goals.
              </p>
              <p className="text-medium-gray leading-relaxed">
                Together, we work to enhance lives and promote a brighter future for all.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-lavender-purple rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">Our Vision</h3>
              <p className="text-medium-gray leading-relaxed mb-6">
                To be a beacon of hope and excellence in the lives of individuals with intellectual 
                and developmental disabilities.
              </p>
              <p className="text-medium-gray leading-relaxed">
                We envision a world where every person, regardless of their abilities, is valued, 
                respected, and given the opportunity to flourish in their community with dignity and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Our Core Values</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence in care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-royal-purple transition-colors">
                    <IconComponent className="h-10 w-10 royal-purple group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-3">{value.title}</h3>
                  <p className="text-medium-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-purple-100 text-lg leading-relaxed mb-8">
                At Noah's Arc Care, we believe that exceptional care comes from understanding, 
                experience, and genuine commitment to each individual's success and well-being.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0" />
                    <span className="text-purple-100">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/pexels-shkrabaanthony-6281432.jpg"
                alt="Professional care team member working with confidence and dedication"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Our Commitment</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Every member of our team shares a passion for empowering individuals and creating positive change in our community.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-8 md:p-12 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold royal-purple mb-2">24/7</div>
                <div className="text-medium-gray">Dedicated Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold royal-purple mb-2">100+</div>
                <div className="text-medium-gray">Lives Touched</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold royal-purple mb-2">20+</div>
                <div className="text-medium-gray">Years Experience</div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-medium-gray text-lg leading-relaxed max-w-3xl mx-auto">
                We are proud to serve the Kansas community and look forward to continuing our mission 
                of enhancing lives and fostering independence for many years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}