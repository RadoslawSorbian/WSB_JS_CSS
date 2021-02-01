function createStatsDiv(Stats) {
    const div = document.createElement("div");
    div.innerText = Stats;
    return div;
}

function findStats() {

    const season = document.getElementById("season").value;
    const round = document.getElementById("round").value;

    const StatsDiv = document.getElementById("Stats");


    StatsDiv.innerHTML= "";

    axios.get(`http://ergast.com/api/f1/${season}/${round}`).then(response => {
        console.log(response);

        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, "text/xml")
        console.log(xml.getElementsByTagName("RaceName")[0].textContent);
        console.log(xml.getElementsByTagName("CircuitName")[0].textContent);
        console.log(xml.getElementsByTagName("Locality")[0].textContent);
        console.log(xml.getElementsByTagName("Country")[0].textContent);
        console.log(xml.getElementsByTagName("Date")[0].textContent);

        StatsDiv.append(xml.getElementsByTagName("RaceName")[0].textContent);
        StatsDiv.append(xml.getElementsByTagName("CircuitName")[0].textContent);
        StatsDiv.append(xml.getElementsByTagName("Locality")[0].textContent);
        StatsDiv.append(xml.getElementsByTagName("Country")[0].textContent);
        StatsDiv.append(xml.getElementsByTagName("Date")[0].textContent);
    })

}