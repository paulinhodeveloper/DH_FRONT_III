function ItemComponent({nome, image, preco}) {
    return(
        <>  
        <img src={image} alt={nome}/>      
        <h2>{nome}</h2>
        <h3>{preco}</h3>
        </>
    )
}
export default ItemComponent;