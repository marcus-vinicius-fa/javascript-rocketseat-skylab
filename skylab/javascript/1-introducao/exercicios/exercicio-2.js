var cont = 0;
function pares(x, y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 == 0) {
      console.log(i);
      cont++;
    }
    
  }
  console.log("Foram "+cont+" numeros pares...");
}

pares(32, 321);