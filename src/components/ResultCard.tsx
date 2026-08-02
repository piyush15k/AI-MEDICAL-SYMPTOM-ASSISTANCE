import type { PossibleCondition } from '../types/medical.types'
import RemedyList from './RemedyList'

const likelihoodStyles: Record<string, string> = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-slate-100 text-slate-700',
}

interface ResultCardProps extends PossibleCondition {
  remedies: string[]
}

const ResultCard = ({ name, likelihood, description, remedies }: ResultCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-slate-800">{name}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${likelihoodStyles[likelihood]}`}>
          {likelihood} likelihood
        </span>
      </div>
      <p className="text-sm text-slate-600">{description}</p>
      <RemedyList remedies={remedies} />
    </div>
  )
}

export default ResultCard