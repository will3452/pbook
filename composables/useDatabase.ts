import { createClient } from '@supabase/supabase-js';
export default () => {
    const client = createClient(`https://zhyodcpzcrheyzytxxrf.supabase.co`, `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoeW9kY3B6Y3JoZXl6eXR4eHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjU2MzksImV4cCI6MjAyNTE0MTYzOX0.y3CleS4uke-diqXuGzfLyGSU54hwa1kVtiuUMMLXcPo`, {
        auth: {
            persistSession: true, 
        }
    })
    return client 
}