import Image from "next/image";
import "@/uploads/styles/component/component.css";

export default function TeamCol({ data, onClick }) {
  if (!data) return null;

  const { imgSrc, name, role } = data;
  return (
    <div className="team_col item-md" onClick={onClick}>
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
