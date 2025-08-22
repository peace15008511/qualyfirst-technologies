import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0056A6] text-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h4 className="text-white text-2xl font-bold mb-4">QUALYFIRST</h4>
          <p className="text-gray-200 leading-relaxed">
            We specialize in world-class Quality Assurance solutions to help
            businesses launch bug-free, scalable, and reliable applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services"
                className="hover:text-[#FF9800] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#FF9800] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#FF9800] transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-[#FF9800] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-200">
            123 Main Street, Pretoria, South Africa
          </p>
          <p className="text-gray-200 mt-2">Email: info@qualyfirst.com</p>
          <p className="text-gray-200 mt-1">Phone: +27 12 345 6789</p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF9800] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF9800] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF9800] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300/30 pt-4 text-center text-gray-100 text-sm">
        &copy; {new Date().getFullYear()} QUALYFIRST TECHNOLOGIES. All rights
        reserved.
      </div>
    </footer>
  );
}
