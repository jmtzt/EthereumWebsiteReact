import axios from 'axios';

const api = await axios.get(
    "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
);

export default api