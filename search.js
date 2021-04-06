window.onload = function() {

    var buttonSub = document.getElementById("select")

    if (buttonSub) {
        (buttonSub.addEventListener('click,', submitInput(), submitCustom()))
    }
}

function addInput() {
    var newdiv = document.createElement('div');
    //newdiv.id = dynamicInput[counter];
    newdiv.innerHTML = "<br><input type='text' name='myInputs' id ='custom' placeholder = 'https://example.com/search?q=' size = '45' style = 'margin-left: 3%;'> <input type='button' value='-' id='removeInput'>";
    document.getElementById('myForm').appendChild(newdiv);
}

function removeInput(btn) {
    btn.parentNode.remove();

}

function submitTerm() {
    var input = document.getElementsByClassName('searchTerm').value;
    console.log(input)
}





function submitInput() {


    let input = document.getElementById('searchTerm').value;

    $(document).ready(function() {
        $('input[type="checkbox"]:checked').each(function() { // $(':checkbox:checked')
            tabs.create(this.value + input);
            window.location.reload(); // $(this).val()
        });
    });
}


function submitCustom() {
    let input = document.getElementById('searchTerm').value;


    $(document).ready(function() {
        $('input[id="custom"]').each(function() { // $(':checkbox:checked')
            tabs.create(this.value + input);
            window.location.reload(); // $(this).val()
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    var buttonSub = document.getElementById('select');
    let input = document.getElementById('searchTerm').value;
    //onclick
    buttonSub.addEventListener('click', function() {
        $(document).ready(function() {
            $('input[id="custom"]').each(function() { // $(':checkbox:checked')
                tabs.create(this.value + input);
                window.location.reload();
            })
        })
    })
})

////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    var buttonSub = document.getElementById('select');
    let input = document.getElementById('searchTerm').value;
    //onclick
    buttonSub.addEventListener('click', function() {
        $(document).ready(function() {
            $('input[id="custom"]').each(function() { // $(':checkbox:checked')
                chrome.tabs.create(this.value + input);
                window.location.reload();
            })
        })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    var buttonSub = document.getElementById('select');
    let input = document.getElementById('searchTerm').value;
    //onclick
    buttonSub.addEventListener('click', function() {
        $(document).ready(function() {
            $('input[type="checkbox"]:checked').each(function() { // $(':checkbox:checked')
                chrome.tabs.create({ url: this.value + input });
                window.location.reload();
            })
        })
    })
})