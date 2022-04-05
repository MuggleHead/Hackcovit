"use strict";

const imgs = Array.from(document.querySelectorAll(".hero-bg-imgs img"));

const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue = null;
  let randomIndex = null; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const startFadeIn = elms => {
  const className = "js-fade-in";
  shuffle(elms).forEach((el, index) => {
    const delay = index * 400;
    setTimeout(() => el.classList.add(className), delay);
  });
};

startFadeIn(imgs); // restart


const restart = elms => {
  const className = "js-fade-in";
  elms.forEach(el => el.classList.remove(className));
  setTimeout(() => startFadeIn(elms), 500);
};

