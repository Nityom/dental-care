import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fztwkebheefjvstugznm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6dHdrZWJoZWVmanZzdHVnem5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NzMxNTMsImV4cCI6MjA2NTE0OTE1M30.tuJLLRamZGQXH2zEKDATFHRNantG_rCQmOkNGTp4VQY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);