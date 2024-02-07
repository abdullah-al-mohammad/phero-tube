const  loadData =  async() =>{
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);

}
const displayData = (phones) =>{
    const btnContainer = document.getElementById('btn-container');
    phones.forEach(phone => {
        // console.log(phone);
        const newDiv = document.createElement('div');
        // newDiv.classList.add('d-flex')
        newDiv.innerHTML = `
        <button type="button" class="btn btn-danger me-3">${phone.category}</button>
        `
        btnContainer.appendChild(newDiv) 
    });
}
const loadUser = async() =>{
    const user = 'https://openapi.programming-hero.com/api/videos/category/1000';
    const res = await fetch(user);
    const data = await res.json();
    displayUser(data.data);
}
const displayUser = (users) =>{
    const dataContainer = document.getElementById('data-container')
users.forEach(user =>{
    console.log(user);
    const dataDiv = document.createElement('div');
    dataDiv.innerHTML= `
    <div class="card h-100">
        <img src="${user.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body d-flex">
            <img src="${user.thumbnail}" class="rounded-circle w-25 h-25 me-3" alt="...">
            <h6 class="card-title">Card title</h6>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    `
    dataContainer.appendChild(dataDiv)
})
}
loadUser()
loadData()