//classe é um modelo para se criar outros objetos, ou seja, instanciar outros objetos
export class User {
    //ATRIBUTOS: características, informações, dados
    // id: string
    // name: string
    // email: string
    // password: string
    // createdAt: string

    //Sintaxe reduzida
    // export class User {
    //     constructor(
    //         private id: string,
    //         private name: string,
    //         private email: string,
    //         private password: string
    //     ){}
    // }

//MÉTODOS (ações, comportamento, funções)
constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: string
    ){
        // this.id = id
        // this.name = name
        // this.email = email
        // this.password = password
        // this.createdAt = createdAt
}
//outros métodos
    public getId(): string{
    return this.id
}
//tipo ele como void pois ele não irá retornar nada e sim atualizar o valor de id
    public setId(newId:string): void{
    this.id = newId
}
// método NAME
public getName(): string{
    return this.name
}
    
public setName(newName:string): void{
    this.name = newName
}
    //método getEmail
public getEmail():string{
    return this.email
}
public setEmail(newEmail:string):void{
    this.email = newEmail
}
//método password
public getPassword():string{
    return this.password
    }
public setPassword(newPassword:string):void{
    this.password = newPassword
    }
//createdAt
public getCreatedAt():string{
    return this.createdAt   
        }
public setCreatedAt(newCreatedAt:string):void{
    this.createdAt = newCreatedAt
        }

}
//Instanciar usuarios
const user1 = new User("001", "Thamiris", "thami@email.com", "thami123", "26/04/2023")
const user2 = new User("002", "Mira", "mirinha@email.com", "Mirinha", "26/04/2023")

