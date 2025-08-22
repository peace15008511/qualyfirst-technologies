import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-[#0056A6] text-white text-center">
      <h3 className="text-3xl font-semibold mb-4">
        Ready to Build Flawless Software?
      </h3>
      <p className="mb-6">Let&apos;s talk about your project today.</p>
      <Link
        href="/contact"
        className="inline-block bg-white text-[#0056A6] px-6 py-3 rounded-xl hover:bg-[#FF9800] hover:text-white transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
