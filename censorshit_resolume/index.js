

const getPlayerContent = async (keyID)=>{
    const eventref = firebase.database().ref('Emojis/player/'+keyID);
    const snapshot = await eventref.once('value');
    const value = snapshot.val();
    let outputdiv = document.querySelector('#outputarea');
    outputdiv.value = value['content'];
    console.log(JSON.stringify(value));
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
        }
    });
}


checkNowplayerchange();