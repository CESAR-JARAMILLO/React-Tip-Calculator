function Button(props) {
  const buttonClassName = props.isSelected ? "selected" : "";

  return (
    <button className={`tip-button ${buttonClassName}`} onClick={props.handleClick}>{props.children}</button>
  )
}

export default Button