const fetchData = new Promise((resolve, reject) => {
    // API에서 데이터를 가져왔다고 가정하기 위한 내용입니다.
    setTimeout(() => {
        const data = { message: "Data Fetch Successfully" };

        if (data) resolve(data);
        else reject("Fetch Fail");
    }, 2000);
});

fetchData
.then(data => {
    console.log("Success: ", data);
})
.catch(err => {
    console.log("Err: ", err);
})

module.exports = {
    extends: "eslint:recommended",
    rules: {
        "no-console": "warn",
        "indent": ["error", 2]
    }
};