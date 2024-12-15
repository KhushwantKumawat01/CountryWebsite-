import React, { useTransition, useState, useEffect } from "react";
import { getCountryData } from "../API/postApi.jsx";
import Loader from "../Component/UI/Loader.jsx";
import SearchFilter from "../Component/UI/SearchFilter.jsx";
import CountryCard from "../Component/Layout/CountryCard.jsx";

export default function Country() {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]); // Initialize with empty array
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data); // Update state with API data
        });
    }, []);

    if (isPending) return <Loader />;

    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    };

    const filterRegionCountry = (country) => {
        if (filter === "all") return country;
        return country.region === filter;
    };

    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegionCountry(country));

    return (
        <section className={"country-section"}>
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
            <ul className={"grid grid-four-cols"}>
                {filterCountries.map((country, index) => {
                    return <CountryCard country={country} key={index} />;
                })}
            </ul>
        </section>
    );
}
