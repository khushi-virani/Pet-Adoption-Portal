# 🐾 Pet Adoption Portal

A full-stack web application that connects pets with loving homes. Built with **React JS** (frontend) and **PHP** (backend), powered by a **MySQL** database.

---

## 📌 Features

### 👤 User
- Register & Login
- Browse pets by category (Dogs, Cats, Bunnies)
- View pet details (breed, age, description)
- Submit adoption requests
- View adoption request status (Accepted / Rejected)

### 🛠️ Admin
- Secure admin login
- Manage all pets (Add / Edit / Delete)
- View all adoption requests
- Accept or Reject adoption requests
- Manage pet categories

---

## 🛠️ Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Frontend   | React JS          |
| Backend    | PHP               |
| Database   | MySQL (MariaDB)   |
| Server     | XAMPP (Apache)    |

---

## 🗄️ Database Structure

Database name: `petdb`

| Table                  | Description                          |
|------------------------|--------------------------------------|
| `tbllogin`             | Stores admin and user credentials    |
| `tblcategory`          | Pet categories (Dog, Cat, Bunny)     |
| `tblpets`              | Pet listings with details & images   |
| `tbladoption_requests` | Adoption requests with status        |

---

## ⚙️ Setup & Installation

### Prerequisites
- [XAMPP](https://www.apachefriends.org/) (Apache + MySQL)
- [Node.js](https://nodejs.org/) & npm

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/khushi-virani/Pet-Adoption-Portal.git
cd Pet-Adoption-Portal
```

**2. Set up the database**
- Open **phpMyAdmin** → `http://localhost/phpmyadmin`
- Create a new database named `petdb`
- Click **Import** → select the file `petdb.sql` → click **Go**

**3. Configure PHP backend**
- Copy the project folder to `C:/xampp/htdocs/`
- Update your DB connection in the PHP config file:
```php
$host = "localhost";
$user = "root";
$password = "";
$database = "petdb";
```

**4. Start the React frontend**
```bash
cd frontend   # or wherever your React code is
npm install
npm start
```

**5. Start XAMPP**
- Open XAMPP Control Panel
- Start **Apache** and **MySQL**

**6. Open the app**
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost/Pet-Adoption-Portal/`

---

## 🔐 Default Login Credentials

### Admin
| Username | Password |
|----------|----------|
| admin    | admin123 |

### Sample Users
| Username | Password  |
|----------|-----------|
| axita    | axita123  |
| hetvi    | hetvi123  |

> ⚠️ Change passwords after setup for security.

---

## 📁 Project Structure

```
Pet-Adoption-Portal/
│
├── frontend/          # React JS frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
├── backend/           # PHP API files
│   ├── config.php
│   ├── login.php
│   ├── pets.php
│   └── adoption.php
│
├── image/             # Pet images
├── petdb.sql          # Database dump
└── README.md
```

---

## 🙋‍♀️ Author

**Khushi Virani**  
📧 viranikhushi53@gmail.com  
🔗 www.linkedin.com/in/khushi-virani

---

## 📄 License

This project is for educational purposes.
