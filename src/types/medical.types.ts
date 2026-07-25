export interface Symptom{
    id: number;
    name: string;
}

export interface PossibleCondition{
    name: string;
    likelihood: 'low' | 'medium' | 'high';
    description: string;
}

export type Urgency=  'emergency' | 'urgent' | 'routine' | 'self-care';