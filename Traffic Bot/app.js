var start = document.querySelector("#start");
var web = document.querySelector("#web");

start.addEventListener("click",()=> {
    var url = document.querySelector("#url").value
    if(url.includes("https://")){
        setInterval(function(){
            web.src = url;
        },5000)
    }else{
       alert("Needs a https site")
    }
})