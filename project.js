let connect4 = document.getElementById("board");
let numBtns = document.querySelectorAll("button");
console.log(numBtns);
var h = 2;
let total = 0;



for(let i = 0; i < 6; i++)
{
    for(let j = 0; j < 7; j++)
    {
        connect4.rows[i].cells[j].style.backgroundColor = "white";
    }
}

for(let i = 0; i < numBtns.length; i++)
{
    numBtns[i].addEventListener("click", (e) => {
        let cols = event.target.value

    

    for(let j = 0; j < 6; j++)
    {

        let currentCell = connect4.rows[5-j].cells[i];
        if(currentCell.style.backgroundColor == "white")
        {
            if(h%2 == 0)
            {
                currentCell.style.backgroundColor = "red";
                console.log("coord: " + (5-j) + ", " + i)
                if(checkAll(5-j, i) == true)
                {
                    alert("RED WINS");
                    reset();
                }
                else if(total == 42)
                {
                    alert("TIE")
                    reset();
                }
                h++;
                console.log(h);
                total++;
                break;
                console.log(h);
            }
            else
            {
                currentCell.style.backgroundColor = "blue";
                if(checkAll(5-j, i) == true)
                {
                    alert("BLUE WINS");
                    reset();
                }
                else if(total == 42)
                {
                    alert("TIE")
                    reset();
                }
                h++;
                console.log(h);
                total++;
                break;
                console.log(h);
            }

        }
    }
    })
}

function chkR(y,x)
{
    let curCell = connect4.rows[y].cells[x]

    if(checkBound(y, x+1) == true)
    {
        if(connect4.rows[y].cells[x+1].style.backgroundColor != curCell.style.backgroundColor)
        {
            return false;
        }
        else if(chkLRMid(y, x) == true)
        {
            console.log("CALLED, chkLRMid is TRUE")
            return true;
        }
        else if(true)
        {
            let iter = 1;

            for(let i = 1; i < 4; i++)
            {
                if(checkBound(y,x+i) && (connect4.rows[y].cells[x+i].style.backgroundColor == curCell.style.backgroundColor))
                    iter++;
            }

            if(iter == 4)
            {
                iter = 1;
                return true;
            }
        }
        else if(connect4.rows[y].cells[x+1].style.backgroundColor == curCell.style.backgroundColor)
        {
            chkR(y, x+1)
        }
    }
}   //end chkR
function chkL(y,x)
{
    let curCell = connect4.rows[y].cells[x]

    if(checkBound(y, x-1) == true)
    {
        if(connect4.rows[y].cells[x-1].style.backgroundColor != curCell.style.backgroundColor)
        {
            return false;
        }
        else if(chkLRMid(y, x) == true)
        {
            console.log("CALLED, chkLRMid is TRUE")
            return true;
        }
        else if(true)
        {
            let iter = 1;

            for(let i = 1; i < 4; i++)
            {
                if(checkBound(y,x-i) && (connect4.rows[y].cells[x-i].style.backgroundColor == curCell.style.backgroundColor))
                    iter++;
            }

            if(iter == 4)
            {
                iter = 1;
                return true;
            }
        }
        else if(connect4.rows[y].cells[x+1].style.backgroundColor == curCell.style.backgroundColor)
        {
            chkL(y, x+1)
        }
    }
} //end chkL
function chkUp(y,x)
{
    let curCell = connect4.rows[y].cells[x]

    if(checkBound(y+1, x) == true)
    {
        if(connect4.rows[y+1].cells[x].style.backgroundColor != curCell.style.backgroundColor)
        {
            return false;
        }
        else if(true)
        {
            let iter = 1;

            for(let i = 1; i < 4; i++)
            {
                if(checkBound(y+i,x) && (connect4.rows[y+i].cells[x].style.backgroundColor == curCell.style.backgroundColor))
                    iter++;
            }

            if(iter == 4)
            {
                iter = 1;
                return true;
            }
        }
        else if(connect4.rows[y+1].cells[x].style.backgroundColor == curCell.style.backgroundColor)
        {
            chkL(y+1, x)
        }
    }
}//end chkUp
function chkUR(y,x)
{
    let curCell = connect4.rows[y].cells[x]

    if(checkBound(y-1, x+1) == true)
    {
        if(connect4.rows[y-1].cells[x+1].style.backgroundColor != curCell.style.backgroundColor)
        {
            return false;
        }
        else if(chkDiagMid(y, x) == true)
        {
            console.log("CALLED, chkDiagMid is TRUE")
            return true;
        }
        else if(true)
        {
            let iter = 1;

            for(let i = 1; i < 4; i++)
            {
                if(checkBound(y-i,x+i) && (connect4.rows[y-i].cells[x+i].style.backgroundColor == curCell.style.backgroundColor))
                    iter++;
            }

            if(iter == 4)
            {
                iter = 1;
                return true;
            }
        }
        else if(connect4.rows[y-1].cells[x+1].style.backgroundColor == curCell.style.backgroundColor)
        {
            chkUR(y-1, x+1)
        }
    }
}//end chkUR
function chkUL(y,x)
{

    let curCell = connect4.rows[y].cells[x]

    if(checkBound(y-1, x-1) == true)
    {
        if(connect4.rows[y-1].cells[x-1].style.backgroundColor != curCell.style.backgroundColor)
        {
            return false;
        }
        else if(chkDiagMid(y, x) == true)
        {
            console.log("CALLED, chkDiagMid is TRUE")
            return true;
        }
        else if(true)
        {
            let iter = 1;

            for(let i = 1; i < 4; i++)
            {
                if(checkBound(y-i,x-i) && (connect4.rows[y-i].cells[x-i].style.backgroundColor == curCell.style.backgroundColor))
                    iter++;
            }

            if(iter == 4)
            {
                iter = 1;
                return true;
            }
        }
        else if(connect4.rows[y-1].cells[x-1].style.backgroundColor == curCell.style.backgroundColor)
        {
            chkUL(y-1, x-1)
        }
    }
}//end chkUL
function chkLR(y,x)
{
    let curCell = connect4.rows[y].cells[x]

    if(checkBound(y+1, x+1) == true)
    {
        if(connect4.rows[y+1].cells[x+1].style.backgroundColor != curCell.style.backgroundColor)
        {
            return false;
        }
        else if(chkDiagMid(y, x) == true)
        {
            console.log("CALLED, chkDiagMid is TRUE")
            return true;
        }
        else if(true)
        {
            let iter = 1;

            for(let i = 1; i < 4; i++)
            {
                if(checkBound(y+i,x+i) && (connect4.rows[y+i].cells[x+i].style.backgroundColor == curCell.style.backgroundColor))
                    iter++;
            }

            if(iter == 4)
            {
                iter = 1;
                return true;
            }
        }
        else if(connect4.rows[y+1].cells[x+1].style.backgroundColor == curCell.style.backgroundColor)
        {
            chkLR(y+1, x+1)
        }
    }
}//end chkLR
function chkLL(y,x)
{
    let curCell = connect4.rows[y].cells[x]

    if(checkBound(y+1, x-1) == true)
    {
        if(connect4.rows[y+1].cells[x-1].style.backgroundColor != curCell.style.backgroundColor)
        {
            return false;
        }
        else if(chkDiagMid(y, x) == true)
        {
            console.log("CALLED, chkDiagMid is TRUE")
            return true;
        }
        else if(true)
        {
            let iter = 1;

            for(let i = 1; i < 4; i++)
            {
                if(checkBound(y+i,x-i) && (connect4.rows[y+i].cells[x-i].style.backgroundColor == curCell.style.backgroundColor))
                    iter++;
            }

            if(iter == 4)
            {
                iter = 1;
                return true;
            }
        }
        else if(connect4.rows[y+1].cells[x-1].style.backgroundColor == curCell.style.backgroundColor)
        {
            chkLL(y+1, x-1)
        }
    }
}//end chkLL
function chkLRMid(y,x)
{
    let curColor = connect4.rows[y].cells[x].style.backgroundColor;

    if(checkBound(y,x-1) && checkBound(y,x+1) && checkBound(y,x+2) && connect4.rows[y].cells[x+2].style.backgroundColor != "white")
    {
        let oLe = connect4.rows[y].cells[x-1].style.backgroundColor;
        let oRi = connect4.rows[y].cells[x+1].style.backgroundColor;
        let tRi = connect4.rows[y].cells[x+2].style.backgroundColor;
        
        if(oLe == curColor && oRi == curColor && tRi == curColor){
            console.log("WORKS: 0x00")
            return true;
        }
    }
    else if(checkBound(y,x-2) && checkBound(y,x-1) && checkBound(y,x+1))
    {
        let tLe = connect4.rows[y].cells[x-2].style.backgroundColor;
        let oLe = connect4.rows[y].cells[x-1].style.backgroundColor;
        let oRi = connect4.rows[y].cells[x+1].style.backgroundColor;

        if(tLe == curColor && oLe == curColor && oRi == curColor){
            console.log("WORKS: 00x0")
            return true;
        }
    }
    else
        return false
}
function chkDiagMid(y,x)
{
    console.log("IS CALLED")
    let curColor = connect4.rows[y].cells[x].style.backgroundColor;

    if(checkBound(y-1,x+1) && checkBound(y+1,x-1) && checkBound(y+2,x-2))
    {
        let oUR = connect4.rows[y-1].cells[x+1].style.backgroundColor;
        let oDL = connect4.rows[y+1].cells[x-1].style.backgroundColor;
        let tDL = connect4.rows[y+2].cells[x-2].style.backgroundColor;
        
        if(oUR == curColor && oDL == curColor && tDL == curColor){
            console.log("WORKS:***0") //y-1, x+1
            console.log("WORKS:**X*")
            console.log("WORKS:*0**") //y+1, x-1
            console.log("WORKS:0***") //y+2, x-2
            return true;
        }
    }
    else if(checkBound(y-2,x+2) && checkBound(y-1,x+1) && checkBound(y+1,x-1))
    {
        let tUR = connect4.rows[y-2].cells[x+2].style.backgroundColor;
        let oUR = connect4.rows[y-1].cells[x+1].style.backgroundColor;
        let oDL = connect4.rows[y+1].cells[x-1].style.backgroundColor;

        if(tUR == curColor && oUR== curColor && oDL == curColor){
            console.log("WORKS:***0") //y-2, x+2
            console.log("WORKS:**0*")// y-1, x+1
            console.log("WORKS:*X**")
            console.log("WORKS:0***") //y+1, x-1
            return true;
        }
    }
    else if(checkBound(y-1,x-1) && checkBound(y+1,x+1) && checkBound(y+2,x+2))
    {
        let oUL = connect4.rows[y-1].cells[x-1].style.backgroundColor;
        let oDR = connect4.rows[y+1].cells[x+1].style.backgroundColor;
        let tDR = connect4.rows[y+2].cells[x+2].style.backgroundColor;
        
        if(oUL == curColor && oDR == curColor && tDR == curColor){
            console.log("WORKS:0***")   //y-1, x-1
            console.log("WORKS:*X**")   
            console.log("WORKS:**0*")   //y+1, x+1
            console.log("WORKS:***0")   //y+2, x+2
            return true;
        }
    }
    else if(checkBound(y-2,x-2) && checkBound(y-1,x-1) && checkBound(y+1,x+1))
    {
        let tUL = connect4.rows[y-2].cells[x-2].style.backgroundColor;//------------------------
        let oUL = connect4.rows[y-1].cells[x-1].style.backgroundColor;
        let oDR = connect4.rows[y+1].cells[x+1].style.backgroundColor;

        if(tUL == curColor && oUL == curColor && oDR == curColor){
            console.log("WORKS:0***") //y-2, x-2
            console.log("WORKS:*0**")   //y-1, x-1
            console.log("WORKS:**X*")
            console.log("WORKS:***0") //y+1, x+1
            return true;
        }
    }
    else
        return false
}
function checkBound(p,q){   //checks if cell is inside board bounds
    if((p < 0) || (p > 5) || (q < 0) || (q > 6))
        return false;
    else
        return true;

}
function checkAll(a, b){
    if(chkR(a,b) == true || chkL(a,b) == true || chkUp(a,b) == true || chkUR(a,b) == true || chkUL(a,b) == true || chkLR(a,b) == true || chkLL(a,b) == true)
        return true;
    else
        return false;

}
function reset(){
    console.log("RESET CALLED")
    h=1;
    console.log(h);
    total = 0;

    for(let i = 0; i < 6; i++)
    {
        for(let j = 0; j < 7; j++)
        {
            connect4.rows[i].cells[j].style.backgroundColor = "white";
        }
    }
}