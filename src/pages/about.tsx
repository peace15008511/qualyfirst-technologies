import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageStarterSection from "@/components/PageStarterSection";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <PageStarterSection
        title="About Us"
        backgroundImage="/images/carousel_bg_4.jpg"
      />

      <main className="min-h-screen bg-white text-black">
        {/* Content */}
        <section className="py-16 px-8 max-w-5xl mx-auto space-y-12">
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#0056A6] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We are passionate about{" "}
                <span className="font-semibold text-[#FF9800]">
                  quality, reliability, and innovation
                </span>
                , and we bring these values into every project we undertake.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/mission.jpg"
                alt="Our mission"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Expertise */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:flex-row-reverse">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#0056A6] mb-4">
                Our Expertise
              </h2>
              <p className="text-gray-700 leading-relaxed">
                With a strong foundation in Quality Assurance Engineering, we
                serve clients across sectors including{" "}
                <span className="font-semibold text-[#FF9800]">
                  Banking, Financial Services, and Telecommunications
                </span>
                .
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/expertise.jpg"
                alt="Our expertise"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Approach */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#0056A6] mb-4">
                Our Approach
              </h2>
              <p className="text-gray-700 leading-relaxed">
                What sets us apart is our{" "}
                <span className="font-semibold text-[#FF9800]">
                  client-centric approach
                </span>
                . We adapt to your preferred methodologies—Agile, Scrum, or
                Waterfall—and integrate seamlessly into your development
                lifecycle to ensure every product is market-ready.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/approach.jpg"
                alt="Our approach"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Final Note */}
          <p className="text-gray-700 leading-relaxed font-semibold text-center text-lg">
            At QUALYFIRST TECHNOLOGIES, we don&apos;t just test software, we
            build confidence in your product. Our goal is to ensure that your
            applications are robust, user-friendly, and market-ready from day
            one.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
