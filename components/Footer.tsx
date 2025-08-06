import React from "react";
import Link from "next/link";
import { Github, Linkedin, Store } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Store className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Tatay Jovy Fishbolan</span>
            </div>
            <p className="text-gray-400 text-sm">
              ang #1 fishball sauce ng Malolos
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/cart"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Cart
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/michaelysmael10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/michael-ysmael-jr-fernandez-0b4318280/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Made with ❤️ by Michael Ysmael Jr. Fernandez
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 tatay jovy fishbolan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
