import { DATA_BASE_URL } from "../utils/constants";

export default async function request({ method, url, data }) {
    const options = {
        method,
        url: `${DATA_BASE_URL}/${url}`
    }
    if (data)
        options.body = JSON.stringify(data);
    try {
        const response = await fetch(options.url, { ...options });
        return response.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}