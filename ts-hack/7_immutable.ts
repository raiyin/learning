interface User {
    username: string;
}

const obj: User = {
    username: '123'
}

function userFn(user: Readonly<User>) {
    user.username = 'nkmdvfnkdfj'; // Error
}

userFn(obj)
console.log(obj)
