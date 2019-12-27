function temHabilidadeJs(habilidades) {
  for (habilidade of habilidades) {
    return (habilidade === "JavaScript") ? true : false;
  }
}

var habilidades = ["JavaScript", "ReactJS", "React Native"];

console.log(temHabilidadeJs(habilidades));