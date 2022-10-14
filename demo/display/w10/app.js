//Showing which shop depending on which selection the user makes

document.querySelector('select').addEventListener('change', function(e) {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = (decideShop)
    document.querySelector('body').appendChild(newParagraph)
    })