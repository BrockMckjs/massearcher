function addInput() {
    var newdiv = document.createElement('div');
    //newdiv.id = dynamicInput[counter];
    newdiv.innerHTML = "Entry <br><input type='text' name='myInputs[]' placeholder = 'https://example.com/search?q={searchterms}}' size = '45'> <input type='button' value='-' onClick='removeInput(this);'>";
    document.getElementById('formulario').appendChild(newdiv);
}

function removeInput(btn) {
    btn.parentNode.remove();
}