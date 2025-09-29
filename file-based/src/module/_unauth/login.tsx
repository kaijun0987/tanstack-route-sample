import { createFileRoute, redirect } from '@tanstack/react-router'

// Simple auth check that can be used in beforeLoad
const isAuthenticated = (): boolean => {
  // In a real app, this would check for a valid token in localStorage/cookies
  // or make an API call to validate the session
  try {
    // Check for token in localStorage
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('authToken') : null
    return !!token // Convert to boolean
  } catch (error) {
    console.error('Auth check failed:', error)
    return false
  }
}

// A simple function to set the auth token (for login)
export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('authToken', token)
  }
}

// A function to clear auth (for logout)
export const clearAuth = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken')
  }
}

export const Route = createFileRoute('/_unauth/login')({
  component: RouteComponent,
  beforeLoad: ({ location }) => {
    if (isAuthenticated()) {
      throw redirect({
        to: '/',
        search: {
          // Store the current path to redirect back after login
          redirect: location.href,
        },
      })
    }
  },
})

// Simple component that shows the protected content
function RouteComponent() {
  return <div>login page</div>
}
