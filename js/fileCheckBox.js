const tableAllRow = document.querySelectorAll(".table-body>tr");
const tableCheckbox = document.querySelectorAll(
  '.name-select-box>input[type="checkbox"]'
);
const tableCheckAll = document.querySelector(".selectAllCheckBox");
const gridBox = document.querySelectorAll(".folder-box,.file-box");
const gridCheckBox = document.querySelectorAll(
  ".folder-box-header>input[type='checkbox'],.file-box-header>input[type='checkbox']"
);
const previewBox = document.querySelector(".folder-preview");
const fileManagerContainer = document.querySelector(".file-manager");
const closeFilePreview = document.querySelector(".folder-preview>header>div");
const deleteFilePreview = document.querySelector(".preview-delete");
// ! Əgər table olarsa
tableAllRow.forEach((table, index) => {
  table.addEventListener("click", (e) => {
    tableCheckbox[index + 1].checked = !tableCheckbox[index + 1].checked;
    // ? File Preview active
    if (tableCheckbox[index + 1].checked) {
      previewBox.classList.add("preview-active");
      fileManagerContainer.classList.add("file-manager-grid3");
    } else {
      previewBox.classList.remove("preview-active");
      fileManagerContainer.classList.remove("file-manager-grid3");
    }
  });
});

tableCheckAll.addEventListener("click", () => {
  if (tableCheckAll.checked) {
    tableCheckbox.forEach((check) => {
      check.checked = true;
    });
  } else {
    tableCheckbox.forEach((check) => {
      check.checked = false;
    });
  }
  tableCheckAll.checked = !tableCheckAll.checked;
});
tableCheckbox.forEach((check) => {
  check.addEventListener("click", () => {
    check.checked = !check.checked;
  });
});
//  ! Əgər grid olarsa

gridBox.forEach((grid, index) => {
  grid.addEventListener("click", () => {
    gridCheckBox[index].checked = !gridCheckBox[index].checked;
    // ? File Preview active
    if (gridCheckBox[index].checked) {
      previewBox.classList.add("preview-active");
      fileManagerContainer.classList.add("file-manager-grid3");
    } else {
      previewBox.classList.remove("preview-active");
      fileManagerContainer.classList.remove("file-manager-grid3");
    }
  });
});
gridCheckBox.forEach((check) => {
  check.addEventListener("click", () => {
    check.checked = !check.checked;
  });
});

closeFilePreview.addEventListener("click", () => {
    previewBox.classList.remove("preview-active");
    fileManagerContainer.classList.remove("file-manager-grid3");
    }
);

deleteFilePreview.addEventListener("click", () => {
    previewBox.classList.remove("preview-active");
    fileManagerContainer.classList.remove("file-manager-grid3");
    }
);
