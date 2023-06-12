function changerCouleur(e) {
    e.preventDefault()
  let npd = document.querySelectorAll("label");
  for (const value of npd) {
    value.style.color = "red";
    value.style.fontSize = "20px";
  }
}

function reinitialiserCouleur(e) {
    e.preventDefault()
  let npd = document.querySelectorAll("label");
  for (const value of npd) {
    value.style.color = "black";
    value.style.fontSize = "16px";
  }
}

var products = []
var i = 0

var product = {
    Nprd : '',
    Qt : 0,
    Pr : 0
}

const inputs = document.querySelectorAll('input')
for (const value of inputs) {
    value.addEventListener('keyup',handleChange)
   
}

// Ajouter des valeurs dans l'objet product
function handleChange(e) {
    e.preventDefault()
    product = {
        ...product,[e.target.name] : e.target.value
    }
    if (e.target.name == "Pr") {
        product.pt = parseFloat(e.target.value)  * parseInt(product.Qt) 
    }
}

/**
 * <table style="border: 2px solid blue">
      <thead >
        <tr >
          <th style="border: 1px solid #333;">Nom de produits</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td style="border: 1px solid #333;">Contenu Produit</td>
        </tr>
      </tbody>
    </table>
 */

function submit(e) {
  i++
    e.preventDefault()
    products.push(product)

    // entete

    const table = document.createElement('table')
    const titleHead = document.createElement('thead')
    titleHead.style.backgroundColor='#333'
    titleHead.style.color='white'
    const titleRow = document.createElement('tr')
    const title1 = document.createElement('th')
    title1.innerText='Nom Produit'
    const title2 = document.createElement('th')
    title2.innerText='Quantite'
    const title3 = document.createElement('th')
    title3.innerText='total'
    const title4 = document.createElement('th')
    title4.innerText='Prix total'

    // corps
    const bodyHead = document.createElement('tbody')
    const bodyRow = document.createElement('tr')
    const body1 = document.createElement('td')
    body1.style.border='1px solid #333' 
    const body2 = document.createElement('td')
    body2.style.border='1px solid #333' 
    const body3 = document.createElement('td')
    body3.style.border='1px solid #333' 
    const body4 = document.createElement('td')
    body4.style.border='1px solid #333' 
    for (const elt of products) {
        body1.innerText= elt.Nprd
        body2.innerText=elt.Qt
        body3.innerText=elt.Pr
        body4.innerText=elt.pt
        
    }


// entete Raccordement
if (i < 2) {
  table.append(titleHead)
  titleHead.append(titleRow)
  titleRow.append(title1)
  titleRow.append(title2)
  titleRow.append(title3)
  titleRow.append(title4)
}

    // corps raccordement
    table.append(bodyHead)
    bodyHead.append(bodyRow)

    

    bodyRow.append(body1)
    bodyRow.append(body2)
    bodyRow.append(body3)
    bodyRow.append(body4)


    document.querySelector('#tab-result').append(table)

    console.log(products)
}

const BtnchgtCo = document.querySelector('#chgtCo')
const BtnReCo = document.querySelector('#ReCo')
const envoi = document.querySelector('#envoi')

envoi.addEventListener('click',submit)

BtnchgtCo.addEventListener('click',changerCouleur)

BtnReCo.addEventListener('click',reinitialiserCouleur)
