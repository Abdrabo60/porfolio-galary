
projectElmns=document.querySelectorAll(".project-container");




projectElmns.forEach(element => {
    element.onclick=()=>{
        console.log("element clicked");
        window.location.href=`https://abdrabo60.github.io/${element.getAttribute("projectName")}`
    }
});