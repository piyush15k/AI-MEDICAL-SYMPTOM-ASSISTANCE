import type { PossibleCondition, Urgency } from '../types/medical.types'

export interface ConditionEntry {
  requiredSymptoms: string[]
  condition: PossibleCondition
  remedies: string[]
  urgency: Urgency
  urgencyMessage: string
}

export const conditionDatabase: ConditionEntry[] = [
  {
    requiredSymptoms: ['cough', 'sore-throat'],
    condition: {
      name: 'Common Cold',
      likelihood: 'high',
      description: 'A mild viral infection affecting the nose and throat.',
    },
    remedies: ['Rest and stay hydrated', 'Warm salt water gargle', 'Honey and lemon tea'],
    urgency: 'self-care',
    urgencyMessage: 'Usually resolves on its own within a week.',
  },
  {
    requiredSymptoms: ['fever', 'headache', 'fatigue'],
    condition: {
      name: 'Flu (Influenza)',
      likelihood: 'medium',
      description: 'A viral infection causing fever, body aches, and fatigue.',
    },
    remedies: ['Rest', 'Fluids', 'Paracetamol for fever (as directed on packaging)'],
    urgency: 'routine',
    urgencyMessage: 'Consider seeing a doctor if fever persists beyond 3 days.',
  },
  {
    requiredSymptoms: ['headache', 'nausea'],
    condition: {
      name: 'Migraine',
      likelihood: 'medium',
      description: 'A neurological condition causing intense headaches, often with nausea.',
    },
    remedies: ['Rest in a dark, quiet room', 'Stay hydrated', 'Cold compress on forehead'],
    urgency: 'routine',
    urgencyMessage: 'See a doctor if this is a new or unusually severe headache.',
  },
]