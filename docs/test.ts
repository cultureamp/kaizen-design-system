// Implicit return: string
export const doSomething = (aString: string) => aString;

// Explicit return: boolean
// Picks up type error
export const doSomething2 = (aString: string): boolean => aString;
