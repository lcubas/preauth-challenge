import { describe, it, expect } from 'vitest';
import { findFirstPairWithTargetSum } from './solution';

describe('findFirstPairWithTargetSum', () => {
  it('should return the first valid pair when a solution exists', () => {
    expect(findFirstPairWithTargetSum([2, 5, 8, 14, 0], 10)).toEqual([2, 8]);
    expect(findFirstPairWithTargetSum([1, 3, 4, 6, 7], 9)).toEqual([3, 6]);
  });

  it('should return an empty array when no solution exists', () => {
    expect(findFirstPairWithTargetSum([], 10)).toEqual([]);
    expect(findFirstPairWithTargetSum([1, 3, 5], 10)).toEqual([]);
  });

  it('should handle negative numbers correctly', () => {
    expect(findFirstPairWithTargetSum([-1, -2, 3, 5], 1)).toEqual([-2, 3]);
    expect(findFirstPairWithTargetSum([-5, -3, 2, 8], -1)).toEqual([-3, 2]);
  });

  it('should handle single-element arrays (no possible pair)', () => {
    expect(findFirstPairWithTargetSum([10], 10)).toEqual([]);
  });

  it('should handle arrays with a pair that includes 0', () => {
    expect(findFirstPairWithTargetSum([0, 10, -10, 5], 0)).toEqual([10, -10]);
  });

  it('should ignore invalid inputs (non-array or invalid array)', () => {
    expect(findFirstPairWithTargetSum(undefined as unknown as number[], 10)).toEqual([]);
    expect(findFirstPairWithTargetSum(null as unknown as number[], 10)).toEqual([]);
    expect(findFirstPairWithTargetSum('string' as unknown as number[], 10)).toEqual([]);
  });

  it('should handle very large arrays efficiently', () => {
    const largeArray = Array.from({ length: 1_000_000 }, (_, i) => i + 1);
    expect(findFirstPairWithTargetSum(largeArray, 1_999_999)).toEqual([999_999, 1_000_000]);
  });
});
