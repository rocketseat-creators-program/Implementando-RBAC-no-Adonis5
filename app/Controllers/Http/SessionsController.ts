import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import SessionValidator from 'App/Validators/SessionValidator'

export default class SessionsController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(SessionValidator)
    const token = await auth.attempt(email, password)
    return token
  }
}
