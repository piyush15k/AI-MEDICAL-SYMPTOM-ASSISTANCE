import { useState } from 'react'
import { symptomList } from '../data/symptomList'

interface SymptomChecklistProps {
  onSelectionChange: (selectedIds: string[]) => void
}

const SymptomChecklist = ({ onSelectionChange }: SymptomChecklistProps) => {
  const [selected, setSelected] = useState<string[]>([])

  const toggleSymptom = (id: string) => {
    const updated = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id]

    setSelected(updated)
    onSelectionChange(updated)
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">
        Select your symptoms
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {symptomList.map((symptom) => (
          <label
            key={symptom.id}
            className="flex items-center gap-2 cursor-pointer text-slate-700"
          >
            <input
              type="checkbox"
              checked={selected.includes(symptom.id)}
              onChange={() => toggleSymptom(symptom.id)}
              className="w-4 h-4 accent-blue-600"
            />
            {symptom.name}
          </label>
        ))}
      </div>
    </div>
  )
}

export default SymptomChecklist
