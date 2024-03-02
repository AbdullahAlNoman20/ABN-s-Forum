// console.log("Connected")


const latestInfo = async ()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const latest = await response.json();
    const latestPost = latest;
    // console.log(latestPost);

    // info gula Dekhanor Jonno display ke Call Korlam value dia
    displayLatestPost(latestPost);
}


const displayLatestPost = latestInfo =>{
    // console.log(latestInfo);

    // step one kothai bosabo seta select kora 
    const latestInfoContainer = document.getElementById('latestInfoContainer');


    latestInfo.forEach(post =>{
        // console.log(post);

        // Step two Div Create
        const latestInfoCard = document.createElement('div');
        latestInfoCard.classList = `p-5 rounded-2xl border-2 border-blue-200 shadow-xl`;
        
        // Step three set inner html
        latestInfoCard.innerHTML = `
        <img class="w-[340px] h-52 rounded-3xl" src="${post.cover_image}" alt="">
                    <p><i class="fa-regular fa-calendar my-8"></i> ${post.author.posted_date}</p>
                    <h3 class="font-bold">${post.title}</h3>
                    <p class="my-5">${post.description}</p>
                    <div class="flex items-center gap-5">
                        <img class="w-10 h-10 rounded-full " src="${post.profile_image}" alt="">
                        <div class="">
                            <h4>${post.author.name}</h4>
                            <p>${post.author.designation}</p>
                </div>
                </div>
        `;

        // step four append child

        latestInfoContainer.appendChild(latestInfoCard)
    })
    
}




latestInfo();