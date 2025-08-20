let selectedNumber=null
let selectedSquare=null

let board=[
    "600504039",
    "094030720",
    "308029600",
    "016403280",
    "400268001",
    "025901340",
    "001040508",
    "049082170",
    "780105002"
]
window.onload = function(){
    setGame();
}

function setGame(){
    //digits 1-9
    for(let i=1;i<=9; i++){
        //<div id="1" class="number">1<div/>
        let number=document.createElement('div');
        number.id=i
        number.innerText=i
        number.classList.add('number')
        document.getElementById("digits").appendChild(number)
    }
}


