import { z } from "zod";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const guestbookRouter = router({
    postMessage: protectedProcedure.input(z.object({name: z.string(), message: z.string()})).mutation(({input, ctx}) => {
        return ctx.prisma.guestbook.create({
            data: {
                name: input.name,
                message: input.message,
            },
        });
    }),
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.prisma.guestbook.findMany({
           select: {
            name: true,
            message: true
           },
           orderBy: {
            createdAt: "desc",
          }
        });
    })
})