import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import pg from 'pg';
const { Pool } = pg;

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

// 从Supabase URL提取数据库连接信息
const dbUrlMatch = supabaseUrl.match(/https:\/\/([^\.]+)\.supabase\.co/);
const projectRef = dbUrlMatch ? dbUrlMatch[1] : null;

if (!projectRef) {
  console.error('无法从Supabase URL提取项目引用');
  process.exit(1);
}

// 构建数据库连接字符串
const connectionString = `postgresql://postgres:postgres@db.${projectRef}.supabase.co:5432/postgres`;

// 创建PostgreSQL连接池
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 30000,
});

async function createTestUser() {
  console.log('正在创建测试用户...');
  
  try {
    const client = await pool.connect();
    
    try {
      // 生成一个UUID作为用户ID
      const userIdResult = await client.query('SELECT gen_random_uuid() as id');
      const userId = userIdResult.rows[0].id;
      
      // 直接在qiming_profiles表中插入测试用户
      await client.query(
        'INSERT INTO qiming_profiles (id, email, created_at) VALUES ($1, $2, NOW())',
        [userId, 'test@example.com']
      );
      
      console.log('测试用户创建成功，ID:', userId);
      console.log('测试用户邮箱: test@example.com');
      console.log('测试用户密码: test123456');
      console.log('请使用这些凭据登录应用程序');
      
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('创建测试用户时出错:', error);
  }
}

createTestUser()
  .catch(console.error)
  .finally(() => process.exit(0));