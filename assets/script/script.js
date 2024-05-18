const topics_Buttons = Array.from(document.getElementsByClassName('device-Card'));
const Viewer_Device = document.getElementById('viewer-wrapp');

topics_Buttons.forEach(el => el.addEventListener("click", function () {
    topics_Buttons.forEach(btn => btn.classList.remove('topicFocusingLook'));
    el.classList.add('topicFocusingLook');

    if (topics_Buttons.indexOf(el) == 0) {
        Devices_Dimensions(360 , 800);
    }
    if (topics_Buttons.indexOf(el) == 1) {
        Devices_Dimensions(1024 , 1366);
    }
    if (topics_Buttons.indexOf(el) == 2) {
        Devices_Dimensions(1080 , 780);
    }
    if (topics_Buttons.indexOf(el) == 3) {
        Devices_Dimensions(1920 , 1080);
    }
    
}));

function Devices_Dimensions(width , height) {
    const Viewer_Device = document.getElementById('viewer-wrapp');
    Viewer_Device.style.width = width + 'px';
    Viewer_Device.style.height = height + 'px';
}


function takeTheLinkUrl() {

    
    Viewer_Device.src = String(document.getElementById('textField').value);
    
}