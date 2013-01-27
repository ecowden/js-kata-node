describe("helloWorld", function () {
    var greet = require("../lib/greet");

    it("should greet the named person", function () {
        expect(greet("World")).toBe("Hello World!");
    });

});