# Guestbook

- tutorial: https://dev.to/nexxeln/build-a-full-stack-app-with-create-t3-app-5e1e
- deployment: https://guestbook-luis.vercel.app/

## Tech Used

- NextJS (for FE and BE)
- next-auth
- tRPC
- Prisma
- Railway
- Tailwind CSS

## Good

- React query is amazing. It manages the client side cache, one of the big selling points when using apollo.
- Tailwind was good too, especially after installing a vscode extension that lets you see the actual css being used. The class names were easy to pick up.
- I liked using nextjs's API route with trpc. FE and BE together is great.
- Next-auth is pretty amazing. I was able to oauth with discord in 2 limes of code.
- Prisma is pretty amazing too. I liked that it came with a studio where you can see and create records.
- Railway was good as well
- tRPC is like magic

## Not so good

- Obviously there's a big limitation using tRPC because it can only be called through typescript, so if want to call it with curl, you can't.
- Too bad Railway doesn't have a free tier for devs. Instead they give you a free trial with some credit.

## Next Steps

- How does tRPC work in separate repos? Even a monorepo?
- What's the advantage of tRPC over exporting a client sdk REST wrapper?
- How do the types become avaiable in the client?
