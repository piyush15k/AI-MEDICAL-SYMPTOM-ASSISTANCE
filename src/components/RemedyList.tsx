interface RemedyListProps {
  remedies: string[]
}

const RemedyList = ({ remedies }: RemedyListProps) => {
  if (remedies.length === 0) return null

  return (
    <div className="bg-blue-50 rounded-lg p-4 mt-3">
      <h4 className="text-sm font-semibold text-blue-900 mb-2">Home Remedies</h4>
      <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
        {remedies.map((remedy) => (
          <li key={remedy}>{remedy}</li>
        ))}
      </ul>
    </div>
  )
}

export default RemedyList