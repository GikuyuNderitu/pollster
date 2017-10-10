const POST_OPTIONS = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    credentials: "same-origin"
}

const GET_OPTIONS = {
    method: "GET",
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

const parseData = response => {
    if (!response.ok) {
        console.error("Error Occurred");
        return response.json().then(err => Promise.reject(err))
    }
    
    return response.json()
}
export const fetchPost = (url, body, options) =>
    fetch(url, addBody(mergeOptions(POST_OPTIONS, options), body))
    .then(parseData)

export const fetchGet = (url, options) =>
    fetch(url, mergeOptions(GET_OPTIONS, options))
    .then(parseData)


export const removeEmpties = (obj) => {
    const newObject = Object.keys(obj)
        .filter(key => obj[key] !== undefined &&  obj[key].trim() !== '')
        .reduce((prev, cur) => {prev[cur] = obj[cur];return {...prev}} , {})

    if(Object.keys(newObject).length === 0) throw new Error("All fields are required")
    return newObject
}