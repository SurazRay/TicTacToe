let i = 0;
let msgBox = document.querySelector(".msg");
let winMsg = document.querySelector("h1");
let newGame = document.querySelector(".play");
let resetGame = document.querySelector(".reset");

//Accessing the buttons and adding Event listeners on them

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {

    btn.addEventListener("click", (e) => {

        if (i % 2 === 0) {
            oFunction(e.target);
        }
        else {
            xFunction(e.target);
        }
        //Calling function that will check if someone wins;
        if (i > 4) {
            checkWinner(i);
        }
    });
});

//Functions that update value as 'o' and 'x' in the buttons are called alternatively with the help of iterator 'i'
//Disbling the button so that entered symbol can not be edited

let oFunction = (el) => {
    el.innerText = "O";
    el.classList.add("o-class");
    el.disabled = true;
    i++;
};

let xFunction = (el) => {
    el.innerText = "X";
    el.classList.add("x-class");
    el.disabled = true;
    i++;
};

//Winner checker function

function checkWinner(i) {

    //Checking if they are not empty by middle/ common index as if it is empty, if will not execute and if it is not empty then neither can LHS and RHS indices can be.
    // Checking if any Row has same text (o/x) and calling mssg updation function

    if ((btns[1].innerText != "") && (btns[0].innerText === btns[1].innerText && btns[1].innerText === btns[2].innerText)) {
        displayMsg(i);
    }

    if ((btns[4].innerText != "") && (btns[3].innerText === btns[4].innerText && btns[4].innerText === btns[5].innerText)) {
        displayMsg(i);
    }

    if ((btns[7].innerText != "") && (btns[6].innerText === btns[7].innerText && btns[7].innerText === btns[8].innerText)) {
        displayMsg(i);
    }

    // Checking if any Column has same text (o/x) and calling mssg updation function

    if ((btns[3].innerText != "") && (btns[0].innerText === btns[3].innerText && btns[3].innerText === btns[6].innerText)) {
        displayMsg(i);
    }

    if ((btns[4].innerText != "") && (btns[1].innerText === btns[4].innerText && btns[4].innerText === btns[7].innerText)) {
        displayMsg(i);
    }

    if ((btns[5].innerText != "") && (btns[2].innerText === btns[5].innerText && btns[5].innerText === btns[8].innerText)) {
        displayMsg(i);
    }

    // Check if any of the Diagonals has the same text(o/x)

    if ((btns[4].innerText != "") && (btns[0].innerText === btns[4].innerText && btns[4].innerText === btns[8].innerText)) {
        displayMsg(i);
    }

    if ((btns[4].innerText != "") && (btns[2].innerText === btns[4].innerText && btns[4].innerText === btns[6].innerText)) {
        displayMsg(i);
    }

}

//Accessing the h1 message and altering based on i as i becomes odd after every 'O' due to i++ and even after 'X' due to i++
//Showing the winner message

let displayMsg = () => {
    if (i % 2 === 1) {
        winMsg.innerText = "O is the Winner !!";

    } else {
        winMsg.innerText = "X is the Winner !!";

    }

    //Making nmessage box visible and reset button invisible and give reset's margin to main tag

    msgBox.style.display = "block";
    resetGame.style.display = "none";
    document.querySelector("main").style.marginBottom = "28vmin";
    // Disabling all buttons
    btns.forEach((btn) => {
        btn.disabled = "true";
    });
};

//Reloading page for new game and reset gaem buttons presses

newGame.addEventListener("click", () => {
    window.location.reload();
});

resetGame.addEventListener("click", () => {
    window.location.reload();
});
