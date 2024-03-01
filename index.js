const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(data.data);
    displayPhone(phones)
}

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchPhone()
    }
})

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    // console.log(phones);
    phones.forEach(phone => {
        // console.log(phoneId);

        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <div class="card w-96 bg-base-100 border p-4">
            <figure class="bg-[#0D6EFD0D]"><img class="py-4" src="${phone.image}"
                    alt="Phone" /></figure>
        <div class="card-body">
            <h2 class="card-title">Name : ${phone.phone_name}</h2>
            <p>Brand : ${phone.brand}</p>
            <div class="card-actions justify-end">
                <button onclick='showDetails("${phone.slug}"); my_modal_5.showModal()' class="btn btn-primary mx-auto my-4">Show Details</button>
            </div>
        </div>
    </div>
        
        `

        phoneContainer.appendChild(phoneDiv)
    })
}


const searchPhone = () => {
    console.log('search btn clicked');
    const searchText = document.getElementById('search-input').value;
    console.log(searchText);
    loadPhone(searchText)
    // return ;
}

const showDetails = (phoneId) => {
    const modalContainer = document.getElementById('my_modal_5');
    console.log(modalContainer);
    modalContainer.innerHTML = ''
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(data => {

            const phone = data.data;
            const modalBox = document.createElement('div');
            modalBox.innerHTML = `
            <div class= 'modal-box'>
            <figure class="bg-[#0D6EFD0D] flex justify-center">
                <img class="py-4" src="${phone.image}"
                    alt="Shoes" />
            </figure>
                <h3 class="font-bold text-lg">${phone.name}</h3>
                <p class="py-4"> <span class="font-bold">Storage : </span> ${phone.mainFeatures.storage}</p>
                <p class="py-4"> <span class="font-bold">Display size : </span> ${phone.mainFeatures.displaySize}</p>
                <p class="py-4"> <span class="font-bold">Chipset : </span> ${phone.mainFeatures.chipSet}</p>
                <p class="py-4"> <span class="font-bold">Memory : </span> ${phone.mainFeatures.memory}</p>
                <p class="py-4"> <span class="font-bold">Slug : </span> ${phone.slug}</p>
                <p class="py-4"> <span class="font-bold">Release date : </span> ${phone.releaseDate}</p>
                <p class="py-4"> <span class="font-bold">Brand : </span> ${phone.brand}</p>
                <p class="py-4"> <span class="font-bold">GPS : </span> ${phone.others.GPS}</p>

                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn">Close</button>
                    </form>
                </div>
            
            </div>
            
            
            `
            modalContainer.appendChild(modalBox)
            // console.log(phone);
        })
    // console.log('show details btn clicked', phoneId);
}
loadPhone('iphone')