let input = document.querySelector('input');

let fruits = ['Apple', 'Orange', 'Kiwi','Grapes', 'Mango'];

input.addEventListener('keyup', (e) =>{
    let btnSubmit = document.querySelector('button');

    if (btnSubmit){
        container.removeChild(btnSubmit);
    }
if (fruits.includes(e.target.value)){
    let bunSubmit = document.createElement('button');
    let btnText = document.createTextNode('submit');

    btnSubmit.appendChild(btnText);
    Container.appendChild('btnSubmit');
    
}
});