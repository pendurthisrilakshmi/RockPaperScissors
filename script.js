let yourScore=0;
let computerScore=0;

function findCompInput(){
    computerInput=Math.floor(Math.random() * 3) ;
    if(computerInput==0){
        computerInput="rock";
    }
    else if(computerInput==1){
        computerInput="paper";
    }
    else if(computerInput==2){
        computerInput="scissors";
    }
    console.log(computerInput);
    return computerInput;
}

let start=document.getElementById("start");
start.onclick = () => {
    start.innerHTML="Click any one of above";
    start.style.width="auto";

    let youScore=document.querySelector(".scoreYou")
    let compScore=document.querySelector(".scoreComp")
    let result=document.querySelector("#result");
    
    let rock=document.querySelector("#rock");
    rock.onclick = () =>
    {
        let computerInput=findCompInput();
        paper.style.border="none";
        scissors.style.border="none";
        rock.style.border="2px solid #ad6595";
        result.style.visibility="visible";
        if(computerInput==="rock")
        {
            result.innerHTML="Draw..Play again!";
            result.style.background="#ad6595";
        }
        else if(computerInput==="paper")
        {
            result.innerHTML="You lost..Play again!";
            result.style.background="red";
            computerScore++;
            compScore.innerHTML=computerScore;
        }
        else if(computerInput==="scissors")
        {
            result.innerHTML="Hurray!! you won..Play again!";
            result.style.background="green";
            yourScore++;
            youScore.innerHTML=yourScore;
        }
    }

    let paper=document.querySelector("#paper");
    paper.onclick = () =>
    {
        let computerInput=findCompInput();
        rock.style.border="none";
        scissors.style.border="none";
        paper.style.border="2px solid #ad6595";
        result.style.visibility="visible";
        if(computerInput==="rock")
        {
            result.innerHTML="Hurray!! you won..Play again!";
            result.style.background="green";
            yourScore++;
            youScore.innerHTML=yourScore;
        }
        else if(computerInput==="paper")
        {
            result.innerHTML="Draw..Play again!";
            result.style.background="#ad6595";
        }
        else if(computerInput==="scissors")
        {
            result.innerHTML="You lost..Play again!";
            result.style.background="red";
            computerScore++;
            compScore.innerHTML=computerScore;
        }
    }  

    let scissors=document.querySelector("#scissors");
    scissors.onclick = () =>
    {
        let computerInput=findCompInput();
        rock.style.border="none";
        paper.style.border="none";
        scissors.style.border="2px solid #ad6595";
        result.style.visibility="visible";
        if(computerInput==="rock")
        {
            result.innerHTML="You lost..Play again!";
            result.style.background="red";
            computerScore++;
            compScore.innerHTML=computerScore;
        }
        else if(computerInput==="paper")
        {
            result.innerHTML="Hurray!! you won..Play again!";
            result.style.background="green";
            yourScore++;
            youScore.innerHTML=yourScore;
        }
        else if(computerInput==="scissors")
        {
            result.innerHTML="Draw..Play again!";
            result.style.background="#ad6595";
        }
    }

}

let restart=document.querySelector("#restart");
restart.onclick = () =>{
    start.innerHTML="Start";
    start.style.width="90px";
    rock.style.border="none";
    paper.style.border="none";
    scissors.style.border="none";
    result.innerHTML="Result";
    result.style.visibility="hidden";
    start.style.visibility="visible";
    let scoreYou=document.querySelector(".scoreYou");
    console.log(scoreYou);
    scoreYou.innerHTML="0";
    let scoreComp=document.querySelector(".scoreComp");
    scoreComp.innerHTML="0";
}
