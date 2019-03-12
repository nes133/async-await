// fetch('https://jsonplaceholder.typicode.com/comments', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   }
// })
//   .then(res => res.json())
//   .then(data => {
//     let con = '';
//     var br = 0;
//     data.forEach(function(post) {
//       br++;
//       if (br < 10) {
//         con += `<div class ="cBox">
//    <h2 class ="fontstyle">Name: ${post.name}!</h2>
//    <h3>E-mail: ${post.email}</h3>
//    <p>Comment: ${post.body}</p>
//    </div>`;
//       }
//     });

//     document.getElementById('uvod').innerHTML = con;
//   });

// async-await function for fetching API data
const fetchData = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });

  response = await response.json();

  let appContainer = '';

  let br = 0;

  response.forEach(function(post) {
    br++;
    if (br < 10) {
      appContainer += `<div class ="cBox">
 <h2 class ="fontstyle">Name: ${post.name}!</h2>
 <h3>E-mail: ${post.email}</h3>
 <p>Comment: ${post.body}</p>
 </div>`;
    }
  });

  document.getElementById('uvod').innerHTML = appContainer;
};

// fetchData funtion call
fetchData();
