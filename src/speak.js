module.exports = {
    typeof: function (o) {
        return Object.prototype.toString.call(o).match(/\s(\w+)\]/)[1].toLowerCase();
    },
    plus: function () {
        var args = [].slice.call(arguments, 0);
        var ret = 0, i;
        while(i = args.shift()) ret += i;
        return ret;
    }
}