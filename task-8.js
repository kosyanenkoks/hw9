var section = document.body.appendChild(document.createElement('section'));
var contentHolder = section.appendChild(document.createElement('div'));
var button = document.createElement('button');
button.innerText = 'Show content';
section.insertBefore(button, contentHolder);
var figure = contentHolder.appendChild(document.createElement('figure'));
var img =  figure.appendChild(document.createElement('image'));
var imgCaption =  figure.appendChild(document.createElement('figcaption'));
var data = [];

function loadContent (source) {
    return new Promise (
        (resolve, reject) => {
            var request = new XMLHttpRequest();
            request.onload = function(event) {
                resolve(this.responseText)
            };
            request.onerror = function (event) {
                reject(this.responseText)
            };
            request.open("GET", source);
            request.send();
        }
    )
}


function getContent (url) {
    loadContent (url)
        .then (
            response => {
                
            }
        )
};

getContent('images.json');


button.addEventListener('click', getContent);