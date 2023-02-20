const form = document.querySelector("form");
let anyInput = document.querySelectorAll("[name]");

form.addEventListener("blur", (e) => {
  if (e.target.hasAttribute('name')) {
    const key = e.target.getAttribute('name');
    let val = e.target.value;
    if (val === "") {
      return false;
    } else {
      localStorage.setItem(key, val);
      e.target.value = localStorage.getItem(key);
    }
  }
}, true);


document.querySelector(".add-storage").onclick = function (add) {
  for (let i = 0; i < anyInput.length; i++) {
    let inputs = anyInput[i];
    if (inputs.getAttribute('name')) inputs.value = localStorage.getItem(inputs.getAttribute('name'))
    add.preventDefault();
  }
}

document.querySelector(".clear-storage").onclick = function (del) {
  localStorage.clear();
  del.preventDefault();
}


save();