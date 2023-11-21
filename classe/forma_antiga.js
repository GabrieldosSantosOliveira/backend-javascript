function Cachorro(nome, idade) {
  this.nome = nome
  this.idade = idade
 
}
 
Cachorro.prototype.latir = function () {
  console.log('Auu Auu')
}
 
const alfredo = new Cachorro()

alfredo.latir()
 