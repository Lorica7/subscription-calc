const subTypeEl = document.querySelector("#subscription");
const subDurationEl = document.querySelector("#months");
const result = document.querySelector(".result");

let subType = "basic";
let subDuration = 1;


/* Event Listeners */

subTypeEl.addEventListener("change", (e) => {
    subType = e.target.value;
    updateSub();
});

subDurationEl.addEventListener("change", (e) => {
    subDuration = Number(e.target.value);
    updateSub();
})

/* Update Function */

const updateSub = () => {
    let monthlyCost = 5;
    if (subType === "standard") {
        monthlyCost = 7;
    } else if (subType === "premium") {
        monthlyCost = 10;
    }
    let totalCost = subDuration * monthlyCost;
   result.innerText = `You have chosen a ${subDuration} month plan for $${totalCost}.` 
}

updateSub();

/*Reset values when page refreshes */

window.addEventListener("unload", function (e) {
    console.log("hey")
    subTypeEl.selectedIndex = 0;
    subDurationEl.selectedIndex = 0;
     subType = "basic";
     subDuration = 1;
})