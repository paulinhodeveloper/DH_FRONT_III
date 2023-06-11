import style from "./ProductList.module.css";
import React, { useEffect } from "react";

function ProductList({ productList, productsIsLoading, fnOnClick, fnOnClickModal }) {
    useEffect(() => {
        console.log("<ProductList /> Foi Montado");
    }, []);

    const renderProductList = () => {
        if (productsIsLoading) {
            return <h2>Carregando...</h2>;
        }

        if (productList.length === 0) {
            return <h2>A lista de produtos se encontra vazia</h2>;
        }

        return productList.map((product) => (
            <div className={style.div} key={product.id}>
                <div className={style.title}>{product.title}</div>
                <div className={style.description}>{product.description}</div>
                <div className={style.details}>Preço: {product.price}</div>
                <div className={style.details}>Estoque: {product.stock}</div>
                <div className={style.details}>Categoria: {product.category}</div>
                <div className={style.details}>Código: {product.id}</div>
                <img src={product.image} alt={product.id} className={style.img} />
                <button onClick={() => fnOnClickModal(product.id)}>Editar</button>
                <button onClick={() => fnOnClick(product.id)}>Deletar</button>
            </div>
        ));
    };

    return <React.Fragment>{renderProductList()}</React.Fragment>;
}

export default ProductList;
