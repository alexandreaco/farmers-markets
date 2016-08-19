//---
// Farmers Markets API

export const apiGetAll = () => {

  return new Promise(resolve => {
   const url = 'http://localhost:3000/api';

   fetch(url)
   .then(response => {
     console.log(response.json());
     return response.json();
   })
   .then(json => {
     resolve(json);
   }).catch(error => {
     log('Error: ', error);
   });
  });

}
