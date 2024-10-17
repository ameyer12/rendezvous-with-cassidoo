// Function that generates a valid SVG string for a circle given its radius, center position, and color.

function generateCircle(r, cx, cy, c) {
  let width = cx * 2;
  let height = cy * 2;

  return `<svg width=${width} height=${height}><circle cx=${cx} cy=${cy} r=${r} fill=${c}/>svg>`
}

// console.log(generateCircle(50, 100, 100, 'blue'));
// console.log(generateCircle(30, 75, 50, 'red'));