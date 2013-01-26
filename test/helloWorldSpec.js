(function () {
    "use strict";

    describe("helloWorld", function () {

        beforeEach(module('kata.helloWorld'));

        it("should greet the named person", inject(function (greet) {
            expect(greet("World")).toBe("Hello World!");
        }));

    });

}());