import NextAuth from 'next-auth'

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      accessToken: string;
    }

  }
}

type BoardType = {
    no: Number;
    title: string;
    content: string;
    files?: string;
    crtUser?: string;
    crtDate?: string;
    updUser?: string;
    updDate?: string;
  };