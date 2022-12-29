const api = 
`https://gist.githubusercontent.com/VasilyMur
/43ef6df83bba694f871f11a16ed7556d/raw/
b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json`;

const stations = [];

fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log("Все линии и станции: ", data);

        data.forEach(line => {
            stations.push(...line.stations);
        })
    });

    const searchInput = document.querySelector(".search");
    const searchOptions = document.querySelector(".options");

    const getOptions = (word, stations) => {
        return stations.filter(s => {
            const regex = new RegExp(word, "gi");
            return s.name.match(regex);
        })
    }

 
    function displayOptions() {
        console.log(this.value);
        const options = getOptions(this.value, stations);

        const html = options.map(station => {
            return `<li><span>${station.name}</span></li>`;
        })
        .slice(0, 10)
        .join("");

        searchOptions.innerHTML = html;
       }
    
      
    searchInput.addEventListener("change", displayOptions);
    searchInput.addEventListener("keyup", displayOptions);
