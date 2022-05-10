// define our variables
const url = "http://jsonplaceholder.typicode.com/posts";
let outputElement = document.getElementById('demo');

// use the headers interface to set our Content-Type header
let h = new Headers();
h.append("Content-type", "application/json; charset=UTF-8");

// let's create our post (this will be the body of our POST request). Right now its JavaScript, but we will use the JSON.stringify() method to convert it into JSON

let post = {
    userId: 99, 
    title: "My cool title",
    body: "lorem ipsum ... blah blah blah ... "
}

// let's define our options object for our fetch request

let options = {
    method: "POST",
    headers: h, 
    body: JSON.stringify(post)
}

// let's use the Request Interface (given to us by the browser)

let req = new Request(url, options);

// finally, let's perform our fetch AJAX POST request

fetch(req)
    .then((res) => {
        if(!res.ok) {
            throw new Error('oops');
        }
        return res.json();
    })
    .then( (data) => {
        outputElement.textContent = JSON.stringify(data);
    })
    .catch( (err) => {
        console.log('Error', err.message);
    })