const {data, drawTree} = require("../index");

test('call drawTree with empty data', () => {
    expect(() => drawTree()).toThrowError("Empty data");
});

test('call drawTree with invalid data format', () => {
    expect(() => drawTree("hsakjd")).toThrowError("Invalid data");
    expect(() => drawTree([1,2,3,4])).toThrowError("Invalid data");
});

test('call dataTree with correct data', () => {
    const normalize = (str) => str.replace(/\s+/g, ' ').trim();
    expect(
        normalize(drawTree(data))
    ).toEqual(
        normalize('1\n├--2\n|  └--3\n|  └--4\n|   └--7\n|    └--8\n|     └--19\n|    └--9\n├--5\n|  └--6\n')
    );
});