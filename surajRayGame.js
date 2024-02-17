let i = 0;

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
        if (i > 3) {
            checkWinner(i);
        }
    });
});

//Functions that update value as 'o' and 'x' in the buttons are called alternatively with the help of iterator 'i'

let oFunction = (el) => {
    el.innerText = "O";
    el.classList.add("o-class");
    i++;
};

let xFunction = (el) => {
    el.innerText = "X";
    el.classList.add("x-class");
    i++;
};

//Winner checker function

function checkWinner(i) {

    // Checking if any Row has same text (o/x) and calling mssg updation function

    if (btns[0].innerText === btns[1].innerText && btns[1].innerText === btns[2].innerText) {
        displayMsg(i);
    }

    if (btns[3].innerText === btns[4].innerText && btns[4].innerText === btns[5].innerText) {
        displayMsg(i);
    }

    if (btns[6].innerText === btns[7].innerText && btns[7].innerText === btns[8].innerText) {
        displayMsg(i);
    }

    // Checking if any Column has same text (o/x) and calling mssg updation function

    if (btns[0].innerText === btns[3].innerText && btns[3].innerText === btns[6].innerText) {
        displayMsg(i);
    }

    if (btns[1].innerText === btns[4].innerText && btns[4].innerText === btns[7].innerText) {
        displayMsg(i);
    }

    if (btns[2].innerText === btns[5].innerText && btns[5].innerText === btns[8].innerText) {
        displayMsg(i);
    }

    // Check if any of the Diagonals has the same text(o/x)

    if (btns[0].innerText === btns[4].innerText && btns[4].innerText === btns[8].innerText) {
        displayMsg(i);
    }

    if (btns[2].innerText === btns[4].innerText && btns[4].innerText === btns[6].innerText) {
        displayMsg(i);
    }

}

//Accessing the h1 message and altering based on i as i becomes odd after every 'O' due to i++ and even after 'X' due to i++
//Reloading the page after 3 seconds (3000 miliseconds)  of winner announcement

let displayMsg = () => {
    let winMsg = document.querySelector("h1");
    if (i % 2 === 1) {
        winMsg.innerText = "O is the Winner !!";

        setTimeout(() => {

            location.reload();

        }, 3000);

    } else {
        winMsg.innerText = "X is the Winner !!";

        setTimeout(() => {

            location.reload();

        }, 3000);
    }
};