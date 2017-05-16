// function outOfBed (){
//     var photoscenarios = confirm('Wekker gaat om 6:00. Ga ik uit bed om te fotograferen');
//     if (photoscenarios == true) {
//         alert('Hup uit bed');
//         takePicture()
//     } else {
//         alert('Lekker blijven liggen')
//     }
// }
//
// function takePicture() {
//     var pictureScenario = prompt("Bij de natuurpark aangekomen zie je dat de zon al snel op komt. Wat ga je doen?").toLowerCase();
//     if(pictureScenario == 'tripod') {
//         alert('Je neemt de tijd en denkt beter 1 kwalitatieve foto dan meerdere slechte fotos');
//     } else if (pictureScenario == 'hand') {
//         alert('Veel fotos maken, dat is wat je wil');
//         takePhotos();
//     } else {
//         alert('Je hebt geen zin om te haasten en laat fotografie voor wat het is.')
//     }
// }
//
// function takePhotos(){
//     var photos = ["photo1","photo2","photo3"];
//     var shutter = confirm('Neem een foto');
//     if (shutter == true){
//         photos.push("photo4");
//         for(i=0;i < photos.length; i++) {
//             console.log(photos[i]);
//         }
//
//     } else {
//         alert("geen foto genomen")
//     }
// }

// TODO
// - data atributen
// - image upload
// - object geoorienteerd



'use sctrict'

var pics = ["images/10-03-2017-1.jpg","images/10-03-2017-2.jpg","images/10-03-2017-3.jpg"];
var container = document.getElementById("gallery");


function createGallery() {
    for (i = 0; i < pics.length; i++){
        var imageContainer = document.createElement("div");
        var imageElement = document.createElement("img");
        imageElement.setAttribute("src",pics[i]);
        imageElement.setAttribute("class",'imgContainer');
        imageContainer.setAttribute("onclick","deleteImage(this)");
        imageContainer.classList.add("imageContainer");
        container.appendChild(imageContainer);
        imageContainer.appendChild(imageElement);
    }
}

// function imgAcrtions(){
//
//     var images = document.getElementsByClassName('imgContainer');
//     images.onclick = function(){
//         deleteImage(this);
//     }
//
// }

function addImage() {
    deleteAll();
    pics.push("images/10-03-2017-4.jpg");
    createGallery();
}

function deleteAll(){
    var images = document.getElementsByTagName('img');
    while(images.length > 0) {
        images[0].parentNode.removeChild(images[0]);
    }
}

function deleteFirst(){
    deleteAll();
    pics.splice(0,1);
    createGallery();
}

function deleteLast(){
    deleteAll();
    pics.pop();
    createGallery();
}

function deleteImage(image) {
    container.removeChild(image);
}




// function imageSelected(){
//
//     var file = document.getElementById("file-select").files[0];
//     if(file) {
//         var fileSize=0;
//         if (file.size > 1024*1024){
//             fileSize = (Math.round(file.size * 100/(1024 * 1024)) / 100).toString() + 'MB';
//         } else {
//             fileSize = (Math.round(file.size * 100/1024) / 100).toString() + 'KB';
//         }
//         document.getElementById("fileName").innerHTML = 'Name:' + file.name;
//         document.getElementById("fileSize").innerHTML = 'Size:' + file.size;
//         document.getElementById("fileType").innerHTML = 'Type:' + file.type;
//     }
// }

function UploadImage(){
    var fd = new FormData();
    fd.append("image", document.getElementById("file-select").files[0]);
    console.log(fd);
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadError, false);
    xhr.addEventListener("abort", uploadAbort, false);
    xhr.open("POST", "handler.php");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(fd);

}

function uploadProgress(e) {
    if (e.lengthComputable) {
        var percentComplete = Math.round(e.loaded * 100 / e.total);
        document.getElementById("progress").innerHTML = percentComplete.toString() + '%';
    } else {
        document.getElementById("progress").innerHTML = "unable to compute";
    }
}

function uploadComplete (e) {
    alert(e.target.responseText);
}

function uploadError (e) {
    alert("Error");
}

function uploadAbort (e) {
    alert("Abort");
}