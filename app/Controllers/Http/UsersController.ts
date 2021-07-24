import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  /**
   * Lists all users.
   */
  public async index() {
    return await User.all()
  }

  /**
   * Shows one user by id.
   */
  public async show({ params }: HttpContextContract) {
    return await User.findOrFail(params.id)
  }
}
