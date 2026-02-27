function createList() {
  const name = document.getElementById("listName").value;
  if (!name) return;

  const listDiv = document.createElement("div");
  listDiv.className = "list";

  const title = document.createElement("h2");
  title.textContent = name;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete List";
  deleteBtn.onclick = () => listDiv.remove();

  const input = document.createElement("input");
  input.placeholder = "New item";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Item";

  const itemsDiv = document.createElement("div");

  addBtn.onclick = () => {
    const itemText = input.value;
    if (!itemText) return;

    const item = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => {
      item.classList.toggle("done");
    };

    const span = document.createElement("span");
    span.textContent = " " + itemText + " ";

    const comment = document.createElement("input");
    comment.placeholder = "Add comment";

    const deleteItem = document.createElement("button");
    deleteItem.textContent = "Delete";
    deleteItem.onclick = () => item.remove();

    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(comment);
    item.appendChild(deleteItem);

    itemsDiv.appendChild(item);
    input.value = "";
  };

  listDiv.appendChild(title);
  listDiv.appendChild(deleteBtn);
  listDiv.appendChild(input);
  listDiv.appendChild(addBtn);
  listDiv.appendChild(itemsDiv);

  document.getElementById("lists").appendChild(listDiv);
  document.getElementById("listName").value = "";
}