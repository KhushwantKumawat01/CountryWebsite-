import axios from "axios";
const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

export const getCountryData = ()=>{
    return api.get("/all?fiels=name,population,region");
}
export const getCountryIndData = (name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}