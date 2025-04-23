// Your TypeScript code goes here

// Example: Add basic functions and classes to your TS file
export function add(x: number, y: number): number {
  return x + y;
}

// Example: Create a main function that can be called from the main.ts file
import { add } from './utils';

function calculateSum(a: number, b: number): number {
  return add(a, b);
}
