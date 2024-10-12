import Live from "@/interfaces/live"
import LiveDetail from "@/interfaces/liveDetail"
import { ChangeEventHandler } from "react"

type Props = {
  lives: Live[]
  onChange: ChangeEventHandler<HTMLInputElement>
}

const getDateString = (date: string): string => {
  return date.replaceAll("-", "/")
}

const getLabel = (live: Live, stage: LiveDetail, i: number): string => {
  const no = stage.no || (live.details.length > 1 ? "Day" + (i + 1) : "")
  const info = stage.info ? ` (${stage.info})` : ""
  const date = getDateString(stage.date)
  return `${live.title} ${no}${info} (${date})`
}

const generateCheckbox = (live: Live, onChange: ChangeEventHandler) => {
  return live.details.map((stage, i) => {
    const label = getLabel(live, stage, i)
    return (
      <label key={label} className={`py-2 ${stage.disabled ? "text-neutral-400" : ""}`}>
        <input
          type="checkbox"
          value={Number(stage.mamono)}
          className="mr-2"
          onChange={onChange}
          disabled={stage.disabled}
        />
        {label}
      </label>
    )})
}

const LiveList = ({ lives, onChange }: Props) => {
  return (
    <div className="flex flex-col mb-8">
      {lives.map(live => generateCheckbox(live, onChange))}
    </div>
  )
}

export default LiveList
