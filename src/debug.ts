/// https://github.com/prisma/prisma/issues/5026 for not showing parameters in logs $1,$2

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  })

async function main() {
    const users = await prisma.user.findMany({
        take: 2,
    });
};

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

prisma.$on("query", async (e) => {  // $on listen events
    console.log(`${e.query} ${e.params}`)
});