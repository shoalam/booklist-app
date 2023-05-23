const bookList = document.querySelector('.book-list');
//const title = document.querySelector('#title').value;
const title = 'This is title';
//const author = document.querySelector('#author').value;
const author = "This is author";
//const isbn = document.querySelector('#isbn').value;
const isbn = 10;

//console.log(bookList);
let parent = "<tr>"
let child = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td></td>
`;
parent +="</tr>";

parent.appendChild(child);

bookList.innerHTML = parent;

