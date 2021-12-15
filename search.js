//submit functions

//submit custom
function submitA() {
    $(document).ready(function() {
        $('input[id="customInput"]').each(function() { // $(':checkbox:checked')
            chrome.tabs.create({ url: document.getElementById('customInput').value + document.getElementById('searchTerm').value });
            window.location.reload();
})
})
}


//submit checked
function submitB() {
    $(document).ready(function() {
        $('input[type="checkbox"]:checked').each(function() { // $(':checkbox:checked')
            chrome.tabs.create({ url: this.value + document.getElementById('searchTerm').value });
            window.location.reload();
})
})
}


// in a future update, these functions should be merged together and just have values passed through them, as they are nearly identical. but since i am lazy and working on a piece of software that nobody but me will use, i do not care.


///submit searches
document.addEventListener('DOMContentLoaded', function() {
    var buttonSub = document.getElementById('select');
        //onclick
    buttonSub.addEventListener('click', function() {
        submitA();
        submitB();
            })
        })


/// add searches
document.addEventListener('DOMContentLoaded', function() {

    var addButton = document.getElementById('custom')
    addButton.addEventListener('click', function() {
        $(document).ready(function() {
            var newdiv = document.createElement('div');
            //newdiv.id = dynamicInput[counter];
            newdiv.innerHTML = "<input type='text' name='myInputs' id='customInput' placeholder='https://example.com/search?q=' size='45' style='margin-left: 3%;width: 190px;'>" // add a remove button (messes up styling on front.html, will fix in later update.) <input type='button' value='-' id='removeInput'>";
            document.getElementById('myForm').appendChild(newdiv);

        })
    })
})

// submit when enter is pressed
document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('searchTerm');
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            submitA();
            submitB();
        }
    })
})