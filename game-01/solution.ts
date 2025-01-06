export function findFirstPairWithTargetSum(
  numbers: number[],
  targetSum: number
): [number, number] | [] {
  if (!Array.isArray(numbers) || numbers.length < 2) return [];

  const complements = new Set<number>();

  for (let currentNumber of numbers) {
    const requiredComplement = targetSum - currentNumber;

    if (complements.has(requiredComplement)) {
      return [requiredComplement, currentNumber];
    }

    complements.add(currentNumber);
  }

  return [];
}
