import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: '이메일2', type: 'text', placeholder: '이메일 주소 입력 요망' },
				password: { label: '비밀번호', type: 'password' },
			},
			async authorize(credentials, req) {

				const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

				if (user) {
					return user;
				} else {
					return null;
				}
			}
		}),
	]
});

export { handler as GET, handler as POST }