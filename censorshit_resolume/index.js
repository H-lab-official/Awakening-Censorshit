var ul = document.querySelector("#listqname");
var timertext = document.querySelector("#timer");

const getPlayerContent = async (keyID)=>{
    const eventref = firebase.database().ref('Emojis/player/'+keyID);
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
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
        if(countTime<=0){
            // ul.innerHTML="";
            clearInterval(timer);
        }
    }, 1000);
    return value;
}

const listwatingpeople = async ()=>{
    const eventref = firebase.database().ref('Emojis/player');
    // const eventref = firebase.database().ref('Emojis/playerList');
    const snapshot = await eventref.limitToFirst(16).once('value');
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
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(qname['name']));
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
            listwatingpeople();
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


checkNowplayerchange();
checkcountQ();