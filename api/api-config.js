export default function handler(req, res) {
  res.status(200).json({
    supabaseKey: process.env.SUPABASE_ANON_KEY
  });
}
