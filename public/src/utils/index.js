const POST_OPTIONS = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    credentials: "same-origin"
}
const mergeOptions = (oldOpts, userOpts) => ({
    ...oldOpts,
    ...userOpts,
})

const addBody = (options, body) => ({
    ...options,
    body: JSON.stringify(body),
})
export const fetchPost = (url, body, options) =>
    fetch(url, addBody(mergeOptions(POST_OPTIONS, options), body))
    .then(res => res.json())

//     const postOptions = 


//     if(!obj){
//         throw new Error("You did not include obj in your $http.post call '$http.post(url, BODY, options)'")
//     }

//     const body = JSON.stringify(obj)

//     if (options) {
//         options.body = body
//         options.method = postOptions.method
//         console.log(options.body);
//         let request = fetch(url, options)
//         return request.then(parseData)
//     }
//     else{
//         postOptions.body = body
//         console.log(postOptions);
//         let request = fetch(url, postOptions)
//         return request.then(parseData)
//     }


// }

