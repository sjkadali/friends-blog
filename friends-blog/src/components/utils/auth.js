import {PrismaAdapter} from "@auth/prisma-adapter"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[]
}
