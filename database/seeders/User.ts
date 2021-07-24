import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UseSeeder extends BaseSeeder {
  public async run() {
    await User.create({ email: 'felipe@rocketseat.com.br', password: 'topsecret' })
  }
}
