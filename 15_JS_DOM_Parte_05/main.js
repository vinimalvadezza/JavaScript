let form = document.getElementById('addItem');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', buscarItems);

// Adiciona item
function addItem(e) {
    e.preventDefault();

    // Pega o valor do <input>
    let newItem = document.getElementById('item').value;

    // Cria novo elemento <li>
    let li = document.createElement('li');
    // Adiciona classe
    li.className = 'list-group-item';
    // Adiciona o texto no novo elemento com o valor armazenado no nemItem
    li.appendChild(document.createTextNode(newItem));

    //Cria um elemento botão para deletar um item
    let deleteBtn = document.createElement('button');

    // Adiciona classes para o botão deletar
    deleteBtn.className = 'btn btn-danger btn- float-end delete';

    // Acrescenta o texto no novo elemento
    deleteBtn.appendChild(document.createTextNode('x'));

    // Acrescenta o botão no elemento li
    li.appendChild(deleteBtn);   

    itemList.appendChild(li); // Adiciona o novo item na lista

    form.reset(); // Limpa o formulario
}

// Funçao remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Função buscarItems
function buscarItems(e) {
    // Converte o texto digitando para minusculos
    let text = e.target.value.toLowerCase();
    
    // Busca todos os item
    let items = itemList.getElementsByTagName('li');

    // Converte os itens para array
    Array.from(items).forEach(function (item) {
        // Busca o primeiro item da lista
        let itemName = item.firstChild.textContent;
        // Busca o item na lista que começa com o mesmo texto digitado
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'; // exibe o item
        } else {
            item.style.display = 'none'; // oculta o item
        }
    });
}