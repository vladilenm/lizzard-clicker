import { createClient } from '@supabase/supabase-js'

// DB = tNPnWxdIfnvMI3jC

const SUPABASE_URL = 'https://gtcqgcjnvurdbaqstryi.supabase.co'
const SUPABASE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Y3FnY2pudnVyZGJhcXN0cnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNzczNTksImV4cCI6MjA0Mzk1MzM1OX0.edcCD2797-oPnheJBCPK-GdiN3OM0SbNg5T21wL0Bqw'

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
export default supabase
