//const Path1 = ['R8','U5','L5','D3']
//const Path2 = ['U7','R6','D4','L4']

const Path1 = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']
const Path2 = ['U62','R66','U55','R34','D71','R55','D58','R83']

convertPaths = (path) => {
    let newPath = [];
    let finalPath = [];
    for(let i = 0; i < path.length; i++){
        let direction = path[i].substring(0, 1);
        let movesString = path[i].substring(1);
        let moves = parseInt(movesString, 10)
        
        newPath.push([direction, moves])
    }
    //[ [ 'U', '2' ], [ 'R', '10' ] ]
    //[x,y] [left-right , up-down] 
    for(let i = 0; i < newPath.length; i++){
        direction = newPath[i][0];
        moves = newPath[i][1]
        
        if(direction === 'U' || direction === 'R'){
            if(direction === 'U'){
                finalPath.push([0,moves])
            } else if(direction === 'R'){
                finalPath.push([moves,0])
            }
        } else if(direction === 'D' || direction === 'L')
            moves = -Math.abs(moves)
            if(direction === 'D'){
                finalPath.push([0,moves])
            } else if(direction === 'L'){
                finalPath.push([moves,0])
            }
    }
    console.log(finalPath);
}
3, 2 - 2, 3

convertPaths(Path1)
convertPaths(Path2)