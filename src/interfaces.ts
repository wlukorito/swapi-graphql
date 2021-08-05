export interface IParent {
    parent: IPerson
}

export interface IArgs {
    page: string;
    name: string;
}

export interface IContext {
    api: any
}

export interface IPeople {
    count: string;
    next: string;
    previous: string;
    results: string[];
}

export interface IPerson {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string;
}

export interface IParam {
    page: string;
    name: string;
}

export interface IPlanet {
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
    residents: string[]
    films: string[]
    created: string
    edited: string
    url: string
}