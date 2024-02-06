import prisma from '#/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	console.log(req);
	
	const board:BoardType[] = await prisma.board.findMany();
	return new Response(JSON.stringify(board));
}