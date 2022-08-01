const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

for (let i = 0; i < categories.children.length; i++) {
    const category = categories.children[i];
    const categoryTitleText = category.querySelector('h2');
    const categoryList = category.querySelector('ul')
    console.log(`Category: ${categoryTitleText.textContent}`);
    console.log(`Elements: ${categoryList.children.length}`);
}
