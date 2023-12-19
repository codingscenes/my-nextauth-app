"use client";
import { UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-white text-2xl font-bold">My Next App</h1>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/profile"
              className={`text-white ${path.startsWith("/profile") ? "underline font-bold" : ""}`}
            >
              Profile
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
        <div className="flex">
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  );
}
