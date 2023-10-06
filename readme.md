# <font color="orange">Cours Javascript - 2023</font>
## Installation de Babel
```cmd
vérifier la version npm
puis npm init
npm install --save-dev babel-cli babel-preset-env

Ajouter dans le fichier jSon la ligne de code qui suit : "build": "babel --no-babelrc src -w -d js --preset=env"
Cibler le répertoire "SRC" et commande :npm run build

Nota bene : pour installer le CLI faire d'abord npm init pour le package.json
```

## Exemple de création d'Objet en JS

> #### <i class="fa fa-gear fa-spin fa-2x" style="color: gray"></i> Développement
 
```js

// Your code here!
const Personne = ({
    //Your constructor
    constructor(nom){
        this.nom = nom;
        
    },
     print(){ //getter
            return `${this.nom}`
    }
})
//output
let user = Object.create(Personne)
user.nom = "Gius"
console.log(user.nom)

/* D'autres façons */

let User = function(nom){
    this.nom = nom;
}

const new_user = new User("Marc")
console.log(new_user.nom)

/* sans constructeur */

const Message = ({
    login :"barry",
    pwd : "123!full",
    output_f(){
        return `${this.login} : ${this.pwd}`
    }
})

let user_dial = Message.output_f()
console.log(user_dial)



```
## Particularité d'une fonction anonyme

```js
(()=>{
    // début de la fonction

    const User = ({
        login :"misteryman",
        psw : "xxxxx",
        out_put(){
            return `Login ${this.login} : MDP ${this.psw}`
        }
        
    })
    
    let test_out_put  =  User.out_put()
    let new_user = Object.create(User)
    new_user.login = "Damien"
    new_user.psw = "007"
    console.log(test_out_put)
    console.log(new_user.out_put())
   
   //fin de la fonction
})()

```
Toutes les instructions de la fonction ne seront pas visibles à l'extérieur d'elle même

## Cas pratique : calculer le prix de chaque produit HT et TTC
```js
    let prod_1 = 20
    let prod_2 = 10
    const tabprod = []
    tabprod.push(prod_1, prod_2)
    let ht = prod_1+prod_2
    console.log(ht)
    let total = (prod_1+prod_2) * 19.6 / 100
    console.log(total+ht)
    console.log(tabprod.length+" Product")
```

## Une autre méthode

```js
    let prod_prix_1 = 10;
    let prod_prix_2 = 30;

    let calc = (prix_1, prix_2)=>{
        return prix_1 + prix_2;
    }

    let taxe = 19.6
    let print_out = calc(prod_prix_1, prod_prix_2)
    const tabprod = [prod_prix_1, prod_prix_2]
    tabprod.push()
    
    console.log(print_out)
    let total = print_out * 19.6 / 100
    console.log(total+print_out)
    console.log(`${tabprod.length} produits`)

    /*les fonctions */

    /* fonction classiques */
    function nom_de_la_fonction(){
        console.log('instruction')
    }

    /* function anonyme */
    const nom_de_la_variable = function(){
        console.log('instruction')
    }

    /* function flechée */
    const nom_de_la_variable = ()=>{
        console.log('instruction')
    }

    /* function isolée */
    (function(){
        console.log('instruction')

        /* les instructions seront 
        prise en compte à l'intérieur 
        de la fonction */
        
    })()


    const score = (el)=>{
            return el.innerText = `${compte + 1}`
    }

    btn.addEventListener("click",(e)=>{
        score(document.querySelector("span"))
        compte ++
        localStorage.setItem("score",compte) /* stockage compte dans le navigateur */
        e.stopPropagation()
    
    })


    //Création d'un élément dans le dom
    let pub = document.createElement("p")
    section_el.appendChild(pub).innerText = "hello"

    //construction et gestion d'un objet

    const lang_js = ({
        logo : "./asset/logo.js",
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
        Développeurs : ["Netscape", "Communications", "Corporation", "Mozilla", "Foundation"],
        Extension : "js",
        Normes : "ECMA-262; ISO/CEI 16262",
        Paradigme : "Multi-paradigmes: script, orienté objet (orienté prototype), impératif, fonctionnel"

    })
    //Object.keys(lang_js).includes("Version") ? console.log(true) : false
    
    for(data in lang_js){

        console.log(`${data} ${lang_js[data]}`);

    }
    console.log(Object.keys(lang_js)) //afficher la la clé et valeur

    //fonction et méthode

    let score = (elements) => {
        return elements.innerText = compte;
    }
    btn.addEventListener("click",()=>{
        compte ++
        compte === 1 ? btn.setAttribute("disabled", true) : false
        score(document.querySelector("span"))
        localStorage.setItem("score",compte)

    })

```
 [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


