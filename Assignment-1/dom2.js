let newlink = document.createElement('a');
newlink.innerText = 'hi satya'
newlink.setAttribute('href','#');
console.log('newlink');

let parentdiv = document.getElementsByClassName('card-body')[0];
parentdiv.appendChild(newlink);

let newimg = document.createElement('img');
newimg.setAttribute('src','satya.jpg');
console.log('newimg');
let parentimg = document.getElementsByClassName('card-body')[0];
newimg.setAttribute('class','images');
parentimg.appendChild(newimg);

let edit=document.createElement('h1');
edit.innerText='Satya'
let edit1 = document.getElementsByClassName('lorem')[0];
edit1.append(edit);
console.log('edit');
edit.setAttribute('id','satya');
let new1 = document.getElementById('textt');
new1.append('Hello Satya i am last');// in last para
new1.prepend(' I am first ');// in starting para

