import axios from "axios"

const CONTEXT_KEY = '6edbd0bc76f18eed3'
const API_KEY = 'AIzaSyD6V83HWQXqJmred1jXsXnPoeAMUJpvENA'

export const getSearchResults = async (query: string, page: number) => {
    try {
        const { data } = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&start=${(page - 1) * 10 + 1}`)
        return data;
    } catch (err: any) {
        console.error(err)
        if (err.response.status === 429) {
            alert('My API key is out of requests :(\r\nCome back in 24 hours')
        }
    }
}