function gcd(a, b) {
  if (a == 0) return b;
  if (b == 0) return a;
  return a > b ? gcd(a % b, b) : gcd(a, b % a);
}

gcd(2, 3);
