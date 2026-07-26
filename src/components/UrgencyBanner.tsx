import type { Urgency } from '../types/medical.types'

interface UrgencyBannerProps {
  urgency: Urgency
  message: string
}

const urgencyStyles: Record<Urgency, string> = {
  emergency: 'bg-red-600 text-white',
  urgent: 'bg-amber-500 text-white',
  routine: 'bg-blue-500 text-white',
  'self-care': 'bg-green-600 text-white',
}

const urgencyLabels: Record<Urgency, string> = {
  emergency: 'Seek Emergency Care',
  urgent: 'See a Doctor Soon',
  routine: 'Consider Seeing a Doctor',
  'self-care': 'Self-Care Likely Sufficient',
}

const UrgencyBanner = ({ urgency, message }: UrgencyBannerProps) => {
  return (
    <div className={`rounded-lg p-4 ${urgencyStyles[urgency]}`}>
      <p className="font-bold">{urgencyLabels[urgency]}</p>
      <p className="text-sm mt-1 opacity-90">{message}</p>
    </div>
  )
}

export default UrgencyBanner