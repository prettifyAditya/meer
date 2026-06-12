import Image from "next/image";
import Link from "next/link";

const ResourceCard = ({ category, image, title, description, date }) => {
  return (
    <div className="resource-card">
      <figure>
        <Link href="">
          <Image src={image} alt={title} width={1920} height={1080} />
        </Link>
      </figure>
      <figcaption>
        <h4>{title}</h4>
        <p className="desc">{description}</p>
        <div className="info">
          <p className="date">{date}</p>
          <span className="tag">{category}</span>
          <a href="" className="btn btn-outline-primary square">
            Read More
          </a>
        </div>
      </figcaption>
    </div>
  );
};

export default ResourceCard;
