enum Role {
    user = 'user',
    admin = 'admin'
}
type Users = {
    name: string,
    email: string,
    role: Role
}

const usersList: Users[] = 
    [
	    {name: "Rogério", email: "roger@email.com", role: Role.user},
	    {name: "Ademir", email: "ademir@email.com", role: Role.admin},
	    {name: "Aline", email: "aline@email.com", role: Role.user},
	    {name: "Jéssica", email: "jessica@email.com", role: Role.user},  
	    {name: "Adilson", email: "adilson@email.com", role: Role.user},  
	    {name: "Carina", email: "carina@email.com", role: Role.admin}      
    ]

const checkUsers = (data: Users[]) => {
    return data.filter(user => user.role === 'admin').map(user => user.email)
}

console.log(checkUsers(usersList))