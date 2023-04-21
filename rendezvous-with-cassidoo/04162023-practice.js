// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

function pointSlope(n1, n2) {
    let b = 0;
    let numerator = n1[1] - n2[1];
    let denominator = n1[0] - n2[0];

    b = numerator / denominator;

    return b;
}

function maxPointsOnLine(n) {

    let resultMap = new Map();
    let maxValue = 0;

    if(n.length < 3){
        return n.length;
    }

    resultMap.set('duplicate', 1);
    resultMap.set('horizontal', 0);
    resultMap.set('vertical', 0);

    for(let i = 0; i < n.length; i++){
        let resultMapMaxValue = 0;
        for(let j = i + 1; j < n.length; j++){
            let slope = pointSlope(n[i], n[j]);
            
            if(n[i][1] === n[j][1]){
                resultMap.set("horizontal", (resultMap.get("horizontal"))+1);
            } else if(n[i][0] === n[j][0]){
                resultMap.set("vertical", (resultMap.get("vertical"))+1);
            } else if(resultMap.get(slope) !== undefined){
                resultMap.set(slope, (resultMap.get(slope))+1);
            } else if(resultMap.get(slope) === undefined){
                resultMap.set(slope, 1);
            }
        }
        let resultMapValues = [...resultMap.values()];
        resultMapMaxValue = Math.max(...resultMapValues);
        maxValue = Math.max(maxValue, resultMapMaxValue + 1);

        resultMap.set('duplicate', 1);
        resultMap.set('horizontal', 0);
        resultMap.set('vertical', 0);

        console.log(resultMap)
        resultMap = new Map(
            [...resultMap]
            .filter(([name, num]) => name === "duplicate" || name === "horizontal" || name === "vertical")
          );
    }
    return maxValue
}