

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var pokemon = d3.select("#Pokemon").node().value;
    //console.log(pokemon);
    console.log(pokemon)
    // clear the input value
    d3.select("#Pokemon").node().value = "";
  
    // Build the plot with the new stock
    buildPlot(pokemon);
}

function buildPlot(pokemon) {
    var url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    d3.json(url).then(function(data) {
        console.log(data)
        // Grab values from the response json object to build the plots
        var hp = data.stats[0]
        var hp_name = hp.stat.name
        var hp_no = hp.base_stat
        var attack = data.stats[1]
        var attack_name = attack.stat.name
        var attack_no = attack.base_stat
        var defense = data.stats[2]
        var defense_name = defense.stat.name
        var defense_no = defense.base_stat
        var special_attack = data.stats[3]
        var special_attack_name = special_attack.stat.name
        var special_attack_no = special_attack.base_stat
        var special_defense = data.stats[4]
        var special_defense_name = special_defense.stat.name
        var special_defense_no = special_defense.base_stat
        var speed = data.stats[5]
        var speed_name = speed.stat.name
        var speed_no = speed.base_stat
        var lables = [hp_name, attack_name, defense_name, special_attack_name, special_defense_name,speed_name]
        var data = [hp_no, attack_no, defense_no, special_attack_no, special_defense_no, speed_no]
        // creates radar chart
        var ctx = document.getElementById('myChart').getContext('2d');
        var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
        labels: lables,
        datasets: [{
            data: data
            }]
            },
        options: {
            scale:{
                ticks: {
                    beginAtZero: true,
                    max: 200,
                    min: 0,
                    stepSize: 40
                }
            },
            elements: {
                line: {
                    tension: 0.3
                    }
                }
            }
        }).Line(data, {
					responsive:true,
					maintainAspectRatio: false
					});
    });

}


// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);