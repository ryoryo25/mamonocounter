import { ChangeEvent, useState } from "react"
import LiveList from "./live-list"
import Container from "./container"
import Result from "./result"
import ResultButton from "./result-button"
import lives from "@/resources/lives.json"
import Live from "@/interfaces/live"

const Contents = () => {
  // counter
  const [count, setCount] = useState([0, 0]) // participated, mamono
  // result
  const [result, setResult] = useState(["", ""]) // rank, detail

  const checkboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const value = Number(event.target.value)
    setCount([
      count[0] + (checked ? 1 : -1),
      count[1] + (checked ? value : -value)
    ])
  }

  const mamonoRank = (countParticipated: number, countMamono: number): string => {
    const maxParticipated = (lives as Live[]).map(l => l.details.filter(s => !s.disabled).length)
                                 .reduce((s, e) => s + e, 0)
    if (countParticipated === maxParticipated) {
      return "魔物"
    } else if (countMamono >= 10) {
      return "友達の魔物"
    } else if (5 <= countMamono && countMamono < 10) {
      return "知り合いの魔物"
    } else if (2 <= countMamono && countMamono < 5) {
      return "見たことある魔物"
    } else {
      return "見たことない魔物"
    }
  }

  const calculate = () => {
    const rank = mamonoRank(count[0], count[1])
    const result = [
      `あなたは「${rank}」`,
      `参加した公演数: ${count[0]}<br>参加した見たことない魔物: ${count[1]}`
    ]
    setResult(result)
  }

  return (
    <main className="min-h-screen">
      <Container>
        <LiveList lives={lives} onChange={checkboxChange} />
        <ResultButton onClick={calculate} />
        <Result result={result} />
      </Container>
    </main>
  )
}

export default Contents
