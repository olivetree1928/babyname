import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      qiming_profiles: {
        Row: {
          id: string;
          email: string;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
        };
      };
      qiming_naming_records: {
        Row: {
          id: string;
          user_id: string;
          birth_datetime: string;
          selected_style: 'guoxue' | 'gudian' | 'xiandai' | 'ziran' | 'yazhi' | 'jianyue';
          generated_names: any;
          favorite_name: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          birth_datetime: string;
          selected_style: 'guoxue' | 'gudian' | 'xiandai' | 'ziran' | 'yazhi' | 'jianyue';
          generated_names?: any;
          favorite_name?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          birth_datetime?: string;
          selected_style?: 'guoxue' | 'gudian' | 'xiandai' | 'ziran' | 'yazhi' | 'jianyue';
          generated_names?: any;
          favorite_name?: string | null;
          created_at?: string;
        };
      };
    };
  };
};
