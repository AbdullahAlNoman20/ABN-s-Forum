// console.log("Connected")


const loadInfo = async (categoryName='')=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
    const data = await res.json();
    const discussInfo = data.posts;
    // console.log(discussInfo);

    // info gula Dekhanor Jonno display ke Call Korlam value dia
    displayDiscussInfo(discussInfo);
}


const displayDiscussInfo = discussInfo =>{
    // console.log(discussInfo);

    // step one kothai bosabo seta select kora 
    const discussInfoContainer = document.getElementById('infoContainer');


    // Search ar somoy 1 bar search korar por abr search korle ager data nai koira dibe
    discussInfoContainer.textContent = '';



    discussInfo.forEach(info =>{
        // console.log(info);

        let activeStatus = ''
        if(info.isActive){
            activeStatus = `<i class="fa-solid fa-circle text-green-600"></i>`
         }
         else{
            activeStatus = `<i class="fa-solid fa-circle text-red-600"></i>`
         }

        // Step two Div Create
        const discussInfoCard = document.createElement('div');
        discussInfoCard.classList = ` flex gap-5 bg-blue-50 p-5 rounded-2xl border-2 border-blue-200 shadow-xl`;
        
        // Step three set inner html
        discussInfoCard.innerHTML = `
        <div class="flex"> 
        <img class=" bg-white h-20 w-20 rounded-2xl" src="${info.image}" alt="">
        ${activeStatus}
        </div>
        <div class="w-full">
        <p><span># ${info.category} </span> <span> Author: ${info.author.name}</span></p>
        <h3 class="text-2xl font-bold py-5">${info.title}</h3>
        <p>${info.description}</p>
        <div class="flex justify-between border-t-2 border-dashed border-blue-200 mt-7 pt-7 pr-2 w-full">
            <p><span><i class="fa-regular fa-message"></i> ${info.comment_count}</span> <span> <i class="fa-regular fa-eye"></i> ${info.view_count} </span> <span><i class="fa-regular fa-clock"></i> ${info.posted_time} min</span></p>
            <button onclick="handelShowTitle('${info.title}', '${info.view_count}')" class=" "><i class="fa-regular fa-envelope-open"></i></button>
        </div>
        </div>
        `;

        // step four append child

        discussInfoContainer.appendChild(discussInfoCard)
    })

    // Hide Loading Spinner
    toggleLoadingSpinner(false);
    
}




loadInfo();