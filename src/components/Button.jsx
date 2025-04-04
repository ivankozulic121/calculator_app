

const Button = ({text, className, fontStyle, bgColor, textColor, bShadow, handleClick}) => {
    return (
      <button style={{fontSize:fontStyle}} className={`w-full h-14 rounded-xl text-3xl ${className}`} onClick={handleClick} value={text}>{text}</button>
    )
  }

  export default Button;