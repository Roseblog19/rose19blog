fetch("data/posts.json")
.then(res => res.json())
.then(data => {

let container = document.querySelector(".posts");

data.forEach(post => {

container.innerHTML += `

<div class="post-card">

<img src="${post.image}" width="100%">

<h3>${post.title}</h3>

<p>${post.description}</p>

<a href="post.html?id=${post.id}">
Read More
</a>

</div>

`;

});

});
