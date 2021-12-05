import Config from '../config/variables';

export default function fetchSections(data) {
    const sectionName = data.queryKey[1];
    const limit = data.queryKey[2];

    const URL = `${Config.SERVER_IP}/sections/${encodeURI(sectionName)}?limit=${limit}&page=section`;

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