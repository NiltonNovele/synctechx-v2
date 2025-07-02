"use client"

// Define the toast state outside of any component to create a singleton
type ToastProps = {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
  duration?: number
}

// Create a global state manager for toasts
const toastState = {
  toasts: [] as ToastProps[],
  listeners: new Set<(toasts: ToastProps[]) => void>(),

  addToast(toast: Omit<ToastProps, "id"> & { id?: string }) {
    const id = toast.id || `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    const duration = toast.duration || 3000

    const newToast = { ...toast, id }
    this.toasts = [...this.toasts, newToast]
    this.notifyListeners()

    // Auto dismiss
    setTimeout(() => {
      this.removeToast(id)
    }, duration)

    return id
  },

  removeToast(id: string) {
    this.toasts = this.toasts.filter((t) => t.id !== id)
    this.notifyListeners()
  },

  notifyListeners() {
    this.listeners.forEach((listener) => listener([...this.toasts]))
  },

  subscribe(listener: (toasts: ToastProps[]) => void) {
    this.listeners.add(listener)
    listener([...this.toasts]) // Initial state

    return () => {
      this.listeners.delete(listener)
    }
  },
}

// Direct export for convenience - these don't depend on React context
export const toast = (props: Omit<ToastProps, "id"> & { id?: string }) => {
  return toastState.addToast(props)
}

export const dismiss = (id: string) => {
  return toastState.removeToast(id)
}

// Hook for components to use
export function useToast() {
  return {
    toast,
    dismiss,
  }
}

// Export the toast state for the provider
export { toastState }
export type { ToastProps }

