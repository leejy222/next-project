import prisma from '#/lib/prisma';

export async function GET(request: Request,
	{ params }: { params: { id: number } },
  ) {
	const board:BoardType = await prisma.board.findUnique({
		where: {
			no : Number(params.id)
		}
	})
	return new Response(JSON.stringify(board));
}