const characters = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z',' ',
    'ก'
]
// const charactersz = [
// "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
// "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"," ",
// "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
// "~", "`", "!", "@", "#", "£", "€", "$", "¥", "%",
// "°", "^", "&", "*", "(", ")", "-", "_", "+", "=",
// "{", "}", "[", "]", "|", "\\", "/", ":", ";", "\"",
// "\'", "<", ">", ",", ".", "?", "¢", "§"
// ]

// const funckingthings = ["prayut","vachiralongkorn"];
const funckingthings = [];



const emojis = [
    0x1F600,0x1F603,0x1F604,0x1F601,0x1F606,0x1F605,0x1F923,0x1F602,0x1F642,0x1F643,0x1F609,0x1F60A,0x1F607,
    0x1F970,0x1F60D,0x1F929,0x1F618,0x1F617,0x1F61A,0x1F60B,0x1F61B,0x1F61C,0x1F92A,0x1F61D,0x1F911,0x1F917,0x1F92D
]

const censorCharacter ='ก';
const censorEmoji = 0x1F4A9;

let username = '';

let output_height = 0;

let remainTime = 0;

let emoji_output = [];

let randomEmoji=[];

let decoder_emoji = {};

let output_string = "";


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

const setCountQ = (countq) =>{
    firebase.database().ref("Emojis/countQ").set({
             "val" : countq
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
    await firebase.database().ref("Emojis/countPlayer").set({
             "val" : countq
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
    
    firebase.database().ref("Emojis/playerList/"+playerRef.key).set({
             "name" : username,
    });
    
}

const InsertQ = async (username,content)=>{
    console.log("USERNAME = "+username);
    let insert = await pushPlayer(username,content);
    
    let countQ = await getCountQ();
    
    let countPlayer = await getCountPlayer();
    countPlayer = countPlayer+1;
    setCountPlayer(countPlayer);

    let haveQ = await gethaveQ();

    if(haveQ==0){
        sethaveQ(1);
        countQ = countQ+1;
        await setCountQ(countQ);
        let lastID = await getFirstID();
        lastID = ""+Object.keys(lastID);
        setnowPlayer(lastID);
        //goto state 7
        controller(8);
    }
    else{
        countQ = countQ+1;
        let nowSecond = await getNowSecond();
        remainTime = nowSecond + ((countQ-2)*30);
        //goto state 6
        setCountQ(countQ);
        controller(7);
    }
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
    for (let index = 0; index < emojis.length; index++) {
        decoder_emoji[characters[index]] = String.fromCodePoint(randomEmoji[index]);
    }
    decoder_emoji[censorCharacter] = String.fromCodePoint(censorEmoji);
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

// const main=()=>{
    
//     // alert(pattern)
//         // check 
//         // ^[a-z]{1,30}(,[a-z]{1,30})+
//         // ^[a-zA-Z\s]+$

//     randommapping(emojis);
//     for (let index = 0; index < emojis.length; index++) {
//         let decoderDiv = document.querySelector('.decoder');
//         let divP = document.createElement('p');
//         divP.innerHTML = `${characters[index]} = ${String.fromCodePoint(randomEmoji[index])}`
//         decoderDiv.appendChild(divP);
//     }
//     let divInputarea = document.querySelector('#inputarea');
//     divInputarea.onkeyup = getInput;

//     let divSubmitBtn = document.querySelector('#submitBtn');
//     // divSubmitBtn.onclick = mappingEmoji;

//     // var downloadBtn = document.querySelector('#btn-download');
//     // downloadBtn.onclick = downloadDecoder;
//     // downloadBtn.addEventListener('click', function (e) {
//     //     var dataURL = canvas.toDataURL('image/png');
//     //     downloadBtn.href = dataURL;
//     // });
//     var button = document.getElementById('btn-download');
// button.addEventListener('click', function (e) {
//     html2canvas(document.querySelector(".decoder")).then(function(canvas) {
//         console.log(canvas);
//         var dataURL = canvas.toDataURL('image/png');
//         console.log(dataURL);
//         this.href = dataURL;
//         var dataURL = canvas.toDataURL('image/png');
//     button.href = dataURL;
//         // document.body.appendChild(canvas);
//     });
    
// });
    
// }


// main();

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
    
    splashstart_btn.onclick = ()=>{
        controller(1);
    }
}

//----------------instruction page----------------
const instructionInit = () =>{
    let tutorialsectionback_btn = document.querySelector('#tutorialsectionback_btn');
    let tutorialsectionnext_btn = document.querySelector('#tutorialsectionback_next');
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
    output_string = "";
    nameinput.value = "";
    submit_btn.onclick = () =>{
        if(nameinput.value!=""){
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

    explainsubmit_btn.onclick =()=>{
        controller(4);
    }
}



//----------------poop add content page----------------
const poopcontentInit = () =>{
    // addAutoResize();
    let poopcontentsectionback_btn = document.querySelector('#poopcontentsectionback_btn');
    let convert_btn = document.querySelector('#poopcontentsectionnext_btn');
    let textarea = document.querySelector('#inputarea');
    let clickbtndiv = document.querySelector('.clickbtndiv');
    let offset = textarea.offsetHeight - textarea.clientHeight;
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
            let new_textarea = textarea.value.substr(0,textarea.value.length-1);
            textarea.value = new_textarea;
            alert("Support English only")
            return false;
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
                if(censor_input_area[index]=="\n"){
                    output_string = output_string + "\n";
                }else{
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
    // output_height=output_height;
    
    let tabledecoder = document.querySelector('#decodertable');
    
    for (let index = 0; index < characters.length-1; index++) {
        var row = tabledecoder.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        if(characters[index]==" "){
            cell1.innerHTML = "space";
        }else{
            cell1.innerHTML = characters[index];
        }
        
        // cell2.innerHTML = String.fromCodePoint(randomEmoji[index]);
        cell2.innerHTML = String.fromCodePoint(emojis[index]);
    }

    pooptranslationsectionback_btn.onclick = () =>{
        // document.querySelector('#downloadoutput').remove();
        output_string ="";
        for (let index = 0; index < characters.length-1; index++) {
             tabledecoder.deleteRow(-1);
        }
        controller(4);
    }
    
    pooptranslationsectionnext_btn.onclick = () =>{
        // document.querySelector('#downloadoutput').remove();
        
        //insert
        //username
        //output_string;
        pooptranslationsectionnext_btn.style.display = "none"
        loader.style.display = "inline-block"
        InsertQ(username,output_string);

        
        for (let index = 0; index < characters.length-1; index++) {
             tabledecoder.deleteRow(-1);
        }

        // controller(7);
    }
    
    let clickbtndiv = document.querySelector('.clickbtndiv2');
    
    let toggledecode = document.querySelector('#toggledecode');
    toggledecode.onclick =()=>{
        if(toggle_state == false){
            decoderarea.style.display = "flex";
            outputarea.style.display = "none";
            toggle_state = true;
        }else{
            outputarea.style.display = "flex";
            decoderarea.style.display = "none";
            toggle_state = false;
        }
    }
    
    decoderarea.style.display = "none";
}   


const poopsentInit=()=>{

    // let poopsentsectionback_btn = document.querySelector('#poopsentsectionback_btn');
    let timertext = document.querySelector('#timertext');
    console.log("remainTIme0 = "+remainTime);
    timertext.innerHTML =`ข้อความของคุณจะปรากฏบนผนังในอีก ${remainTime} วินาที`;
    let countTime = remainTime;
    // let countTime = 30;
    
        console.log("remainTIme = "+countTime);
        let timer = setInterval(() => {
        --countTime;
        timertext.innerHTML =`ข้อความของคุณจะปรากฏบนผนังในอีก ${countTime} วินาที`;
        if(countTime<0){
            clearInterval(timer);
            controller(8);
        }
        }, 1000);

    // poopsentsectionback_btn.onclick = () =>{
    //     controller(1);
    // }
}

const poopplayInit=()=>{
    let warningmassage = document.querySelector('#warningmassage');
    let whosaid = document.querySelector('#whosaid');
    let outputarea2 = document.querySelector('#outputarea2');
    let poopdownloadkey_btn = document.querySelector('#poopdownloadkey_btn');
    let poopdownloademoji_btn = document.querySelector('#poopdownloademoji_btn');
    let contentwrap = document.querySelector('.contentwrap');
    let endgame = document.querySelector('.endgame');
    contentwrap.style.display = "flex";
    endgame.style.display = "none";

    poopdownloademoji_btn.innerHTML = "Download Your Emojis";
    poopdownloadkey_btn.innerHTML = "Download Your Key";
    console.log("OUTPUT_string = "+output_string);
    outputarea2.value = output_string; 
    if(output_height>300){
        output_height = output_height+100;
    }
    outputarea2.style.height = output_height+'px';
    let tabledecoder = document.querySelector('#decodertable2');
    
    for (let index = 0; index < characters.length-1; index++) {
        var row = tabledecoder.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        if(characters[index]==" "){
            cell1.innerHTML = "space";
        }else{
            cell1.innerHTML = characters[index];
        }
        
        // cell2.innerHTML = String.fromCodePoint(randomEmoji[index]);
        cell2.innerHTML = String.fromCodePoint(emojis[index]);
    }
    

    poopdownloadkey_btn.onclick = ()=>{
        // console.log("img = "+img);
        // location.href = imgpath;
    }
    whosaid.innerHTML = `ผลงานของคุณ${username}ได้จัดแสดงแล้ว<br>มองไปที่กำแพง ด้านบนได้เลย!`;
    let countTime = 30;
    
    warningmassage.innerHTML = `ข้อความของคุณจะถูกเซ็นเซอร์หายไปในอีก ${countTime} วินาที`;
    let timerwarningmassage = setInterval(() => {
        --countTime;
        warningmassage.innerHTML = `ข้อความของคุณจะถูกเซ็นเซอร์หายไปในอีก ${countTime} วินาที`;
        if(countTime<=0){
            warningmassage.innerHTML = `Timeout`;
            clearInterval(timerwarningmassage);
            // controller(7);


            contentwrap.style.display = "none";
            endgame.style.display = "flex";
            poopdownloademoji_btn.innerHTML="";
            poopdownloadkey_btn.innerHTML="";
            poopdownloademoji_btn.classList.add("clickbtn2");
            poopdownloadkey_btn.classList.add("clickbtn2");
            html2canvas(document.querySelector('#outputarea2')).then(function(canvas) {
            canvas.setAttribute("id", "canvasdiv");
            // canvas_div.appendChild(canvas);
            let img = canvas.toDataURL("image/png");
            // console.log("img = "+img);
            
            // let canvas_img= document.createElement('img');
            let link = document.createElement('a');
            link.setAttribute("id","downloadoutput");
            link.download = 'emojis.png';
            link.setAttribute('href',img);
            link.href = canvas.toDataURL();
            link.innerHTML = "Download Your Emojis";
            // canvas_img.setAttribute('src',img);
            
            poopdownloademoji_btn.appendChild(link);
            // <a href="/images/myw3schoolsimage.jpg" download></a>
            // document.write('<img src="'+img+'"/>');
            // console.log("img_canvas = "+img);
        });

        html2canvas(document.querySelector('#decodertable2')).then(function(canvas) {
            canvas.setAttribute("id", "canvasdiv");
            // canvas_div.appendChild(canvas);
            let img = canvas.toDataURL("image/png");
            // console.log("img = "+img);
            
            // let canvas_img= document.createElement('img');
            let link = document.createElement('a');
            link.setAttribute("id","downloadoutput");
            link.download = 'emojis.png';
            link.setAttribute('href',img);
            link.href = canvas.toDataURL();
            link.innerHTML = "Download Your Key";
            // canvas_img.setAttribute('src',img);
            
            poopdownloadkey_btn.appendChild(link);
            // <a href="/images/myw3schoolsimage.jpg" download></a>
            // document.write('<img src="'+img+'"/>');
            // console.log("img_canvas = "+img);
        });


        }
        }, 1000);
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
