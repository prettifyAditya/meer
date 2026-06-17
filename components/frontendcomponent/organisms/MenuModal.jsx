"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import CloseModal from "../atoms/CloseModal";

const MenuModal = () => {
  const { isModal } = useSelector((state) => state.modal);

  return (
    <div className={`menu-modal model ${isModal === "menu" ? "is-open" : ""}`}>
      <CloseModal />
      <div className="model-body">
        <Image
          className="icon"
          src="/image/icon.svg"
          alt="icon"
          width={20}
          height={42}
        />

        <ul className="nav">
          {navigation?.map(({ label, path }, i) => {
            return (
              <li key={i}>
                <Link href={path}>{label}</Link>
              </li>
            );
          })}
        </ul>

        <div className="contact">
          <ul className="social">
            {social?.map(({ icon, path }, i) => {
              return (
                <li key={i}>
                  <Link href={path}>
                    <Image src={icon} alt="icon" width={20} height={20} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href="" className="btn btn-primary">
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;

const navigation = [
  {
    label: "Our Story",
    path: "#",
  },
  {
    label: "Our Impact",
    path: "#",
  },
  {
    label: "Research",
    path: "#",
  },
  {
    label: "Events",
    path: "#",
  },
  {
    label: "Knowledge Hub",
    path: "#",
  },
  {
    label: "Connect",
    path: "#",
  },
];

const social = [
  {
    icon: "/icon/facebook-blue.svg",
    path: "#",
  },
  {
    icon: "/icon/twitter-blue.svg",
    path: "#",
  },
  {
    icon: "/icon/instagram-blue.svg",
    path: "#",
  },
  {
    icon: "/icon/linkedin-blue.svg",
    path: "#",
  },
];
