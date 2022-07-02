//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade =18 
if(idade>=18){ 
    console.log( "maior que 18")

}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let humano =true
if(idade>=18 && humano==true){
    console.log("voce é humano e maior de 18?")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let pamela ="janeiro"
if(pamela == "janeiro"||pamela=="dezembro"){
    console.log("voce faz aniversario em Janeiro ou Dezembro?")
}


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Robert"
if(nome[0]=="R"||nome[0]=="r"){
    console.log("ook")
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let sobrenome="elsa"
if(sobrenome[0]=="E"||sobrenome[0]=="e"||sobrenome.length>=6){
    console.log("sobrenome")
}