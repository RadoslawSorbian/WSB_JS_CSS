function createStatsDiv(Stats) {
    const div = document.createElement("div");
    div.innerText = Stats;
    return div;
}

function findStats() {

    const season = document.getElementById("season").value;
    const round = document.getElementById("round").value;

    const StatsDiv = document.getElementById("Stats");


    Stats.innerHTML = "";

    axios.get(`http://ergast.com/api/f1/${season}/${round}`).then(response => {
        console.log(response);

        const Stats = createStatsDiv(response.data);

        StatsDiv.append(Stats);

    })
}