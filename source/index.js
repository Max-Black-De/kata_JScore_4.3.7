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
function handleClickOnItem(event) {
    const selectedElement = event
    console.log(selectedElement)
    if(event.target.tagName !== 'LI') return;
    clearSearchList();
    createChoisenList()
    searchInput.value = '';
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
    // num ++;
    const [ name, owner, stars ] = data;
    
    const listItem = document.createElement('li');
    listItem.className = `search-form__list-item`;
    listItem.textContent = name;
    // listItem.target.dataset.name = name;
    // listItem.target.dataset.name = owner;
    searchList.appendChild(listItem);
    console.log(listItem.target)
    // listItem.target.dataset.name = stars;
}
function createChoisenList(event) {
    console.log(event)
    // const [name, owner, stars] = event.target.dataset;
    const listItem = document.createElement('li');
    listItem.className = `result-form__list-item`;
    // listItem.innerHTML = `<p>Name: ${name}</p> \n <p>Owner: ${owner}</p> \n <p>Stars: ${stars}</p>`;
    resultList.appendChild(listItem);
}
searchInput.addEventListener('keyup', debounce(handleTapFunction, 1000))
searchList.addEventListener('click', handleClickOnItem)