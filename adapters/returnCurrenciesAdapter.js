import axios from "axios";

async function getCurrencies(currency){
    //put currency at the end of link
    const body = await axios.get('https://open.er-api.com/v6/latest/'+currency)
    const data = body.data;
    return data;
}

export default getCurrencies;