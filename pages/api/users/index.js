import prisma from "@/libs/prismadb";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};

export default handler;
