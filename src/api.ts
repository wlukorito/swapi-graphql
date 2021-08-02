import axios from 'axios'
import { IParam, IPeople, IPlanet } from './interfaces';


export default class Swapi {
    /**
     * Use this method to get people object for first page, a specific page or a specific person name.
     * These result objects depend on the query parameters passed. If prms is null, then return first page.
     * If prms has page number, then return people object for that page. If prms has name, then get the 
     * result for the person that matches the name.
     * 
     * @param prms Object with query parameters
     * @returns People object 
     */
    getPeople = async (prms?: IParam): Promise<IPeople> => {
        
        let params = {};
        let result: IPeople;

        // get first page (default)
        if(!prms){
            result = await this.get("people", {});
        
        } else {
            
            if(prms.page){
                // get people object for given page
                params = {
                    page: prms.page
                }

                result = await this.get("people", params); 
            }
            else {
                // search for given name
                params = {
                    search: prms.name
                }

                result = await this.get("people", params);
            }

        }

        return result;

    }

    /**
     * Gets the planet object given the planet url. Helps resolve homeworld.
     * 
     * @param url Planets url e.g 'https://swapi.dev/api/planets/1/'
     * @returns Planet object
     */
    getPlanet = async (url: string): Promise<IPlanet> => {
        const subUrl = url.replace("https://swapi.dev/api/", "");
        const result: IPlanet = await this.get(subUrl, {});

        return result;
    }

    /**
     * Utility method for GET-ing data from SWAPI with axios
     * 
     * @param url Resource sub-url to append to base url
     * @returns Data object from api call
     */
    get = async (url: string, params: Object) => {
        
        const baseURL = "https://swapi.dev/api/";

        const result = await axios.get(url, { baseURL, params });

        if (result) {
            return result.data;
        }
    }

}
