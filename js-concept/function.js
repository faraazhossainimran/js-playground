// function startFan (a, b, c , d){
//     console.log("Hi, This is Imran");
//     sum= a+b+c+d;
//     console.log(sum);
// }

// startFan(2,3,4,5);

function bringSingara (money) {
    var singaraPrice = 10;
    if(typeof money == 'undefined' | singaraPrice > money ){
        console.log("tmi aghe Taka daw pore singara neo")
    } else if (typeof money !== 'undefined' && (money >= singaraPrice) ){
        console.log('ei nen mama singara');
    }
    console.log(money)
}
var totalMoney = 9;
bringSingara(totalMoney);