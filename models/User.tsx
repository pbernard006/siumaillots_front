import { AddressModel } from './AddressModel'

export class User {
  public id?: string = ''
  public email?: string = ''
  public firstName?: string = ''
  public lastName?: string = ''
  public roles?: [] = []
  public addresses?: AddressModel[] = []
  public orders?: [] = []

  constructor() {}
}
