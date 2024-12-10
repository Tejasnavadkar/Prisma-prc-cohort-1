import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main():Promise<void>{
    await prisma.User.update({
        where:{
            id:1
        },
        data:{
            name:"tejas"
        }
    })
}

main()