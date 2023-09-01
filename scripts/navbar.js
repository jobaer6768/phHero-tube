const navbarContainer = document.getElementById('navbar-container');

navbarContainer.classList = 'flex justify-between items-center py-2 md:py-11 border-b-2';
navbarContainer.innerHTML = `

                        <div>
                            <img src="./images/Logo.png" alt="" class="md:w-full w-3/4">
                        </div>

                        <div>
                            <button class="btn bg-gray-300 text-xs md:text-base font-medium md:px-4 md:py-2">Sort by view</button>
                        </div>

                        <div>
                            <button class="btn bg-[#FF1F3D] text-xs md:text-base font-medium md:px-4 md:py-2 text-white">Blog</button>
                        </div>
            `