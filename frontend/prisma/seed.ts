import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const main = async () => {
  const link1 = await prisma.link.create({
    data: {
      id: 1,
      createdAt: new Date("2022-03-19T14:21:00+0200"),
      updatedAt: new Date("2022-03-19T14:21:00+0200"),
      anchorText: "Stand For Ukraine",
      url: "https://standforukraine.com/"
    }
  })
  console.log(link1)

  const link2 = await prisma.link.create({
    data: {
      id: 2,
      createdAt: new Date("2022-03-20T14:21:00+0200"),
      updatedAt: new Date("2022-03-20T14:21:00+0200"),
      anchorText: "british redcross ukraine crisis appeal",
      url: "https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal"
    }
  })
  console.log(link2)

  const links = await prisma.link.findMany()
  console.log(links)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })