import Link from "next/link";
import Button from "../atoms/Button";
import Image from "next/image";
import "@/uploads/styles/header/header.css"

Link
const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="header-container">
          <div className="colA">
            <Link href="/" className="logo">
                <Image src="/assets/logo.svg" width={100} height={40} alt="Meer"/>
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
                <Button variant="btn-primary" href="/donate">Donate Now</Button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
