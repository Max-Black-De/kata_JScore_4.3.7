const searchInput = document.querySelector('input');
const searchList = document.querySelector('.search-form__list');
const resultList = document.querySelector('.result-form__list');
// const closeBtn = document.querySelector('.close-button');

async function getRepository(inputValue) {
    const response = await fetch(`https://api.github.com/search/repositories?q=${inputValue}`);
    const resData = await response.json();
    const arrItems = resData.items.slice(0, 5)
    createResponseList(arrItems);
};

function handleTapFunction(event) {
    event.preventDefault();
    clearSearchList();
    inputValue = event.target.value;
    getRepository(inputValue)
};
function handleClickOnItem(event) {
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
    for(let i = 0; i < data.length; i++) {
        const listItem = document.createElement('li');
        listItem.className = `search-form__list-item`;
        listItem.textContent = data[i].name;
        searchList.appendChild(listItem);
        listItem.dataset.name = data[i].name;
        listItem.dataset.owner = data[i].owner.login;
        listItem.dataset.stars = data[i].stargazers_count;
    }
}
function createChoisenList(data) {
    const { name, owner, stars } = data;
    let counterLi = resultList.childNodes.length
    
    if(counterLi < 3) {
        console.log(counterLi);
        const listItem = document.createElement('li');
        listItem.className = `result-form__list-item`;
        listItem.innerHTML = `<p>Name: ${name}</p>
        <p>Owner: ${owner}</p>
        <p>Stars: ${stars}</p>`;
        resultList.appendChild(listItem);
        const closeBtn = document.createElement('button');
        closeBtn.className = `close-button`;
        closeBtn.type = `button`;
        listItem.appendChild(closeBtn);
        listItem.addEventListener("click", function (event) {
            if(event.target.className === 'close-button') {
                resultList.removeChild(listItem);
                counterLi -= 1;
            };
        });
    } else {
        const listItem = document.createElement('li');
        listItem.className = `result-form__list-item`;
        listItem.innerHTML = `<p>Name: ${name}</p>
            <p>Owner: ${owner}</p>
            <p>Stars: ${stars}</p>`;
            resultList.appendChild(listItem);
            resultList.removeChild(resultList.childNodes[0])
            const closeBtn = document.createElement('button');
            closeBtn.className = `close-button`;
            closeBtn.type = `button`;
            listItem.appendChild(closeBtn);      
            listItem.addEventListener("click", function (event) {
                if(event.target.className === 'close-button') {
                    resultList.removeChild(listItem);
                    counterLi -= 1;
                };
            });
    }
}
searchInput.addEventListener("keyup", debounce(handleTapFunction, 1000));
searchList.addEventListener("click", function (event) {
    searchInput.value = "";
    const selectedElementData = event.target.dataset;
    if (event.target.tagName !== "LI") return;
    clearSearchList();
    createChoisenList(selectedElementData);
});