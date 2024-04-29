import { authOptions } from '../authOptions';
import NextAuth from 'next-auth';
 const handler = async (req:any, res:any) => {
  await NextAuth(req, res, authOptions);
 };
export default handler;
