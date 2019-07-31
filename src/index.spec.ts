import * as assert from 'assert';
import { env } from './index';

describe('env', () => {
  it('should return a string for a string value', () => {
    const val: string = env('', 'localhost');
    assert.equal(val, 'localhost');
    assert.equal(typeof val, 'string');
  });

  it('should return an integer for an integer value', () => {
    const val: number = env('', '123');
    assert.equal(val, 123);
    assert.equal(typeof val, 'number');
  });

  it('should return a float for a float value', () => {
    const val: number = env('', '123.50');
    assert.equal(val, 123.50);
    assert.equal(typeof val, 'number');
  });

  it('should return a boolean for a boolean value', () => {
    const val: number = env('', 'true');
    assert.equal(val, true);
    assert.equal(typeof val, 'boolean');
  });
});
