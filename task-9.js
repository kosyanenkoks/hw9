var section = document.body.appendChild(document.createElement('section'));
var contentHolder = section.appendChild(document.createElement('div'));
var button = document.createElement('button');
button.innerText = 'Show content';
section.insertBefore(button, contentHolder);

function loadContent (source) {
    return new Promise (
        (resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open("GET", source);
            request.onload = function(event) {
                resolve(this.response)
            };
            request.onerror = function (event) {
                reject('Fail')
            };
            request.responseType = 'json'; // волшебная строчка для преобразования
            request.send();
        }
    )
}

function getContent (url) {
    loadContent (url)
        .then (
            response => {
                function showContent () {
                    response.forEach(
                        (item) => {
                            var figure = contentHolder.appendChild(document.createElement('figure'));
                            var img =  figure.appendChild(document.createElement('img'));
                            img.src = item.url;
                            img.style.maxWidth = '300px';
                            var imgCaption =  figure.appendChild(document.createElement('figcaption'));
                            imgCaption.innerText = item.title;
                        });
                }
                button.addEventListener('click', showContent);
            }
        )
        .catch (
            error => console.log(error)
        )
}

getContent('images.json');