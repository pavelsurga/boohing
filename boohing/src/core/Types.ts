export type Point = {
    x: number
    y: number
}

export type Size = {
    x: number
    y: number
}

export type Segment = {
    startCoord: Point
    endCoord: Point
    curvature: number
}

export type Form = {
    segmentsList: Array<Segment>
    size: Size
}