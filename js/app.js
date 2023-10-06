document.addEventListener("DOMContentLoaded", e => {
    /* DOM */
    console.log(e.target);
    const number = 10;

    /* type de variable */

    let elements = String(` ES6`);
    let age = 10;
    let ages = `10`;
    let bool = true;
    let compte = 0;
    let btn = document.querySelector("button");
    let section_el = document.querySelector("section");

    if (age === ages) {
        console.log("c'est vrai");
    } else {
        console.log("c'est faux");
    }
    /* conditions ternaire */
    age !== ages ? console.log("c'est vrai") : console.log("c'est faux");

    console.log("Tua as  : " + age + " ans"); /* ancienne syntaxe */
    console.log(`Tua as  : ${age} ans`);
    console.log(typeof age);
    /* tester un nombre impaire */
    nombre = 27;
    nombre % 2 == 0 ? console.log(`chiffre paire ${nombre}`) : console.log(`chiffre impaire ${nombre}`);

    const table_lang = ["HTML", "css", true];
    let noms = ["Tom", "Brners", true];

    let noms_lang = [...table_lang, ...noms]; //spread opérateur
    console.log(table_lang.length);
    //console.table(noms_lang)

    for (let i = 0; i < noms_lang.length; i++) {
        console.log(`${i} : ${noms_lang[i]}`);
    }

    le_nom_du_tab = { /* tableau d'objet */
        nom: "Berners",
        prenom: "Tim",
        ville: "London",
        pays: "UK"
    };
    console.table(Object.values(le_nom_du_tab));

    /* affichage sur le document html */

    let users = document.createElement("ul");
    section_el.appendChild(users); /* dernier enfant */

    console.log(section_el.children);
    for (data in le_nom_du_tab) {

        console.log(`${data} : ${le_nom_du_tab[data]}`);

        users.innerHTML += `<li>${data} : ${le_nom_du_tab[data]}</li>`;
    }

    const element_title = document.querySelector("header h1");
    element_title.innerText += ` ${elements}`;

    /* les tableaux et les fonctions */
    let x = 0;
    btn.addEventListener("click", () => {
        if (x == 0) {
            x = 1;
            console.log(x);
        } else {
            x = 0;
            console.log(x);
        }
    });
});