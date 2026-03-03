let a=40;
let b=10;
let c=20;
let total=0;
let totald=0;
let x=5;
total=(a+b+c);
totald=(a+b+c)/x;
console.log('O total é:',total);
console.log('O total D é:',totald);
console.log(outraconta());
console.log(media());
console.log(carro());
console.log(frutas());
//inicio da Function 
function outraconta(){
 var d=10;
 var e=20;
 var f=30;
 var tot=0;
 var totd=0;
 var xx=100;
 tot=(d+e+f);
 totd=(d+e+f)/xx;
 //console.log('O tot é:',tot);
  console.log('O totd é:',totd)
   return {tot, totd};
} 







function media(){
 let nfinal=0;
 n1=30;
 n2=90;
 n3=100;
 nfinal=((n1+n2+n3)/3).toFixed(1);
 console.log('A media final do aluno é:',nfinal);
 return nfinal; 
}



function carro(){
    carro1="Caravan",
    carro2="HB20",
    km1=86,
    km2=52,
    preço1=19,
    preço2=22,
    totalcarro1= km1*preço1,
    totalcarro2= km2*preço2,
    
        console.log("O carro", carro1,"teve o gasto de:" ,totalcarro1);
        console.log("O carro", carro2,"teve o gasto de:" ,totalcarro2);
    
    return {totalcarro1,totalcarro2}
}



function frutas(){
    let frutas=["maçã","banana","laranja"];
    console.log(frutas.length);
    console.log(frutas);
    frutas.push('manga');
    console.log(frutas.length);
    console.log(frutas);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.push('uva');
    frutas.push('amora');
    frutas.push('mexerica','abacate','abacaxi');
    console.log(frutas);
    console.log('a fruta na posição 1 é',frutas[1]);
    console.log(frutas.length);
    console.log('o total de registros é de ',frutas.length+1, 'frutas.');
    return frutas;
}