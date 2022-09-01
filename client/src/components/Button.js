const Button = (props) => (
    <button className="text-uppercase align-middle blue-button" onClick={props.onClick}>{props.text}</button>
)
export default Button;