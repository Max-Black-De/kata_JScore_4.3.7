const searchInput = document.querySelector('input');
const searchList = document.querySelector('.search-form__list');
const resultList = document.querySelector('.result-form__list');
let num = 0;

async function getRepository() {
    const response = await fetch(`https://api.github.com/search/repositories?q=${inputValue}`);
    const resData = await response.json();
    clearSearchList();
    for(let i = 0; i < 5; i++) {
        // console.log(resData.items[i]);
        createResponseList([resData.items[i].name,
                            resData.items[i].owner.login,
                            resData.items[i].stargazers_count
                            ])
    }
    // let { name, owner, stars } = resData;
    
};
function handleTapFunction(event) {
    event.preventDefault();
    console.log(event.target.value)
    inputValue = event.target.value;
    getRepository(inputValue)
    
};
function handleClickOnItem(event) {
    const selectedElement = event.target.textContent
    if(event.target.tagName !== 'LI') return;
    // const searchListItem = event.target.querySelector(`.${selectedElement}`)
    clearSearchList();
    createChoiseList()
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
    const listItem = document.createElement('li');
    listItem.className = `search-form__list-item${num}`;
    listItem.textContent = data;
    // listItem.textContent = `NAME: ${name} \n OWNER: ${owner}\n STARS: ${stars}`;
    searchList.appendChild(listItem);
}
function createChoiseList() {
    num ++;
    // const [name, owner, stars] = data;
    const listItem = document.createElement('li');
    listItem.className = `result-form__list-item${num}`;
    // listItem.textContent = data;
    listItem.textContent = 'NAME:\n OWNER:\n STARS';
    resultList.appendChild(listItem);
}
searchInput.addEventListener('keyup', debounce(handleTapFunction, 1000))
searchList.addEventListener('click', handleClickOnItem)
// console.log(inputValue)