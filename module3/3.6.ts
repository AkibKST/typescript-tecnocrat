{
    // getter and setter

    class BankAccount{
        public id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // setter
        set deposit(amount: number){
            this._balance = this.balance + amount;
        }

        // public addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }

        // getter
        get balance(){
            return this._balance;
        }

        // public getBalance() {
        //     return this._balance;
        // }
    }

    // class StudentAccount extends BankAccount{
    //     test() {
    //         this.
    //     }
    // }


    const goribManusherAccount = new BankAccount(111, "Mr. Gorib Manush", 2000);

    goribManusherAccount.deposit = 50;
    const myBalance = goribManusherAccount.balance;
    console.log(myBalance);
    // 
}