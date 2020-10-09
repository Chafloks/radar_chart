

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var pokemon1 = d3.select("#Pokemon1").node().value;
    console.log(pokemon1);
    var pokemon2 = d3.select("#Pokemon2").node().value;
    console.log(pokemon2);
    // clear the input value
    d3.select("#Pokemon1").node().value = "";
    d3.select("#Pokemon2").node().value = "";
    // Build the plot with the new stock
    buildPlot(pokemon1,pokemon2);
}

function buildPlot(pokemon1,pokemon2) {
    var url1 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon1}`;
    var url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon2}`;
    d3.json(url1).then(function(data1) {
        console.log(data1.id)
        //var 
        //var 
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            //data: data,
            //options: options
        });
    });
    d3.json(url2).then(function(data2) {
        console.log(data2.id)
        
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            //data: data,
            //options: options
        });
    });

}


// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);