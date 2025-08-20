let numberSelected=null
let selectedTile=null
let errors=0;

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
let solvedBoard=[
    "672514839",
    "194836725",
    "358729614",
    "916453287",
    "437268951",
    "825971346",
    "261347598",
    "549682173",
    "783195462"
];
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

        number.addEventListener("click", selectNumber)
    }
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let tile=document.createElement('div');
            tile.id=r.toString()+"-"+c.toString();
            if(board[r][c]!="0"){
                tile.innerText=board[r][c]
                tile.classList.add('tile-start')
            }
            if(r==2 || r==5){
                tile.classList.add('horizontal-line')
            }
            if(c==2 || c==5){
                tile.classList.add('vertical-line')
            }
            tile.classList.add('tile');
            document.getElementById("board").appendChild(tile)

            tile.addEventListener("click", selectTile)
        }
    }
}
function selectNumber(){
    if(numberSelected!==null){
        numberSelected.classList.remove('number-selected');
    }
    numberSelected=this
    numberSelected.classList.add('number-selected')
}
function selectTile(){
    if (numberSelected !== null) {
        if (this.innerText != "") {
            return;
        }
        let coords = this.id.split('-');
        let r = coords[0];
        let c = coords[1];
        if (solvedBoard[r][c] == numberSelected.id) {
            this.innerText = numberSelected.id;
        } else {
            errors += 1
            document.getElementById("errors").innerText = errors;
        }
    }
}


