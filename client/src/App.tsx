import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return <Router />;
}

export default App;
