import Image from "next/image";
import "@/uploads/styles/component/component.css";
import Button from "../atoms/Button";

export default function StrategyCard({ data, classname = "", btnSrc = "" }) {
  if (!data) return null;

  return (
    <div className={`strategy_col item-md ${classname}`}>
      <figure>
        <Image
          src={data.imgSrc}
          width={577}
          height={397}
          alt="Strategy"
        ></Image>
      </figure>
      <figcaption>
        <div className="content">
          <h5>{data.title}</h5>
          <p>{data.desc}</p>
          {btnSrc && <Button href={btnSrc}>View Details</Button>}
        </div>
      </figcaption>
      {classname.includes("logo_icon") && (
        <Image
          className="logoIcon"
          src="/logo-vector-white.svg"
          width={60}
          height={42}
          alt="Logo Icon"
        ></Image>
      )}
    </div>
  );
}
