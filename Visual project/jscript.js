const ul = document.querySelector(".unlist");
const li = ul.querySelectorAll(".list");

li.forEach(nav_li => nav_li.addEventListener("mouseover", (e)=>{
  e.preventDefault();
  document.body.style.opacity = "0.8";
  nav_li.addEventListener("mouseout", (a) => {
  document.body.style.opacity = "1";
  })
})
)
