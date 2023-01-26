let add = document.getElementById("addbtn");

let input = document.getElementById("input");

let list = document.getElementById("list");

add.addEventListener("click", function (e) {
    // console.log("input = ",input.value);

    if (list.children[0].id == "emptyMessage") {
        list.children[0].remove();
    }


    let data = input.value.trim();

    if (data !== " " && data !== "") {
        e.preventDefault();
        let li = document.createElement("li");
        list.appendChild(li);
        // li.classList.add("list-group-item");
        li.classList = "list-group-item border d-flex mt-3 over-flow-hidden justify-content-between";
        li.innerHTML = ` <h3 class="flex-grow-1">${data}</h3>
                   
    <button class="btn btn-warning mx-3" onclick= 'edit(this)'>Edit</button>
    <button class="btn btn-danger" onclick='remove(this)'>Remove</button>`;
    }

    input.value = '';
});


function remove(currentElement) {
    currentElement.parentElement.remove();

    if (list.children.length <= 0) {
        let h3 = document.createElement('h3');
        h3.setAttribute('class', 'mx-3 p-5');
        h3.textContent = "Noting is Here. Please Add Content!!!";
        h3.setAttribute('id', 'emptyMessage');

        list.append(h3);
    }
}

function edit(currentElement) {

    if (currentElement.textContent === 'Done') {
   
        currentElement.textContent = "Edit";
        let currentval = currentElement.previousElementSibling.value;

        let h3 = document.createElement('h3');
        h3.setAttribute('class','flex-grow-1');
        h3.innerHTML = currentval;
        currentElement.parentElement.replaceChild(h3, currentElement.previousElementSibling);
    } 
    else {
        currentElement.textContent = "Done";
        let currentval = currentElement.previousElementSibling.textContent;

        let inputbox = document.createElement('input');
        // inputbox.setAttribute('class','flex-grow-1');
        inputbox.type = "text";
        inputbox.className = "from-control";
        inputbox.value = currentval;
        inputbox.placeholder = "chapter Name";

        currentElement.parentElement.replaceChild(inputbox, currentElement.previousElementSibling);
    }



}


// // javascript code goes here

// var COLORS = [];
// var PROGRESS = 0;
// const URL = 'https://random-flat-colors.vercel.app/api/random?count=5';



// function openForm() {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//             const res = JSON.parse(xmlHttp.response).colors;
//             // console.log(res);
//             let colors = document.getElementById('backgroundColor');
//             let div = document.createElement('div');
//             div.id = 'radio';
//             div.className = 'col-md-6';
//             res.forEach((color) => {
//                 let colorBox = ColorBox(color, 'radio');
//                 div.appendChild(colorBox);
//             });
//             colors.appendChild(div);
//         }
//     };
//     xmlHttp.open('GET', URL, true); // true for asynchronous
//     xmlHttp.send(null);
//     document.getElementById('drawer').style.width = '35%';
//     document.getElementById('addCreative').disabled = true;
// }

// function closeForm() {
//     document.getElementById('radio').remove();
//     document.getElementById('drawer').style.width = '0';
//     document.getElementById('addCreative').disabled = false;
// }


// function Creative(title, subtitle, color) {
//     let creatives = document.getElementById('creatives');
//     let box = document.createElement('div');
//     let boxTitle = document.createElement('div');
//     let boxSubtitle = document.createElement('div');
//     box.className = 'box ' + color;
//     boxTitle.className = 'box-title';
//     boxSubtitle.className = 'box-subtitle';
//     boxTitle.textContent = title;
//     boxSubtitle.textContent = subtitle;
//     box.appendChild(boxTitle);
//     box.appendChild(boxSubtitle);
//     box.style.background = color;
//     creatives.appendChild(box);
// }



// function setProgress(val) {
//     let progressBar = document.getElementById('progress-bar');
//     document.getElementById('progressAria').textContent = val + '/5 Creatives';
//     progressBar.style.width = val * 20 + '%';
// }


// function ColorBox(color, type) {
//     let div = document.createElement('div');
//     let input = document.createElement('input');
//     let label = document.createElement('label');
//     div.className = 'form-check col-md-6';
//     input.className = 'form-check-input ' + type;
//     input.type = type;
//     input.required = true;
//     input.name = 'backgroundColor';
//     input.value = color;
//     label.className = 'form-check-label color-box ';
//     label.style.background = color;
//     div.appendChild(input);
//     div.appendChild(label);
//     if (type == 'checkbox') {
//         input.checked = true;
//     }
//     return div;
// }

// function addCreative() {
//     if (PROGRESS === 5) {
//         alert('Max number of creatives have been created');
//         return;
//     }
//     const form = document.getElementById('creativeForm');
//     let colors = document.getElementById('colors');
//     const title = form.elements['title'].value;
//     const subtitle = form.elements['subtitle'].value;
//     const color = form.elements['backgroundColor'].value;
//     Creative(title, subtitle, color);
//     PROGRESS += 1;
//     setProgress(PROGRESS);

//     if (!COLORS.includes(color)) {
//         var colorBox = ColorBox(color, 'checkbox');
//         colors.appendChild(colorBox);
//         COLORS.push(color);
//     }
//     closeForm();
//     form.elements['title'].value = '';
//     form.elements['subtitle'].value = '';
//     const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
//     for (var i = 0; i < checkboxes.length; i++) {
//         checkboxes[i].addEventListener('change', filter);
//     }
// }

// function filter() {

// var array = [];

// const creatives = document.getElementsByClassName('box');

// const input = document.getElementById('filtertxt').value.toUpperCase();

// const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

// for (var i = 0; i < checkboxes.length; i++) {

// array.push(checkboxes[i].value);

// }

// for (var i = 0; i < creatives.length; i++) {

// let title = creatives[i].getElementsByClassName('box-title')[0].textContent.toUpperCase();

// let subtitle = creatives[i].getElementsByClassName('box-subtitle')[0].textContent.toUpperCase();

// if (array.includes(creatives[i].className.split(' ').pop())) {

// if (input && title.toUpperCase().indexOf(input) == -1 && subtitle.toUpperCase().indexOf(input) == -1) {

// creatives[i].style.display = 'none';

// } else {

// creatives[i].style.display = '';

// }

// } else {

// creatives[i].style.display = 'none';

// }

// }

// }