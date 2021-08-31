let p =  document.getElementById("p2");
let pm =  document.getElementById("pm");

let inp = document.getElementById("filtre");
let fruits = ["Яблоко", "Апельсин", "Слива", "Малина"];
let candelete = false;
let onlyone = '';


arrList(fruits, p);

inp.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName == 'Enter') {
    showmess(pm,`Елемент ${inp.value} додано у список`);

    console.log(inp.value);
    fruits = addElem(fruits, inp);

    arrList(fruits, p);
    };

  if ((keyName == 'Delete') && candelete) {
   delbyvalue(fruits, onlyone);
   candelete = false;
   inp.value = '';
   arrList(fruits, p);
  };
}, false);

inp.oninput = function() {
   let flist = filterItems(fruits, inp);
   arrList(flist, p);
   if (flist.length == 1) {
     candelete = true;
     onlyone = flist[0];
   }
   else {
     candelete = false;
     onlyone = '';
   };
};

function arrList(arr, paragr) {
  arr.sort();
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
};

function delbyvalue(arr, val) {
   arr.splice(arr.indexOf(val), 1);
};

function showmess(paragr, txtmess){
  paragr.style.opacity = 0;
  paragr.innerHTML = txtmess;
  paragr.style.opacity = 1;

}
