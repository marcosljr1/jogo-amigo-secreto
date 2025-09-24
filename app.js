let friends = [];

function addFriend() {
    const inputField = document.getElementById('friend');
    const friendName = inputField.value.trim();
    
    if (friendName === "") {
        alert("Por favor, insira um nome");
        return;
    }
    
    if (friends.includes(friendName)) {
        alert("Este nome já consta na lista, por favor: insira outro nome");
        inputField.value = "";
        return;
    }
    
    friends.push(friendName);
    
    updateList();
    inputField.value = "";
    inputField.focus();
}

function updateList() {
    let list = document.getElementById('friendList');
    list.innerHTML = "";
    
    for (let i = 0; i < friends.length; i++) {
        const item = document.createElement("li");
        item.textContent = friends[i];
        list.appendChild(item);
    }
}

function drawFriend() {
    const result = document.getElementById("result");
    result.innerHTML = "";

    if (friends.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const drawnFriend = friends[randomIndex];
    result.innerHTML = `<li>The secret friend drawn is: <strong>${drawnFriend}</strong></li>`;
}
