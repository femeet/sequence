
const checkForScore = (snapshot, x, y, teamNumber) => {

    // Check horizontal
    let left = recursive(snapshot, x, y-1, "l", teamNumber);
    let right = recursive(snapshot, x, y+1, "r", teamNumber);
    if (left + right  >= 4) {
        // Score found horizontally
        console.log(`Wohooo!! Scored Horizontally: Left: ${left} & Right: ${right}`);

        let result = {
            direction: "horizontal",
            indexes: []
        }

        while(left>0) {
            result.indexes.push({
                x: x,
                y: y-left
            })
            left--;
        }

        while(right>0) {
            result.indexes.push({
                x: x,
                y: y+right
            })
            right--;
        }

        return result;
    }

    // Check Vertical
    let up = recursive(snapshot, x-1, y, "u", teamNumber);
    let down = recursive(snapshot, x+1, y, "d", teamNumber);
    if (up + down  >= 4) {
        console.log(`Wohooo!! Scored Vertically: Up: ${up} & Right: ${down}`);

        let result = {
            direction: "vertical",
            indexes: []
        }

        while(up>0) {
            result.indexes.push({
                x: x-up,
                y: y
            })
            up--;
        }

        while(down>0) {
            result.indexes.push({
                x: x + down,
                y: y
            })
            down--;
        }

        return result;
    }

    // Check Diagonal 1
    let leftUp = recursive(snapshot, x-1, y-1, "lu", teamNumber);
    let rightDown = recursive(snapshot, x+1, y+1, "rd", teamNumber);
    if (leftUp + rightDown  >= 4) {
        console.log(`Wohooo!! Scored Left Diagonally: leftUp: ${leftUp} & rightDown: ${rightDown}`);

        let result = {
            direction: "left-diagonal",
            indexes: []
        }

        while(leftUp>0) {
            result.indexes.push({
                x: x-leftUp,
                y: y-leftUp
            })
            leftUp--;
        }

        while(rightDown>0) {
            result.indexes.push({
                x: x + rightDown,
                y: y + rightDown
            })
            rightDown--;
        }

        return result;
    }

    // Check Diagonal 2
    let rightUp = recursive(snapshot, x-1, y+1, "ru", teamNumber);
    let leftDown = recursive(snapshot, x+1, y-1, "ld", teamNumber);
    if (rightUp + leftDown  >= 4) {
        console.log(`Wohooo!! Scored Right Diagonally: rightUp: ${rightUp} & leftDown: ${leftDown}`);

        let result = {
            direction: "right-diagonal",
            indexes: []
        }

        while(rightUp>0) {
            result.indexes.push({
                x: x-rightUp,
                y: y+rightUp
            })
            rightUp--;
        }

        while(leftDown>0) {
            result.indexes.push({
                x: x + leftDown,
                y: y - leftDown
            })
            leftDown--;
        }

        return result;
    }

    return false;
}

// direction can be l, r, u, d, lu, ru, ld, rd
const recursive = (snapshot, x, y, direction, teamNumber) => {

    // CORNER CASES

    // 1. Check if corner
    if ((x === 0 && y === 0) || (x === 0 && y === 9) || (x === 9 && y === 0) || (x === 9 && y === 9 )) {
        return 1;
    }

    // 2. Out of bounds
    if(x < 0 || x > 9 || y < 0 || y > 9) {
        return 0;
    }

    // 3. Team Constraint
    if(snapshot["currentBoard"][x][y] !== teamNumber ) {
        return 0;
    }

    // TODO: 4. Directional Constraints for already in score.

    if(direction === "l") {
        // Checking in left direction
        return 1 + recursive(snapshot, x, y - 1, direction, teamNumber);
    } else if (direction === "r") {
        // Checking in right direction
        return 1 + recursive(snapshot, x, y + 1, direction, teamNumber);
    } else if (direction === "u") {
        // Checking upwards
        return 1 + recursive(snapshot, x - 1, y, direction, teamNumber);
    } else if (direction === "d") {
        // Checking downwards
        return 1 + recursive(snapshot, x + 1, y, direction, teamNumber);
    } else if (direction === "lu") {
        // Checking left upwards
        return 1 + recursive(snapshot, x - 1, y - 1, direction, teamNumber);
    } else if (direction === "ru") {
        // Checking right upwards
        return 1 + recursive(snapshot, x - 1, y + 1, direction, teamNumber);
    } else if (direction === "ld") {
        // Checking left downwards
        return 1 + recursive(snapshot, x + 1, y - 1, direction, teamNumber);
    } else if (direction === "rd") {
        // Checking right downwards
        return 1 + recursive(snapshot, x + 1, y + 1, direction, teamNumber);
    } else {
        // Weird default case (shouldn't happen tho)
        return 1;
    }
}

export default checkForScore;