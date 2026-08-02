export interface EmergencyRule {
  requiredSymptoms: string[]
  message: string
}

export const emergencyRules: EmergencyRule[] = [
  {
    requiredSymptoms: ['chest-pain', 'shortness-of-breath'],
    message: 'These symptoms together may indicate a serious cardiac or respiratory issue. Seek emergency care immediately.',
  },
]