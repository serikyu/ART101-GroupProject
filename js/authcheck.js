// authCheck.js

// Initialize Firebase (you must include the firebase config or import it from another shared file)
const firebaseConfig = {
      apiKey: "AIzaSyD5v7tRVtB8f16TQmTPq5n2SDY-FzOH20k",
      authDomain: "slugs-near-you.firebaseapp.com",
      projectId: "slugs-near-you",
      storageBucket: "slugs-near-you.appspot.com",
      messagingSenderId: "993053159810",
      appId: "1:993053159810:web:a8e017e8cb3d7fe355df9b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

document.addEventListener('DOMContentLoaded', function() {
  const auth = firebase.auth();
  
  auth.onAuthStateChanged(user => {
    if (!user) {
      // User is not logged in, redirect to sign-in page
      window.location.href = "/pagesignin/index.html"; // Absolute path
    } else {
      // User is logged in, show their email
      const userEmailElement = document.getElementById('userEmail');
      if (userEmailElement) {
        userEmailElement.textContent = user.email;
      }
    }
  });
});

// Signifies on the page that the user is signed in. (WORK IN PROGRESS CURRENTLY BROKEN) - Alexander

if (user) {
  document.getElementById("userEmail").textContent = `Logged in as: ${user.email}`;
}