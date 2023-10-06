document.addEventListener("DOMContentLoaded",()=>{

    /* objet user */
    const lang_js = ({
        logo : "./asset/logo.png",
        intro : `JavaScript est un langage de programmation de scripts principalement 
            employé dans les pages web interactives et à ce titre est 
            une partie essentielle des applications web. 
            Avec les langages HTML et CSS, 
            JavaScript est au cœur des langages 
            utilisés par les développeurs web. Wikipédia`
            ,

        Conçu: "Brendan Eich",
        Date: "Mai 1996",
        Version : "13 - ECMA-262 (Juin 2022)",
        Développeurs : ["Netscape", "Communications", "Corporation", "Mozilla", "Foundation"].join(' / '),
        Extension : "js",
        Normes : "ECMA-262; ISO/CEI 16262",
        Paradigme : "Multi-paradigmes: script, orienté objet (orienté prototype), impératif, fonctionnel"

    })

    /* sélectionner un parent */
    const element_parent = document.querySelector("section")

    /* créer un élément */
    let user = document.createElement("ul")

    /* l'ajouter à son parent */
    element_parent.appendChild(user)

    //Object.keys(lang_js).includes("Version") ? console.log(true) : false

    for(data in lang_js){

        //mettre en place dans la boucle for une condition pour sélectionner l'image de l'objet User`);
        data == "logo" ? user.innerHTML+=`<li><img src="${lang_js[data]}" alt="logo"></li>`: 
        
        user.innerHTML+=`<li>${data.toUpperCase()} : ${lang_js[data]}</li>`
    }

    console.log(Object.keys(lang_js)) //afficher la la clé et valeur
    
})