import { getNode, bindEvent } from "./../lib/index.js";


let title1 = getNode('.nickName')
const poster1 = getNode('.visual img')

const nav1 = getNode('.nav');

function changeCharacterTheme(e){
  let target = e.target;

  let name1Text = `${target.alt}`;
  let name1Text__cut = (`${target.alt}`).indexOf(' ');
  let name1 = name1Text.slice(0,name1Text__cut);
  
  if(target.tagName == 'IMG')
  {
    poster1.src = target.src;
    title1.textContent = name1;
    
  }
    
}

bindEvent(nav1,'click',changeCharacterTheme);