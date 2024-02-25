let renderCard = document.querySelector('#card');
console.log(renderCard);
let url = "https://fakestoreapi.com/products";
let cardComponents = [
    { img : "\\mini-project-front-end\\src\\assets\\img\\04.jpg",price : 500, description : "We provide a short cause for all the student around the world"},
    { img : "\\mini-project-front-end\\src\\assets\\img\\06.jpg",price : 500, description : "We provide a short cause for all the student around the world"},
    { img : "\\mini-project-front-end\\src\\assets\\img\\07.jpg",price : 500, description : "We provide a short cause for all the student around the world"},
    { img : "\\mini-project-front-end\\src\\assets\\img\\10.jpg",price : 500, description : "We provide a short cause for all the student around the world"},
    { img : "\\mini-project-front-end\\src\\assets\\img\\09.jpg",price : 500, description : "We provide a short cause for all the student around the world"}
]

let createCard = (cardComponent) => {
    return `
    <div class="hover:bg-yellow-500 transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-10 hover:bg-indigo-500 duration-300 group my-5 mx-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${cardComponent.img}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="group-hover:text-white mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${cardComponent.price}$</h5>
        </a>
        <p class="group-hover:text-white mb-3 font-normal text-gray-700 dark:text-gray-400">${cardComponent.description}</p>
        <a href="#" class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
    `
}

cardComponents.map((cardComponent) => {
    renderCard.innerHTML += createCard(cardComponent);
})



// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         let sixCard = data.slice(0, 5);
//         sixCard.map((item) => {
//         console.log(item);
//         renderCard.innerHTML += createCard(item);
//         })
//     });



