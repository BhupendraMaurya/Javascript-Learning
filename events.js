let button = document.querySelector("#id4");
let currMode = "light";

console.log("Hello events how are you");
console.log("hello bhupendra branch was created");

button.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});
