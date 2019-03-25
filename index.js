// xmpp integration
const path = require('path')

module.exports = RecipeModel => class FranzXmpp extends RecipeModel {
  constructor (data) {
    super(data)
    this.serviceURL = path.resolve(__dirname, 'index.html')
  }
}
