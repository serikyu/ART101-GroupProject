import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  monitorAuthState
} from './firebase.js';

// DOM Elements (customize these selectors to match your HTML)
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authError = document.getElementById('authError');

// Auth State Management
export const initAuthStateListener = () => {
  return monitorAuthState().then(user => {
    if (user) {
      console.log('User logged in:', user.email);
      toggleAuthUI(true);
    } else {
      console.log('User logged out');
      toggleAuthUI(false);
    }
    return user;
  });
};

// UI Toggle
const toggleAuthUI = (isLoggedIn) => {
  if (loginBtn) loginBtn.style.display = isLoggedIn ? 'none' : 'block';
  if (registerBtn) registerBtn.style.display = isLoggedIn ? 'none' : 'block';
  if (logoutBtn) logoutBtn.style.display = isLoggedIn ? 'block' : 'none';
};

// Login Function
export const handleLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    showAuthError(error.message);
    return false;
  }
};

// Registration Function
export const handleRegister = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    showAuthError(error.message);
    return false;
  }
};

// Logout Function
export const handleLogout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    showAuthError(error.message);
    return false;
  }
};

// Error Display
const showAuthError = (message) => {
  if (authError) {
    authError.textContent = message;
    setTimeout(() => authError.textContent = '', 5000);
  }
  console.error('Auth error:', message);
};

// Initialize Event Listeners
export const setupAuthListeners = () => {
  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      await handleLogin(emailInput.value, passwordInput.value);
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener('click', async () => {
      await handleRegister(emailInput.value, passwordInput.value);
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
};

// Initialize Auth System
export const initAuth = () => {
  setupAuthListeners();
  return initAuthStateListener();
};