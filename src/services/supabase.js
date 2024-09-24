import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ubonnlvxqyiythvnlxmj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVib25ubHZ4cXlpeXRodm5seG1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3NzY2MzAsImV4cCI6MjAzNjM1MjYzMH0.uLh-IUo_jFirWaZ4rnovmGuQ2QSohh3hiR463xSoXmw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
