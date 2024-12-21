let input = document.querySelector(".range-input")
let range1 = document.querySelector(".min-range")
let range2 = document.querySelector(".max-range")
let input2 = document.querySelector(".input-value")

input.addEventListener("click", (event) => {
  let slider = event.target
  if (slider.tagName === "INPUT" && slider.type === "range") {
    // Dynamic input(type: range) style and chnge input box value
    function fuc1() {
      const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
      if (slider.id == "slider1") {
        slider.style.background = `linear-gradient(to left, #005CC8 0%, #005CC8 ${value}%, #ddd ${value}%, #ddd 100%)`;
        document.querySelector("#min").value = slider.value
      } else {
        slider.style.background = `linear-gradient(to right, #005CC8 0%, #005CC8 ${value}%, #ddd ${value}%, #ddd 100%)`;
        document.querySelector("#max").value = slider.value
      }
    }
    fuc1()
  }
})


// input base change value in input type range
input2.addEventListener("input", (event) => {
  let slider = event.target
  if (slider.id == "min") {
    range1.value = slider.value
    const value = (range1.value - range1.min) / (range1.max - range1.min) * 100;
    range1.style.background = `linear-gradient(to left, #005CC8 0%, #005CC8 ${value}%, #ddd ${value}%, #ddd 100%)`;
  } else {
    range2.value = slider.value
    const value = (range2.value - range2.min) / (range2.max - range2.min) * 100;
    range2.style.background = `linear-gradient(to right, #005CC8 0%, #005CC8 ${value}%, #ddd ${value}%, #ddd 100%)`;
  }
})





