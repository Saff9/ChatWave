import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase credentials
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)
