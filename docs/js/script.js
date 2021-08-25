"use strict";

// ---- Get HTML Document Body
const pageBody = document.querySelector("body");

// ------------ Show \ Hide "Add Product" Form (Mobile)
const addItemBody = document.querySelector(".add-item");
const addItemShowBtn = document.querySelector(".main-content__add-item-btn");
const addItemHideBtn = document.querySelector('.add-item__close-btn');

addItemShowBtn.addEventListener("click", () => {
  addItemBody.classList.toggle("add-item_active");
});

addItemHideBtn.addEventListener('click', () => {
    addItemBody.classList.toggle("add-item_active");
});

function closeOnAreaClick(elem, trigger, elemClassToRemove) {
  document.addEventListener("click", (e) => {
    if (!elem.contains(e.target) && e.target != trigger) {
      elem.classList.toggle(elemClassToRemove, false);
    }
  });
}

// Hide Add Item Form on click to other area
closeOnAreaClick(addItemBody, addItemShowBtn, 'add-item_active');


// ------------ Checking "Add Product" form inputs for fullness
const addItemForm = document.querySelector('.add-item-form');
const addItemFormInputs = addItemForm.querySelectorAll('.add-item-form__input');
const addItemButton = document.querySelector('.add-item-form__submit-button');

addItemForm.addEventListener('input', () => {
    addItemFormInputs.forEach((elem) => {
        if (elem.hasAttribute('required') && !elem.value) {
            elem.parentNode.classList.toggle('empty', true);
        } else {
            elem.parentNode.classList.toggle('empty', false);
        }
    });

    let emptyInputs = addItemForm.querySelectorAll('.empty');

    if (emptyInputs.length == 0) {
        addItemButton.classList.toggle('add-item-form__submit-button_active', true);
    } else {
        addItemButton.classList.toggle('add-item-form__submit-button_active', false);
    }
});

