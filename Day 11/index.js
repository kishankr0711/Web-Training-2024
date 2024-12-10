const url = "https://restcountries.com/v3.1/all";

const element = document.getElementById("container");
// const searchBox = document.getElementById("searchBox");
// const regionFilter = document.getElementById("regionFilter");

async function fetchData(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        for (let i=0; i < data.length; i++) {
            const value = data[i];
            
            const html =`
                <div class='card'>
                    <img src="${value.flags.png}"></img>
                    <div class="text">
                    <h2>
                       ${value?.name?.common}
                     </h2>
                     <h5>
                       Region : ${value?.region}
                     </h5>
                     <h5>
                       Population : ${value?.population}
                     </h5>
                     <h5>
                      Capital : ${value?.capital}
                      </h5>
                    </div>
                 </div>
            `;
            element.innerHTML += html;
        }
    } catch (error) {
        console.log("---error---", error.message);
    }
}

// //search
// searchBox.addEventListener("input", () => {
//     const searchText = searchBox.value.toLowerCase();
//     card.forEach(card => {
//         const countryName = ${value.name.common}.innerText.toLowerCase();
//         card.style.display = countryName.includes(searchText) ? "block" : "none";
//     });
// });

// //region
// regionFilter.addEventListener("change", () => {
//     const selectedRegion = regionFilter.value;
//     card.forEach(card => {
//         const cardRegion = ${value.region};
//         card.style.display = (selectedRegion === "all" || cardRegion === selectedRegion) ? "block" : "none";
//     });
// });