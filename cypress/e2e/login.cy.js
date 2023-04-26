import { login as loginPage } from '../../page-objects/simple/login'
import { inventory as inventoryPage } from '../../page-objects/simple/inventory'

describe('Login', () => {
  it.only('logs in successfully', () => {
    loginPage.visit()
    loginPage.loginIput()
    debugger;
  })
})
