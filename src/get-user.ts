import {PrismaClient} from '@prisma/Client'

const prisma = new PrismaClient()

async function main(){
   const allusers =  await prisma.User.findMany({}) 
   console.log("users",allusers)

   for(let i = 0; i<allusers.length; i++){
    const user = allusers[i]
    console.log(user.email)
   }

   await prisma.User.findUnique({
    where:{
        id:1
    },
    includes:{
        posts:true  //also get posts of user
    }
   })
}