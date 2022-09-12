const Button = (props) => (
    <button className="text-uppercase blue-button gradient-button-3" onClick={props.onClick}>{props.text}</button>
)
export default Button;