const checkWin = require("../js/gamechecker");

test("Test empty array", () => {
    let arr = [[]];
    expect(checkWin(arr)).toBe("IN PROGRESS");
});

test("Test non empty array not ended game", () =>{
    let arr = [
        ["X", "", ""],
        ["", "O", ""],
        ["O", "X", ""]
    ];
    expect(checkWin(arr)).toBe("IN PROGRESS");
});

test("Test win in line 1 X", () =>{
    let arr = [
        ["X", "X", "X"],
        ["", "", "O"],
        ["O", "", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});
test("Test win in line 2 X", () =>{
    let arr = [
        ["", "", "O"],
        ["X", "X", "X"],
        ["O", "", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});
test("Test win in line 3 X", () =>{
    let arr = [
        ["", "", "O"],
        ["O", "", ""],
        ["X", "X", "X"],
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});
test("Test win in line 1 O", () =>{
    let arr = [
        ["O", "O", "O"],
        ["X", "", "X"],
        ["", "X", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});
test("Test win in line 2 O", () =>{
    let arr = [
        ["X", "", "X"],
        ["O", "O", "O"],
        ["", "X", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});
test("Test win in line 3 O", () =>{
    let arr = [
        ["X", "", "X"],
        ["", "X", ""],
        ["O", "O", "O"],
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});

test("Test win in column 1 X", () =>{
    let arr = [
        ["X", "O", "O"],
        ["X", "", "O"],
        ["X", "", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});

test("Test win in column 2 X", () =>{
    let arr = [
        ["O", "X", "O"],
        ["", "X", "O"],
        ["", "X", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});

test("Test win in column 3 X", () =>{
    let arr = [
        ["", "O", "X"],
        ["", "O", "X"],
        ["O", "", "X"]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});

test("Test win in column O", () =>{
    let arr = [
        ["", "X", "O"],
        ["", "X", "O"],
        ["X", "", "O"]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});

test("Test win in diagonal X", () =>{
    let arr = [
        ["X", "O", "O"],
        ["", "X", "O"],
        ["", "", "X"]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});

test("Test win in diagonal O", () =>{
    let arr = [
        ["O", "X", "X"],
        ["", "O", "X"],
        ["", "", "O"]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});

test("Test win in diagonal left O", () =>{
    let arr = [
        ["X", "X", "O"],
        ["", "O", "X"],
        ["O", "", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});

test("Test draw", () =>{
    let arr = [
        ["O", "X", "O"],
        ["O", "X", "X"],
        ["X", "O", "O"]
    ];
    expect(checkWin(arr)).toBe("DRAW");
});