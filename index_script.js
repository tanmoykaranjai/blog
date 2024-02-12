console.log("hello world");
const blogContainer = document.getElementById("blogs");

async function getallblogs(){
const response = await fetch("http://localhost:5000/api/posts/");
const blogs = response.json();
return blogs;
}

getallblogs().then((blogs)=>
{console.log(blogs)}
    
);

getallblogs().then((blogs)=>
{
    blogs.forEach((blog)=>
    {
        const card=document.createElement("div");
        card.classList.add("card");
        card.style.width="18rem";
        
        card.innerHTML=`
        <div class="card-body">
        <h5 class="card-title">${blog.title}</h5>
        <p class="card-text">${blog.body}</p>
    
        </div>`;
        blogContainer.appendChild(card);
    })
}
    
);