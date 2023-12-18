import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

import Link from "next/link";

import { Suspense } from "react";
import SearchInput from "../search-input";
import Profile from "./profile";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          NotesApp
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Profile />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
