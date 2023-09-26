const searchInput = document.querySelector('input');
const searchList = document.querySelector('.search-form__list');
const resultList = document.querySelector('.result-form__list');
let num = 0;

async function getRepository() {
    const response = await fetch(`https://api.github.com/search/repositories?q=${inputValue}`);
    const resData = await response.json();
    clearSearchList();
    const arrItems = await resData.items.slice(0, 5)
    for(let i = 0; i < arrItems.length; i++) {
        createResponseList([arrItems[i].name, arrItems[i].owner.login, arrItems[i].stargazers_count]);
    }
};
function handleTapFunction(event) {
    event.preventDefault();
    console.log(event.target.value)
    inputValue = event.target.value;
    getRepository(inputValue)
};
function handleClickOnItem(event, data) {
    const selectedElement = event
    if(event.target.tagName !== 'LI') return;
    clearSearchList();
    createChoisenList()
    searchInput.value = '';
    console.log(selectedElement)
}
function clearSearchList() {
    searchList.innerHTML = '';
};
function debounce(fn, debounceTime) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        },debounceTime)
    } 
};
function createResponseList(data) {
    num ++;
    const [ name, owner, stars ] = data;
    // console.log(name, owner, stars)
    const listItem = document.createElement('li');
    listItem.className = `search-form__list-item${num}`;
    listItem.textContent = name;
    searchList.appendChild(listItem);
}
function createChoisenList(data = ['alex', 'alexes', 1233]) {
    num ++;
    const [name, owner, stars] = data;
    const listItem = document.createElement('li');
    listItem.className = `result-form__list-item${num}`;
    listItem.innerHTML = `<p>Name: ${name}</p> \n <p>Owner: ${owner}</p> \n <p>Stars: ${stars}</p>`;
    // listItem.textContent = 'NAME:\n OWNER:\n STARS';
    resultList.appendChild(listItem);
}
searchInput.addEventListener('keyup', debounce(handleTapFunction, 1000))
searchList.addEventListener('click', handleClickOnItem)
// console.log(inputValue)