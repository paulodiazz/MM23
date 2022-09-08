const Button = (props) => (
    <button className="text-uppercase align-middle blue-button gradient-button-3" onClick={props.onClick}>{props.text}</button>
)
export default Button;