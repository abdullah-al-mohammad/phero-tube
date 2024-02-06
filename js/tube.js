const  loadData =  async() =>{
    const url = ' https://openapi.programming-hero.com/api/videos/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);

}
const displayData = (phones) =>{
    const btnContainer = document.getElementById('btn-container');
    phones.forEach(phone => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('d-flex')
        newDiv.innerHTML = `
        <button type="button" class="btn btn-danger">Danger</button>
        `
        btnContainer.appendChild(newDiv) 
    });
}
loadData()