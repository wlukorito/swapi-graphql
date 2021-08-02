import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        people(page: String): People!
        search(name: String!): People!
    }

    type People {
        count: String
        next: String
        previous: String
        results: [Person!]
    }

    type Person {
        name: String 
        height: String
        mass: String
        gender: String
        homeworld: Planet!
    }

    type Planet {
        name: String 
        rotation_period: String 
        orbital_period: String 
        diameter: String 
        climate: String
        gravity: String 
        terrain: String 
        surface_water: String 
        population: String 
        residents: [String]
        films: [String]
        created: String 
        edited: String 
        url: String
    }
`;

export default typeDefs;
