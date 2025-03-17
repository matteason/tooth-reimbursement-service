export function useReturnToSummary() {
  return new URLSearchParams(new URL(window.location.toString()).search).has('returntosummary')
}
