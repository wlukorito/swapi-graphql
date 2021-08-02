import { IArgs, IContext, IParam, IParent } from '../interfaces';

const Query = {
    people: async (parent: IParent, args: IArgs, ctx: IContext) => {
        
        if (args.page) {
            const parms: IParam = {
                page: args.page,
                name: ''
            };

            return await ctx.api.getPeople(parms);
        }

        return await ctx.api.getPeople();
    },
    search: async (parent: IParent, args: IArgs, ctx: IContext) => {
        const parms: IParam = {
            page: '',
            name: args.name
        }

        return await ctx.api.getPeople(parms);
    }
};

export default Query;
