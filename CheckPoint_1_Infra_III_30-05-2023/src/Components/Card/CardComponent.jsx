import style from "./CardComponent.module.css";

function CardComponent(props) {

    const imgUrlDefault = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png";

    return (
        <div className={style.div}>
            <h2 className={style.title}>{props.title ?? "Loading..."}</h2>
            <img className={style.img} src={props.imgUrl ?? imgUrlDefault} alt="img" />
        </div>
    );
}

export default CardComponent;