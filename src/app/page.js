import ActionSection from "@/components/homepage/Action";
import Banner from "@/components/homepage/Banner";
import Features from "@/components/homepage/Features";
import Testimonials from "@/components/homepage/Testimonal";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <ActionSection />
      <Testimonials />
    </div>
  )
}
