import { PeopleAccount } from "./PeopleAccount"
import { SpecialPeopleAccount } from "./specialPeopleAccount"

export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): void => {
        console.log(this.name)
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    getLoan = (value: number): void => {
        if (this.validateStatus()) {
            this.deposit(value)
            console.log(`Loan successfully completed! The amount of ${value} will be added to your account.`)
        }
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value
            console.log(`Deposit successful! Current balance: ${this.balance}`)
        }
    }

    withdraw = (value: number): void => {
        if (this.validateStatus() && this.balance > value) {
            this.balance -= value
            console.log(`Withdrawal successful! Current balance: ${this.balance}`)
        } else {
            console.log('Sorry, the withdrawal could not be completed because the requested amount exceeds your account balance.')
        }
    }

    changeStatus = (): void => {
        this.status = !this.status
        console.log(this.status)
    }

    private validateStatus = (): boolean => {
        if (this.status === true) {
            return this.status
        }

        throw new Error('Invalid account')
    }
}