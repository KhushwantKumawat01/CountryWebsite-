// eslint-disable-next-line react/prop-types
import {NavLink} from "react-router-dom";

export default function CountryCard ({country}) {
    const {flags,name,population,region,capital} = country;
    return <li className={"country-card card"}>
        <div className={"container-card bg-white-box"}>
            <img src={flags.svg} alt={country.name.common}/>
            <div className={"countryInfo"}>
                <p className={"card-title"} style={{fontSize: "18px"}}>
                    {country.name.common}
                </p>

                <p>
                    <span className={"card-description"}>Population : </span>
                    {population ? population.toLocaleString() : "N/A"}

                </p>
                <p>
                    <span className={"card-description"}>Region : </span>
                    {region ? region.toLocaleString() : "Unknown"}

                </p>
                <p>
                    <span className={"card-description"}>Capital : </span>
                    {capital ? capital.join(", ") : "No Capital"}
                </p>
                <NavLink to={`/country/${name.common}`}>
                    <button>
                        Read More
                    </button>
                </NavLink>
            </div>
        </div>

    </li>
}