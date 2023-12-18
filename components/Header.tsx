import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <div>NavItems</div>
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <div>MobileNav</div>
          </SignedIn>
          <SignedOut>
            <button className="rounded-full">
              <Link href="/sign-in">Login</Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
