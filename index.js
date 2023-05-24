let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

let convertFromKg = () => {
  let kg = kgRef.value;
  //to fixed(2) limits the decimal to 2 digits.
  lbRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
};

let convertFromlb = () =>{
    let lb = lbRef.value;
    kgRef.value = (lb /2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
};

let convertFromoz = () =>{
    let oz = ozRef.value;
    ozRef.value = (oz/ 35.274).toFixed(2);
    ozRef.value = (oz/ 16).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromlb);
ozRef.addEventListener("input", convertFromoz);
// window.addEventListener("load", convert From Kg);