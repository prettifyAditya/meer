
import Image from "next/image";

const MissingPiece = ({data}) => {

    if (!data) return null;
    const { videoSrc, heading, para, title } = data;
    return (
        <div className="missingPiece">
            <div className="container">
                <div className="grid">
                    <div className="heading">
                        <Image src="assets/image/meerShape.svg" alt="Meer" width={20} height={20}/>
                        <h2>{heading}</h2>
                    </div>
                   <div className="earth">
                        <video
                            src={videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                    <div className="content">
                        {
                          para.length > 0 &&  para.map((i) =>( <p key={i.id}>{i.text}</p>))
                        }
                        <h6>{title}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissingPiece;