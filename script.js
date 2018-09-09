/**
 * fonction qui gére le changement de la taille du texte
 */
function textFunction() {
    if(document.querySelector('#text')) {
        document.querySelector('#text').classList.toggle('resize');
    }
}
