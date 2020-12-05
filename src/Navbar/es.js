const data = [1,2,3];
const mockApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        },500)

    });
}

const callAPi = async () => {
    const response1 = mockApi();
    console.log(response1);
    const response2 = mockApi()
    console.log(response2);
}

callAPi().then(console.log);

