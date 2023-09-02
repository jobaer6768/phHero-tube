const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    // console.log(data.data)

    const categoryBtnContainer = document.getElementById('category-btn-container');
    data.data.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button onclick="handleCardCategory('${category.category_id}')" class="btn"> ${category.category} </button>
        `;

        categoryBtnContainer.appendChild(div);
    })
}

const handleCardCategory = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()

    const categoryCardContainer = document.getElementById('category-card-container');
    categoryCardContainer.innerHTML = '';

    if(id === '1005'){
        categoryCardContainer.classList = 'flex flex-col justify-center items-center gap-4 mt-11'
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-center"><img src="./images/Icon.png" class="w-86"></div>
            <div class="flex justify-center"><p class="text-4xl font-semibold">Sorry, There is no content present at the moment!</p></div>
        `;

        categoryCardContainer.appendChild(div);

        return;
    }

    categoryCardContainer.classList = 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-11'

    data.data.forEach(category => {
        const div = document.createElement('div');
        div.classList = 'card';
        div.innerHTML = `
            <figure class=""><img class="w-96 h-52" src="${category?.thumbnail}" alt="" /></figure>
            <div class="mt-6">
                <div class="flex items-center justify-center md:justify-between gap-6">
                        <div>
                            <img class="w-12 h-12 rounded-full" src="${category?.authors[0]?.profile_picture}" alt="">
                        </div>
                        <div class="md:flex-1">
                            <p class="font-bold">${category?.title}</p>
                        </div>
                        
                </div>
                <div class="mt-2 flex justify-start pl-44 md:pl-16 gap-4">
                    <p>${category?.authors[0]?.profile_name}</p>
                    <div>
                        ${category?.authors[0]?.verified ? '<i class="fa-solid fa-check badge badge-primary text-white"></i>' : ''}
                    </div>
                </div>
                <p class="mt-2 mb-8 pl-44 md:pl-16">${category?.others?.views} views</p>
            </div>
        `;

        categoryCardContainer.appendChild(div);
    })
}

handleCategory();
handleCardCategory('1000');