"use strict";

const Validator = require("../../lib/validator");
const v = new Validator();

describe("Test rule: class", () => {

	it("should value instanceOf Buffer", () => {
		const check = v.compile({ rawData: { type: "class", instanceOf: Buffer } });
		const message = "The 'rawData' field must be an instance of the 'Buffer' class.";

		expect(check({ rawData: "1234"})).toEqual([{ type: "classInstanceOf", field: "rawData", actual: "1234", expected: "Buffer", message }]);
		expect(check({ rawData: [1, 2, 3]})).toEqual([{ type: "classInstanceOf", field: "rawData", actual: [1, 2, 3], expected: "Buffer", message }]);
		expect(check({ rawData: Buffer.from([1, 2, 3]) })).toEqual(true);
		expect(check({ rawData: Buffer.alloc(3) })).toEqual(true);
	});
});
