import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"
import Workflow from "./components/Workflow"

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonial />
      </div>
    </>
  )
}

export default App