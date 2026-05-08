export function greet(name: string): string {
  if (name == null) {
    return `Hi there! Welcome aboard!`
  }
  return `Hi there, ${name}! Welcome aboard!`
}

// MAIN-only feature — would not exist on develop
export function deprecatedHelper(): never {
  throw new Error("removed on develop")
}

// probe 1778232266761
