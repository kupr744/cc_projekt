function prime(from = 1, to) {
  var prime = true;
  var result = [];

  if(from === 0) from++;

  for (let i = from; i <= to; i++) {
    prime = true;
    for (let j = 2; j < i; j++) {
      if(i % j === 0) {
        prime = false;
        break;
      }
    }

    if(prime) {
      result.push(i);
    }
  }
  return result;
}

exports = module.exports = {
  prime
}