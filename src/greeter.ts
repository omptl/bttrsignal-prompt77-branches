export function greet(name: string): string {
  return `Hello from DEVELOP branch, ${name}!`
}

// DEVELOP-only feature — does not exist on main
export function newAsyncHelper(): Promise<void> {
  return Promise.resolve()
}

export function devOnlyUtil(input: string): string {
  return input.toUpperCase()
}
