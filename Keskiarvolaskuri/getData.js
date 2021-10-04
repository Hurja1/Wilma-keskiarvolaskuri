
window.onload = getAvarage("");

chrome.runtime.onMessage.addListener(function (request){
    getAvarage(request);
})

function getAvarage(removedCoursesList){

    var expands = document.getElementsByClassName("expand");
    var coursesCount = 0;
    var numbersSum = 0;
    var removedCourses = removedCoursesList.split("; ");

    for(var i = 0; i < expands.length; i++){
        if(removedCourses.includes(expands[i].innerHTML)){
            removedCourses.forEach(course => {
                for(var x = i; x < expands.length; x++){
                    if(course != expands[x].innerHTML && expands[x].innerHTML[0] != "w" && expands[x].innerHTML.length > 1 && isNaN(parseInt(expands[x].innerHTML))){
                        break;
                    }else if(!isNaN(parseInt(expands[x].innerHTML))){
                        numbersSum -= parseInt(expands[x].innerHTML);
                        coursesCount--;
                    }
                }
            });  
        }
        if(!isNaN(parseInt(expands[i].innerHTML)) && expands[i].innerText != removedCourses){
            numbersSum += parseInt(expands[i].innerHTML);
            coursesCount++;
        }
    }

    if(document.getElementsByTagName("text").length == 0){
        var container = document.getElementsByClassName("container-fluid")[0]; 
        var text = document.createElement("text");
        container.appendChild(text);
    }else{
        var text = document.getElementsByTagName("text")[0];
    } 
    
    text.innerText = `Kurssien keskiarvo on ${(numbersSum/coursesCount).toFixed("2")}`;
    text.style.fontSize = "120%";
    text.style.left = "100px";
}