var pizza = 100;

//#region while
while (pizza > 0) {

    pizza --;
    console.log('comeu')

}
//#endregion

console.log('Acabou'); 
console.log(pizza);

//#region Do - while
do {

    pizza ++;
    console.log('Cozinhou');

} while (pizza < 100);
//#endregion

console.log(pizza);

//#region for
for (pizza; pizza > 0; pizza--) {
    console.log('Comeu');
}
//#endregion