

const renderDataUsers = (data) => {
    data.map((value, index) => {
        const content = document.getElementById('cards');
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML =`
        <h3 class="card-${index}">${value.id}</h3>
        <h3 class="card-${index}">${value.name}</h3>
        <h3 class="card-${index}">${value.username}</h3>
        <h3 class="card-${index}">${value.email}</h3>`
        content.appendChild(newCard);
    })
}

const renderDataPosts = (data) => {
    data.map((value, index) => {
        const content = document.getElementById('cards');
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML =`
        <h3 class="card-${index}">User Id: ${value.userId}</h3>
        <h3 class="card-${index}">------Comment:-------${value.title}</h3>`
        content.appendChild(newCard);
    })
}

$('#allUsers').on('click',() => {
    const requestHTTP = 'https://jsonplaceholder.typicode.com/users';
    $.ajax(requestHTTP, {
        method: 'GET',
        success: (data) => {
            renderDataUsers(data);
            },
        error: (err) => {
            alert('Фатальная Ошибка');
            console.log(err);
        }
        });
    });

$('#error').on('click',() => {
    const requestHTTP = 'https://jsonplaceh'; // https://jsonplaceholder.typicode.com/posts
    $.ajax(requestHTTP, {
        method: 'GET',
        success: (data) => {
            renderDataPosts(data);
        },
        error: (err) => {
            alert('--------------------------Фатальная Ошибка---------------------------- ' +
                'Для более подробной информации посмотрите в консоль');
        }
    });
});



