function InputComponent(props){
    return(
    <>
        <label htmlFor={props.label}>{props.label}:</label>
        <input type={props.type} />
        <br/>
        <br/>
    </>
    )
}
export default InputComponent;