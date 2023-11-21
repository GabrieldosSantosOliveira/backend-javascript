class Cachorro {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade

  }
  latir() {
    console.log('Auu Auu')
  }
}
 
 
const alfredo = new Cachorro("Alfredo", 5)

alfredo.latir()
 