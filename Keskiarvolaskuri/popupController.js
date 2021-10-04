var textarea = document.getElementById("textarea");

var confirmButton = document.getElementById("confirm");
confirmButton.addEventListener("click", removeExam);

function removeExam(){
    chrome.tabs.query({currentWindow: true, active: true},
    function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, textarea.value);
    })
}