fetch("http://localhost:5000/notifications")
.then(response=>response.json())
.then(data=>{

    const container=document.getElementById("notifications");

    data.forEach(notification=>{

        container.innerHTML+=`
        <div class="card">
            <h3>${notification.category}</h3>
            <p>${notification.message}</p>
            <p>Priority Score: ${notification.priority.toFixed(2)}</p>
        </div>
        `;
    });
});