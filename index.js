let imagesFolder = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png", "images/10.png",]

let content = '';
let folder = document.querySelector('#imgfolder');

for (let i = 0; i < imagesFolder.length; i++) {
    const element = imagesFolder[i];
    let id = (element.split('/')[1]).split('.')[0];
    content += `<img id='${id}' onclick="selectImg(id)"  src='${element}' alt="">`;
}

folder.innerHTML = content;

////////////////////////////////////////////////////////

var index;
var isClicked;
var previousindex;


function selectImg(id) {
    let firstImage = document.getElementById('1');

    let element = document.getElementById(id);
    let picture = document.querySelector('#Mainimg');
    picture.src = `images/${element.id}.png`;

    index = element.id;

    ElementWithStyle(element);

    setInterval(() => {
        if (index == 1) {
            firstImage.style.marginLeft = "-0px";
        }
        else if (index >= (imagesFolder.length - 3)) {
            firstImage.style.marginLeft = "-600px";
        }
        else {
            firstImage.style.marginLeft = `-${(index - 1) * 90}px`;
        }

        isClicked = true;
        previousindex = index;
        
    }, 500);

    if (isClicked) {
        let previousElement = document.getElementById(previousindex);
        Reset(previousElement);
    }
}



function Reset(element) {
    element.style.border = "2px solid azure";
    element.style.height = "150px";
    element.style.padding = "0px";
}

function ElementWithStyle(element) {
    element.style.border = "5px solid springgreen";
    element.style.height = "135px";
    element.style.padding = "3px";
}