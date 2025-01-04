// Main functionality: Dynamically update values and generate text based on input
const range = document.querySelector('.range_main');
const paraval = document.querySelector('#paraValue');
const paraval2 = document.querySelector('#paraValue2');
const btn = document.querySelector('#btn');
const selectElement = document.getElementsByClassName('htmlYN');
const selectTags = document.getElementById("tags");
const Wpara = document.querySelector('#Wpara');
const para = document.querySelector('#para');
const textBox = document.querySelector("#lorem_para");

let lorem_para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab voluptatibus odio. Itaque voluptatem illo recusandae, quas quaerat enim reiciendis maiores fugit quasi accusantium. Eligendi suscipit labore reprehenderit consectetur sed, id dolorum molestiae minus eveniet, facilis quos. Porro asperiores dicta dignissimos neque culpa iste a veniam in id natus distinctio dolore ullam explicabo eaque harum, commodi voluptatibus quis fugit. Perferendis ad dolorem, impedit consectetur soluta id, aperiam animi, tempora odit sequi dignissimos nihil! Obcaecati, recusandae sed suscipit vero ratione quae illo consectetur dolorum, consequuntur harum assumenda iure. Repellat natus eos corrupti minima molestiae, nihil molestias commodi harum numquam! Error, vitae.`;

let arr = lorem_para.split(' ');

// Update paraValue live when #para changes
para.addEventListener('input', () => {
    paraval.textContent = para.value;
});

// Update paraValue2 live when #Wpara changes
Wpara.addEventListener('input', () => {
    paraval2.textContent = Wpara.value;
});

// Generate text content when button is clicked
btn.addEventListener("click", () => {
    textBox.innerHTML = " ";
    for (let i = 0; i < para.value; i++) {
        let element;
        if (selectElement[0].value == "Yes") {
            element = document.createElement(selectTags.value);
        } else {
            element = document.createElement('span');
        }
        let addtag = textBox.appendChild(element);
        let wrdStr = '';
        for (let i = 0; i < Wpara.value; i++) {
            wrdStr += arr[i] + " ";
            addtag.textContent = wrdStr;
        }
    }
});
