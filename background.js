// Extension event listeners are a little different from the patterns you may have seen in DOM or
// Node.js APIs. The below event listener registration can be broken in to 4 distinct parts:
//
// * chrome      - the global namespace for Chrome's extension APIs
// * runtime     – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to
// * addListener - what we want to do with this event
//
// See https://developer.chrome.com/docs/extensions/reference/events/ for additional details.

$(document).ready(function() {

    function addInput() {
        var newdiv = document.createElement('div');
        //newdiv.id = dynamicInput[counter];
        newdiv.innerHTML = "<br><input type='text' name='myInputs' id ='custom' placeholder = 'https://example.com/search?q=' size = '45' style = 'margin-left: 3%;'> <input type='button' value='-' onClick='removeInput(this);'>";
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
                window.open(this.value + input);
                window.location.reload(); // $(this).val()
            });
        });
    }


    function submitCustom() {
        let input = document.getElementById('searchTerm').value;


        $(document).ready(function() {
            $('input[id="custom"]').each(function() { // $(':checkbox:checked')
                window.open(this.value + input);
                window.location.reload(); // $(this).val()
            });
        });
    }

});