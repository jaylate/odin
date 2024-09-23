function knightMoves(start, end) {
  const edges = new Array(8)
    .fill(0)
    .map(() => new Array(8).fill(0).map(() => []));
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const moves = [
        [x - 2, y - 1],
        [x - 2, y + 1],
        [x - 1, y - 2],
        [x - 1, y + 2],
        [x + 1, y - 2],
        [x + 1, y + 2],
        [x + 2, y - 1],
        [x + 2, y + 1],
      ];
      edges[x][y] = moves.filter(
        ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8,
      );
    }
  }

  const queue = [[start]];
  const visited = new Set([start.join(",")]);
  let path = [];

  while (queue.length > 0) {
    path = queue.shift();
    const node = path[path.length - 1];
    if (node[0] === end[0] && node[1] === end[1]) {
      break;
    } else {
      const neighbors = edges[node[0]][node[1]];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.join(","))) {
          visited.add(neighbor.join(","));
          const newPath = [...path, neighbor];
          queue.push(newPath);
        }
      }
    }
  }
  return path;
}

module.exports = { knightMoves };
