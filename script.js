const reviewTitle = document.getElementById("reviewTitle");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const submit = document.getElementById("reviewForm");
const reviews = document.getElementById("reviewsRow");

let title;

submit.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    console.log("submitted");
    title = reviewTitle.value;
    let text = reviewText.value;
    let name = reviewName.value? reviewName.value : "Anonymous";
    reviews.innerHTML += `<div class="col-lg-4 col-md-6 py-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${title}</h4>
                                <blockquote class="blockquote mb-0">
                                <p>${text}</p>
                                <footer class="text-end blockquote-footer"><i>${name}</i></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>`;
})