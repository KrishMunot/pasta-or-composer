// array of pastas
var pastas = Array("Alfabeto",
"Anelli",
"Barbina",
"Bavette",
"Bavettine",
"Bigoli",
"Bucatini",
"Calamarata",
"Calamaretti",
"Campanelle",
"Cannelloni",
"Capellini",
"Capunti",
"Casarecce",
"Cavatappi",
"Cavatelli",
"Cellentani",
"Cencioni",
"Chifferi",
"Ciriole",
"Conchiglie",
"Conchigliette",
"Corallini",
"Corzetti",
"Croxetti",
"Ditali",
"Ditalini",
"Elicoidali",
"Fagioloni",
"Farfalle",
"Farfalline",
"Fedelini",
"Fettuce",
"Fettucelle",
"Fideos",
"Fideua",
"Fiori",
"Fregula",
"Funghini",
"Fusilli",
"Garganelli",
"Gemelli",
"Gigli",
"Gramigna",
"Grattini",
"Grattoni",
"Lagane",
"Lanterne",
"Linguine",
"Lumache",
"Lumaconi",
"Mafalde",
"Maltagliati",
"Mandala",
"Manicotti",
"Marille",
"Marziani",
"Matriciani",
"Midolline",
"Mostaccioli",
"Orecchiette",
"Orzo",
"Paccheri",
"Pappardelle",
"Pastina",
"Pellizzoni",
"Perciatelli",
"Pici",
"Pillus",
"Pipe",
"Pizzoccheri",
"Puntine",
"Quadrefiore",
"Radiatori",
"Ricciolini",
"Ricciutelle",
"Rotelle",
"Rotini",
"Rotini",
"Sagnarelli",
"Scialatelli",
"Sorprese",
"Spirali",
"Stelle",
"Stortini",
"Stringozzi",
"Strozzapreti",
"Tagliatelle",
"Talierini",
"Torchio",
"Tortiglioni",
"Trenette",
"Trenne",
"Tripoline",
"Tripolini",
"Trofie",
"Tuffoli",
"Ziti",
"Zitoni");

// array of composers
var composers = Array("Albertini",
"Albinoni",
"Alfano ",
"Allapana ",
"Allegri",
"Anfossi ",
"Bedetti ",
"Bellini ",
"Bertali ",
"Boccherini ",
"Bononcini  ",
"Brunetti ",
"Busoni",
"Campagnoli ",
"Carissimi",
"Casella ",
"Tedesco ",
"Catalani ",
"Cavalieri ",
"Cavalli ",
"Cherubini ",
"Cimarosa ",
"Clementi ",
"Corelli ",
"Carulli",
"Vittorio ",
"Donatoni ",
"Donaudy ",
"Donizetti",
"Ferrero",
"Finzi ",
"Franchetti",
"Francesconi ",
"Frescobaldi ",
"Gabrieli ",
"Galuppi ",
"Gariboldi ",
"Ghedini ",
"Giordano",
"Giuliani ",
"Jommelli ",
"Landini",
"Legrenzi ",
"Locatelli ",
"Luchesi ",
"Luzzaschi ",
"Mainerio",
"Malipiero ",
"Marcello ",
"Marenzio ",
"Marini ",
"Martucci ",
"Mascagni  ",
"Mazzocchi ",
"Mazzazzoli ",
"Menotti ",
"Mercadante ",
"Monteverdi",
"Ortolani",
"Ortolano ",
"Pacini ",
"Paganini ",
"Paisiello ",
"Petrassi",
"Palestrina ",
"Pasquini ",
"Pergolesi ",
"Piccinni ",
"Pizzetti ",
"Ponchielli ",
"Puccini ",
"Pugnani ",
"Rampollini",
"Respighi ",
"Rieti ",
"Rossini ",
"Sacchini ",
"Salieri ",
"Sammartini ",
"Scarlatti ",
"Schittino ",
"Scelsi ",
"Sciarrino ",
"Sgambati ",
"Simonetti ",
"Spontini ",
"Steffani ",
"Strozzi ",
"Tartini ",
"Torelli ",
"Tozzi ",
"Traetta ",
"Uccellini ",
"Valentini ",
"Veracini ",
"Venturi ",
"Viotti ",
"Vittorio ",
"Zipoli"
);

// keeping track of score
var right=0;
var wrong=0;

$(document).ready(function(){
    // function that picks either a pasta or composer to be displayed
    function generate(){
        var rand = Math.random();
        if(rand < .5) { // choose a pasta to display
            var random = pastas[Math.floor(Math.random()*pastas.length)];
        }
        else { // choose a composer to display
            var random = composers[Math.floor(Math.random()*composers.length)];
        }
    // set the text of "random word" to whatever random pasta/composer chosen
    $("#randomword").html(random);
    } // close generate function
    generate(); // when the page is loaded, run the generate function
    // button stuffs
    $("#composer").hover(function(){ // when you hover over "composer", it becomes a darker red
        $("#composerh2").css("color", "#AF2B36");
        $("#composerh2").css("cursor", "pointer");
        }, function(){ // but goes back to the original red when your cursor is lifed
        $("#composerh2").css("color", "#CF2B36");
        $("#composerh2").css("cursor", "pointer");
        }
        )
    $("#pasta").hover(function(){ // repeat for pasta
        $("#pastah2").css("color", "#AF2B36");
        $("#pastah2").css("cursor", "pointer");
        }, function(){
        $("#pastah2").css("color", "#CF2B36");
        $("#pastah2").css("cursor", "pointer");
        }
        );
    $("#composer").click(function(){
            var curr = $("#randomword").html(); // set the variable "curr" to the text that is displayed
            if(composers.indexOf(curr) > -1){ // if the current one is in the composers array
            // display text with green background
            $("#answer").html(curr +" is indeed a composer!");
            $("#answer").css("visibility", "visible");
            $('#answer').css("background-color", "#019243");
            right += 1;
            // display the current score
            $('#score').html("So far you have gotten " + right + " of " + (right+wrong) + " correct.");
            $("#score").css("visibility", "visible");
            }
            else{
            // display the text with red background
            $("#answer").html("Wrong! " + curr + " is a pasta");
            $("#answer").css("visibility", "visible");
            $('#answer').css("background-color", "#CF2B36");
            wrong += 1;
            // display the current score
            $('#score').html("So far you have gotten " + right + " of " + (right+wrong) + " correct.");
            $("#score").css("visibility", "visible");
            }
            generate(); // pick a new italian word to be displayed
    })
    $("#pasta").click(function(){ // repeat for pasta
            var curr = $("#randomword").html();
            if(pastas.indexOf(curr) > -1){
            $("#answer").html(curr +" is indeed a pasta!");
            $("#answer").css("visibility", "visible");
            $('#answer').css("background-color", "#019243");
            $('#answer').css("background-color", "#019243");
            right += 1;
            $('#score').html("So far you have gotten " + right + " of " + (right+wrong) + " correct.");
            $("#score").css("visibility", "visible");
            }
            else{
            $("#answer").html("Wrong! " + curr + " is a composer");
            $("#answer").css("visibility", "visible");
            $('#answer').css("background-color", "#CF2B36");
            wrong += 1;
            $('#score').html("So far you have gotten " + right + " of " + (right+wrong) + " correct.");
            $("#score").css("visibility", "visible");
            }
            generate();
    })
});
