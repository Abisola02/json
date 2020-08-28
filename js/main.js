// let myButton = document.getElementById('myBtn');
// myButton.addEventListener("click", getUser);

// function getUser() {
//     fetch('..js/main.json')
//     .then((res) => res.json())
//     .then((data) =>{
//         for(let i =0; i < data.length; i++)
//         {
//             console.log(data[i].lastName);
//         }

//     })

// }
let myButton = document.getElementById('myBtn');
myButton.addEventListener('click', changeColor);

function changeColor() {
   let blue = Math.floor(Math.random() * 256);
   let yellow = Math.floor(Math.random() * 256);
   let red = Math.floor(Math.random() * 256);
   let bgColor = "rgb(" + blue + "," + yellow + ","+ red +")";
   console.log(bgColor);
   document.body.style.background = bgColor;


}
// random_bg_color();
