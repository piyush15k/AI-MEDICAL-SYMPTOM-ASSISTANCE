import { useState } from 'react'
import Layout from './components/Layout'
import SymptomChecklist from './components/SymptomChecklist'
import UrgencyBanner from './components/UrgencyBanner'
import ResultCard from './components/ResultCard'

const fakeConditions = [
  { name: 'Common Cold', likelihood: 'high' as const, description: 'A mild viral infection affecting the nose and throat.' },
  { name: 'Seasonal Allergies', likelihood: 'medium' as const, description: 'An immune response to environmental allergens like pollen.' },
]

const App = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        <SymptomChecklist onSelectionChange={setSelectedSymptoms} />

        {selectedSymptoms.length > 0 && (
          <div className="space-y-4">
            <UrgencyBanner
              urgency="self-care"
              message="Your symptoms suggest a mild condition. Rest and monitor how you feel."
            />
            <div className="space-y-3">
              {fakeConditions.map((condition) => (
                <ResultCard key={condition.name} {...condition} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default App