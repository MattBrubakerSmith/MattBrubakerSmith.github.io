const Parser = (function() {
    let parser;
    function createParser() {
        return {
            parse: function(string, data) {
                let rx = /(\|%)(\w+)(\|)/g;
                let result;
                while((result = rx.exec(string)) !== null) {
                    try{
                        if(data.hasOwnProperty(result[2])) {
                            string = string.replace(result[0], data[result[2]]);
                        }
                        else {
                            throw "The \"" + result[2] + "\" property does not exist in this context!";
                        }
                    }
                    catch(e) {
                        console.error(e);
                    }
                }
                return string;
            },
        }
    }

    return {
        getParser: function() {
            if(!parser) {
                parser = createParser();
            }
            return parser;
        }
    }
})();