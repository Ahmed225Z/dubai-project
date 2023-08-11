
document.addEventListener("DOMContentLoaded", function () {
  const selectAllCheckbox = document.getElementById("select-all");
  const singleCheckboxes = document.querySelectorAll(".single-checkbox");

  selectAllCheckbox.addEventListener("change", function () {
    const isChecked = this.checked;
    singleCheckboxes.forEach(checkbox => {
      checkbox.checked = isChecked;
      toggleSection(checkbox);
    });
  });

  singleCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
      toggleSection(this);
      const allChecked = Array.from(singleCheckboxes).every(checkbox => checkbox.checked);
      selectAllCheckbox.checked = allChecked;
    });
  });

  function toggleSection(checkbox) {
    const target = checkbox.getAttribute("data-target");
    const section = document.getElementById(target);
    if (checkbox.checked) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  };
});



document.addEventListener("DOMContentLoaded", function () {
  const needDivs = document.querySelectorAll(".need");

  needDivs.forEach(div => {
    div.addEventListener("click", function () {
      // Remove "active" class from all needDivs
      needDivs.forEach(div => {
        div.classList.remove("active");
      });

      this.classList.add("active");

      const input = this.querySelector("input[type='radio']");
      input.checked = true;
    });
  });
});
































