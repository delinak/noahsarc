export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
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
                We have developed a profound understanding of each person's unique character, dreams, 
                challenges, and potential. Inspired by this commitment, we founded Noah's Arc Care, LLC, 
                to continue our mission of enhancing lives and fostering independence.
              </p>
            </div>
            <div className="flex items-center space-x-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-blue">20+</div>
                <div className="text-sm text-medium-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hope-green">100+</div>
                <div className="text-sm text-medium-gray">Lives Touched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-amber">24/7</div>
                <div className="text-sm text-medium-gray">Dedicated Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional caregivers working with individuals with disabilities in modern care facility"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
