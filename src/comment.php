  <!-- ulasan -->
  <section class="ulasan" id="ulasan">
      <div class="center-text" data-aos="fade-down">
        <h2>Your <span>Comment</span></h2>
      </div>
      <div id="chat-container" data-aos="fade-down">
        <div id="chat-box"></div>
        <input type="text" id="username" placeholder="Your Name" />
        <input type="text" id="chat-input" placeholder="Write a comment..." />
        <button id="send-btn">Send</button>
      </div>
      <!-- Firebase JS SDK -->
      <script type="module">
        // Import Firebase SDK
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
        import {
          getDatabase,
          ref,
          set,
          get,
          child,
        } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

        // Konfigurasi Firebase
        const firebaseConfig = {
          apiKey: "AIzaSyDA_oxUbuL7EKDzyBNz7OFZZeKRYUF-tIk",
          authDomain: "portfolio-chat-64820.firebaseapp.com",
          databaseURL:
            "https://portfolio-chat-64820-default-rtdb.firebaseio.com",
          projectId: "portfolio-chat-64820",
          storageBucket: "portfolio-chat-64820.firebasestorage.app",
          messagingSenderId: "923063341782",
          appId: "1:923063341782:web:8aa2ad7b58c6ee38df2f77",
          measurementId: "G-KSW1TFFCZM",
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        // Fungsi untuk mengirim pesan
        function sendMessage() {
          const message = document.getElementById("chat-input").value.trim();
          const username = document.getElementById("username").value.trim(); // Mendapatkan nama pengirim
          if (message === "") {
            alert("Pesan tidak boleh kosong!");
            return;
          }
          if (username === "") {
            alert("Nama tidak boleh kosong!");
            return;
          }

          // Mendapatkan ID pesan unik dan menyimpan pesan ke Firebase
          const messageId = Date.now(); // Menggunakan timestamp sebagai ID unik
          const timestamp = new Date(messageId).toISOString(); // Menggunakan waktu UTC
          // Mengambil waktu pesan

          set(ref(db, "messages/" + messageId), {
            username: username, // Nama pengirim
            message: message,
            timestamp: timestamp, // Waktu pengiriman
          })
            .then(() => {
              document.getElementById("chat-input").value = ""; // Clear input
              loadMessages(); // Memuat pesan setelah pengiriman
            })
            .catch((error) => {
              console.error("Error saving message: ", error);
            });
        }

        // Fungsi untuk memuat pesan
        function loadMessages() {
          const messagesRef = ref(db, "messages/");
          get(messagesRef)
            .then((snapshot) => {
              if (snapshot.exists()) {
                const messages = snapshot.val();
                const chatBox = document.getElementById("chat-box");
                chatBox.innerHTML = Object.keys(messages)
                  .map((key) => {
                    const messageData = messages[key];
                    const messageTime = new Date(messageData.timestamp);

                    // Mengonversi waktu ke zona waktu lokal dengan format HH:MM
                    const options = { hour: "2-digit", minute: "2-digit" };
                    const timestamp = messageTime.toLocaleString(
                      "id-ID",
                      options
                    );

                    // Menampilkan waktu dalam format jam:menit

                    return `
            <div class="message-card">
              <div class="message-card-header">
                <strong>${messageData.username}</strong>
                <span class="timestamp">${timestamp}</span>
              </div>
              <div class="message-card-body">
                <p>${messageData.message}</p>
              </div>
            </div>
          `;
                  })
                  .join("");
              } else {
                console.log("No messages available");
              }
            })
            .catch((error) => {
              console.error("Error fetching messages: ", error);
            });
        }

        // Fungsi untuk menghitung waktu yang lalu
        function timeSince(date) {
          const now = new Date();
          const seconds = Math.floor((now - date) / 1000);
          const minutes = Math.floor(seconds / 60);
          const hours = Math.floor(minutes / 60);
          const days = Math.floor(hours / 24);

          if (days > 0) return `${days} hari yang lalu`;
          if (hours > 0) return `${hours} jam yang lalu`;
          if (minutes > 0) return `${minutes} menit yang lalu`;
          return `${seconds} detik yang lalu`;
        }

        // Menambahkan event listener untuk tombol kirim
        document
          .getElementById("send-btn")
          .addEventListener("click", sendMessage);

        loadMessages(); // Memuat pesan saat halaman dibuka
      </script>
    </section>
    <!-- ulasan -->