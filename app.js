let add = document.getElementById("addbtn");
let input = document.getElementById("input");
let list = document.getElementById("list");

if (localStorage.length <= 0) {
  let h3 = document.createElement("h3");
  h3.setAttribute("class", "mx-3 p-5");
  h3.textContent = "Noting is Here. Please Add Content!!!";
  h3.setAttribute("id", "emptyMessage");

  list.append(h3);
}

for (let i = 0; i < localStorage.length; i++) {
  let li = document.createElement("li");
  list.appendChild(li);
  // li.classList.add("list-group-item");
  li.classList =
    "list-group-item border d-flex mt-3 over-flow-hidden justify-content-between";

  li.innerHTML = ` <h3 class="flex-grow-1">${localStorage.key(i)}</h3>
    <button class="btn btn-warning mx-3" onclick= 'edit(this)'>Edit</button>
    <button class="btn btn-danger" onclick='remove(this)'>Remove</button>`;
}

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
    li.classList =
      "list-group-item border d-flex mt-3 over-flow-hidden justify-content-between";

    localStorage.setItem(`${data}`, "");

    li.innerHTML = ` <h3 class="flex-grow-1">${data}</h3>
    <button class="btn btn-warning mx-3" onclick= 'edit(this)'>Edit</button>
    <button class="btn btn-danger" onclick='remove(this)'>Remove</button>`;
  }
  input.value = "";
});

function remove(currentElement) {
  currentElement.parentElement.remove();
  let key =
    currentElement.previousElementSibling.previousElementSibling.innerText;
  localStorage.removeItem(key);

  if (localStorage.length <= 0) {
    let h3 = document.createElement("h3");
    h3.setAttribute("class", "mx-3 p-5");
    h3.textContent = "Noting is Here. Please Add Content!!!";
    h3.setAttribute("id", "emptyMessage");

    list.append(h3);
  }
}

let eit = "";
let done = "";

function edit(currentElement) {
    
  if (currentElement.textContent === "Edit") {
    eit = currentElement.previousElementSibling.textContent;
    localStorage.removeItem(eit);
  }

  if (currentElement.textContent === "Done") {
    done = currentElement.previousElementSibling.value;
    localStorage.setItem(done, " ");

    currentElement.textContent = "Edit";
    let currentval = currentElement.previousElementSibling.value;

    // localStorage.setItem(currentval,"");
    let h3 = document.createElement("h3");
    h3.setAttribute("class", "flex-grow-1");
    h3.innerHTML = done;
    currentElement.parentElement.replaceChild(
      h3,
      currentElement.previousElementSibling
    );
  } else {
    currentElement.textContent = "Done";
    let currentval = currentElement.previousElementSibling.textContent;

    let inputbox = document.createElement("input");
    // inputbox.setAttribute('class','flex-grow-1');
    inputbox.type = "text";
    inputbox.className = "form-control";
    inputbox.value = currentval;
    inputbox.placeholder = "player Name";

    // localStorage.removeItem(currentval);

    currentElement.parentElement.replaceChild(
      inputbox,
      currentElement.previousElementSibling
    );
  }
}
