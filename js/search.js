




const handelSearch = ()=>{

    // console.log("Connected");

    // Call Spinner 
    toggleLoadingSpinner(true);

    const searchField = document.getElementById('userInput');
    const categoryName = searchField.value;
    // console.log(categoryName);

    // then Call Load info
    loadInfo(categoryName);
}

// Handel Search Recap
const toggleLoadingSpinner = (isLoading)=>{

    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}
loadingSpinner