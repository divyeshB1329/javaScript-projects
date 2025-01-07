let selFile = document.querySelector("input");
let btn = document.querySelector("button");
let tbl = document.querySelector("table");
let one_time = true;

btn.addEventListener("click", () => {
    // Prevent multiple data exports
    if (one_time) {
        const file = selFile.files[0]; // Get the selected file
        const reader = new FileReader(); // Create a FileReader object

        // Check if a file is selected
        if (!file) {
            alert("Please choose a file!");
            return;
        }

        // Display table and hide file input after file selection
        tbl.style.display = "block";
        selFile.style.display = "none";

        // Process the file when loaded
        reader.onload = (e) => {
            let content = e.target.result; // Read the file content as a string
            let rows = content.split("\r\n");
            let data = rows.map((row) => row.split(","));

            // Populate the table with rows and cells
            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement("tr"); // Create a new table row
                for (let j = 0; j < data[i].length; j++) {
                    let td = document.createElement("td"); // Create a table cell
                    td.textContent = data[i][j];
                    tr.appendChild(td);
                }
                tbl.appendChild(tr);
            }
            one_time = false;
        };

        reader.readAsText(file); // Read the file as plain text
    }
});
