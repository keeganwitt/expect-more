import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is a `RegExp`.
 * @matcherName toBeRegExp
 * @memberMatcherName toHaveRegExp
 * @matcherMessage expected ${value} to be a regular expression
 * @matcherNotMessage expected ${value} not to be a regular expression
 */
export const isRegExp = hasType<RegExp>('RegExp');
