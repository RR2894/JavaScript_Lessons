const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => displayData(json));
}; 
fetchData();


const displayData = (data) => {
    console.log(data);
    
    const container = document.querySelector('#postContainer');
    
    data.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;
        container.appendChild(postElement);
    });
};

//Homework: Get an api and dipslay a collection of data