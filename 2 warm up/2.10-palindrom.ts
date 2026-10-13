function isPalindrome(n: number): boolean {
  if (n < 0) return false;

  let original = n;
  let reverse = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  return original === reverse;
}
console.log(isPalindrome(0));
