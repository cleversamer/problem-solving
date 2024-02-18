function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let currentLine = "";

    for (let j = i; j < n; j++) {
      currentLine += " ";
    }

    for (let k = 0; k < i; k++) {
      currentLine += "#";
    }

    console.log(currentLine);
  }
}
