//submit functions

//submit custom 

function submit() {
    $(document).ready(function() {
        $('input[id="customInput"]').each(function() { // $(':checkbox:checked')
            chrome.tabs.create({ url: document.getElementById('customInput').value + document.getElementById('searchTerm').value });
            window.location.reload();
        })
    })
    $(document).ready(function() {
        $('input[type="checkbox"]:checked').each(function() { // $(':checkbox:checked')
            chrome.tabs.create({ url: this.value + document.getElementById('searchTerm').value });
            window.location.reload();
        })
    })
}

///submit searches
document.addEventListener('DOMContentLoaded', function() {
    var buttonSub = document.getElementById('select');
    buttonSub.addEventListener('click', function() {
        submit();
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
            document.getElementById('options').appendChild(newdiv);

        })
    })
})

// submit when enter is pressed
document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('searchTerm');
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            submit();
        }
    })
})