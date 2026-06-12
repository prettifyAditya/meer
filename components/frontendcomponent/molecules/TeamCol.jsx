import Image from "next/image";

export default function TeamCol({ imgSrc = "", name = "", role = "" }) {
  return (
    <div className="team_col item-md">
      <figure>
        <Image src={imgSrc}></Image>
      </figure>
      <figcaption>
        <h6>{name}</h6>
        <p>{role}</p>
      </figcaption>
    </div>
  );
}
