import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ErrorBoundary from './ErrorBoundary'

// Component that throws an error for testing
const ThrowError = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('ErrorBoundary', () => {
  // Suppress console.error for these tests
  const originalError = console.error
  beforeAll(() => {
    console.error = vi.fn()
  })

  afterAll(() => {
    console.error = originalError
  })

  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child component</div>
      </ErrorBoundary>
    )

    expect(screen.getByText('Child component')).toBeInTheDocument()
  })

  it('should render error UI when child throws error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText(/Oups ! Une erreur s'est produite/i)).toBeInTheDocument()
  })

  it('should display error message and actions', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    // Check for main elements
    expect(screen.getByText(/Oups ! Une erreur s'est produite/i)).toBeInTheDocument()
    expect(screen.getByText(/Nous sommes désolés/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Réessayer/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Retour à l'accueil/i })).toBeInTheDocument()
  })

  it('should display contact information', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText(/0 8 99 25 01 51/)).toBeInTheDocument()
    expect(screen.getByText(/contact@netzinformatique.fr/)).toBeInTheDocument()
  })

  it('should reset error state when Réessayer button is clicked', async () => {
    const user = userEvent.setup()

    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    // Error UI should be visible
    expect(screen.getByText(/Oups ! Une erreur s'est produite/i)).toBeInTheDocument()

    // Click reset button
    const resetButton = screen.getByRole('button', { name: /Réessayer/i })
    await user.click(resetButton)

    // Re-render without error
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )

    expect(screen.getByText('No error')).toBeInTheDocument()
  })

  it('should show error details in development mode', () => {
    // Mock development environment
    const originalEnv = import.meta.env.DEV
    import.meta.env.DEV = true

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    // Should show error details
    expect(screen.getByText(/Error:/i)).toBeInTheDocument()
    expect(screen.getByText(/Test error/i)).toBeInTheDocument()

    // Restore environment
    import.meta.env.DEV = originalEnv
  })

  it('should not show error details in production mode', () => {
    // Mock production environment
    const originalEnv = import.meta.env.DEV
    import.meta.env.DEV = false

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    // Should not show error details
    expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument()

    // Restore environment
    import.meta.env.DEV = originalEnv
  })
})
