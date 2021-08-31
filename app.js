let p =  document.getElementById("p2");
let inp = document.getElementById("filtre");
let fruits = ["Яблоко", "Апельсин", "Слива", "Малина"];

arrList(fruits, p);

function oninp() {
fruits = addElem(fruits, inp)
arrList(fruits, p);
};

function onfiltr() {
   let flist = filterItems(fruits, inp);
   arrList(flist, p);

};

function arrList(arr, paragr) {
  p.innerHTML = '';
  arr.forEach((item, i) => {
      paragr.innerHTML += `<li>  ${item}  `
  });
};

function addElem(arr, inp1){
  if (inp1.value != '') {
      arr = [ inp1.value ,...arr]
      inp1.value = ''};
  return arr;
};

function filterItems(arr, inp1) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(inp1.value.toLowerCase()) > -1;
  })
}
