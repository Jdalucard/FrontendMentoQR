import IMAGEN from "../assets/image-qr-code.png";
import "./Styles.css";

const CardQr = () => {
  return (
    <>
      <article className="Contenedor">
        <div className="ContenedorCard">
          <div className="CardImage">
            <img src={IMAGEN} alt="" />
          </div>
          <div className="texto">
            <h3>Improve your fronted-end skills by building projects</h3>
            <p>
              Scan the QR code o visit Fronted Montar to visit Frontend Mentor
              and take your coding skills to the next level
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardQr;
