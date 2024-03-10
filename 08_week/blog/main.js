// const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then((json) => displayData(json));
// };

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log();
  }
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
