export default function (data) {
    let googleAdsCount = data?.ads?.maxGoogleAds || 0;
    let clientsAdsFetchingPointer = 0;
    const clientsAds = data?.ads?.['clients_advertisements'] || [];
    const ads = []; 
    var end = (googleAdsCount + clientsAds.length)

    for(var i = 0; i < end; i++) {
        if(i % 2 == 0) {
            if(googleAdsCount > 0) {
                ads.push('googleAd');
                googleAdsCount--;
            } else if(clientsAds[clientsAdsFetchingPointer]) {
                ads.push(clientsAds[clientsAdsFetchingPointer]);
                clientsAdsFetchingPointer++;
            } 

        } else {
            if(clientsAds[clientsAdsFetchingPointer]) {
                ads.push(clientsAds[clientsAdsFetchingPointer]);
                clientsAdsFetchingPointer++;
            } else if(googleAdsCount > 0) {
                ads.push('googleAd');
                googleAdsCount--;
            }
        }
    }
    return ads;
}