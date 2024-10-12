"use client"

import { ChangeEvent, useState } from "react";

type Live = {
  title: string
  detail: LiveDetail[]
}

type LiveDetail = {
  date: string
  mamono: boolean
  no?: string
  info?: string
  disabled?: boolean
}

const lives: Live[] = [
  {
    title: "ユニ春！ライブ2024",
    detail: [
      {
        date: "2024-03-09",
        mamono: true
      }
    ]
  },
  {
    title: "齊藤京子卒業コンサート",
    detail: [
      {
        date: "2024-04-05",
        mamono: false
      }
    ]
  },
  {
    title: "5回目のひな誕祭",
    detail: [
      {
        date: "2024-04-06",
        mamono: true
      },
      {
        date: "2024-04-07",
        mamono: true
      }
    ],
  },
  {
    title: "CHAGU CHAGU ROCK FESTIVAL 2024",
    detail: [
      {
        date: "2024-06-08",
        mamono: false
      }
    ]
  },
  {
    title: "11th Single ひなた坂46 LIVE",
    detail: [
      {
        date: "2024-07-03",
        mamono: false
      },
      {
        date: "2024-07-04",
        mamono: false,
        info: "高本彩花卒セレ🍒"
      }
    ]
  },
  {
    title: "J-WAVE presents INSPIRE TOKYO 2024 -Best Music & Market-",
    detail: [
      {
        date: "2024-07-13",
        mamono: false
      }
    ]
  },
  {
    title: "OSAKA GIGANTIC MUSIC FESTIVAL 2024",
    detail: [
      {
        date: "2024-07-20",
        mamono: true
      }
    ]
  },
  {
    title: "TOKYO IDOL FESTIVAL 2024",
    detail: [
      {
        date: "2024-08-04",
        mamono: false
      }
    ]
  },
  {
    title: "日向坂46 「四期生ライブ」",
    detail: [
      {
        date: "2024-08-27",
        mamono: true
      },
      {
        date: "2024-08-28",
        mamono: true
      },
      {
        date: "2024-08-29",
        mamono: true
      }
    ]
  },
  {
    title: "Song for 能登！24時間テレビチャリティーライブ",
    detail: [
      {
        date: "2024-08-31",
        mamono: true
      }
    ]
  },
  {
    title: "ひなたフェス2024",
    detail: [
      {
        date: "2024-09-07",
        mamono: true
      },
      {
        date: "2024-09-08",
        mamono: true
      }
    ]
  },
  {
    title: "日向坂ミュージックパレードLIVE",
    detail: [
      {
        date: "2024-10-05",
        mamono: true,
        no: "Day1夜公演"
      },
      {
        date: "2024-10-06",
        mamono: true,
        no: "Day2昼公演"
      },
      {
        date: "2024-10-06",
        mamono: true,
        no: "Day2夜公演"
      }
    ]
  },
  {
    title: "12th Single ひなた坂46 LIVE",
    detail: [
      {
        date: "2024-10-23",
        mamono: false,
        disabled: true
      },
      {
        date: "2024-10-24",
        mamono: false,
        disabled: true
      }
    ]
  },
  {
    title: "全国ツアー2024 (タイトル未定)",
    detail: [
      {
        date: "2024-11-19",
        mamono: true,
        no: "兵庫公演 Day1",
        disabled: true
      },
      {
        date: "2024-11-20",
        mamono: true,
        no: "兵庫公演 Day2",
        disabled: true
      },
      {
        date: "2024-12-04",
        mamono: true,
        no: "福岡公演 Day1",
        disabled: true
      },
      {
        date: "2024-12-05",
        mamono: true,
        no: "福岡公演 Day2",
        info: "濱岸ひより卒セレ🐤",
        disabled: true
      },
      {
        date: "2024-12-10",
        mamono: true,
        no: "愛知公演 Day1",
        disabled: true
      },
      {
        date: "2024-12-11",
        mamono: true,
        no: "愛知公演 Day2",
        disabled: true
      },
      {
        date: "2024-12-25",
        mamono: true,
        no: "東京公演 Day1 in 東京ドーム🥚",
        info: "加藤史帆卒セレ🐻",
        disabled: true
      },
      {
        date: "2024-12-26",
        mamono: true,
        no: "東京公演 Day2 in 東京ドーム🥚",
        disabled: true
      }
    ]
  }
]

const mamonoRank = (countParticipated: number, countMamono: number): string => {
  const maxParticipated = lives.map(l => l.detail.filter(s => !s.disabled).length)
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

const getDateString = (date: string): string => {
  // const newDate = new Date(date)
  // return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  return date.replaceAll("-", "/")
}

const Home = () => {
  const [countParticipated, setCountParticipated] = useState(0)
  const [countMamono, setCountMamono] = useState(0)

  const checkboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const value = Number(event.target.value)
    setCountParticipated(countParticipated + (checked ? 1 : -1))
    setCountMamono(countMamono + (checked ? value : -value))
  }

  const calculate = () => {
    const resultRank = document.getElementById("resultRank")
    const resultDetail = document.getElementById("resultDetail")
    if (resultRank === null || resultDetail === null) {
      return
    }
    const rank = mamonoRank(countParticipated, countMamono)
    resultRank.innerHTML = `あなたは「${rank}」`
    resultDetail.innerHTML = `参加した公演数: ${countParticipated}<br>参加した見たことない魔物: ${countMamono}`
  }

  return (
    <main className="min-h-screen mt-20">
      <div className="mx-auto max-w-2xl px-8 mb-32">
        <h1 className="text-3xl font-bold mb-10 flex justify-center">見たことない魔物カウンター</h1>
        <div className="flex flex-col gap-4 mb-8">
          {lives.map(live => {
            return live.detail.map((stage, i) => {
              const no = stage.no ? stage.no : (live.detail.length > 1 ? "Day" + (i + 1) : "")
              const info = stage.info ? ` (${stage.info})` : ""
              const datestr = getDateString(stage.date)
              const label = `${live.title} ${no}${info} (${datestr})`
              return (
                <label key={label} className={stage.disabled ? "text-neutral-400" : ""}>
                    <input type="checkbox" value={Number(stage.mamono)} className="mr-2" onChange={(event) => checkboxChange(event)} disabled={stage.disabled} />
                    {label}
                  </label>
              )})
            })}
        </div>
        <div className="flex justify-center mb-8">
          <button className="border-neutral-500 border-2 border-spacing-2 rounded" onClick={calculate}>計算する</button>
        </div>
        <div className="flex flex-col">
          <h2 id="resultRank" className="text-3xl font-bold mb-8 text-center" />
          <div id="resultDetail" />
        </div>
      </div>
    </main>
  );
}

export default Home
