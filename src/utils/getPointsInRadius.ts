type XY = { x: number, y: number }

const distance = (p1: XY, p2: XY) => {
  const dx = (p2.x - p1.x)^2
  const dy = (p2.y - p1.y)^2
  return Math.sqrt( dx + dy )
}

export const getPointsInRadius = ({ x, y }: XY, r: number) => {
  const points: XY[] = []
  for (let j=x-r; j<=x+r; j++)
    for (let k=y-r; k<=y+r; k++)
      if (distance({x:j, y:k},{x, y}) <= r) points.push({x:j, y:k})
  return points
}
