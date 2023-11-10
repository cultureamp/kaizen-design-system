export const checkArraysMatch = (a1: any[], a2: any[]): boolean => {
  if (a1.length !== a2.length) return false
  return a1.every((v, i) => v === a2[i])
}
