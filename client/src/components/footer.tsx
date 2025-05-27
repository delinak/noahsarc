import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-trust-blue">Noah's Arc Care</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering individuals with intellectual and developmental disabilities 
              through personalized and compassionate care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Supportive Living
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Respite Care
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Community Transportation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Personal Assistance
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("register")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Register
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/admin" className="text-gray-300 hover:text-white transition-colors">
                  Admin Panel
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-trust-blue" />
                <span>(316) 530-1515</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-trust-blue" />
                <span>info@noahsarccare.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-trust-blue mt-1" />
                <span>Wichita, Kansas<br />Serving Kansas Communities</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Noah's Arc Care, LLC. All rights reserved. | Licensed Care Provider</p>
        </div>
      </div>
    </footer>
  );
}
