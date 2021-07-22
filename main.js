/*var nome = "Manoel Messias";
var idade = 43;
alert("Bem vindo " + nome +", vc tem "+ idade +" anos.");
*/
//usando o console
/*console.log(nome);
console.log(nome +" " +idade); */
//vendo Listas
/* var lista = ["Uno","Fiesta","Celta"]; // 
console.log(lista); // para testar as saídas
console.log(lista[1]); // buscando uma posição na lista
lista.push("Idea");// adicinona um item ao fim da lista
console.log(lista); 
lista.pop();// retira o ultimo item ao fim da lista
console.log(lista); 
console.log(lista.length); // tamanho da lista 
console.log(lista.reverse()); // ver a lista ao contrario
console.log(lista.toString()); // transforma a lista em string
console.log(lista.toString()[1]); // buscando uma posição na lista que agora é uma string. neste caso "e" de "Celta"
console.log(lista.join(" | ")); // transforma em strig mas muda o separador
 */// Vendo dicionarios
/* var carro = {modelo: "Uno", cor: "vermelho"} 
console.log(carro);
console.log(carro.cor); */
// Vendo lista de dicionário
/* var carros = [{modelo: "Uno", cor: "vermelho"},{modelo: "Fiesta", cor: "azul"},{modelo: "Celta", cor: "preto"} ];
console.log(carros);
console.log(carros[2].modelo); */
//Vendo condicionais
/* var idade = prompt("Qual a sua idade");
if (idade >= 18){
    alert("Maior de Idade");
} else{
    alert("Menor de Idade");
} ; */
/* var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}; */
/* var count;
for (count=2;count<5;count++) {
    console.log(count);
} */
/* var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMonth()+1 + "/" +d.getDate()+ "/" +d.getUTCFullYear());

function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome);
}
alert(setReplace("Vai Japão","Japão","Brasil"));
var validar;
function validaIdade(idade){

    if (idade >=18) {
            validar = true;
    } else {
            validar = fasle;
    }
        return validar;
  }
  var idade = prompt("qual a sua idade");
  console.log(validaIdade(idade)); */
function rodar(){
    alert("Página carregada");
}
  function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
      
    //alert("Obrigado por clicar");
  }
  function redirecionar(){
      window.open("https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript"); // abre em outra aba
     // window.location.href = "https://github.com/manoelfontes"; // abre na mesma janela
  }
  function passou(elemento){
    elemento.innerHTML = "<b>Parabéns por passar o Mouse</b>"
}
function saiu(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
var a = 5;
var b = 7;

alert(a*b);
