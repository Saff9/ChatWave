import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase credentials
const supabaseUrl = 'https://ioblxqdmnligdiipgcch.supabase .co'
const supabaseKey = 'eyJhbGci0iJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJpc3Mi0iJzdXBhYmFzZSIsInJlZiI6ImlvYm x4cWRtbmxpZ2RpaXBnY2NoIiwicm9sZSI6ImFu b24iLCJpYXQi0jE3NTYxMjUzNjgsImV4cCI6Mj A3MTcwMTM2OHO.FsSq6mY2_07MbfctDrs9SUdD rjdTURIWB89SYfo33lw'

export const supabase = createClient(supabaseUrl, supabaseKey)
