import Config from '../config/variables';
import axios from 'axios';

export default function fetchSections(data) {
    const page = data.queryKey[1]?.page || 'home';
    const URL = `${Config.SERVER_IP}/sections?page=${page}`;
    
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