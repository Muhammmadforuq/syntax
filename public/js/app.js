// Inputs
document.querySelectorAll('.dropdown').forEach((drop) => {
  if (drop) {
    drop.addEventListener('click', () => {
      drop.lastElementChild.classList.toggle('hidden')
      drop.firstElementChild.classList.toggle('rotate-180')
    })

  }
})

document.querySelectorAll('.options').forEach((option) => {
  if (option) {
    option.addEventListener('click', (e) => {
      e.target.parentElement.previousElementSibling.value = e.target.textContent
      // console.log(e.target.textContent);
    })
  }
})

// const show = (selected) => {
//   document.querySelector('.dropdownInput').value = selected;
// }

// checkbox indeterminate
const indeterminate = document.getElementById('indeterminate')
if (indeterminate) {
  indeterminate.indeterminate = true
}


// password hide and show togggle
let formInputPassword = document.querySelectorAll('#form-input-password')
let formInputPasswordShow = document.querySelectorAll('#form-input-password-show')
let formInputPasswordHide = document.querySelectorAll('#form-input-password-hide')

formInputPasswordShow.forEach((item, index) => {
  item.addEventListener('click', function () {
    formInputPassword[index].type = 'text'
    formInputPasswordHide[index].classList.remove('hidden')
    item.classList.add('hidden')
  })
})

formInputPasswordHide.forEach((item, index) => {
  item.addEventListener('click', function () {
    formInputPassword[index].type = 'password'
    item.classList.add('hidden')
    formInputPasswordShow[index].classList.remove('hidden')
  })
})

// =============== accordion ===============
const accoddion = document.querySelectorAll(".accordion .accordionBtn");
accoddion.forEach((cell) => {
  cell.addEventListener("click", () => {
    let accordionContent = cell.parentElement.nextElementSibling;
    let active = document.querySelector(".accordion section.active");

    if (accordionContent) {
      if (active) {
        if (cell.parentElement.parentElement.classList.contains("active")) {
          cell.parentElement.parentElement.classList.remove("active");
          active.lastElementChild.style.height = "0";
          cell.querySelector("svg").style.transform = "rotate(0deg)";
        } else {
          active.classList.remove("active");
          active.querySelector("svg").style.transform = "rotate(0)";
          active.lastElementChild.style.height = "0";
          cell.parentElement.parentElement.classList.add("active");
          accordionContent.style.height = accordionContent.scrollHeight + "px";
          cell.querySelector("svg").style.transform = "rotate(180deg)";
        }
      }
      else {
        cell.parentElement.parentElement.classList.add("active");
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        cell.querySelector("svg").style.transform = "rotate(180deg)";
      }
    }
  });
});

// =============== company page tab ===============
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  if (tab) {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    });
  }
});


// company entity details modal
document.querySelectorAll('.entityInfo').forEach((stop) => {
  if (stop) {
    stop.addEventListener('click', () => {
      document.querySelector('.entityInfoModal').classList.toggle('invisible')
      document.querySelector('.entityInfoModal').classList.toggle('opacity-0')
    })
  }
})

// company executive officer modal
document.querySelectorAll('.executiveOfficer').forEach((stop) => {
  if (stop) {
    stop.addEventListener('click', () => {
      document.querySelector('.executiveOfficerModal').classList.toggle('invisible')
      document.querySelector('.executiveOfficerModal').classList.toggle('opacity-0')
    })
  }
})

// company bank account modal
document.querySelectorAll('.bankAccount').forEach((stop) => {
  if (stop) {
    stop.addEventListener('click', () => {
      document.querySelector('.bankAccountModal').classList.toggle('invisible')
      document.querySelector('.bankAccountModal').classList.toggle('opacity-0')
    })
  }
})