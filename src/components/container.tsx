import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto max-w-2xl px-8 mb-32">{children}</div>
}

export default Container
