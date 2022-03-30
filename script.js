"use strict";

const getData = () => {
  fetch("db.json")
  .then(response =>  response.json())
  .then(data1 => {
    console.log (data1);
    sendData("https://jsonplaceholder.typicode.com/posts",JSON.stringify(data1))
    .then(data2 => {
      console.log(data2)
    })
    .catch(error => {
      console.log (error)
    });
  })
  .catch(error => {
    console.log(error)
  })
}; 

const sendData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
};

getData();
