type Props = {
  result: string[]
}

const Result = ({ result }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {result[0]}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: result[1] }} />
    </div>
  )
}

export default Result