

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
        console.log(data1.growth_rate.url)
        var growth_url = data1.growth_rate.url;

        d3.json(growth_url).then(function(data_growth){
            var levels = data_growth.levels
            var experience = []
            var numbs = []
            var name = data_growth.name;
            for (i=0;i<levels.length;i++){
                experience.push(levels[i].experience)
                numbs.push(i+1)
            };
            var ctx = document.getElementById('myChart1').getContext('2d');
            var myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: `${pokemon1}`,
                        data: experience,
                        borderColor: "#000080"
                    }],
                    labels: numbs
                },
                options: {title: {
                    display: true,
                    text: `${name}`
                }}
            });
        });
    });
    
    d3.json(url2).then(function(data2) {
        console.log(data2.growth_rate.url)
        var growth_url = data2.growth_rate.url;

        d3.json(growth_url).then(function(data_growth){
            var levels = data_growth.levels
            var experience = []
            var numbs = []
            var name = data_growth.name;
            console.log(data_growth.name);
            for (i=0;i<levels.length;i++){
                experience.push(levels[i].experience)
                numbs.push(i+1)
            };
            var ctx = document.getElementById('myChart2').getContext('2d');
            var myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: `${pokemon2}`,
                        data: experience,
                        borderColor: "#FF0000"
                    }],
                    labels: numbs
                },
                options: {title: {
                    display: true,
                    text: `${name}`
                }}
            });
        });
    });
};
// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);