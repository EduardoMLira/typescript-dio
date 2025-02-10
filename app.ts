// Dio Banking

// name, accountNumber
// depositar, sacar

import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialPeopleAccount } from './class/specialPeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Eduardo', 20)
const companyAccount: CompanyAccount = new CompanyAccount("DIO Company", 0)
const specialPeopleAccount: SpecialPeopleAccount = new SpecialPeopleAccount(2, 'Guilherme', 30)


peopleAccount.getName()
peopleAccount.getBalance()
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getLoan(1000)

companyAccount.getName()
companyAccount.getBalance()
companyAccount.deposit(100)
companyAccount.withdraw(50)
companyAccount.getLoan(1000)

specialPeopleAccount.changeStatus()
specialPeopleAccount.getName()
specialPeopleAccount.getBalance()
specialPeopleAccount.deposit(100)
specialPeopleAccount.withdraw(50)
specialPeopleAccount.getLoan(1000)
