import type { ReactNode } from 'react'

export function Button({ children, onClick, secondary = false, disabled = false }: {
  children: ReactNode
  onClick?: () => void
  secondary?: boolean
  disabled?: boolean
}) {
  return (
    <button className={`button ${secondary ? 'button--secondary' : ''}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
