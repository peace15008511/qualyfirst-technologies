import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>QUALYFIRST | QA & Testing Consulting</title>
        <meta
          name="description"
          content="Helping businesses deliver bug-free, scalable, and reliable software through expert QA and testing consulting."
        />
      </Head>

      <main className="min-h-screen bg-white text-black">
        <Header />
        <HeroSection />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
