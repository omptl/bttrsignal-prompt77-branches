export function greet(name: string): string {
  return `Hello from production branch, ${name}!`
}

// MAIN-only feature — would not exist on develop
export function deprecatedHelper(): never {
  throw new Error("removed on develop")
}
