import { Heart, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Our Mission & Vision</h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Guided by compassion and expertise, we create pathways to independence and meaningful lives.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-trust-blue rounded-xl flex items-center justify-center mb-6">
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
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-hope-green rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-dark-gray mb-4">Our Vision</h3>
            <p className="text-medium-gray leading-relaxed mb-6">
              To be a beacon of hope and excellence in the lives of individuals with intellectual 
              and developmental disabilities.
            </p>
            <p className="text-medium-gray leading-relaxed">
              We envision a world where every person, regardless of their abilities, is valued, 
              respected, and given the opportunity to flourish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
