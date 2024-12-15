import {useParams} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState, useTransition} from "react";
import {NavLink} from "react-router-dom";
import {getCountryIndData} from "../../API/postApi.jsx";
import Loader from "../UI/Loader.jsx";
export const CountryDetails = () => {
    const params = useParams()
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);
            // console.log(res)// Update state to trigger re-render
            if (res.status === 200) {
                setCountry(res.data);
            }

        });
    }, []);

    if (isPending) return <Loader/>;
    // return <section className={"card country-details container"}>
    //     <div className={"container-card bg-white-box"}>
    //         <h1>{country[0]?.name?.common}</h1>
    //     </div>
    // </section>
    return <section className="card country-details-card container">
        <div className="container-card bg-white-box">
            {country && country[0] && (
                <div className="country-image grid grid-two-cols">
                    <img
                        src={country[0]?.flags?.svg}
                        alt={country[0]?.flags?.alt}
                        className="flag"
                    />
                    <div className="country-content">
                        <p className="card-title"> {country[0]?.name?.official} </p>

                        <div className="infoContainer">
                            <p>
                                <span className="card-description"> Native Names:</span>
                                {Object.keys(country[0]?.name?.nativeName || {})
                                    .map((key) => country[0]?.name?.nativeName[key]?.common)
                                    .join(", ")}
                            </p>
                            <p>
                                <span className="card-description"> Population: </span>
                                {country[0]?.population?.toLocaleString()}
                            </p>
                            <p>
                                <span className="card-description"> Region:</span>
                                {country[0]?.region}
                            </p>
                            <p>
                                <span className="card-description"> Sub Region:</span>
                                {country[0]?.subregion}
                            </p>
                            <p>
                                <span className="card-description"> Capital:</span>
                                {country[0]?.capital?.[0]}
                            </p>

                            <p>
                                <span className="card-description">Top Level Domain:</span>
                                {country[0]?.tld?.[0]}
                            </p>
                            <p>
                                <span className="card-description"> Currencies: </span>
                                {Object.keys(country[0]?.currencies || {})
                                    .map((curElem) => country[0]?.currencies[curElem]?.name)
                                    .join(", ")}
                            </p>
                            <p>
                                <span className="card-description">Languages: </span>
                                {Object.keys(country[0]?.languages || {})
                                    .map((key) => country[0]?.languages[key])
                                    .join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <div className="country-card-backBtn">
                <NavLink to="/country" className="backBtn">
                    <button>Go Back</button>
                </NavLink>
            </div>
        </div>
    </section>

}