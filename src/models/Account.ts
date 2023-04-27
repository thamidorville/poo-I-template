//EXERCÍCIO DE FIXAÇÃO
//CRIE E EXPORTE A CLASSE Account DE 
//src/models/Account.ts

export class Account {
    constructor(
        private id: string,
        private ownerId: string,
        private balance: number,
        private createdAt: string
        ){}


        public getId(): string{
            return this.id
        }
        //tipo ele como void pois ele não irá retornar nada e sim atualizar o valor de id
            public setId(newId:string): void{
            this.id = newId
        }
        // método NAME
        public getOwnerId(): string{
            return this.ownerId
        }
            
        public setOwnerId(newOwnerId:string): void{
            this.ownerId = newOwnerId
        }
            //método getEmail
        public getBalance():number{
            return this.balance
        }
        public setBalance(newBalance:number):void{
            this.balance = newBalance
        }
    
        //createdAt
        public getCreatedAt():string{
            return this.createdAt   
                }
        public setCreatedAt(newCreatedAt:string):void{
            this.createdAt = newCreatedAt
                }
}

