export type Screen = 'welcome' | 'onboarding' | 'home' | 'workout' | 'progress' | 'plan' | 'profile'
export type AnswerKey = 'goal' | 'level' | 'days' | 'place' | 'duration'
export type OnboardingState = Record<AnswerKey, string>
