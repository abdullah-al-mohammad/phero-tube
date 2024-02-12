(async() =>{
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayButtonList(data.data);
    // console.log(data);

})();
const btnContainer = document.getElementById('btn-container');
const displayButtonList = (buttonList) =>{
    buttonList.forEach(button => {
        const btn = document.createElement('Button');
        btn.classList.add('btn', 'btn-success', 'me-3', 'px-4');
        btn.innerText= button.category;
        btn.id= button.category_id;
        btnContainer.appendChild(btn) 
    });
    btnContainer.addEventListener('click', (e) =>{
        e.target.classList.add('btn-danger');
        loadData(e.target.id)
        console.log(e.target.id);        
    })
}
const loadData = async(id) =>{
    const user = `https://openapi.programming-hero.com/api/videos/category/${id}`;
    const res = await fetch(user);
    const data = await res.json();
    displayData(data.data);  
}
const displayData = (users) =>{
    const dataContainer = document.getElementById('data-container')
    dataContainer.innerHTML= '';
    users.forEach(user =>{
        // console.log(user.others);
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col')
        dataDiv.innerHTML= `
        <div class="card h-100">
            <img src="${user.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body d-flex">
                <img src="${user.authors[0].profile_picture}" class="rounded-circle me-3 profile_picture" alt="...">
                <div>
                <h6 class="card-title fw-semibold">${user.title}</h6>
                <p class="card-text">${user.authors[0].profile_name}</p>
                <p class="card-text">${user.others.views} views</p>
                </div>
                </div>
                </div>
                `
                dataContainer.appendChild(dataDiv)
            })
        }
        
        loadData(1000)
        // <p class="card-text">${user.authors[0].verified? verified : ''}</p>