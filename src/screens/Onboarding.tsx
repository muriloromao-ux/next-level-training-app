import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { initialAnswers, questions } from '../data'
import type { OnboardingState } from '../types'

export function Onboarding({ onFinish, onBack }: { onFinish: () => void; onBack: () => void }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<OnboardingState>(initialAnswers)
  const current = questions[step]
  const answer = answers[current.key]
  const progress = ((step + 1) / questions.length) * 100

  const next = () => {
    if (!answer) return
    if (step === questions.length - 1) onFinish()
    else setStep(step + 1)
  }

  return (
    <main className="onboarding-shell">
      <section className="onboarding-card">
        <header className="onboarding-header">
          <button className="icon-button" onClick={step === 0 ? onBack : () => setStep(step - 1)} aria-label="Voltar"><ArrowLeft size={20} /></button>
          <Logo compact />
          <span className="step-counter">{step + 1}/{questions.length}</span>
        </header>
        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
        <div className="question-wrap">
          <div className="eyebrow">{current.eyebrow}</div>
          <h2>{current.title}</h2>
          <p>{current.description}</p>
          <div className="option-list">
            {current.options.map((option) => {
              const selected = answer === option.label
              return (
                <button className={`option-card ${selected ? 'option-card--selected' : ''}`} key={option.label} onClick={() => setAnswers({ ...answers, [current.key]: option.label })}>
                  <span className="option-radio">{selected && <Check size={14} />}</span>
                  <span><strong>{option.label}</strong><small>{option.detail}</small></span>
                </button>
              )
            })}
          </div>
        </div>
        <footer className="onboarding-footer"><Button onClick={next} disabled={!answer}>{step === questions.length - 1 ? 'Criar meu programa' : 'Continuar'} <ArrowRight size={18} /></Button></footer>
      </section>
    </main>
  )
}
