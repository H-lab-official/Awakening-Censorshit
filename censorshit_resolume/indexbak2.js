var ul = document.querySelector("#listqname");
var timertext = document.querySelector("#timer");

const getPlayerContent = async (keyID)=>{
// const eventref = firebase.database().ref('Emojis/player/'+keyID);
const eventref = firebase.database().ref('Emojis/playerList/'+keyID);
const snapshot = await eventref.once('value');
const value = snapshot.val();
console.log("snapshotval = "+value);
if(value===null){
}else{
let outputdiv = document.querySelector('#outputarea');
let whosaiddiv = document.querySelector('.whosay');
whosaiddiv.innerHTML = `${value['name']} said:`;
outputdiv.value = value['content'];
console.log(JSON.stringify(value));
let countTime = 30;
console.log("remainTIme = "+countTime);
let timer = setInterval(() => {
--countTime;
timertext.innerHTML =`${countTime} seconds.`;
if(countTime<=20){
    changeText(outputdiv);
}

if(countTime<=0){
// ul.innerHTML="";
clearInterval(timer);
}
}, 1000);
return value;
}
}
const listwatingpeople = async ()=>{
// const eventref = firebase.database().ref('Emojis/player');
const eventref = firebase.database().ref('Emojis/playerList');
const snapshot = await eventref.limitToFirst(10).once('value');
const value = snapshot.val();
ul.innerHTML="";
if(value===null){
}else{
objlength = Object.keys(value).length
console.log('objlength = '+objlength);
console.log('obj = '+JSON.stringify(value));
for (let i = 1; i < objlength; i++) {
let qname = value[Object.keys(value)[i]];
console.log('qname = '+qname['name']);
// let li = document.createElement("li");
let li = document.createElement("div");
li.innerHTML = `${i}.${qname['name']}`;
console.log("qbane = "+qname['name']);
// li.appendChild(document.createTextNode(qname['name']));
ul.appendChild(li);
}
}
return value;
}
const checkNowplayerchange = async ()=>{
console.log("checkQ");
await firebase.database().ref(`Emojis/nowPlayer/`).on('value',(dataSnapshot)=> {
let nowplayer = dataSnapshot.val();
nowplayer = nowplayer['name']
console.log("nowplayer = "+nowplayer);
if(nowplayer!=""){
getPlayerContent(nowplayer);
// listwatingpeople();
}
});
}
const checkcountQ = async ()=>{
console.log("checkQ");
await firebase.database().ref(`Emojis/countQ/`).on('value',(dataSnapshot)=> {
let countQ = dataSnapshot.val();
countQ = countQ['val']
console.log("countQ = "+countQ);
if(countQ!=0){
listwatingpeople();
}
});
}

String.prototype.replaceAt = function (index, char) {
  let a = this.split("");
  a[index] = char;
  return a.join("");
}

const changeText=(outputdiv2)=>{
    
    let mainstring = outputdiv2.value
    console.log(outputdiv2.value);
    let blackbox = String.fromCodePoint('0x2b1b');
    let count = 0;
   let timerchangeText =  setInterval(() => {
        mainstring = mainstring.replaceAt(count, blackbox);
        outputdiv2.value = mainstring;
        count = count+1
        
        if(count==outputdiv2.value.length){
            clearInterval(timerchangeText);
            console.log("timeOut = "+outputdiv2.value);
        }
    }, 100);

    // for (let index = 0; index < outputdiv2.value.length; index++) {
    //     const element = outputdiv2.value[index];
        
    //     outputdiv2.value[index] = '0x2b1b';
        
    //     // console.log(`${index} = ${blackbox}`);
    //     // console.log(`${index} = ${outputdiv2.value[index]}`);
    //     outputdiv2.value = mainstring;
    //     console.log(mainstring);
        
    // }
}

checkNowplayerchange();
checkcountQ();
// changeText();


