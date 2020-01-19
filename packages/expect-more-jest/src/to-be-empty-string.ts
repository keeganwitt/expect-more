import { isEmptyString } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `String` containing no characters.
       * @example
       * expect('').toBeEmptyString();
       */
      toBeEmptyString(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `String` containing no characters.
       * @example
       * expect('').toEqual(
       *   expect.toBeEmptyString()
       * );
       */
      toBeEmptyString<T>(): JestMatchers<T>;
    }
  }
}

export const toBeEmptyStringMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be an empty string or empty instance of String`,
    notMessage: () => `expected ${value} not to be an empty string or empty instance of String`,
    pass: isEmptyString(value),
  });

expect.extend({ toBeEmptyString: toBeEmptyStringMatcher });
