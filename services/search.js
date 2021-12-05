import Config from '../config/variables';

export default function fetchSections(data) {

    const query = data.queryKey[1] || 'home';
    const limit = data.queryKey[2] || 0;
    const URL = `${Config.SERVER_IP}/posts/search/${encodeURI(query)}?limit=${limit}`;

    return fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(data => {
        if(data.status == 404) throw new Error("404");
        if(data.status != 200) throw new Error("500");
        return data.json()
    });
    
}