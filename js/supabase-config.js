// Supabase Configuration & Client Initialization
const SUPABASE_URL = 'https://txvwfrlfmeeyzvkxgmnj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4dndmcmxmbWVleXp2a3hnbW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2OTYxMzgsImV4cCI6MjEwNjI3MjEzOH0.OfykMjR5OMCWSs7S8ydu3hk8yuhaZgEuXhoVMqaGdfY';

let supabaseClient = null;
if (window.supabase) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// User Verification State
const USER_STORAGE_KEY = 'ecosphere_user';

function getVerifiedUser() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

async function verifyUserEmail(email, fullName = '') {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
    throw new Error("Iltimos, to'g'ri elektron pochta manzilini kiriting!");
  }

  const userData = {
    email: cleanEmail,
    full_name: fullName.trim() || cleanEmail.split('@')[0],
    verified_at: new Date().toISOString(),
    status: 'verified'
  };

  // 1. Try to record in Supabase
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('verified_users')
        .upsert(userData, { onConflict: 'email' })
        .select();
      if (error) {
        console.warn('Supabase upsert warning:', error.message);
      }
    } catch (err) {
      console.warn('Network issue writing to Supabase:', err);
    }
  }

  // 2. Save locally
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
  return userData;
}

function clearUserSession() {
  localStorage.removeItem(USER_STORAGE_KEY);
}

// Data Fetchers with database + fallback
async function fetchEcoArticles() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('eco_articles')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Error fetching articles from Supabase:', err);
    }
  }
  return [];
}

async function fetchEcoSubstances() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('eco_substances')
        .select('*')
        .order('name');
      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Error fetching substances from Supabase:', err);
    }
  }
  return [];
}

async function fetchEcoDevices() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('eco_devices')
        .select('*')
        .order('created_at');
      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Error fetching devices from Supabase:', err);
    }
  }
  return [];
}

async function submitProposal(proposalData) {
  if (!supabaseClient) {
    throw new Error('Supabase aloqasi mavjud emas');
  }
  const { data, error } = await supabaseClient
    .from('device_proposals')
    .insert([proposalData])
    .select();
  if (error) {
    throw error;
  }
  return data;
}

window.EcoSupabase = {
  client: supabaseClient,
  getVerifiedUser,
  verifyUserEmail,
  clearUserSession,
  fetchEcoArticles,
  fetchEcoSubstances,
  fetchEcoDevices,
  submitProposal
};
