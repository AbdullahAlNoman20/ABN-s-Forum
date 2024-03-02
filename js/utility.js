// console.log("Connected")


const loadInfo = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
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


    discussInfo.forEach(info =>{
        // console.log(info);

        // Step two Div Create
        const discussInfoCard = document.createElement('div');
        discussInfoCard.classList = `flex gap-5 bg-blue-100 p-5 rounded-2xl border-2 border-blue-400 shadow-xl`;
        
        // Step three set inner html
        discussInfoCard.innerHTML = `
        <div class="flex"> 
        <img class=" bg-white h-20 w-20 rounded-2xl" src="${info.image}" alt="">
        <div class="badge badge-primary badge-xs bg-green-600 border-0"></div>
        </div>
        <div class="">
        <p><span># ${info.category} </span> <span> Author: ${info.author.name}</span></p>
        <h3 class="text-2xl font-bold py-5">${info.title}</h3>
        <p>${info.description}</p>
        <div class="flex justify-between border-t-2 border-dashed border-blue-200 mt-7 pt-7 pr-2 w-full">
            <p><span><i class="fa-regular fa-message"></i> ${info.comment_count}</span> <span> <i class="fa-regular fa-eye"></i> ${info.view_count} </span> <span><i class="fa-regular fa-clock"></i> ${info.posted_time} min</span></p>
            <button><i class="fa-regular fa-envelope-open"></i></button>
        </div>
        </div>
        `;

        // step four append child

        discussInfoContainer.appendChild(discussInfoCard)
    })
    
}




loadInfo();