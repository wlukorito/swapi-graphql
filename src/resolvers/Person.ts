import { IArgs, IContext, IPerson } from "../interfaces";

const Person = {
    homeworld: async (parent: IPerson, args: IArgs, ctx: IContext) => {
        return await ctx.api.getPlanet(parent.homeworld);
    }
}

export default Person;
