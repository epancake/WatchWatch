function searchForMovie () {
    let request = new XMLHttpRequest ();
    let responseDiv = document.getElementById('response')

    results = []

    request.onload = function(event) {
        let response = JSON.parse(request.response);
        console.log(response.results[0]);
        let results = response.results;

        let resultUL = $("#searchResults");
        resultUL.html('');
        for (let i=0; i<results.length; i++) {
            console.log(i)
            resultUL.append("<li onclick='toggleselect()'>" + results[i]['title'] + ", " + results[i]['release_date'] + "</li>")
        }

        $('#searchResults > li').click(function() {
            console.log("working")
            var list = document.getElementById('watchlist');
            var entry = document.createElement('li');
        //     $(this).contents().appendTo("#watchlist")
            // entry.appendChild(document.createTextNode(entry));
            list.append(this);
            $('#nothing').addClass('myClass') 
        });

    }

    request.onerror = function(event) {
        console.log('Sorry there was an error')
    }

    let value = $('#valueInput').val()
    console.log(value)
    request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=c9f9c2a35d8ae9037eed660ddac85ded&query=' + value)
    request.send();
}

$('#myForm').on('submit', function (event) { 
    $('#searchDiv').removeClass('myClass')    
    $('#searchDiv').addClass('newClass')    
    event.preventDefault(); 
    searchForMovie();



})
