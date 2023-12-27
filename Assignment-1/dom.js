console.log('satya is here');

let home = document.getElementById('home');
console.log(home.innerHTML);
home.innerHTML='New Home';
let headers = document.getElementsByClassName('main');
console.log(headers);
headers[2].innerHTML='About';
// for(let all_change of headers ){
//     all_change.innerHTML = 'All change';
// }

let last=document.querySelector('#contact');
last.innerHTML='contact changed';
//======================problems=======================
let spantag=document.getElementById('para');
console.log( 'innerHTML', para.innerHTML); //tag not visible 
console.log( 'innerText', para.innerText);
console.log( 'innerContent', para.innerContent);//undefined in consol
//======================================================

document.getElementById('home-2').style.display ='none';
document.getElementById('home-2').style.display ='block';