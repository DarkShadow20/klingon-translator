let btnTranslate=document.querySelector("#btntranslate");
let Input=document.querySelector("#txtInput");
let Output=document.querySelector("#txtOutput")
const spinner=document.getElementById("spinner");

const serverURL= "https://api.funtranslations.com/translate/klingon.json"

function getTranslationURL(input)
{
    return serverURL + "?" + "text="+input
}


function errorHandler(error){
    alert("Something happened to server try again later")
}

function clickHandler()
{
    
    let inputText=Input.value

    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json => {
        let translation=json.contents.translated
        Output.innerText=translation;
    })
    .catch(errorHandler)
};




btnTranslate.addEventListener("click",clickHandler)