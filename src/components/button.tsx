import { ButtonHTMLAttributes } from "react"

const Button = ({ className, children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-neutral-50 active:bg-neutral-200 border-neutral-500 border-2 rounded-full px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
