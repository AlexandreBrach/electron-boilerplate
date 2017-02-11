
module.exports = {
    div2: function(livres) {
        if(isNaN(livres - 1)) {
            throw "Not a number";
        }
        return livres / 2;
    }
};

