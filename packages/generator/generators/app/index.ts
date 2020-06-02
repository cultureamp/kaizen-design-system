const YoGenerator = require("yeoman-generator")

module.exports = class extends YoGenerator {
  constructor(args, opts) {
    super(args, opts)
  }

  notify() {
    this.log(
      "Default generator not implemented. See README or try running yo @kaizen/create:draft"
    )
  }
}
