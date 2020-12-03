const firebase = require('firebase');

var app = firebase.initializeApp({     
            apiKey: "AIzaSyDFSl2QDM96BReRFGR4MwrpbFXwao7NuP0",
            authDomain: "ubon-88459.firebaseapp.com",
            databaseURL: "https://ubon-88459.firebaseio.com",
            projectId: "ubon-88459",
            storageBucket: "ubon-88459.appspot.com",
            messagingSenderId: "835364456620",
            appId: "1:835364456620:web:337d85f78f0f4f75da7709",
            measurementId: "G-J3YXEF9H0V"
        });
            
    

const checkNowplayerchange = async ()=>{
    console.log("checkQ");
    await firebase.database().ref(`Emojis/nowPlayer/`).on('value',(dataSnapshot)=> {
        let nowplayer = dataSnapshot.val();
        nowplayer = nowplayer['name']
        console.log("nowplayer = "+nowplayer);
        if(nowplayer!=""){
            let playerContent = getPlayerContent(nowplayer);
            let timer = 30000;
            setTimeout(()=>
                { 
                    setallowTransaction(0);
                    console.log("Hello");
                    runQ(nowplayer);
                    //remove first playerlist
                    //get first playerlist to nowplayer
                }
            , 30000);
            
        let timerServer = setInterval(() => {
            timer = timer-1000;
            let sec = timer/1000;
            console.log("SECOND = "+sec);
            setNowSecond(sec);
            if(timer<=0){
                clearInterval(timerServer);
            }
        }, 1000);
        }

        
    });
}

const getNowSecond = async (second) =>{
    const eventref = firebase.database().ref('Emojis/nowSecond/val');
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
    return value;
}

const setNowSecond = async (second) =>{
    await firebase.database().ref("Emojis/nowSecond").set({
             "val" : second
    });
}

const runQ  = async (keyID)=>{
    console.log('-------start-----');
    let removeID = await removeFirstID(keyID);
    
    
    let lastID = await getFirstID();
    console.log("LastIDOBJ = "+JSON.stringify(lastID));
    if(lastID===null){
        console.log("isNull");
        sethaveQ(0);
    }else{
        lastID = ""+Object.keys(lastID);
        console.log("LastID = "+lastID);
        console.log("TypeOfLastID = "+typeof(lastID));
        let setnewID = await setnowPlayer(lastID);
        
    }


    var ref = firebase.database().ref('Emojis/countQ/val');
    let transaction =  await ref.transaction(function(currentCountQ) {
            let newval = (currentCountQ || 0) - 1;
            if(newval<=0){
                newval = 0;
                console.log("newval = "+newval);
                console.log("newvalcurrentCountQ = "+currentCountQ);
                return newval
            }else{
                
                return newval
            }
    });
    setallowTransaction(1);



    // let countQ = await getCountQ();
    // countQ = countQ-1;
    // if(countQ<=0){
    //     countQ = 0;
    // }else{
            
    // }
    // let setcountQ = await setCountQ(countQ);
    console.log('-------end-----');
}


const getCountQ = async ()=>{
    const eventref = firebase.database().ref('Emojis/countQ/val');
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
    return value;
}

const setCountQ = async (countq) =>{
    // await firebase.database().ref("Emojis/countQ").set({
    //          "val" : countq
    // });

    var ref = firebase.database().ref('Emojis/countQ/val');
    let transaction =  await ref.transaction(function(currentCountQ) {
            let newval = (currentCountQ || 0) - 1;
            if(newval<=0){
                newval = 0;
                return newval
            }else{
                return newval
            }
    });
}

const sethaveQ = async (haveQ) =>{
    await firebase.database().ref("Emojis/haveQ").set({
             "val" : haveQ
    });
}

const setallowTransaction = async (allow) =>{
    await firebase.database().ref("Emojis/allowTransaction").set({
             "val" : allow
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

const getLastID = async ()=>{
    const eventref = firebase.database().ref('Emojis/player');
    const snapshot = await eventref.limitToLast(1).once('value');
    const value = snapshot.val();
    return value;
}

const getPlayerContent = async (keyID)=>{
    const eventref = firebase.database().ref('Emojis/playerList/'+keyID);
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
    // let outputdiv = document.querySelector('#outputarea');
    // outputdiv.value = value['content'];
    console.log(JSON.stringify(value));
    return value;
}

const removeFirstID = async (keyID) =>{
    firebase.database().ref("Emojis/playerList/"+keyID).remove();
}

const setnowPlayer = async (keyID)=>{
    // console.log("insertTest");
    await firebase.database().ref("Emojis/nowPlayer").set({
             "name" : keyID
    });
}



const pushPlayer = async (username)=>{
    // let username = "player3";
    console.log("insertTest");
    let playerRef = await firebase.database().ref("Emojis/player").push({
             "name" : username,
             "content" : "ahiahiahiahaihai "+username
    });

    let playerlistRef = await firebase.database().ref("Emojis/playerList/"+playerRef.key).set({
             "name" : username,
    });

}

 
// firebase.database().ref("Data/Q/kkk").set({
//              "TimeStart" : "1",
//              "TimeEnd":"ss"
             
// });

// firebase.database().ref("Data/Q/kkk").remove();


  




const main = async() =>{
    checkQ();
    let countQ = await getCountQ();
    let lastID = await getFirstID();
    let playerContent = await getPlayerContent(Object.keys(lastID));
    console.log(Object.keys(lastID));
    console.log("playerContent = "+JSON.stringify(playerContent));
    console.log("countQ = "+typeof(countQ));
    // removeFirstID(Object.keys(lastID))
}

const mockup = async() =>{
    for (let index = 0; index < 10; index++) {
        await pushPlayer("player"+index);
        let countQ = await getCountQ();
        countQ = countQ+1;
        await setCountQ(countQ);
        let countPlayer = await getCountPlayer();
        countPlayer = countPlayer+1;
        await setCountPlayer(countPlayer);
    }
}


const resetVal = async()=>{
    setallowTransaction(1);
    // setCountQ(0);
    await firebase.database().ref("Emojis/countQ").set({
             "val" : 0
    });
    setCountPlayer(0);
    sethaveQ(0);
    setnowPlayer("");
    firebase.database().ref("Emojis/playerList").remove();
    firebase.database().ref("Emojis/player").remove();
}

// main();
// mockup();

// getPlayerContent("-MMy3sdcrdcZ9tgnEAIe");
checkNowplayerchange();
// resetVal();
// countPlayer();
