document.addEventListener('DOMContentLoaded', function() {
  const auth = firebase.auth();
  const authMessage = document.getElementById('authMessage');

  // Shared auth handler
  const handleAuth = (action) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
      authMessage.textContent = "Please fill all fields";
      return;
    }

    const authAction = action === 'login' 
      ? auth.signInWithEmailAndPassword(email, password)
      : auth.createUserWithEmailAndPassword(email, password);

      // In handleAuth function
authAction
  .then(() => window.location.href = "/pagemap/index.html") // Changed to absolute path
  .catch(err => {
    authMessage.textContent = err.message;
    console.error(err);
  });

// In onAuthStateChanged listener
auth.onAuthStateChanged(user => {
  const path = window.location.pathname;
  
  if (user) {
    // Redirect to map page if on sign-in page
    if (path.includes('pagesignin/index.html')) {
      window.location.href = "/pagemap/index.html"; // Absolute path
    }
    initializeUploadPage();
  } else {
    // Redirect to login if on protected pages
    if (path.includes('upload.html') || path.includes('pagemap/index.html')) {
      window.location.href = "/pagesignin/index.html"; // Absolute path
    }
  }
});

  };

  
  // Upload page functionality
  const initializeUploadPage = () => {
    if (!window.location.pathname.includes('upload.html')) return;

    const storage = firebase.storage();
    const db = firebase.firestore();
    const user = auth.currentUser;

    // Redirect to login if not authenticated
    if (!user) {
      window.location.href = "../pagemap/index.html";
      return;
    }

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
      auth.signOut()
        .then(() => window.location.href = "index.html")
        .catch(err => console.error("Logout failed:", err));
    });

    // Upload
    document.getElementById('uploadBtn')?.addEventListener('click', async () => {
      const file = document.getElementById('fileInput').files[0];
      const comment = document.getElementById('commentInput').value.trim();
      const statusMsg = document.getElementById('statusMsg');

      if (!file || !comment) {
        statusMsg.textContent = "Please select a file and add a comment";
        return;
      }

      try {
        statusMsg.textContent = "Uploading...";
        
        const fileRef = storage.ref(`uploads/${user.uid}/${Date.now()}_${file.name}`);
        await fileRef.put(file);
        const url = await fileRef.getDownloadURL();

        await db.collection('posts').add({
          imageUrl: url,
          comment,
          userId: user.uid,
          email: user.email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        statusMsg.textContent = "Upload successful!";
        loadPosts();
      } catch (err) {
        statusMsg.textContent = "Upload failed: " + err.message;
        console.error(err);
      }
    });

    // Load posts
    const loadPosts = () => {
      const postsContainer = document.getElementById('postsContainer');
      if (!postsContainer) return;

      db.collection('posts')
        .orderBy('createdAt', 'desc')
        .limit(10)
        .onSnapshot(snapshot => {
          postsContainer.innerHTML = '<h2>Recent Posts</h2>';
          snapshot.forEach(doc => {
            const post = doc.data();
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
              <img src="${post.imageUrl}" style="max-width: 300px; display: block;">
              <p>${post.comment}</p>
              <small>Posted by: ${post.email}</small>
            `;
            postsContainer.appendChild(postElement);
          });
        }, err => {
          console.error("Posts load error:", err);
          postsContainer.innerHTML = '<p>Error loading posts</p>';
        });
    };

    loadPosts();
  };

  // Event listeners
  document.getElementById('loginBtn')?.addEventListener('click', () => handleAuth('login'));
  document.getElementById('registerBtn')?.addEventListener('click', () => handleAuth('register'));

  // Enhanced auth state handling
  auth.onAuthStateChanged(user => {
    const path = window.location.pathname;
    
    if (user) {
      // Redirect to upload page if on index
      if (path.endsWith('index.html')) {
        window.location.href = "upload.html";
      }
      // Initialize upload page if needed
      initializeUploadPage();
    } else {
      // Redirect to login if on upload page
      if (path.includes('upload.html')) {
        window.location.href = "index.html";
      }
    }
  });
});