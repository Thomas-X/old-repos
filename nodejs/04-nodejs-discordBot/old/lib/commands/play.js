var Clapp = require('../modules/clapp-discord');


module.exports = new Clapp.Command({
    name: "play",
    desc: "Play some music",
    fn: function(argv, context) {
        // This output will be redirected to your app's onReply function



    },
    args: [
        {
            name: 'ArgName',
            desc: 'ArgDesc',
            type: 'string',
            required: false,
            default: 'args not defined'
        }]
});
