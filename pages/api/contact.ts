import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }
  // In real life, send to CRM/Telegram/Email here
  console.log('New contact request:', req.body);
  res.status(200).json({ ok: true });
}
