import { useState } from 'react';
import { QrCode, Github, Twitter, Mail, User, MessageSquare, Instagram, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Privacy Policy Modal Component
const PrivacyPolicyModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div
      className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    ></div>
    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-gray-800 transform transition-all duration-500 animate-slide-up">
      <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Privacy Policy</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>
      <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-80px)] prose dark:prose-invert text-gray-600 dark:text-gray-300">
        <p>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
<p><strong>Information We Collect:</strong> We collect non-personal data such as usage statistics to improve our services. We do not store any personal identifiable information (PII) without your explicit consent.</p>
<p><strong>How We Use Your Information:</strong> The data we collect is used solely to enhance the functionality and performance of Qliky, to analyze user behavior, and to fix bugs.</p>
<p><strong>Data Security:</strong> We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers with restricted access.</p>
<p><strong>Third-Party Disclosure:</strong> We do not sell, trade, or otherwise transfer your personal information to outside parties.</p>
<p>By using our site, you consent to our privacy policy.</p>
      </div>
    </div>
  </div>
);

// Terms of Service Modal Component
const TermsOfServiceModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div
      className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    ></div>
    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-gray-800 transform transition-all duration-500 animate-slide-up">
      <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Terms of Service</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>
      <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-80px)] prose dark:prose-invert text-gray-600 dark:text-gray-300">
        <p>By using Qliky, you agree to our terms. Our service is provided "as is," and we're not liable for any issues that may arise from its use. All our content and software are our property. We may update these terms in the future, and your continued use means you accept the changes. In short, please use Qliky responsibly! 🤝</p>
      </div>
    </div>
  </div>
);

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-br from-primary-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 lg:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-stretch">
            {/* Left: Branding and Links */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <QrCode className="h-6 w-6 text-primary-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Qliky</span>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  Qliky is a fast and secure QR Code Generator that helps you create and manage QR codes effortlessly. Trusted by hundreds of users.
                </p>
                {/* GIF -pseudoclan */}
                <div className="mb-6 w-full flex justify-start">
                  <img
                    src="https://res.cloudinary.com/dq3rul8yt/image/upload/v1754234562/QLICKY_jdd5km.gif"
                    alt="Animated Banner of Our brand"
                    className="w-48 h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="flex items-center space-x-5 mb-6">
                  <a href="https://www.instagram.com/pseudoclan?igsh=MWo0dTl2bjV0d2R5OA==" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://x.com/pseudo_clan" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="Twitter">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
                  <button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-primary-500 transition-colors">Privacy Policy</button>
                  <button onClick={() => setShowTermsOfService(true)} className="hover:text-primary-500 transition-colors">Terms of Service</button>
                  <a href="https://x.com/pseudo_clan" className="hover:text-primary-500 transition-colors">Contact</a>
                </div>
              </div>
            </div>
            {/* Right: Inline Contact Form */}
            <div className="w-full max-w-xl lg:w-[600px] ml-auto border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg bg-white dark:bg-gray-900 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Contact Us</h3>
              <form className="space-y-5">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="footer-name">Name</label>
                  <span className="absolute left-3 top-9 text-gray-400"><User size={18} /></span>
                  <input
                    id="footer-name"
                    type="text"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-800 dark:text-white transition"
                    placeholder="Your name"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="footer-email">Email</label>
                  <span className="absolute left-3 top-9 text-gray-400"><Mail size={18} /></span>
                  <input
                    id="footer-email"
                    type="email"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-800 dark:text-white transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="footer-message">Message</label>
                  <span className="absolute left-3 top-9 text-gray-400"><MessageSquare size={18} /></span>
                  <textarea
                    id="footer-message"
                    rows={4}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-800 dark:text-white transition resize-none"
                    placeholder="Write your message here"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 flex items-center justify-center gap-2"
                >
                  <Mail size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Bottom */}
          <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} <span className="font-semibold text-primary-500">Qliky</span>. All rights reserved.
          </div>
        </div>
      </footer>
      {showPrivacyPolicy && <PrivacyPolicyModal onClose={() => setShowPrivacyPolicy(false)} />}
      {showTermsOfService && <TermsOfServiceModal onClose={() => setShowTermsOfService(false)} />}
    </>
  );
};

export default Footer;