<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js" defer></script>
    <title>Portofolio - Riyanto Febrian</title>
</head>
<body>

    <?php
    include_once 'src/header.php';
    include_once 'src/hero.php';
    include_once 'src/about.php';
    include_once 'src/skill.php';
    include_once 'src/sertifikat.php';
    include_once 'src/portofolio.php';
    include_once 'src/contact.php';
    include_once 'src/comment.php';
    include_once 'src/footer.php';
    ?>

    <!-- Firebase JS SDK -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
        import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

        const firebaseConfig = {
          apiKey: "AIzaSyDA_oxUbuL7EKDzyBNz7OFZZeKRYUF-tIk",
          authDomain: "portfolio-chat-64820.firebaseapp.com",
          databaseURL: "https://portfolio-chat-64820-default-rtdb.firebaseio.com",
          projectId: "portfolio-chat-64820",
          storageBucket: "portfolio-chat-64820.firebasestorage.app",
          messagingSenderId: "923063341782",
          appId: "1:923063341782:web:8aa2ad7b58c6ee38df2f77",
          measurementId: "G-KSW1TFFCZM",
        };

        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        function sendMessage() {
          const message = document.getElementById("chat-input").value.trim();
          const username = document.getElementById("username").value.trim();
          if (message === "" || username === "") {
            alert("Nama dan pesan tidak boleh kosong!");
            return;
          }

          const messageId = Date.now();
          const timestamp = new Date(messageId).toISOString();

          set(ref(db, "messages/" + messageId), {
            username: username,
            message: message,
            timestamp: timestamp,
          })
            .then(() => {
              document.getElementById("chat-input").value = "";
              loadMessages();
            })
            .catch((error) => console.error("Error saving message: ", error));
        }

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
                    const timestamp = new Date(messageData.timestamp).toLocaleString("id-ID", { hour: "2-digit", minute: "2-digit" });

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
              }
            })
            .catch((error) => console.error("Error fetching messages: ", error));
        }

        document.getElementById("send-btn").addEventListener("click", sendMessage);
        loadMessages();
    </script>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>AOS.init({ offset: 300, duration: 1400 });</script>
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script>
      var typed = new Typed(".input", {
        strings: ["My Name Is", "Riyanto Febrian"],
        typeSpeed: 70,
        backSpeed: 65,
        loop: true,
        showCursor: false,
      });
    </script>
</body>
</html>
