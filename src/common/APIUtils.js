export default {
    getItems: () => {
        return fetch('https://xxx.api/article')
            .then(res => res.json());
    },
    otherApiCall: (params) => {
    }
}