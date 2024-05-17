const topics_Buttons = Array.from(document.getElementsByClassName('device-Card'));
const Viewer_Device = document.getElementById('viewer-wrapp');




topics_Buttons.forEach(el => el.addEventListener("click", function () {
    topics_Buttons.forEach(btn => btn.classList.remove('topicFocusingLook'));
    el.classList.add('topicFocusingLook');

    if (topics_Buttons.indexOf(el) == 0) {
        
    }
    if (topics_Buttons.indexOf(el) == 1) {
        
    }
    if (topics_Buttons.indexOf(el) == 2) {
        
    }
    if (topics_Buttons.indexOf(el) == 3) {
        
    }
    
}));





function Devices_Dimensions() {
    //head buttons 

}
