import { useState } from 'react'
import Layout from './components/Layout'
import SymptomChecklist from './components/SymptomChecklist'
import UrgencyBanner from './components/UrgencyBanner'
import ResultCard from './components/ResultCard'
import { useSymptomChecker } from './hooks/useSymptomChecker'

const App = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const { conditions, triage } = useSymptomChecker(selectedSymptoms)

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        <SymptomChecklist onSelectionChange={setSelectedSymptoms} />

        {triage && (
          <div className="space-y-4">
            <UrgencyBanner urgency={triage.urgency} message={triage.message} />
            <div className="space-y-3">
              {conditions.map((condition) => (
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