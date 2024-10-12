import { MouseEventHandler } from "react"
import Button from "./button"

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const ResultButton = ({ onClick }: Props) => {
  return (
    <div className="flex justify-center mb-8">
      <Button onClick={onClick}>
        計算する
      </Button>
    </div>
  )
}

export default ResultButton
