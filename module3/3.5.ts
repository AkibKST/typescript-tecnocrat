{
    // access modifiers

    class BankAccount{
        public id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        public addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

        public getBalance() {
            return this._balance;
        }
    }

    // class StudentAccount extends BankAccount{
    //     test() {
    //         this.
    //     }
    // }


    const goribManusherAccount = new BankAccount(111, "Mr. Gorib Manush", 20);

    goribManusherAccount.addDeposit(0);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
    // 
}