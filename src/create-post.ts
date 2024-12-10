import {PrismaClients} from '@prisma/clients'


const Prisma = new PrismaClients({log:['info','query']}) // by adding you can see sqlQueris in console bcoz underthe hood prisma use queries to interact db 

async function main(){
    await Prisma.Post.create({
        data:{
            title:"this is title",
            content:"hey",
            author:{
                connect:{
                    id:1  // this means this post is connected to users table user no 1
                }
            },
            // authorId:1 this is also work for relation
        }
    })
}

main().then(async()=>{
    await Prisma.$disconnect()
}).catch(async(e)=>{
  console.error(e)
  await Prisma.$disconnect()
})