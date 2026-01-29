import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="container-app py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.webp`}
                alt="Clovis South High School"
                className="h-8 w-auto"
              />
              <div>
                <span className="font-display font-bold text-navy-900">Clovis South</span>
                <span className="font-display font-medium text-rust-500 ml-1">Part-107</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Free study tool for FAA Part 107 Remote Pilot Certification.
              Practice questions, flashcards, and mock tests.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-navy-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-sm text-gray-500 hover:text-navy-700 transition-colors">
                  Study Categories
                </Link>
              </li>
              <li>
                <Link to="/study/practice-test" className="text-sm text-gray-500 hover:text-navy-700 transition-colors">
                  Practice Test
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-gray-500 hover:text-navy-700 transition-colors">
                  Your Progress
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-navy-900 mb-3">Official Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-navy-700 transition-colors inline-flex items-center gap-1"
                >
                  FAA Part 107 Info
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.faa.gov/sites/faa.gov/files/training_testing/testing/supplements/sport_rec_private_akts.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-navy-700 transition-colors inline-flex items-center gap-1"
                >
                  FAA Testing Supplement
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://iacra.faa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-navy-700 transition-colors inline-flex items-center gap-1"
                >
                  IACRA (Apply for Certificate)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Clovis South Part-107. Not affiliated with the FAA.
          </p>
          <p className="text-xs text-gray-400">
            Built for Clovis South High School drone program
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
