let count = 0

const buttoncounter = document.getElementById("countbutton")
const get_counter = document.getElementById("counter")

buttoncounter.addEventListener("click", function(){
    count++
    get_counter.textContent = "Click count: " + count;
});