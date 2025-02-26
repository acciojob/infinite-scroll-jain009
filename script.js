const list = document.getElementById('infinite-list');

function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(li);
    }
}

addItems(20);

window.addEventListener('scroll', () => {
    const scrollElement = document.scrollingElement;
    const isAtBottom = scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight;

    if (isAtBottom) {
        addItems(2);
    }
});