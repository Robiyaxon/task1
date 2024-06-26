document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('userList');
    const userDetails = document.getElementById('userDetails');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                `;
                userCard.addEventListener('click', function() {
                    showUserDetails(user);
                });
                userList.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching users:', error));

    function showUserDetails(user) {
        userDetails.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <address>
                <strong>Address:</strong><br>
                ${user.address.street}, ${user.address.suite}<br>
                ${user.address.city}, ${user.address.zipcode}<br>
                ${user.address.geo.lat}, ${user.address.geo.lng}
            </address>
        `;
        userDetails.classList.add('active');
    }
});
