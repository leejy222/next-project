import prisma from '#/lib/prisma';

export async function GET() {
	const board:BoardType[] = await prisma.board.findMany();
	return new Response(JSON.stringify(board));
}
