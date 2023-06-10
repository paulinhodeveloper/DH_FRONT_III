import InputComponent from "./components/InputComponent"
import FormComponent from "./components/FormComponent"
import './App.css'
import HelloComponent from "./components/HelloComponent"



function App() {
  

  return (
    <>
    <HelloComponent 
    username ="Darlei"/>
    {/* <FormComponent>
    <InputComponent
      label="Nome"
      type="text" 
      />
      <InputComponent
      label="Idade"
      type="number" 
      />
      <InputComponent
      label="E-mail"
      type="email" 
      />
      </FormComponent> */}
    </>
  )
}

export default App
