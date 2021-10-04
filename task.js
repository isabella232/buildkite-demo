const random = Math.random();

if (random < 0.5) {
  console.error('failed');
  process.exit(1);
}

console.log('hello world');
