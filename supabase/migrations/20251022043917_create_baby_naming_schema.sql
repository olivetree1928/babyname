/*
  # Baby Naming App Database Schema

  1. New Tables
    - `qiming_profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text)
      - `created_at` (timestamptz)
    
    - `qiming_naming_records`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references qiming_profiles)
      - `birth_datetime` (timestamptz) - precise birth date and time
      - `selected_style` (text) - one of: guoxue, gudian, xiandai, ziran, yazhi, jianyue
      - `generated_names` (jsonb) - array of generated names with details
      - `favorite_name` (text, nullable) - user's selected favorite
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Users can only view and manage their own data
*/

-- Create qiming_profiles table
CREATE TABLE IF NOT EXISTS qiming_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE qiming_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON qiming_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON qiming_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON qiming_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create qiming_naming_records table
CREATE TABLE IF NOT EXISTS qiming_naming_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES qiming_profiles(id) ON DELETE CASCADE,
  birth_datetime timestamptz NOT NULL,
  selected_style text NOT NULL CHECK (selected_style IN ('guoxue', 'gudian', 'xiandai', 'ziran', 'yazhi', 'jianyue')),
  generated_names jsonb NOT NULL DEFAULT '[]'::jsonb,
  favorite_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE qiming_naming_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own naming records"
  ON qiming_naming_records FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own naming records"
  ON qiming_naming_records FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own naming records"
  ON qiming_naming_records FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own naming records"
  ON qiming_naming_records FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_qiming_naming_records_user_id ON qiming_naming_records(user_id);
CREATE INDEX IF NOT EXISTS idx_qiming_naming_records_created_at ON qiming_naming_records(created_at DESC);