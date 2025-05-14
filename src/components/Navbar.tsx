"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, MenuIcon, UserIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
         <DumbbellIcon className="w-9 h-9 text-primary" />
          </div>
          <span className="text-3xl font-bold font-mono">
            Iron<span className="text-primary">Mentor</span>.ai
          </span>
        </Link>

        {/* Hamburger Menu - Only on Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>

        {/* NAVIGATION - Desktop */}
        <nav className="hidden md:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>

              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>

      {/* NAVIGATION - Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <HomeIcon size={16} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/generate-program"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <DumbbellIcon size={16} />
                  <span>Generate</span>
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <UserIcon size={16} />
                  <span>Profile</span>
                </Link>

                <Link
                  href="/generate-program"
                  className="text-primary border border-primary/50 rounded px-3 py-1 text-sm text-center"
                >
                  Get Started
                </Link>

                <UserButton />
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    variant={"outline"}
                    className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                  >
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
export default Navbar;
