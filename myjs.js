document.getElementById('addItem').addEventListener('click', addItem);

function addItem() {
    const itemText = document.getElementById('itemInput').value;
    if (itemText.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = itemText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(removeButton);
        document.getElementById('todoList').appendChild(li);
        document.getElementById('itemInput').value = '';
    }
}
