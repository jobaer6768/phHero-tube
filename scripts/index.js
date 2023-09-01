const categoryBtnContainer = document.getElementById('category-btn-container');
categoryBtnContainer.classList = 'mt-8 flex justify-center gap-6';
categoryBtnContainer.innerHTML = `
    <div>
        <button class="btn bg-gray-300 px-4 py-2 font-medium">All</button>
        </div>
        <div>
        <button class="btn bg-gray-300 px-4 py-2 font-medium">Music</button>
        </div>
        <div>
        <button class="btn bg-gray-300 px-4 py-2 font-medium">Comedy</button>
        </div>
        <div>
        <button class="btn bg-gray-300 px-4 py-2 font-medium">Drawing</button>
    </div>
`