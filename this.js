console.log(this);
// Cand this este utilizat de sine statator (nu intr-o functie), el este chiar obiectul global, parintele tuturor.

// function showMeThis() {
//   console.log(this);
// }
// showMeThis();

// Facem un nou obiect:
const cat = {
  name: 'Garfield',
  showThis: function () {
    this.name = 'Azorel';
    this.color = 'Black';
    // Valoarea lui this va fi determinata in momentul EXECUTIEI functiei.
    console.log(this);
  }
}

console.log(cat);
// In acest caz this este chiar obiectul cat! De ce? this este de fapt obiectul din care este apelata functia!
cat.showThis();

const newCat = cat;
newCat.showThis();

// Atentie la situatia urmatoare:
const localShowThis = cat.showThis;
// In acest caz this este din nou window! De ce? Daca functia nu este apelata explicit dintr-un alt obiect, se va considera ca este apelata din window.
localShowThis();
