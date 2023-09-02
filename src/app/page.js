import ActionSection from "@/components/homepage/Action";
import Banner from "@/components/homepage/Banner";
import ContactUs from "@/components/homepage/Contact";
import Features from "@/components/homepage/Features";
import Testimonials from "@/components/homepage/Testimonal";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <ActionSection />
      <Testimonials />
      <ContactUs />
    </div>
  )
}
