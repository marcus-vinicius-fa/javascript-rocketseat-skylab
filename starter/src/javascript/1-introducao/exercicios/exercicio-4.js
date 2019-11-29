function experiencia(anos) {
  if (anos >= 0 && anos <= 1) {
    return "Iniciante";
  }
  else if (anos > 1 && anos <= 3) {
    return "Intermediário";
  }
  else if (anos > 3 && anos <= 6) {
    return "Avançado";
  }
  else if (anos >= 7) {
    return "Jedi Master";
  }
}

var anosEstudo = 7;

console.log(experiencia(anosEstudo));

 // De 0-1 ano: Iniciante
 // De 1-3 anos: Intermediário
 // De 3-6 anos: Avançado
 // De 7 acima: Jedi Master

// switch (anos) {
//  case anos >= 0 && anos <= 1:
//    console.log("Iniciante");
//  case anos > 1 && anos <= 3:
//    console.log("Intermediário");
//  case anos > 3 && anos <= 6:
//    console.log("Avançado");
//  case anos >= 7:
//    console.log("Jedi Master");
// }