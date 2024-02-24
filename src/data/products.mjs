import { createCard, renderCard } from "../components/cardComponent";
let url = "https://fakestoreapi.com/products";
 fetch(url)
    .then(res=>res.json())
    .then(data => {
        data.map((product) => {
            console.log(product);
            renderCard.innerHTML = createCard(product);
        })
    });

