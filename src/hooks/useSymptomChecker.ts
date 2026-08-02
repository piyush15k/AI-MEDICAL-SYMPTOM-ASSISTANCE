import { conditionDatabase } from '../data/symptomDatabase'
import { emergencyRules } from '../data/triageRules'
import type { PossibleCondition, TriageResult } from '../types/medical.types'

interface CheckerResult {
  conditions: (PossibleCondition & { remedies: string[] })[]
  triage: TriageResult | null
}

export const useSymptomChecker = (selectedSymptoms: string[]): CheckerResult => {
  
    if (selectedSymptoms.length === 0) {
      return { conditions: [], triage: null }
    }

    // Check emergencies first — these override everything else
    for (const rule of emergencyRules) {
      const hasAllSymptoms = rule.requiredSymptoms.every((s) =>
        selectedSymptoms.includes(s)
      )
      if (hasAllSymptoms) {
        return {
          conditions: [],
          triage: { urgency: 'emergency', message: rule.message },
        }
      }
    }

    // Otherwise, find matching conditions
    const matches = conditionDatabase.filter((entry) =>
      entry.requiredSymptoms.some((s) => selectedSymptoms.includes(s))
    )

    const conditions = matches.map((entry) => ({
      ...entry.condition,
      remedies: entry.remedies,
    }))

    // Use the most urgent matching entry's triage info
    const mostUrgent = matches.find((m) => m.urgency !== 'self-care') ?? matches[0]

    const triage: TriageResult | null = mostUrgent
      ? { urgency: mostUrgent.urgency, message: mostUrgent.urgencyMessage }
      : null

    return { conditions, triage }
  }
