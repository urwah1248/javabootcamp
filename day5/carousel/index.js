console.log("it works")

let images = ["url(images/img1.jpg)","url(images/img2.jpg)", "url(images/img3.jpg)"]

let i=0;
document.getElementById("displayedimg").style.backgroundImage=images[i];


function next(){
    i=i+1;
    if(i>=3){i=0}
    document.getElementById("displayedimg").style.backgroundImage=images[i];
}

function previous(){
    i=i-1;
    if(i<0){i=2}
    document.getElementById("displayedimg").style.backgroundImage=images[i];
}