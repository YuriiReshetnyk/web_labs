import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/cars",
});

// export default async function getAllCars(){
//     instance.get("/").then(res => res.json()).then(data => {return data})
// }

export default function getData(callback, errorcallback) {
  instance
    .get("/")
    .then((res) => {
      //do something
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      console.log(err);
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export function getCar(id, callback, errorcallback) {
  instance
    .get(`/${id}`)
    .then((res) => {
      //do something
      console.log(res.data);
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      console.log(err);
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export function getSortedCars(sortingParameter, sortingOrder, callback, errorcallback){
  instance.get(`/sortingParameter/${sortingParameter}/sortingOrder/${sortingOrder}`)
  .then((res) => {
    if (callback != null) {
      callback(res);
    }
  })
  .catch((err) => {
    if (errorcallback != null) {
      errorcallback(err);
    }
  });
}
