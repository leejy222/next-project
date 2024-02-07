import { verifyJwt } from '#/lib/jwt'
import prisma from '#/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  //
  // const accessToken = request.headers.get('authorization')
  // if (!accessToken || !verifyJwt(accessToken)) {
  //   return new Response(JSON.stringify({ error: 'No Authorization' }), {
  //     status: 401,
  //   })
  // }

  const id = Number(params.id)

  const userPosts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  })
  console.table(userPosts);
  return new Response(JSON.stringify(userPosts))
}