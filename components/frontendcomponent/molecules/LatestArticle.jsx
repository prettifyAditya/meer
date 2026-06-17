import "@/uploads/styles/component/component.css";
import Image from "next/image";
import Link from "next/link";

const LatestArticle = ({ data, heading }) => {
  return (
    <div className="latest-article">
      <h3>{heading}</h3>
      <ul>
        {data?.map(({ image, title }, index) => {
          return (
            <li key={index}>
              <Link href="#">
                <figure>
                  <Image src={image} width={1920} height={1080} alt={title} />
                </figure>
                <figcaption>
                  <h4>{title}</h4>
                </figcaption>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LatestArticle;
