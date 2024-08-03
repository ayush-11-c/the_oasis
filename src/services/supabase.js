import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yjdpljovjuhhmuokdexq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZHBsam92anVoaG11b2tkZXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMjgxMDgsImV4cCI6MjAzNDgwNDEwOH0.xPxfJvPZilPbcCG3OvHd9IDLXqr4ty7tApa7hU1bVCI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
