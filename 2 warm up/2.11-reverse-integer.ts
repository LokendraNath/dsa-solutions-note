function reverse(x: number): number {
  if (x === 0) return 0;
  let original = Math.abs(x);
  let reverse = 0;

  while (original > 0) {
    let lastDigit = original % 10; // 2
    reverse = reverse * 10 + lastDigit;
    original = Math.floor(original / 10);
  }

  let limit = 2 ** 31;
  if (reverse > limit || reverse < -limit) return 0;
  return x < 0 ? -reverse : reverse;
}

console.log(reverse(1534236469));
