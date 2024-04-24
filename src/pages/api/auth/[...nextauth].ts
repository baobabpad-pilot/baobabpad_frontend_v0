import { authOptions } from '../AuthOptions';
import NextAuth from 'next-auth';
 const handler = async (req, res) => {
  await NextAuth(req, res, authOptions);
 };
export default handler;
