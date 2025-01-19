import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kurmqanhiywuqpiynbmp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1cm1xYW5oaXl3dXFwaXluYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNTkyMTEsImV4cCI6MjA1MjgzNTIxMX0.CzY_Gc8FYyRkdzoyn-loRyUkrmhcThEDjcLeoGCQmfU";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});