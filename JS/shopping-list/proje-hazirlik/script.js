const shopingList = document.querySelector(".shopping-list");
const shopingForm = document.querySelector(".shopping-form");
const filterButtons = document.querySelectorAll(".filter-buttons button");

const clearBtn = document.querySelector(".clear");

//html yüklendikten sonra bu çalısır img ve stil hariç
document.addEventListener("DOMContentLoaded", function () {
  loadItems();
  displayAlert();
  shopingForm.addEventListener("submit", handleFormSubmit);
  //başlangıçta çalısacak kodlar
  for (let button of filterButtons) {
    button.addEventListener("click", handleFilterSelection);
  }
  clearBtn.addEventListener("click", clear);
});

function clear() {
  shopingList.innerHTML = "";
  localStorage.clear("shoppingItems");
  displayAlert();
}

function displayAlert() {
  const isEmpty = shopingList.querySelectorAll("li").length == 0;
  const alert = document.querySelector(".alert");
  const filterBtns = document.querySelector(".filter-buttons");
  alert.classList.toggle("d-none", !isEmpty);
  filterBtns.classList.toggle("d-none", isEmpty);
  clearBtn.classList.toggle("d-none", isEmpty);
}
function saveToLS() {
  const listItems = shopingList.querySelectorAll("li");
  const liste = [];
  for (let li of listItems) {
    const id = li.getAttribute("item-id");
    const name = li.querySelector(".item-name").textContent;
    const completed = li.hasAttribute("item-completed");
    liste.push({ id: id, name: name, completed: completed });
  }
  localStorage.setItem("shoppingItems", JSON.stringify(liste));
}

function loadItems() {
  // const items = [
  //   { id: 1, name: "yumurta", completed: false },
  //   { id: 2, name: "balık", completed: true },
  //   { id: 3, name: "süt", completed: false },
  //   { id: 4, name: "zeytin", completed: false },
  // ];
  const items = JSON.parse(localStorage.getItem("shoppingItems")) || [];
  shopingList.innerHTML = "";
  for (let item of items) {
    //     shopingList.innerHTML += `<li class="border rounded p-3 mb-1">
    //           <input type="checkbox" class="form-check-input" />
    //           <div class="item-name">${item.name}</div>

    //           <i class="fs-3 bi bi-x tex-danger delete-icon"></i>
    //         </li>
    // `;

    const li = createListItem(item);
    shopingList.appendChild(li);
  }
}

function createListItem(item) {
  //checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;
  input.addEventListener("change", toggleCompleted);
  //item
  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");
  div.addEventListener("click", openEditMode); //güncelleme
  div.addEventListener("blur", closeEditMode); //güncelleme
  div.addEventListener("keydown", cancelEnter);
  //delete icon

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fs-3 bi bi-x tex-danger delete-icon";
  deleteIcon.addEventListener("click", removeItem); //silme
  //li

  const li = document.createElement("li");
  li.setAttribute("item-id", item.id);
  li.className = "border rounded p-2 mb-1";
  li.toggleAttribute("item-completed", item.completed);
  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);
  return li;
}

function toggleCompleted(e) {
  const li = e.target.parentElement;
  li.toggleAttribute("item-completed", e.target.checked);
  updateFilterItems();
  saveToLS();
}

function addItem(input) {
  const id = generateId();
  const newItem = createListItem({
    id: id,
    name: input.value,
    completed: false,
  });
  shopingList.appendChild(newItem);
  input.value = "";
  updateFilterItems();
  saveToLS();
  displayAlert();
}
function generateId() {
  return Date.now().toString();
}

function handleFormSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("item_name");
  if (input.value.trim().length === 0) {
    alert("yeni değer giriniz");
    return;
  }

  addItem(input);
}

function removeItem(e) {
  const li = e.target.parentElement;
  shopingList.removeChild(li);
  saveToLS();
  displayAlert();
}

function openEditMode(e) {
  const li = e.target.parentElement;
  if (li.hasAttribute("item-completed") == false) {
    e.target.contentEditable = true; //düzenleme güncelleme yaptık div üzerinde
  }
}

function closeEditMode(e) {
  e.target.contentEditable = false;
  saveToLS();
}

function cancelEnter(e) {
  if (e.key == "Enter") {
    e.preventDefault(); //bir alta geçmesini engelle default özelliği kapat
    closeEditMode(e);
  }
}

function handleFilterSelection(e) {
  const filterBtn = e.target;
  for (let button of filterButtons) {
    button.classList.add("btn-secondary");
    button.classList.remove("btn-primary");
  }
  filterBtn.classList.add("btn-primary");
  filterBtn.classList.remove("btn-secondary");

  //filterBtn.getAttribute("item-filter");
  filterItems(filterBtn.getAttribute("item-filter"));
}

function filterItems(filterType) {
  const li_items = shopingList.querySelectorAll("li");

  for (let li of li_items) {
    li.classList.remove("d-flex");
    li.classList.remove("d-none");

    const item_completed = li.hasAttribute("item-completed");

    if (filterType == "complete") {
      //tamamlananlar
      li.classList.toggle(item_completed ? "d-flex" : "d-none");
    } else if (filterType == "incomplete") {
      //tamamlanmayanlar
      li.classList.toggle(item_completed ? "d-none" : "d-flex");
    } else {
      //hepsi
      li.classList.toggle("d-flex");
    }
  }
}

function updateFilterItems() {
  const activeFilter = document.querySelector(".btn-primary[item-filter]");

  filterItems(activeFilter.getAttribute("item-filter"));
}
