function dark(){
    document.body.classList.toggle("dark");

    let modeBtn=document.querySelector(".button");
    console.log(modeBtn.innerHTML);
    if(modeBtn.innerHTML=="Dark Mode")
    modeBtn.innerHTML="Light Mode";
    else modeBtn.innerHTML="Dark Mode";
    
    let e=document.querySelectorAll(".link");
    for(let i=0;i<e.length;i++){
    if(e[i].classList == "link black-links"){
        e[i].classList.remove("black-links");
        e[i].classList.add("white-links");
    }
    else{
        e[i].classList.remove("white-links");
        e[i].classList.add("black-links");
    }
}
}