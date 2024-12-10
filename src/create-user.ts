import { PrismaClient } from '@prisma/client'  // need migration

const Prisma = new PrismaClient() // now all models abstracted in Prisma variable

async function main (){
    // ... you will write your Prisma Client queries here

   await Prisma.User.create({
        data:{
            email:"tejas@com",
            name:"tejas"
        }
    })


}

main().then(async ()=>{
    await Prisma.$disconnect()
})
.catch(async(e)=>{
    console.error(e)
    await Prisma.$disconnect()
})