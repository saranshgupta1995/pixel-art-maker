//define html elements on page
const colorPicker = document.getElementById("colorPicker");
const input_height = document.getElementById("input_height");
const input_width = document.getElementById("input_width");
const myTable = document.getElementById('pixel_canvas');
//add event listener to take user selected color value as input
colorPicker.addEventListener("input", updateFirst);
//define default color
let userColor = "#000000";
const toggleCol = function() {
    if (this.style.backgroundColor === "rgb(255, 255, 255)") {
        this.style.backgroundColor = userColor;
    } else {
        this.style.backgroundColor = "rgb(255, 255, 255)";
    }
};

//make grid on screen
function makeGrid() {
    //delete any preciously created table
    myTable.innerHTML = "";
    let elem, subelem;
    //create td elements in table
    for (let i = 0, k = input_height.value; i < k; i++) {
        elem = document.createElement("tr");
        for (let j = 0, l = input_width.value; j < l; j++) {
            subelem = document.createElement("td");
            subelem.style.backgroundColor = "rgb(255, 255, 255)";
            subelem.onclick = toggleCol;
            elem.appendChild(subelem);
        }
        myTable.appendChild(elem);
    }
}

//take in user color
function updateFirst(event) {
    userColor = event.target.value;
}
