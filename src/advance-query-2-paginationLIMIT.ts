import {prismaClients} from '@prisma/client'

const prisma = new prismaClients()

async function main(){

    await prisma.User.findMany({
        takes:3,
        skip:0 // offset from 0 - 3
    })
}

main()
















  //pagination
//   SELECT * FROM QUESTIONS OFFSET 0 LIMIT 10     from 0 - 10 , 10-20 
//   SELECT * FROM QUESTIONS OFFSET 10 LIMIT 10
//   SELECT * FROM QUESTIONS OFFSET 20 LIMIT 10