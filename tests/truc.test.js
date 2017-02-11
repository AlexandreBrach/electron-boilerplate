var truc = require( '../js/truc.js' );

describe("Test truc (qui divise par 2)", function() {
  describe("Conversion de livre à kilo", function() {
  
      it("Devrait multiplier le nombre de livre par 2.2", function() {
            expect(truc.div2(22)).toBe(11);
          });
  
      it("Devrait lancer une exception si l'entrée n'est pas numérique", function()  {
                   expect(truc.div2.bind("abc"))
                     .toThrow("Not a number");
          });
  
    });
});
