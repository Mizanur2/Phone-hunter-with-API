console.log('js connected');
// function loadPhone(){
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     .then(res)
// }

const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(data.data);
    displayPhone(phones)
}


const displayPhone = (phones) => {
    console.log(phones);
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <div class="card w-96 bg-base-100 border p-4">
            <figure class="bg-[#0D6EFD0D]"><img class="py-4" src="${phone.image}"
                    alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">Name : ${phone.phone_name}</h2>
            <p>Brand : ${phone.brand}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
        
        `

        phoneContainer.appendChild(phoneDiv)
    })
}
loadPhone()