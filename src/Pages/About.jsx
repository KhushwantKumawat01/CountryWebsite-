// eslint-disable-next-line no-unused-vars
import React from "react"
import Countries from "../API/countryData.json"

export default function About() {
    return <section className={"section-about container"}>
        <h2 className={"container-title"}>
            Here are the Interesting Facts
            <br/>
            We are proud of
        </h2>
        <div  className={"gradient-cards"}>
            {
                Countries.map((country) => (
                    <div key={country.id} className={"card"}>
                        <div className={"container-card bg-blue-box"}>
                            <p className={"card-title"}>
                                {country.countryName}</p>
                            <p>
                               <span className={"card-description"}>
                                   Capital :
                               </span>
                                {country.countryCapital}
                            </p>
                            <p>
                               <span className={"card-description"}>
                                   Population :
                               </span>
                                {country.population}
                            </p>
                            <p>
                       <span className={"card-description"}>
                           Interesting Facts :
                       </span>
                                {country.interestingFact}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>

    </section>
}
