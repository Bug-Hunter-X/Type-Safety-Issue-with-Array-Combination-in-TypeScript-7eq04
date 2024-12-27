# Type Safety Issue with Array Combination in TypeScript

This example demonstrates a common type safety issue that can arise in TypeScript when working with arrays.  The `combine` function aims to concatenate two number arrays, but it doesn't prevent the combination of a number array with a string array, leading to a compilation error.

The solution demonstrates how to enforce type safety using type guards and conditional types to improve the robustness of the function.

## How to reproduce

1. Clone this repository.
2. Compile the code using the TypeScript compiler (tsc bug.ts).
3. Observe the compilation error.