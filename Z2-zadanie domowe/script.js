function createStatsDiv(Stats) {
    const div = document.createElement("div");
    div.innerText = Stats;
    return div;
}

function findStats() {

    const season = document.getElementById("season").value;
    const round = document.getElementById("round").value;

    const StatsDiv = document.getElementById("Stats");
    const StatsDiv2 = document.getElementById("Stats2");
    const StatsDiv3 = document.getElementById("Stats3");
    const StatsDiv4 = document.getElementById("Stats4");
    const StatsDiv5 = document.getElementById("Stats5");

    StatsDiv.innerHTML= "";
    StatsDiv2.innerHTML= "";
    StatsDiv3.innerHTML= "";
    StatsDiv4.innerHTML= "";
    StatsDiv5.innerHTML= "";

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
        StatsDiv2.append(xml.getElementsByTagName("CircuitName")[0].textContent);
        StatsDiv3.append(xml.getElementsByTagName("Locality")[0].textContent);
        StatsDiv4.append(xml.getElementsByTagName("Country")[0].textContent);
        StatsDiv5.append(xml.getElementsByTagName("Date")[0].textContent);
    })

}