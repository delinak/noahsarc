import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <img 
                  src="/Screenshot 2025-04-16 at 2.50.18 PM.png" 
                  alt="Noah's Arc Care Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold royal-purple cursor-pointer hover:text-purple-700 transition-colors">Noah's Arc Care</h1>
                  <p className="text-xs text-medium-gray font-medium">Empowering Lives Together</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location === item.path 
                        ? 'royal-purple border-b-2 border-purple-600' 
                        : 'text-medium-gray hover:royal-purple'
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
              <Link href="/register">
                <Button className="bg-royal-purple text-white hover:bg-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <button
                        onClick={() => setIsOpen(false)}
                        className={`text-left w-full px-3 py-2 text-sm font-medium transition-colors ${
                          location === item.path 
                            ? 'royal-purple font-semibold' 
                            : 'text-medium-gray hover:royal-purple'
                        }`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  ))}
                  <Link href="/register">
                    <Button
                      onClick={() => setIsOpen(false)}
                      className="bg-royal-purple text-white hover:bg-purple-700 mt-4 w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
