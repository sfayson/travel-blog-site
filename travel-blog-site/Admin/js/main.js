async function getPosts() {
  return await fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then((data) => data);
}

document.addEventListener("DOMContentLoaded", async function() {
  let posts = await getPosts();
  let articles = document.querySelector('.articles-list tbody');
  articles.innerHTML = '';
  let i = 1;
  posts.forEach((post) => {
    let postHTML = `
    <tr>
            <td>${i++}<input class="id" type="hidden" value="${post.id}"></td>
            <td class="title text-nowrap">${post.title}</td>
            <td class="date text-nowrap">${post.date.substring(0, post.date.indexOf('T'))}</td>
            <td class="country">${post.country}</td>
            <td><button class="edit-btn btn btn-link p-0 text-decoration-none">Edit</button></td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>`;
    articles.insertAdjacentHTML('beforeend', postHTML);
  })
  //create post
  let addPostBtn = document.querySelector('.add-post');
  let createPostBtn = document.querySelector('#v-pills-add-post-tab');
  addPostBtn.addEventListener('click', () => createPostBtn.click());
})
