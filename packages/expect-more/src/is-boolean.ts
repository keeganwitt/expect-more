import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is `true`, `false`, `new Boolean(true)`, or `new
 * Boolean(false)`.
 * @matcherName toBeBoolean
 * @memberMatcherName toHaveBoolean
 * @matcherMessage expected ${value} to be true, false, or an instance of
 * Boolean
 * @matcherNotMessage expected ${value} not to be true, false, or an instance of
 * Boolean
 */
export const isBoolean = hasType<boolean>('Boolean');
