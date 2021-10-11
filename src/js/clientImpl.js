export const makePublicRequest = async (url, method) => {

    const requestOptions = {
        method: method,
        redirect: 'follow'
    };

    return await fetch(url, requestOptions)
        .then(response => response.text())
        .then(data => {
            return data
        })
        .catch(error => console.log('error', error));
}