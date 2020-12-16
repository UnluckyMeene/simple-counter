"use strict";

class Counter {
    constructor() {
        this.currentCount = 0;
    }

    increase() {
        this.currentCount++;
    }

    decrease() {
        this.currentCount--;

        if (this.currentCount < 0) {
            alert("You can't go any further!");
            this.reset();
        }
    }

    update(elem) {
        elem.textContent = this.currentCount;
    }

    reset() {
        this.currentCount = 0;
    }
}


let counterResult = document.querySelector("#counter-result");
let myCounter = new Counter();

const btn = document.querySelectorAll(".interaction");

let handler = function (e) {
    if (e.target.id == "increase-counter") myCounter.increase();
    else if (e.target.id == "decrease-counter") myCounter.decrease();
    else myCounter.reset();

    myCounter.update(counterResult);
};

btn.forEach((item) => item.addEventListener("click", handler));