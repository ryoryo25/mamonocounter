import { ButtonHTMLAttributes } from "react"

const Button = ({ className, children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`border-neutral-500 border-2 border-spacing-2 rounded ${className}`} {...props} >
      {children}
    </button>
  )
}

export default Button
