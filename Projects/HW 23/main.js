const form = document.getElementById('form1');
const formFileds = form.elements;

const submitBtn = form.querySelector('[type="submit"]');
submitBtn.addEventListener('click', clearStorage);

function clearStorage() {
    localStorage.clear();
}

function changeHandler() {
    if (this.type !== 'checkbox') {
        console.log(this.name, this.value);
        localStorage.setItem(this.name, this.value);
    } else {
        console.log(this.name, this.checked);
        localStorage.setItem(this.name, this.checked);
    }
}

function chechStorage() {
    for (let i = 0; i < formFileds.length; i++) {
        if (formFileds[i].type !== 'submit') {
            if (formFileds[i].type === 'checked') {
                formFileds[i].checked = localStorage.getItem(formFileds[i].name);
            } else {
                formFileds[i].value = localStorage.getItem(formFileds[i].name)
            }
        }
    }
    attachEvents();
}
function attachEvents() {
    for (let i = 0; i < formFileds.length; i++) {
        formFileds[i].addEventListener('change', changeHandler);
    }
}

chechStorage();
