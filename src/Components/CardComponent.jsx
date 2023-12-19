import carImg from "../imgs/car.jpg";

const CardComponent = (props) => {
    return (
        <>
            <div className="container-card">
                <img src={carImg} alt="immagine automobile" className="car-img" />
                {props.children}
            </div>
        </>
    );
};
export default CardComponent;
