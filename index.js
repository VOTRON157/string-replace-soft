if (!String.prototype.format) 
{
    String.prototype.format = function()
    {
        var args = arguments;

        if (typeof args[0] != "object")
        {
            return this.replace(/{\d+}/g, function(m)
            {
                var index = Number(m.replace(/\D/g, ""));
                return (args[index] ? args[index] : m);
            });
        }
        else 
        {
            var obj = args[0],
                keys = Object.keys(obj);

            return this.replace(/{\w+}/g, function(m)
            {
                var key = m.replace(/{|}/g, "");
                return (obj.hasOwnProperty(key) ? obj[key] : m);
            });
        }
    };
}
