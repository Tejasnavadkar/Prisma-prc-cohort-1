import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    await prisma.User.update({
        where:{
            id:1
        },
        data:{
            posts:{
                deleteMany:{
                    published:false  // delete posts which is not published
                }
            }
        }
    })
}