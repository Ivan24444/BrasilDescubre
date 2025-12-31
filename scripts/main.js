document.body.style.backgroundColor = "#0b8f3a"; 
document.body.style.fontFamily = "'Poppins', 'Segoe UI', Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";


const elementos = Array.from(document.body.children);
const contenedor = document.createElement("div");

contenedor.style.backgroundColor = "#ffde59"; 
contenedor.style.maxWidth = "900px";
contenedor.style.margin = "30px auto";
contenedor.style.padding = "25px";
contenedor.style.borderRadius = "15px";

elementos.forEach(el => contenedor.appendChild(el));
document.body.appendChild(contenedor);


const h1 = document.querySelector("h1");
h1.style.textAlign = "center";
h1.style.fontSize = "40px";
h1.style.marginBottom = "20px";


document.querySelectorAll("h2").forEach(h2 => {
    h2.style.marginTop = "35px";
    h2.style.borderBottom = "2px solid #0b8f3a";
    h2.style.paddingBottom = "5px";
});


document.querySelectorAll("p").forEach(p => {
    p.style.lineHeight = "1.6";
    p.style.textAlign = "justify";
    p.style.fontSize = "16px";
});


document.querySelectorAll("ul").forEach(ul => {
    ul.style.marginLeft = "25px";
    ul.style.lineHeight = "1.6";
});


const table = document.querySelector("table");
if (table) {
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginTop = "15px";
    table.style.backgroundColor = "white";
}

document.querySelectorAll("th").forEach(th => {
    th.style.backgroundColor = "#0b8f3a";
    th.style.color = "white";
    th.style.border = "1px solid black";
    th.style.padding = "10px";
    th.style.textAlign = "center";
});

document.querySelectorAll("td").forEach(td => {
    td.style.border = "1px solid black";
    td.style.padding = "10px";
    td.style.textAlign = "center";
});


document.querySelectorAll("hr").forEach(hr => {
    hr.style.margin = "30px 0";
});

const ultimoParrafo = document.querySelector("p:last-of-type");
if (ultimoParrafo) {
    ultimoParrafo.style.textAlign = "center";
    ultimoParrafo.style.fontSize = "14px";
    ultimoParrafo.style.marginTop = "30px";
}
