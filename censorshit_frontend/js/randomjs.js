// const characters = [
//     'a','b','c','d','e','f','g','h','i','j','k','l','m',
//     'n','o','p','q','r','s','t','u','v','w','x','y','z',' ',
//     'ก'
// ]
// const charactersz = [
// "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
// "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"," ",
// "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
// "~", "`", "!", "@", "#", "£", "€", "$", "¥", "%",
// "°", "^", "&", "*", "(", ")", "-", "_", "+", "=",
// "{", "}", "[", "]", "|", "\\", "/", ":", ";", "\"",
// "\'", "<", ">", ",", ".", "?", "¢", "§"
// ]

const characters = [
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"," ",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
".", ",", "\"","\'", "~", "•", "@", "#", "%", "^",
"&", "_", "-", "*", "+", "=", "<", ">", "(", ")",
"{", "}", "[", "]", "|", "\\", "/", ":", ";", "?",
"!", "¢", "£", "€", "$", "¥"
]

// const funckingthings = ["prayut","vachiralongkorn"];
const funckingthings = [];



// const emojisz = [
//     0x1F600,0x1F603,0x1F604,0x1F601,0x1F606,0x1F605,0x1F923,0x1F602,0x1F642,0x1F643,0x1F609,0x1F60A,0x1F607,
//     0x1F970,0x1F60D,0x1F929,0x1F618,0x1F617,0x1F61A,0x1F60B,0x1F61B,0x1F61C,0x1F92A,0x1F61D,0x1F911,0x1F917,0x1F92D,


//     0x1F600,0x1F603,0x1F604,0x1F601,0x1F606,0x1F605,0x1F923,0x1F602,0x1F642,0x1F643,

//     0x1F600,0x1F603,0x1F604,0x1F601,0x1F606,0x1F605,0x1F923,0x1F602,0x1F642,0x1F643,
//     0x1F600,0x1F603,0x1F604,0x1F601,0x1F606,0x1F605,0x1F923,0x1F602,0x1F642,0x1F643,
//     0x1F600,0x1F603,0x1F604,0x1F601,0x1F606,0x1F605,0x1F923,0x1F602,0x1F642,0x1F643,
//     0x1F600,0x1F603,0x1F604,0x1F601,0x1F606,0x1F605
// ]
// const emojisbak = [
//     0x1F600,0x1F603,0x1F604,0x1F601,0x1F606,0x1F605,0x1F923,0x1F602,0x1F642,0x1F643,0x1F609,0x1F60A,0x1F607,
//     0x1F970,0x1F60D,0x1F929,0x1F618,0x1F617,0x1F61A,0x1F60B,0x1F61B,0x1F61C,0x1F92A,0x1F61D,0x1F911,0x1F917,0x1F92D,


//     0x1F624,0x1F621,0x1F620,0x1F92C,0x1F608,0x1F47F,0x1F480,0x1F4A9,0x1F921,0x1F479,

//     0x1F47A,0x1F47B,0x1F47D,0x1F47E,0x1F916,0x1F63B,0x1F63D,0x1F64A,0x1F648,0x1F649,
//     0x1F48B	,0x1F5A4,0x1F4AB,0x1F4A3,0x1F44B,0x1F44C,0x1F91E,0x1F446,0x1F44A,0x1F64F,
//     0x1F9E0,0x1F9B7,0x1F9B4,0x1F436,0x1F981,0x1F42F,0x1F434,0x1F984,0x1F42E,0x1F437,
//     0x1F439,0x1F430,0x1F428,0x1F423,0x1F989,0x1F414
// ]
const emojis = [129324,128513,128123,128155,128051,128070,129325,128525,129460,127825,128037,128025,128074,128020,128169,128536,129310,128154,128139,128122,128579,129321,128515,129299,127775,128125,129302,129303,128128,128048,128523,129412,128591,128130,127812,128163,128075,128171,128293,129322,128538,128110,129409,128049,129313,127804,128055,128584,129418,128046,128585,127797,129297,129463,128518,128522,128571,128035,128150,128519,129315,127868,128076,128139,128057,129504,128054,129395,128544,129326,128586,128047,128548];
// const emojis = [
//     0x1F49B,0x1F603,0x1F49A,0x1F601,0x1F606,0x1F496, 
//     0x1F923,0x1F48B,0x1F913,0x1F643,0x1F973,0x1F60A, 
//     0x1F607,0x1F92E,0x1F60D,0x1F929,0x1F618,0x1F46E, 
//     0x1F61A,0x1F60B,0x1F482,0x1F98A,0x1F92A,0x1F431, 
//     0x1F911,0x1F917,0x1F92D,


//     0x1F624,0x1F433,0x1F620,0x1F92C,0x1F425,0x1F419,
//     0x1F480,0x1F4A9,0x1F921,0x1F33C,
    
//     0x1F47A,0x1F47B,0x1F47D,0x1F335,0x1F916,0x1F63B,
//     0x1F351,0x1F64A,0x1F648,0x1F649,0x1F48B,0x1F344,
//     0x1F4AB,0x1F4A3,0x1F44B,0x1F44C,0x1F91E,0x1F446,
//     0x1F44A,0x1F64F,0x1F9E0,0x1F9B7,0x1F9B4,0x1F436,
//     0x1F981,0x1F42F,0x1F37C,0x1F984,0x1F42E,0x1F437,
//     0x1F439,0x1F430,0x1F31F,0x1F423,0x1F525,0x1F414
// ]

const censorCharacter ='ก';
const censorEmoji = 0x1F4A9;

let username = '';

let output_height = 0;

let remainTime = 0;

let emoji_output = [];

let randomEmoji=[];

let decoder_emoji = {};

let output_string = "";

let counqmorethan = 2;

let now_today = 11;


//------------START FIREBASE FUNCTION------------//
const getNowSecond = async () =>{
    const eventref = firebase.database().ref('Emojis/nowSecond/val');
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
    return value;
}

const getCountQ = async ()=>{
    const eventref = firebase.database().ref('Emojis/countQ/val');
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
    return value;
}


const setCountQ = async () =>{
    // firebase.database().ref("Emojis/countQ").set({
    //          "val" : countq
    // });
        let countQ=0;
        var ref = firebase.database().ref('Emojis/countQ/val');
        let transaction =  await ref.transaction(function(currentCountQ) {
            countQpublic = currentCountQ+1;
            countQ = currentCountQ+1;
            console.log("currentCountQ = "+currentCountQ);
            // If node/clicks has never been set, currentRank will be `null`.
            return (currentCountQ || 0) + 1;
        });
        return countQ;
}

const checkAllow = async () =>{
    // firebase.database().ref("Emojis/countQ").set({
    //          "val" : countq
    // });
    console.log("KUY");
    let getallowRef = firebase.database().ref(`Emojis/allowTransaction/val`);
    getallowRef.on('value',async (dataSnapshot)=> {
        console.log("KUY2");
        let allow = dataSnapshot.val();
        console.log("AllowTransaction = "+dataSnapshot.val());
        if(allow==1){
                let countQ = await setCountQ();

                console.log("KUY3 = "+countQ);
                if(countQ==1){
                    sethaveQ(1);
                    let delayres = await delay(500);
                    let lastID = await getFirstID();
                    lastID = ""+Object.keys(lastID);
                    remainTime = 0;
                    setnowPlayer(lastID);
                    getallowRef.off();
                    counqmorethan = 0;
                    // alert("COUNTQ==1")
                    if(counqmorethan==0){
                        // controller(7);
                        controller(8);
                    }
                    
                }else{
                    console.log("KUY4");
                    console.log("COUNTQ iNCorrect = "+countQ);
                    let nowSecond = 0;
                    
                    let setSecondRef = firebase.database().ref(`Emojis/nowSecond/val`);
                    setSecondRef.on('value',async (dataSnapshot)=> {
                            nowSecond= dataSnapshot.val();
                            console.log("nowSecond = "+nowSecond);
                            if(nowSecond>0){
                                remainTime = nowSecond + ((countQ-2)*30);
                                setSecondRef.off();
                                getallowRef.off();
                                // alert("countQ ="+countQ);
                                counqmorethan = 1;
                                // alert("COUNTQ>1")
                                if(counqmorethan==1){
                                    controller(7);
                                }
                                
                                
                            }
                    });
                }
                
        }else if(allow==0){
            console.log("KUY0");
        }
        
    });
}




const gethaveQ = async () =>{
    const eventref = firebase.database().ref('Emojis/haveQ/val');
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
    return value;
}


const sethaveQ =  (haveQ) =>{
     firebase.database().ref("Emojis/haveQ").set({
             "val" : haveQ
    });
}


const getCountPlayer = async ()=>{
    const eventref = firebase.database().ref('Emojis/countPlayer/val');
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
    return value;
}

const setCountPlayer = async (countq) =>{
    // await firebase.database().ref("Emojis/countPlayer").set({
    //          "val" : countq
    // });
    var ref = firebase.database().ref('Emojis/countPlayer/val');
    let transaction =  await ref.transaction(function(currentCountQ) {
        return (currentCountQ || 0) + 1;
    });
}

const setCountPlayerday = async (day) =>{
    // await firebase.database().ref("Emojis/countPlayer").set({
    //          "val" : countq
    // });
    var ref = firebase.database().ref('Emojis/daycounts/'+day+'/val');
    let transaction =  await ref.transaction(function(currentCountQ) {
        return (currentCountQ || 0) + 1;
    });
}

const getFirstID = async ()=>{
    const eventref = firebase.database().ref('Emojis/playerList');
    const snapshot = await eventref.limitToFirst(1).once('value');
    const value = snapshot.val();
    return value;
}

const setnowPlayer = async (keyID)=>{
    // console.log("insertTest");
    await firebase.database().ref("Emojis/nowPlayer").set({
             "name" : keyID
    });
}

const pushPlayer = async (username,content)=>{
    // let username = "player3";
    console.log("insertTest");
    let playerRef = await firebase.database().ref("Emojis/player").push({
             "name" : username,
             "content" : content
    });

        let playerRef2 = await firebase.database().ref("Emojis/playerList").push({
             "name" : username,
             "content" : content
    });
    

    // firebase.database().ref("Emojis/playerList/"+playerRef.key).set({
    //          "name" : username,
    // });
    
    // return playerRef.key;
}

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });

}

const InsertQ = async (username,content)=>{
    console.log("USERNAME = "+username);
    pushPlayer(username,content);
    // let countQ = await setCountQ();
    setCountPlayerday(now_today)
    setCountPlayer();
    checkAllow();
    // countQpublic

} 
//------------END FIREBASE FUNCTION------------//
const addAutoResize=()=>{
    // alert("autoresize")
            document.querySelectorAll('[data-autoresize]').forEach(function (element) {
                console.log(element);
                element.style.boxSizing = 'border-box';
                var offset = element.offsetHeight - element.clientHeight;
                element.addEventListener('input', function (event) {
                    event.target.style.height = 'auto';
                    event.target.style.height = event.target.scrollHeight + offset + 'px';
                });
                element.removeAttribute('data-autoresize');
            });
}

const func =(a, b) =>{  
  return 0.5 - Math.random();
}  

const randommapping = (emojis_arr) =>{
    randomEmoji = emojis_arr.sort(func)
    // randomEmoji = emojis_arr;
    for (let index = 0; index < emojis.length; index++) {
        // if(index%2==0){
        //     decoder_emoji[characters[index]] = characters[index];
        // }else{
        //     decoder_emoji[characters[index]] = String.fromCodePoint(randomEmoji[index]);
        // }
        decoder_emoji[characters[index]] = String.fromCodePoint(randomEmoji[index]);
        
    }
    // decoder_emoji[censorCharacter] = String.fromCodePoint(censorEmoji);
    console.log(JSON.stringify(decoder_emoji));
}

// const getInput = (event) =>{
//     let input_area = event.target.value;
//     let textarea = document.querySelector('#inputarea');
//     var pattern = new RegExp('^' + textarea.getAttribute('pattern') + '$');
//     var phoneResult = pattern.test(input_area);
//     if(phoneResult==false){
//         let new_textarea = textarea.value.substr(0,textarea.value.length-1);
//         textarea.value = new_textarea;
//         return false;
//     }
//     console.log("Rex ="+phoneResult);

//     let censor_input_area = censorFunckingthings(input_area);
//     console.log("censor = "+censor_input_area);
//     let output_string = "";
//     for (let index = 0; index < censor_input_area.length; index++) {
//         console.log(censor_input_area[index]=="\n");
//         if(censor_input_area[index]=="\n"){
//             output_string = output_string + "\n";
//         }else{
//             output_string = output_string + decoder_emoji[censor_input_area[index].toLowerCase()];
//         }
//         // console.log("newline = "+(censor_input_area.match(/\n/g)||[]).length);
        
//         // output_string = output_string + input_area[index].toLowerCase();
//     }
//     let outputDiv = document.querySelector('#outputarea');
//     outputDiv.innerHTML = output_string;
// }

// const mappingEmoji = (event) =>{
//     let divInputarea = document.querySelector('#inputarea');
//     let input_area = divInputarea.value;
//     let output_string = "";
//     for (let index = 0; index < input_area.length; index++) {
//         output_string = output_string + decoder_emoji[input_area[index].toLowerCase()];
//         // output_string = output_string + input_area[index].toLowerCase();
//     }
//     let outputDiv = document.querySelector('#outputarea');
//     outputDiv.innerHTML = output_string;    
// }

// const downloadDecoder = (event) =>{
//     console.log(JSON.stringify(event));
//     html2canvas(document.querySelector(".decoder")).then(function(canvas) {
//         console.log(canvas);
//         var dataURL = canvas.toDataURL('image/png');
//         console.log(dataURL);
//         this.href = dataURL;
//         // document.body.appendChild(canvas);
//     });
// }

const censorFunckingthings = (fuckingwords)=>{
    for (let index = 0; index < funckingthings.length; index++) {
       let countwords  = fuckingwords.indexOf(funckingthings[index]);
       console.log("countwords = "+countwords);
       while(countwords>=0){
        fuckingwords = fuckingwords.replace(funckingthings[index],"กกก");  
        countwords = fuckingwords.indexOf(funckingthings[index]);
       }
    }
    console.log(fuckingwords);
    return fuckingwords;
}


let splashsection = document.querySelector('.splashsection');
let explainsection = document.querySelector('.explainsection');

let inputnamesection = document.querySelector('.inputnamesection');
let tutorialsection = document.querySelector('.tutorialsection');
let poopcontentsection = document.querySelector('.poopcontentsection');
let poopwatingsection = document.querySelector('.poopwatingsection');
let pooptranslationsection = document.querySelector('.pooptranslationsection');
let poopsentsection = document.querySelector('.poopsentsection');
let poopplaysection = document.querySelector('.poopplaysection');



//----------------function for set css in each element----------------
const css=(element, style)=> {
    for (const property in style)
        element.style[property] = style[property];
}

let state = 1;

//----------------countText----------------
// const countText = (event) =>{
//     console.log("Countext = "+event.target.value);
//     let input_area = event.target.value;
//     let textarea = document.querySelector('#inputarea');
//     var pattern = new RegExp('^' + textarea.getAttribute('pattern') + '$');
//     var phoneResult = pattern.test(input_area);
//     if(phoneResult==false){
//         let new_textarea = textarea.value.substr(0,textarea.value.length-1);
//         textarea.value = new_textarea;
//         alert("Support English only")
//         return false;
//     }
// }


//----------------splash page----------------
const splashInit=()=>{
    let splashstart_btn = document.querySelector('#splashstart_btn');
    let shitlogoDiv =document.querySelector('.shitlogo');
    let startbtnDiv =document.querySelector('.startbtn');
    let hlablogoDiv =document.querySelector('.hlablogo');
    
    let today = new Date();
    // alert(today)
    today = today.toDateString().split(' ');
    today = today[2];
    now_today = today;
    console.log(now_today);
    
    
    splashstart_btn.onclick = ()=>{
        controller(2);
    }
}

//----------------instruction page----------------
const instructionInit = () =>{
    let tutorialsectionback_btn = document.querySelector('#tutorialsectionback_btn');
    let tutorialsectionnext_btn = document.querySelector('#tutorialsectionback_next');
    let tutorialsectionDiv = document.querySelector('.tutorialsection');
    tutorialsectionDiv.classList.add('animate__animated','animate__fadeIn','animate__slow')
    tutorialsectionback_btn.onclick = () =>{
        // controller(1);
    }

    tutorialsectionnext_btn.onclick = () =>{
        controller(2);
    }
}


//----------------inputname page----------------
const inputnameInit=()=>{
    let submit_btn = document.querySelector('#inputnamesubmit_btn');
    let nameinput = document.querySelector('.nameinput');
    let countingword = document.querySelector('#countingword');
    let inputnamesectionDiv = document.querySelector('.inputnamesection');
    inputnamesectionDiv.classList.add('animate__animated','animate__fadeIn','animate__slow')
    output_string = "";
    nameinput.value = "";
    
    nameinput.onkeyup = (event)=>{
        var pattern = new RegExp('^' + nameinput.getAttribute('pattern') + '$');
        
        let input_area2 = event.target.value;
        var phoneResult = pattern.test(input_area2);
        if(phoneResult==false){
            if(input_area2!=""){
                let new_textarea = nameinput.value.substr(0,nameinput.value.length-1);
                nameinput.value = new_textarea;
                alert("Support English only")
                return false;
            }else{
                return false;
            }
            
        }
    }
    

    submit_btn.onclick = () =>{
        if(nameinput.value!=""){
            let input_area = nameinput.value.toLowerCase();
            var pattern = new RegExp('^' + nameinput.getAttribute('pattern') + '$');
            var phoneResult = pattern.test(input_area);
            if(phoneResult==false){
                alert("Support English only")
                nameinput.value = "";
                return false;
            }
            // alert("Hello "+nameinput.value+" !!");
            username = nameinput.value;
            randommapping(emojis);
            controller(3);
        }else{
            alert("please input your name!");
        }
    }
}


//----------------explain page----------------
explainInit=()=>{
    let explainsubmit_btn = document.querySelector('#explainsubmit_btn');
    let explainggroup1 = document.querySelector('#explainggroup1');
    let explainggroup2 = document.querySelector('#explainggroup2');
    let explainggroup3 = document.querySelector('#explainggroup3');
    explainggroup1.classList.add('fadeinout');
    setTimeout(() => {
        explainggroup1.style.display = "none";
        explainggroup2.style.display = "flex";
        explainggroup2.classList.add('fadeinout');
        setTimeout(() => {
            explainggroup2.style.display = "none";
            explainggroup3.style.display = "flex";
            explainggroup3.classList.add('fadein');
        }, 5000);
    }, 5000);
    explainsubmit_btn.onclick =()=>{
        controller(4);
    }
}



//----------------poop add content page----------------
const poopcontentInit = () =>{
    // addAutoResize();
    let titlezdiv = document.querySelector('#poopcontenttitle');
    titlezdiv.classList.add('animate__animated','animate__fadeIn','animate__slow')
    let poopcontentsectionback_btn = document.querySelector('#poopcontentsectionback_btn');
    let convert_btn = document.querySelector('#poopcontentsectionnext_btn');
    let textarea = document.querySelector('#inputarea');
    textarea.classList.add('animate__animated','animate__fadeIn','animate__slow')
    let clickbtndiv = document.querySelector('.clickbtndiv');
    let offset = textarea.offsetHeight - textarea.clientHeight;
    textarea.onpaste = (event)=>{
        alert("Please do not Paste");
        event.preventDefault();
    }

    textarea.onkeyup = (event)=>{
        // console.log("Countext = "+event.target.value);
        let input_area = event.target.value;
        let newLines = input_area.split("\n").length;
        console.log("newLines = "+newLines);
        // var wordsCount = event.target.value.match(/\S+/g).length;
        var wordsCount = input_area.length;
        var wordRest = 140-wordsCount;
        if(wordRest<20){
            countingword.style.color ="red";
        }else{
            countingword.style.color ="black";
        }
        countingword.innerHTML=wordsCount+"/140";
        console.log('wordsCount = '+ wordsCount);
        console.log('wordsRest = '+ wordRest);
        console.log("words = "+input_area);
        let textarea = document.querySelector('#inputarea');
        var pattern = new RegExp('^' + textarea.getAttribute('pattern') + '$');
        var phoneResult = pattern.test(input_area);
        if(newLines>1){
            let new_textarea = textarea.value.substr(0,textarea.value.length-1);
            textarea.value = new_textarea;
            alert("Please do not Enter")
            return false;
        }
        if(phoneResult==false){
            if(input_area!=""){
                let new_textarea = textarea.value.substr(0,textarea.value.length-1);
                textarea.value = new_textarea;
                alert("Support English only")
                return false;
            }else{
                return false;
            }
            
        }
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
        output_height = textarea.getBoundingClientRect().height;
        if(output_height>screen.height-350){
            clickbtndiv.style.position = "relative"
        }else{
            clickbtndiv.style.position = "absolute"
        }
        console.log("output_height = "+output_height);
        console.log("screen_height = "+screen.height);
    };
    
    // poopcontentsectionback_btn.onclick = () =>{
    //     controller(2);
    // }
//2181
    convert_btn.onclick = () =>{
        if(textarea.value==""){
            alert("Please enter some text");
        }else{
            let input_area = textarea.value.toLowerCase();
            var pattern = new RegExp('^' + textarea.getAttribute('pattern') + '$');
            var phoneResult = pattern.test(input_area);
            if(phoneResult==false){
                alert("Support English only")
                textarea.value = "";
                return false;
            }
            
            let censor_input_area = censorFunckingthings(input_area);

            
            for (let index = 0; index < censor_input_area.length; index++) {
                console.log(censor_input_area[index]=="\n");
                // if(censor_input_area[index]=="\n"){
                //     output_string = output_string + "\n";
                // }else{
                //     output_string = output_string + decoder_emoji[censor_input_area[index].toLowerCase()];
                // }

                if(censor_input_area[index]=="\“" || censor_input_area[index]=="\”"){
                    output_string = output_string + decoder_emoji["\""];
                }
                else if(censor_input_area[index]=="\‘" || censor_input_area[index]=="\’"){
                    output_string = output_string + decoder_emoji["\'"];
                }
                else{
                    output_string = output_string + decoder_emoji[censor_input_area[index].toLowerCase()];
                }
                // console.log("newline = "+(censor_input_area.match(/\n/g)||[]).length);
                
                // output_string = output_string + input_area[index].toLowerCase();
            }
            console.log("output_string = "+output_string);
            // textarea.value = "";
            // alert(output_string)
            controller(5);
        }
    }
}

const popproogressInit=()=>{
    
    let smallspan = document.querySelector('#smallspan');
    let bigspan = document.querySelector('#bigspan');
    let showpercent = document.querySelector('#showpercent');
    for (let i = 2; i <= 100; i++) {
        setTimeout(function timer() {
            smallspan.style.width = `${i-2}%`;
            bigspan.style.width = `${i}%`;
            // showpercent.innerHTML = `${i}%`
            if(i==100){
                controller(6);
            }
        }, i * 20);
    }
}


const poopoutputInit=()=>{
    
    let outputarea = document.querySelector('#outputarea');
    let decoderarea = document.querySelector('.decoderarea');
    let loader = document.querySelector('.loader');
    let toggle_state = false;
    outputarea.style.display = "flex";
    
    decoderarea.style.display = "none";
    let pooptranslationsectionback_btn = document.querySelector('#pooptranslationsectionback_btn');
    let pooptranslationsectionnext_btn = document.querySelector('#pooptranslationsectionnext_btn');
    pooptranslationsectionnext_btn.style.display = "inline-block"
    loader.style.display = "none"
    if(output_height>300){
        output_height = output_height+100;
    }
    // outputarea.style.height = output_height+'px';
    console.log("output_height   =  "+output_height);
    outputarea.value = output_string;


    pooptranslationsectionback_btn.onclick = () =>{
        // document.querySelect or('#downloadoutput').remove();
        output_string ="";
        // for (let index = 0; index < characters.length-1; index++) {
        //      tabledecoder.deleteRow(-1);
        // }
        controller(4);
    }
    
    pooptranslationsectionnext_btn.onclick = () =>{
        // document.querySelector('#downloadoutput').remove();
        
        //insert
        //username
        //output_string;
        pooptranslationsectionnext_btn.style.display = "none"
        pooptranslationsectionback_btn.style.display = "none"
        loader.style.display = "inline-block"
        InsertQ(username,output_string);

        
     

        // controller(7);
    }
    
    let clickbtndiv = document.querySelector('.clickbtndiv2');
    
    // let toggledecode = document.querySelector('#toggledecode');
    // toggledecode.onclick =()=>{
    //     if(toggle_state == false){
    //         decoderarea.style.display = "flex";
    //         outputarea.style.display = "none";
    //         toggle_state = true;
    //     }else{
    //         outputarea.style.display = "flex";
    //         decoderarea.style.display = "none";
    //         toggle_state = false;
    //     }
    // }
    
    decoderarea.style.display = "none";
}   


const poopsentInit=()=>{
    let bodytag = document.querySelector('body');
    // bodytag.style.position = "fixed";
    // let poopsentsectionback_btn = document.querySelector('#poopsentsectionback_btn');
    
    
    let youremojimessagename = document.querySelector('#youremojimessage');
    let imgarrow = document.querySelector('.imgarrow');
    
    let outputarea2 = document.querySelector('#outputarea2');
    // outputarea2.value = output_string;
    let poopdownloadkey_btn = document.querySelector('#poopdownloadkey_btn');
    // let poopdownloademoji_btn = document.querySelector('#poopdownloademoji_btn');
    // youremojimessagename.innerHTML = `asdasdasfasdf's emoji message`
    // youremojimessagename.innerHTML = `${username}'s emoji message`
    console.log("remainTIme0 = "+remainTime);
    
    // let decoderheader = document.querySelector('#decoderheader');
    // let griddecoderA = document.querySelector('.decoderareaA');
    // let griddecoderB = document.querySelector('.decoderareaB');
    // let griddecoderC = document.querySelector('.decoderareaC');
    // decoderheader.innerHTML = `${username}'s key`;
    // for (let index = 0; index < 27; index++) {
    //     let label = characters[index].toUpperCase();
    //     // let emoji = String.fromCodePoint(randomEmoji[index]);
    //     let emoji = String.fromCodePoint(emojis[index]);
        
    //     let divchild = document.createElement('div');
    //     if(index==26){
    //         divchild.setAttribute("id","gridspace");
    //         label = "SpaceBar"
    //     }
    //     let labelemoji = `${emoji}${label}`;
    //     divchild.innerHTML = labelemoji;
    //     griddecoderA.appendChild(divchild);
    // }

    // for (let index = 27; index < 37; index++)
    // {
    //     let label = characters[index];
    //     // let emoji = String.fromCodePoint(randomEmoji[index]);
    //     let emoji = String.fromCodePoint(emojis[index]);
        
    //     let divchild = document.createElement('div');
    //     if(index==36){
    //         divchild.setAttribute("id","gridspace2");
    //     }
    //     let labelemoji = `${emoji}${label}`;
    //     divchild.innerHTML = labelemoji;
    //     griddecoderB.appendChild(divchild);
    // }

    // for (let index = 37; index < 73; index++)
    // {
    //     let label = characters[index];
    //     // let emoji = String.fromCodePoint(randomEmoji[index]);
    //     let emoji = String.fromCodePoint(emojis[index]);
    //     let divchild = document.createElement('div');
    //     let labelemoji = `${emoji}${label}`;
    //     divchild.innerHTML = labelemoji;
    //     griddecoderC.appendChild(divchild);
    // }


    let timertext = document.querySelector('#timertext');
    timertext.innerHTML =`ข้อความของคุณจะปรากฏบนผนังในอีก ${remainTime} วินาที`;
    let countTime = remainTime;
    // let countTime = 10;
    let countTime2 = 30;
    let countTime3 = 30;
    // let countTime = 30;
    let navbar = document.querySelector('.navbar');
    let poopsentdetail = document.querySelector('.poopsentdetail');
    let imgclockDiv = document.querySelector('.imgclock');
    if(counqmorethan == 0){
        let timer2 = setInterval(() => {
                --countTime2;
                navbar.classList.add('navbarred');
                timertext.innerHTML =`ข้อความของคุณได้จัดแสดงแล้ว คุณมีเวลา ${countTime2} วินาทีก่อนจะถูกเซ็นเซอร์หายไป`;
                if(countTime2<=0){
                        clearInterval(timer2);
                        imgclockDiv.classList.add('imgclockend');
                        timertext.innerHTML =`หมดเวลา`;
                }
                
            },1000);
    }else if(counqmorethan == 1) {
        console.log("remainTIme = "+countTime);
        let timer = setInterval(() => {
        --countTime;
        timertext.innerHTML =`ข้อความของคุณจะปรากฏบนผนังในอีก ${countTime} วินาที`;
        if(countTime<=0){
            clearInterval(timer);
            let timer3 = setInterval(() => {
                --countTime3;
                navbar.classList.add('navbarred');
                timertext.innerHTML =`ข้อความของคุณได้จัดแสดงแล้ว คุณมีเวลา ${countTime3} วินาทีก่อนจะถูกเซ็นเซอร์หายไป`;
                if(countTime3<=0){
                        clearInterval(timer3);
                        imgclockDiv.classList.add('imgclockend');
                        timertext.innerHTML =`หมดเวลา`;
                }
                
            },1000);
        }
        }, 1000);
    }
        

    // poopsentsectionback_btn.onclick = () =>{
    //     controller(1);
    // }
    // navbar.style.display="none"
    // poopsentdetail.style.display="none";
    
        // html2canvas(document.querySelector('.decoderpage')).then(function(canvas) {
        //     let link = document.createElement('a');
        //     canvas.setAttribute("id", "canvasdiv");
        //     // canvas_div.appendChild(canvas);
        //     let img = canvas.toDataURL("image/png");
            
        //     // console.log("img = "+img);
            
        //     // let canvas_img= document.createElement('img');
            
        //     link.setAttribute("class","downloadoutput");
        //     link.download = 'key.png';
        //     link.setAttribute('href',img);
        //     link.href = canvas.toDataURL();
        //     link.innerHTML = "Download Your Key";

        //     let decoderpagewrap = document.querySelector('.decoderpagewrap');
        //     // decoderpagewrap.appendChild(canvas);
        //     poopdownloadkey_btn.innerHTML="";
        //         setTimeout(() => {
        //             // window.open(img);
        //             // navbar.style.display="flex"
        //             // poopsentdetail.style.display="flex";
        //             bodytag.style.position ="static";
        //             poopdownloadkey_btn.appendChild(link);      
        //             imgarrow.classList.add('imgarrowdukedik');
        //         }, 1000);
        // });

        // html2canvas(document.querySelector('.outputareafinishwrap')).then(function(canvas) {
        //     let link = document.createElement('a');
        //     canvas.setAttribute("id", "canvasdiv2");
        //     // canvas_div.appendChild(canvas);
        //     let img = canvas.toDataURL("image/png");
        //     // console.log("img = "+img);
            
        //     // let canvas_img= document.createElement('img');
            
        //     link.setAttribute("class","downloadoutput");
        //     link.download = 'emojis.png';
        //     link.setAttribute('href',img);
        //     link.href = canvas.toDataURL();
        //     link.innerHTML = "Download Your Emoji";
        //     poopdownloademoji_btn.innerHTML="";
        //         setTimeout(() => {
        //             // navbar.style.display="flex"
        //             // poopsentdetail.style.display="flex";
        //             bodytag.style.position ="static";
        //             poopdownloademoji_btn.appendChild(link);
        //             // imgarrow.classList.add('imgarrowdukedik');       
        //         }, 1000);
        // });
}




const poopplayInit=()=>{
    let outputarea2 = document.querySelector('#outputarea2');
    let decoderheader = document.querySelector('#decoderheader');
    let griddecoderA = document.querySelector('.decoderareaA');
    let griddecoderB = document.querySelector('.decoderareaB');
    let griddecoderC = document.querySelector('.decoderareaC');
    outputarea2.value = output_string;
    decoderheader.innerHTML = `${username}'s key`;
    for (let index = 0; index < 27; index++) {
        let label = characters[index].toUpperCase();
        let emoji = String.fromCodePoint(randomEmoji[index]);
        // let emoji = String.fromCodePoint(emojis[index]);
        
        let divchild = document.createElement('div');
        if(index==26){
            divchild.setAttribute("id","gridspace");
            label = "SpaceBar"
        }
        let labelemoji = `${emoji}${label}`;
        divchild.innerHTML = labelemoji;
        griddecoderA.appendChild(divchild);
    }

    for (let index = 27; index < 37; index++)
    {
        let label = characters[index];
        // let emoji = String.fromCodePoint(randomEmoji[index]);
        let emoji = String.fromCodePoint(emojis[index]);
        
        let divchild = document.createElement('div');
        if(index==36){
            divchild.setAttribute("id","gridspace2");
        }
        let labelemoji = `${emoji}${label}`;
        divchild.innerHTML = labelemoji;
        griddecoderB.appendChild(divchild);
    }

    for (let index = 37; index < 73; index++)
    {
        let label = characters[index];
        // let emoji = String.fromCodePoint(randomEmoji[index]);
        let emoji = String.fromCodePoint(emojis[index]);
        let divchild = document.createElement('div');
        let labelemoji = `${emoji}${label}`;
        divchild.innerHTML = labelemoji;
        griddecoderC.appendChild(divchild);
    }


    let timertext = document.querySelector('#timertext2');
    timertext.innerHTML =`ข้อความของคุณจะปรากฏบนผนังในอีก ${remainTime} วินาที`;
    let countTime = remainTime;
    // let countTime = 10;
    let countTime2 = 30;
    let countTime3 = 30;
    // let countTime = 30;
    let navbar = document.querySelector('.navbar');
    let poopsentdetail = document.querySelector('.poopsentdetail');
    let imgclockDiv = document.querySelector('.imgclock');
    if(counqmorethan == 0){
        let timer2 = setInterval(() => {
                --countTime2;
                navbar.classList.add('navbarred');
                timertext.innerHTML =`ข้อความของคุณได้จัดแสดงแล้ว คุณมีเวลา ${countTime2} วินาทีก่อนจะถูกเซ็นเซอร์หายไป`;
                if(countTime2<=0){
                        clearInterval(timer2);
                        imgclockDiv.classList.add('imgclockend');
                        timertext.innerHTML =`หมดเวลา`;
                }
                
            },1000);
    }else if(counqmorethan == 1) {
        console.log("remainTIme = "+countTime);
        let timer = setInterval(() => {
        --countTime;
        timertext.innerHTML =`ข้อความของคุณจะปรากฏบนผนังในอีก ${countTime} วินาที`;
        if(countTime<=0){
            clearInterval(timer);
            let timer3 = setInterval(() => {
                --countTime3;
                navbar.classList.add('navbarred');
                timertext.innerHTML =`ข้อความของคุณได้จัดแสดงแล้ว คุณมีเวลา ${countTime3} วินาทีก่อนจะถูกเซ็นเซอร์หายไป`;
                if(countTime3<=0){
                        clearInterval(timer3);
                        imgclockDiv.classList.add('imgclockend');
                        timertext.innerHTML =`หมดเวลา`;
                }
                
            },1000);
        }
        }, 1000);
    }
}


const controller=(state)=>{
    switch (state) {
            case 0:
                splashsection.style.display = "flex";
                inputnamesection.style.visibility = "hidden";
                explainsection.style.visibility = "hidden";
                tutorialsection.style.visibility = "hidden";
                poopcontentsection.style.visibility = "hidden";
                poopwatingsection.style.visibility = "hidden";
                pooptranslationsection.style.visibility = "hidden";
                poopsentsection.style.visibility = "hidden";
                poopplaysection.style.visibility = "hidden";


                // inputnamesection.style.visibility = "none";
                // explainsection.style.visibility = "none";
                // tutorialsection.style.visibility = "none";
                // poopcontentsection.style.visibility = "none";
                // poopwatingsection.style.visibility = "none";
                // pooptranslationsection.style.visibility = "none";
                // poopsentsection.style.visibility = "none";
                // poopplaysection.style.visibility = "none";
                splashInit();

                break;

            case 1:

                splashsection.style.display = "none";
                inputnamesection.style.display = "none";
                explainsection.style.display = "none";
                tutorialsection.style.display = "flex";
                poopcontentsection.style.display = "none";
                poopwatingsection.style.display = "none";
                pooptranslationsection.style.display = "none";
                poopsentsection.style.display = "none";
                poopplaysection.style.display = "none";

                inputnamesection.style.visibility = "visible";
                explainsection.style.visibility = "visible";
                tutorialsection.style.visibility = "visible";
                poopcontentsection.style.visibility = "visible";
                poopwatingsection.style.visibility = "visible";
                pooptranslationsection.style.visibility = "visible";
                poopsentsection.style.visibility = "visible";
                poopplaysection.style.visibility = "visible";
                instructionInit();

                

                break;
            case 2:
                splashsection.style.display = "none";
                inputnamesection.style.display = "flex";
                explainsection.style.display = "none";
                tutorialsection.style.display = "none";
                poopcontentsection.style.display = "none";
                poopwatingsection.style.display = "none";
                pooptranslationsection.style.display = "none";
                poopsentsection.style.display = "none";
                poopplaysection.style.display = "none";

                                inputnamesection.style.visibility = "visible";
                explainsection.style.visibility = "visible";
                tutorialsection.style.visibility = "visible";
                poopcontentsection.style.visibility = "visible";
                poopwatingsection.style.visibility = "visible";
                pooptranslationsection.style.visibility = "visible";
                poopsentsection.style.visibility = "visible";
                poopplaysection.style.visibility = "visible";
                inputnameInit();

                break;

            case 3:

                explainsection.style.display = "flex";

                splashsection.style.display = "none";
                inputnamesection.style.display = "none";
                tutorialsection.style.display = "none";
                poopcontentsection.style.display = "none";
                poopwatingsection.style.display = "none";
                pooptranslationsection.style.display = "none";
                poopsentsection.style.display = "none";
                poopplaysection.style.display = "none";
                explainInit();

                break;
            case 4:
                splashsection.style.display = "none";
                inputnamesection.style.display = "none";
                explainsection.style.display = "none";
                tutorialsection.style.display = "none";
                poopcontentsection.style.display = "flex";
                poopwatingsection.style.display = "none";
                pooptranslationsection.style.display = "none";
                poopsentsection.style.display = "none";
                poopplaysection.style.display = "none";
                poopcontentInit();

                break;
            case 5:
                splashsection.style.display = "none";
                inputnamesection.style.display = "none";
                explainsection.style.display = "none";
                tutorialsection.style.display = "none";
                poopcontentsection.style.display = "none";
                poopwatingsection.style.display = "flex";
                pooptranslationsection.style.display = "none";
                poopsentsection.style.display = "none";
                poopplaysection.style.display = "none";
                popproogressInit();

            break;
            case 6:
                splashsection.style.display = "none";
                inputnamesection.style.display = "none";
                explainsection.style.display = "none";
                tutorialsection.style.display = "none";
                poopcontentsection.style.display = "none";
                poopwatingsection.style.display = "none";
                pooptranslationsection.style.display = "flex";
                poopsentsection.style.display = "none";
                poopplaysection.style.display = "none";
                poopoutputInit();

                break;
            case 7:
                splashsection.style.display = "none";
                inputnamesection.style.display = "none";
                explainsection.style.display = "none";
                tutorialsection.style.display = "none";
                poopcontentsection.style.display = "none";
                poopwatingsection.style.display = "none";
                pooptranslationsection.style.display = "none";
                poopsentsection.style.display = "flex";
                poopplaysection.style.display = "none";
                poopsentInit();

                break;
            
            case 8:
                splashsection.style.display = "none";
                inputnamesection.style.display = "none";
                explainsection.style.display = "none";
                tutorialsection.style.display = "none";
                poopcontentsection.style.display = "none";
                poopwatingsection.style.display = "none";
                pooptranslationsection.style.display = "none";
                poopsentsection.style.display = "none";
                poopplaysection.style.display = "flex";
                poopplayInit();

                break;
            
            default:
                break;





            
    }
}

controller(0);
    










// inputnamesection.style.display = "none";
// tutorialsection.style.display = "none";
// poopcontentsection.style.display = "none";
// pooptranslationsection.style.display = "flex";
