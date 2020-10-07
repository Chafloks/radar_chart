var ctx = document.getElementById('myChart').getContext('2d');

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
    labels: ['hp', 'attack', 'defense', 'special-attack','special-defense','speed'],
    datasets: [{
        data: [35, 55, 40, 50, 50, 90]
        }]
        },
    options: {
            elements: {
                line: {
                    tension: 0.3
                }
            }
        }
    });