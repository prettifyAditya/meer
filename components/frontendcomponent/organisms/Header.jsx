"use client";
import Link from "next/link";
import Button from "../atoms/Button";
import Image from "next/image";
import "@/uploads/styles/header/header.css";
import { useState, useEffect } from "react";
import { useModal } from "@/hooks/useModal";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderBlue, setIsHeaderBlue] = useState(false);
  const { openModal } = useModal();
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    pathName === "/resources" || pathName === "/why-support-meer"
      ? setIsHeaderBlue(true)
      : setIsHeaderBlue(false);
  }, [pathName]);

  return (
    <header className={isScrolled || isHeaderBlue ? "header-fixed" : ""}>
      <div className="container-fluid">
        <div className="header-container">
          <div className="colA">
            <Link href="/" className="logo">
              <Image src="/image/logo.svg" width={100} height={40} alt="Meer" />
            </Link>
          </div>

          <div className="colB">
            <ul className="nav-items">
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
              <li>
                <Link href="/our-impact">Our Impact</Link>
              </li>
              <li>
                <Link href="/research">Research</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/connect">Connect</Link>
              </li>
            </ul>
            <div>
              <Button onClick={() => openModal("menu")} variant="btn-primary">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
