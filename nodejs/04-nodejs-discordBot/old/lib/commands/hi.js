var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
    name: "hi2",
    desc: "hi desc2",
    fn: (argv, context) => {
        // This output will be redirected to your app's onReply function
      return this.name +  "I ran but this.name failed!";
    },
    args: [
        {
            name: 'hiArg',
            desc: 'a arg for hi',
            type: 'string',
            required: false,
            default: 'hi isn\'t defined'
        }]
});
