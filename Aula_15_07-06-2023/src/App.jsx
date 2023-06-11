import axios from "axios";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import './App.css';

import ProductList from "./ProductList";
import Input from "./Input";

function App() {

  const [products, setProducts] = useState([]);
  const [productsIsLoading, setProductsIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalProductId, setModalProductId] = useState(null);
  const [productModal, setProductModal] = useState({});

  const openModal = (id) => {
    setModalProductId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalProductId(null);
  };

  useEffect(
    () => {
      console.log("<App /> Foi Montado");
      getProducts();
    }, []
  )

  useEffect(
    () => {
      getProductModal();
    }, [modalIsOpen])

  async function getProductModal() {
    if (modalIsOpen && modalProductId) {
      const response = await axios.get(`api/products/${modalProductId}`);
      const productModal = response.data.product;

      setTitle(productModal.title);
      setDescription(productModal.description);
      setCategory(productModal.category);
      setImage(productModal.image);
      setStock(productModal.stock);
      setPrice(productModal.price);
      setFormIsValid(true);
    }

  }

  async function getProducts() {

    setProductsIsLoading(true);

    try {

      const response = await axios.get("api/products");
      const products = response.data.products;

      setProductsIsLoading(false);

      if (products.length > 0) {
        setProducts(products);
      } else {
        setProducts([]);
      }

    } catch (error) {
      setProductsIsLoading(false);
      alert(`Ocorreu algum erro ao buscar a lista de produtos - Erro: ${error}`)
    }

  }

  function formValidator() {

    if (title && description && price && stock && category && image) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }

  async function createProduct(event) {

    event.preventDefault();
    console.log("clicou no botão de cadastar");

    const product = {
      title: title,
      description: description,
      price: price,
      stock: stock,
      category: category,
      image: image
    }
    const response = await axios.post("api/products", product);
    getProducts();

  }
  async function handleDeleteButton(id) {
    try {
      const response = await axios.delete(`api/products/${id}`);
      getProducts();
    } catch (error) {
      console.error(error);
    }
  }

  async function editProduct() {
    const updatedProduct = {
      title: title,
      description: description,
      price: price,
      stock: stock,
      category: category,
      image: image
    }
    const response = await axios.put(`api/products/${modalProductId}`, updatedProduct); 
    resetProductStates();
    closeModal();
    getProducts();

  }
  function resetProductStates(){
    setTitle("");
    setDescription("");
    setCategory("");
    setImage("");
    setStock("");
    setPrice("");
    setFormIsValid(false);
  }

  function cancelEdit(){
    resetProductStates();
    closeModal();
  }
  return (
    <>

      <h2>Cadastre seu produto</h2>

      <form>

        <Input
          title="Título"
          type="text"
          value={title}
          fnOnChange={(e) => setTitle(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Descrição"
          type="text"
          value={description}
          fnOnChange={(e) => setDescription(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Preço"
          type="text"
          value={price}
          fnOnChange={(e) => setPrice(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Estoque"
          type="text"
          value={stock}
          fnOnChange={(e) => setStock(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Categoria"
          type="text"
          value={category}
          fnOnChange={(e) => setCategory(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="IMG Url"
          type="text"
          value={image}
          fnOnChange={(e) => setImage(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <button
          disabled={!formIsValid}
          onClick={createProduct}>
          Cadastrar
        </button>

      </form>

      {/* Lista de produtos */}
      <h2>Lista de produtos</h2>

      <ProductList
        productList={products}
        productsIsLoading={productsIsLoading}
        fnOnClick={handleDeleteButton}
        fnOnClickModal={openModal}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo de Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: "400px",
            margin: "auto",
            padding: "20px",
            border: "none",
            borderRadius: "8px",
            background: "#fff",
          },
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Editar Produto</h2>
        <form>

          <Input
            title="Título"
            type="text"
            value={title}
            fnOnChange={(e) => setTitle(e.target.value)}
            fnOnKeyUp={formValidator}
          />

          <br />

          <Input
            title="Descrição"
            type="text"
            value={description}
            fnOnChange={(e) => setDescription(e.target.value)}
            fnOnKeyUp={formValidator}
          />

          <br />

          <Input
            title="Preço"
            type="text"
            value={price}
            fnOnChange={(e) => setPrice(e.target.value)}
            fnOnKeyUp={formValidator}
          />

          <br />

          <Input
            title="Estoque"
            type="text"
            value={stock}
            fnOnChange={(e) => setStock(e.target.value)}
            fnOnKeyUp={formValidator}
          />

          <br />

          <Input
            title="Categoria"
            type="text"
            value={category}
            fnOnChange={(e) => setCategory(e.target.value)}
            fnOnKeyUp={formValidator}
          />

          <br />

          <Input
            title="IMG Url"
            type="text"
            value={image}
            fnOnChange={(e) => setImage(e.target.value)}
            fnOnKeyUp={formValidator}
          />

        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
    <button onClick={cancelEdit} style={{ marginRight: "10px" }}>
      Cancelar
    </button>
    <button disabled={!formIsValid} onClick={editProduct}>
      Salvar
    </button>
  </div>
      </Modal>

    </>
  );
}

export default App;
