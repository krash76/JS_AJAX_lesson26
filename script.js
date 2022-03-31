"use strict";

const getData = () => {
  fetch("db.json")
  .then(response =>  response.json())
  .then(data1 => {
    console.log (data1);
    sendData(data1);
  })
    .catch(error => {
      console.log (error)
    });
  
}; 

const sendData = (data) => {
  let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(data));
    xhr.onload = () => console.log(xhr.response);
};

getData();
