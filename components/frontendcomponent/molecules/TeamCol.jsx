import Image from "next/image";
import "@/uploads/styles/component/component.css";
import { useModal } from "@/hooks/useModal";

export default function TeamCol({ data, onClick }) {
  const { openModal } = useModal();

  if (!data) return null;

  const { imgSrc, name, role } = data;
  return (
    <div className="team_col item-md" onClick={() => openModal("team")}>
      <figure>
        <Image
          src={imgSrc}
          width={280}
          height={350}
          alt={`${name}'s Image`}
        ></Image>
      </figure>
      <figcaption>
        <h6>{name}</h6>
        <p>{role}</p>
      </figcaption>
    </div>
  );
}
