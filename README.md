# **Roomify - Hotel Booking Platform**  

Roomify is a modern hotel booking platform built with **React (Next.js)** for the frontend and **NestJS** for the backend. It uses **PostgreSQL** as the database and is fully containerized using **Docker Compose**, making development, deployment, and maintenance seamless.  

---

## **✨ Key Features**  

- ✅ **Advanced Hotel Search** (by destination, dates, guests)  
- ✅ **Booking Management** (create, edit, delete)  
- ✅ **Secure Payments** (future integration with Stripe)  
- ✅ **Admin System** (manage hotels, rooms, and users)  
- ✅ **Modern UI** (designed with Tailwind CSS)  

---

## **🛠️ Technologies Used**  

| **Technology**      | **Role**                      |
|---------------------|-------------------------------|
| **React (Next.js)** | Frontend (UI/UX)             |
| **NestJS**          | Backend (API REST)           |
| **PostgreSQL**      | Relational Database          |
| **Docker Compose**  | Containerization             |
| **Node.js**         | Application Server           |
| **TypeScript**      | Main Language                |
| **Tailwind CSS**    | Design and Interface         |

---

## **📁 Project Structure**

/roomify
  ├── frontend            # React (Next.js) Application
  │   ├── public          # Static files (images)
  │   ├── src             # Source code (pages, components)
  │   ├── Dockerfile.dev  # Frontend Docker configuration
  │   └── package.json    # React dependencies
  ├── backend             # NestJS API REST
  │   ├── src             # API source code
  │   ├── Dockerfile.dev  # Backend Docker configuration
  │   └── package.json    # NestJS dependencies
  ├── docker-compose.dev.yml  # Docker Compose config (dev)
  ├── .env                    # Environment variables
  └── README.md               # Project documentation

🗺️ Roadmap & Next Steps
✅ Development Environment Setup
✅ Docker Containers Configuration (frontend, backend, DB)
🔄 Core Features Development (search, bookings)
🔄 Stripe Payment Integration
🔄 Admin Dashboard Setup
🔄 Production Deployment on IONOS with Docker Swarm/NGINX
🤝 Contributions

We welcome contributions! If you want to help, please create an issue or open a pull request on the GitHub repository.

📜 License
Roomify is a personal project and is not intended for commercial use without prior authorization.