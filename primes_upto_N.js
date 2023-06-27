
prime = (n) => {
    if (n == 2 || n == 3) return true;
    if (n <= 1 || n % 2 == 0 || n % 3 == 0) return false;
    for (i = 5; i * i <= n; i += 6)  {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

m = 1
N = 134

for (m=1; m <= N; m++ ) {
  // console.log(i + ' is prime')
  if (prime(m)) { console.log(m + ' is prime') };
}


