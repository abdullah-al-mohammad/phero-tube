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
        btn.classList.add('btn', 'btn-secondary', 'me-3', 'px-4');
        btn.innerText= button.category;
        btn.id= button.category_id;
        if(btn.id === '1000'){
            btn.classList.add('btn-danger');
        }
        btnContainer.appendChild(btn);
    });
}
// event listener
btnContainer.addEventListener('click', (e) =>{
    toggoleSpinner(true)
    if(e.target.data === '0'){
        dataContainer.innerHTML= `<p> no data found </p>`
    }
    if(e.target.id !== 'btn-container'){
        for (const btn of btnContainer.children) {
            btn.classList.remove('btn-danger');
        }
        e.target.classList.add('btn-danger');
        loadData(e.target.id)
    }
    toggoleSpinner(false)
})
// loading spinner
const toggoleSpinner = (isLoading)=>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('d-none')
    }else{
        loadingSpinner.classList.add('d-none')
    }
}

const dataContainer = document.getElementById('data-container')
toggoleSpinner(true)
const loadData = async(id) =>{
    const user = `https://openapi.programming-hero.com/api/videos/category/${id}`;
    const res = await fetch(user);
    const data = await res.json();
    displayData(data.data);  
}

const displayData = (users) =>{
    dataContainer.innerHTML= '';
    if (users.length === 0) { // If no data is found
        dataContainer.innerHTML = `<h5 class= "position-absolute top-50 start-50"> no data found ...</h5>`;
    }
    users.forEach(data =>{
        console.log(data);
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col')
        dataDiv.innerHTML= `
        <div class="card h-100">
            <img src="${data.thumbnail}" class="card-img-top h-50 object-fit-cover" alt="...">
            <div class="card-body d-flex">
                <img src="${data.authors[0].profile_picture}" class="rounded-circle me-3 profile_picture" alt="...">
                <div>
                <h6 class="card-title fw-semibold">${data.title}</h6>
                <p class="card-text">${data.authors[0].profile_name} <span class= "ms-2">${data.authors[0].verified  ? `<img src= "../images/Group 3.png"></span>` : ''}</span> </p>
                <p class="card-text">${data.others.views} views</p>
                </div>
                </div>
                </div>
                `
                dataContainer.appendChild(dataDiv)
            })
            toggoleSpinner(false)
        }
        // blog html
        function blogHtml(){
            window.location.href= 'http://127.0.0.1:5500/js/blog.html'
        }
        loadData(1000)