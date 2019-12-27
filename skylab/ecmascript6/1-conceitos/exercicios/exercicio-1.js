class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin() {
        // console.log(this.admin) undefined -> false
        if (this.admin === true) {
            return true
        }
        else return false
    }
}

class Admin extends Usuario {
    constructor() {
        super() // Posso reutilizar os paramatros do 'pai'
        this.admin = true
    }
}

const User1 = new Usuario('marvin@email.com', '12345678')
const Admin1 = new Admin('admin@email.com', '87654321')

console.log(User1.isAdmin())
console.log(Admin1.isAdmin())
