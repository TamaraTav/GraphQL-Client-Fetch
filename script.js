const continentSelect = document.getElementById("continent-select");
const countryList = document.getElementById("countries-list");

queryFetch(`
  query {
    continents {
      name
      code
    }
  }
`)
  .then((data) => {
    console.log("Continents data:", data);

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return;
    }

    if (data && data.data && data.data.continents) {
      data.data.continents.forEach((continent) => {
        const option = document.createElement("option");
        option.value = continent.code;
        option.innerText = continent.name;
        continentSelect.append(option);
      });
    } else {
      console.error("Invalid data structure:", data);
    }
  })
  .catch((error) => {
    console.error("Error fetching continents:", error);
  });

continentSelect.addEventListener("change", async (e) => {
  const continentCode = e.target.value;

  if (!continentCode || continentCode === "Select a Continent") {
    countryList.innerHTML = "";
    return;
  }

  try {
    const countries = await getContinentCountries(continentCode);
    countryList.innerHTML = "";

    if (countries && countries.length > 0) {
      countries.forEach((country) => {
        const element = document.createElement("div");
        element.innerText = country.name;
        countryList.append(element);
      });
    } else {
      countryList.innerHTML = "<p>No countries found for this continent.</p>";
    }
  } catch (error) {
    console.error("Error in continent change handler:", error);
    countryList.innerHTML = "<p>Error loading countries.</p>";
  }
});

function getContinentCountries(continentCode) {
  return queryFetch(
    `
    query getCountries($code: String) {
      countries(filter: { continent: { eq: $code } }) {
        name
      }
    }
  `,
    { code: continentCode }
  )
    .then((data) => {
      console.log("Continent countries data:", data);

      if (data.errors) {
        console.error("GraphQL errors:", data.errors);
        return [];
      }

      if (data && data.data && data.data.countries) {
        return data.data.countries;
      } else {
        console.error("Invalid continent data structure:", data);
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching continent countries:", error);
      return [];
    });
}

function queryFetch(query, variables = {}) {
  try {
    const body = { query, variables };

    console.log("Sending request:", body);

    return fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Response received:", data);
        return data;
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        throw error;
      });
  } catch (error) {
    console.error("QueryFetch error:", error);
    throw error;
  }
}
