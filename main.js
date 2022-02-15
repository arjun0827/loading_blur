const bgImage = document.getElementById('background-image')
const load = document.getElementById('loading');
const achievement = setInterval(achievementDone , 4);
let count = 0;
let blurEffect = 50;

function achievementDone(){
    count++;
    blurEffect--;
    console.log({ blurEffect })
    bgImage.style.filter = `blur(${blurEffect}px)`
    load.innerHTML = `${count}%`;

    if(count == 100){
        clearInterval(achievement);
    } 
}
