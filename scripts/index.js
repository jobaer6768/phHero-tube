const handleCategory = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    console.log(data.data)

    const categoryBtnContainer = document.getElementById('category-btn-container');
    data.data.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button onclick="handleCardCategory('${category.category_id}')" class="btn"> ${category.category} </button>
        `;

        categoryBtnContainer.appendChild(div);
    })
}

const handleCardCategory = (id) =>{
    
}

handleCategory();