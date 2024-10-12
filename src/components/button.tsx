import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, ...props}: Props) => {
  return (
    <button className={`border-neutral-500 border-2 border-spacing-2 rounded ${className}`} {...props} >
      {children}
    </button>
  )
}

export default Button
