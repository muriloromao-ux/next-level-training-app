import type { AnswerKey, OnboardingState } from './types'

export const initialAnswers: OnboardingState = { goal: '', level: '', days: '', place: '', duration: '' }

export const questions: Array<{
  key: AnswerKey
  eyebrow: string
  title: string
  description: string
  options: Array<{ label: string; detail: string }>
}> = [
  {
    key: 'goal',
    eyebrow: 'Seu objetivo',
    title: 'O que você quer conquistar agora?',
    description: 'Isso ajuda a gente a indicar um programa que combine com a sua fase atual.',
    options: [
      { label: 'Ganhar massa', detail: 'Hipertrofia e evolução de carga' },
      { label: 'Emagrecer', detail: 'Treino eficiente e gasto energético' },
      { label: 'Definir o corpo', detail: 'Composição corporal e consistência' },
      { label: 'Ter mais saúde', detail: 'Força, mobilidade e disposição' },
    ],
  },
  {
    key: 'level',
    eyebrow: 'Sua experiência',
    title: 'Como você se sente treinando hoje?',
    description: 'Sem julgamento. A melhor rotina é a que respeita o seu momento.',
    options: [
      { label: 'Estou começando', detail: 'Quero aprender com segurança' },
      { label: 'Já treino há alguns meses', detail: 'Conheço os principais exercícios' },
      { label: 'Treino há mais de 1 ano', detail: 'Já tenho boa autonomia' },
    ],
  },
  {
    key: 'days',
    eyebrow: 'Sua rotina',
    title: 'Quantos dias por semana cabem de verdade?',
    description: 'A gente prefere uma meta realista a um plano perfeito que não sai do papel.',
    options: [
      { label: '2 dias', detail: 'Rotina compacta e objetiva' },
      { label: '3 dias', detail: 'Equilíbrio entre treino e recuperação' },
      { label: '4 dias', detail: 'Boa frequência para evoluir' },
      { label: '5 dias ou mais', detail: 'Maior divisão por grupos musculares' },
    ],
  },
  {
    key: 'place',
    eyebrow: 'Onde você treina',
    title: 'Qual estrutura você tem disponível?',
    description: 'Seu treino precisa funcionar no ambiente que faz parte da sua vida.',
    options: [
      { label: 'Academia completa', detail: 'Máquinas, pesos livres e cabos' },
      { label: 'Academia simples', detail: 'O essencial para treinar bem' },
      { label: 'Em casa', detail: 'Peso corporal e poucos equipamentos' },
    ],
  },
  {
    key: 'duration',
    eyebrow: 'Tempo por treino',
    title: 'Quanto tempo você quer reservar para você?',
    description: 'Seu programa vai priorizar o que mais importa dentro desse tempo.',
    options: [
      { label: 'Até 30 min', detail: 'Direto ao ponto' },
      { label: '30–45 min', detail: 'Compacto e completo' },
      { label: '45–60 min', detail: 'Ritmo equilibrado' },
      { label: 'Mais de 60 min', detail: 'Maior volume e flexibilidade' },
    ],
  },
]

export const week = [
  { day: 'S', date: '7', done: true },
  { day: 'T', date: '8', done: true },
  { day: 'Q', date: '9', active: true },
  { day: 'Q', date: '10' },
  { day: 'S', date: '11' },
]

export const exercises = [
  { name: 'Supino inclinado com halteres', sets: '4 × 8–10', rest: '90s', tag: 'Peito' },
  { name: 'Desenvolvimento com halteres', sets: '3 × 10–12', rest: '75s', tag: 'Ombros' },
  { name: 'Crucifixo na máquina', sets: '3 × 12–15', rest: '60s', tag: 'Peito' },
  { name: 'Tríceps na corda', sets: '3 × 10–12', rest: '60s', tag: 'Tríceps' },
  { name: 'Elevação lateral', sets: '3 × 12–15', rest: '45s', tag: 'Ombros' },
]
