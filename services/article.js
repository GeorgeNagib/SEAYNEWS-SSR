import Config from '../config/variables';


export default function fetchPosts(data) {
  const title = data?.queryKey[0] || '';
  const URL = `${Config.SERVER_IP}/posts/${encodeURI(title)}`;

     (URL)
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