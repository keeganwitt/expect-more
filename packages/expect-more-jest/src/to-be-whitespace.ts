import { isWhitespace } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` containing only whitespace characters.
       * @example
       * expect(' ').toBeWhitespace();
       */
      toBeWhitespace(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` containing only whitespace characters.
       * @example
       * expect(' ').toEqual(
       *   expect.toBeWhitespace()
       * );
       */
      toBeWhitespace<T>(): JestMatchers<T>;
    }
  }
}

export const toBeWhitespaceMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be a string containing only whitespace characters`,
    notMessage: () => `expected ${value} not to be a string containing only whitespace characters`,
    pass: isWhitespace(value),
  });

expect.extend({ toBeWhitespace: toBeWhitespaceMatcher });
