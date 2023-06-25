var losing = Math.floor(Math.random() * 9)
var winning = Math.floor(Math.random() *9 )
var counter = 3
var element = document.getElementById('result');
element.style.fontSize = '100px';

const treasure =(number) => {
//     if (number  ===0) {
//         document.getElementById(0).innerHTML = ":fish:"
//     }
//     else if (number  ===1) {
//         document.getElementById(1).innerHTML = ":sushi:" 
//     } 
//     else if (number  ===2) {
//         document.getElementById(2).innerHTML = ":blowfish:"
//     }
// else if (number  ===3) {
//     document.getElementById(3).innerHTML = ":bento:"
//     }
// else if (number  ===4) {
//     document.getElementById(4).innerHTML = ":sushi:"
//     }
//     else if (number  ===5) {
//         document.getElementById(5).innerHTML = ":fish:"
//     }
// else if (number  ===8) {
//     document.getElementById(8).innerHTML = ":sushi:"
//     }
//     else if (number  ===6) {
//         document.getElementById(6).innerHTML = ":fish:"
//     }
//         else if (number  ===7) {
//             document.getElementById(7).innerHTML = ":fish:"
//     }  
    if(counter === 0){
        alert("Game Over!")
    }else if(number===winning) {
        alert("YUMM!")
        document.getElementById("gameboard").innerHTML = ""  
        counter=0
        document.getElementById("result").innerHTML = `You Won! 🍱`
    }else if(number===losing) {
        alert ("You got poisoned!")
        document.getElementById("gameboard").innerHTML = ""
        counter=0
        document.getElementById("result").innerHTML = "You Lost! 🐡"
     }else {
        document.getElementById(number).innerHTML = "🐟"
        counter=counter-1
    }
}
treasure(element)
//  }
//    if(number === losing) {
//         return alert ("Poisoned!")
//     } 
//     else if(number === winning) {
//         return alert ("YUMMM im full now")
//     } else {
//      return alert ("Still Hungry!")}