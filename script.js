let textarea = document.querySelector('#textarea');
let textLs = 'Text';

const submitInput = () => {
    let text = textarea.value;
    localStorage.setItem(textLs, text);
}

textarea.addEventListener('input', submitInput);

const loadInputText = () => {
    let savedText = localStorage.getItem(textLs);
    textarea.value = savedText;
}

if(textLs !== null) {
    loadInputText();
}
