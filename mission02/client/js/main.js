import { getNode, bindEvent } from "./../lib/index.js";
import { data } from "./data.js";

let title1 = getNode(".nickName");
const poster1 = getNode(".visual img");
const nav1 = getNode(".nav");

function setNameText(target) {
  let name1Text = `${target.alt}`;
  let name1Text__cut = `${target.alt}`.indexOf(" ");
  let name1 = name1Text.slice(0, name1Text__cut);

  title1.textContent = name1;
}

function setNameImage(target) {
  poster1.src = target.src;
}

function setBgColor(target) {
  let chosenCharacter = 0;
  let switcherCharacter = `${target.alt}`;
  let backGround1 = getNode("body");

  switch (true) {
    case switcherCharacter === "엠버 포스터":
      chosenCharacter = 0;
      break;
    case switcherCharacter === "웨이드 포스터":
      chosenCharacter = 1;
      break;
    case switcherCharacter === "클로드 포스터":
      chosenCharacter = 2;
      break;
    case switcherCharacter === "게일 포스터":
      chosenCharacter = 3;
      break;
  }

  let colorA = data[chosenCharacter].color[0];
  let colorB = data[chosenCharacter].color[1];
  backGround1.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}

function changeCharacterTheme(e) {
  let target = e.target;

  if (target.tagName === "IMG") {
    setNameText(target);
    setNameImage(target);
    setBgColor(target);
  }
}

bindEvent(nav1, "click", changeCharacterTheme);
