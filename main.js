var btnTranslate=document.querySelector("#btntranslate");
var Input=document.querySelector("#txtInput");
var Output=document.querySelector("#txtOutput")
const spinner=document.getElementById("spinner");

var serverURL= "https://api.funtranslations.com/translate/klingon.json"

function getTranslationURL(input)
{
    return serverURL + "?" + "text="+input
}


function errorHandler(error){
    alert("Something happened to server try again later")
}

function clickHandler()
{
    
    var inputText=Input.value

    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json => {
        var translation=json.contents.translated
        Output.innerText=translation;
    })
    .catch(errorHandler)
};




btnTranslate.addEventListener("click",clickHandler)