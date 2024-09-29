
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://zqidvjjxsoxofigdexri.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxaWR2amp4c294b2ZpZ2RleHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MTgxMTQsImV4cCI6MjAzOTQ5NDExNH0.3aUh-uV2BOty85xP55LtcuoGIhfGkipgITQ5jzbBprk`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase