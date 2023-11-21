const boloChocolate ={
  sabor: "Chocolate",
  preparar(){
    console.log("Fazendo Bolo de Chocolate...")
  }
}
const boloDeLaranja = { }
const bolo = Object.create(boloChocolate, boloDeLaranja)
bolo.preparar()