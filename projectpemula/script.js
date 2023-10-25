const result = document.getElementById("result");
const anchor = document.querySelectorAll("a");


let compare = false;

result.addEventListener("click", (e)=> {
    e.preventDefault();
    if(compare){
        document.body.style.background = "#071620";
        document.body.style.color = "white";
        for (var i = 0; i < anchor.length; i++) {
            anchor[i].style.color = "white";
        }
      }
    else {
        document.body.style.color = "black";
        document.body.style.background = "white";
        for (var i = 0; i < anchor.length; i++) {
            anchor[i].style.color = "";
        }
    }

    compare = !compare;
});