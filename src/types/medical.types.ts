export interface Symptom{
    id: string;
    name: string;
}

export interface PossibleCondition{
    name: string;
    likelihood: 'low' | 'medium' | 'high';
    description: string;
}
export interface TriageResult {
  urgency: Urgency;
  message: string;
}

export type Urgency=  'emergency' | 'urgent' | 'routine' | 'self-care';