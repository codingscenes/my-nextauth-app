"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold">My Next App</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className={`text-white ${path.startsWith("/") ? "underline font-bold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-white ${path.startsWith("/about") ? "underline font-bold" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`text-white ${path.startsWith("/contact") ? "underline font-bold" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}