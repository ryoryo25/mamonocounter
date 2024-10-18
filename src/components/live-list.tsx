import Live from "@/interfaces/live"
import LiveDetail from "@/interfaces/liveDetail"
import { ChangeEventHandler } from "react"

type Props = {
  lives: Live[]
  onChange: ChangeEventHandler<HTMLInputElement>
}

interface FlattenedLive extends LiveDetail {
  title: string
}

const getDateString = (date: string): string => {
  return date.replaceAll("-", "/")
}

const getLabel = (live: FlattenedLive): string => {
  const no = live.no || ""
  const info = live.info ? ` (${live.info})` : ""
  const date = getDateString(live.date)
  return `${live.title} ${no}${info} (${date})`
}

const generateCheckbox = (live: FlattenedLive, onChange: ChangeEventHandler) => {
  const label = getLabel(live)
  return (
    <label key={label} className={`py-2 ${live.disabled ? "text-neutral-400" : ""}`}>
      <input
        type="checkbox"
        value={Number(live.mamono)}
        className="mr-2"
        onChange={onChange}
        disabled={live.disabled}
      />
      {label}
    </label>
  )
}

const flattenLives = (lives: Live[]): FlattenedLive[] => {
  return lives.flatMap(live => {
    return live.details.map((stage, i) => {
      if (live.details.length > 1 && !stage.no) {
        stage.no = `Day${i+1}`
      }
      return { title: live.title, ...stage }
    })
  }).sort((a, b) => {
    if (a.date > b.date) {
      return 1
    } else if (a.date < b.date) {
      return -1
    } else {
      return 0
    }
  })
}

const LiveList = ({ lives, onChange }: Props) => {
  const flattenedLives = flattenLives(lives)
  return (
    <div className="flex flex-col mb-8">
      {flattenedLives.map(live => generateCheckbox(live, onChange))}
    </div>
  )
}

export default LiveList
