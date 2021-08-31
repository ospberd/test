let p =  document.getElementById("p2");
let inp = document.getElementById("filtre");
let fruits = ["Яблоко", "Апельсин", "Слива", "Малина"];
fruits = [...fruits, "Вишенька"];
fruits = [ "Ананас",...fruits];

oninp ();

function oninp() {
p.innerHTML = '';

if (inp.value != '') {
    fruits = [ inp.value ,...fruits]
    inp.value = ''};

fruits.forEach((item, i) => {
    p.innerHTML += `<li>  ${item}  `
});

}
