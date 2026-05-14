\# Real-Time Chat App



!\[Node.js](https://img.shields.io/badge/Node.js-Backend-brightgreen)

!\[React](https://img.shields.io/badge/React-Frontend-blue)

!\[Socket.io](https://img.shields.io/badge/Socket.io-Realtime-black)

!\[MongoDB](https://img.shields.io/badge/MongoDB-Database-green)

!\[Vercel](https://img.shields.io/badge/Vercel-Frontend%20Hosting-black)

!\[Railway](https://img.shields.io/badge/Railway-Backend%20Hosting-purple)



A production-inspired full-stack real-time chat application supporting room-based communication, private messaging, typing indicators, online presence tracking, read receipts, and scalable socket event architecture.



\---



\## Live Demo



Frontend: https://your-vercel-url.vercel.app  

Backend API: https://your-railway-url.up.railway.app



\---



\## Features



\### Authentication

\- User registration

\- JWT-based authentication

\- Persistent login sessions

\- Protected routes

\- Token-based API authorization



\### Real-Time Messaging

\- Multi-room public chat

\- One-to-one private messaging

\- Instant message delivery

\- Persistent message storage

\- Socket event-driven architecture



\### Presence \& Activity

\- Online/offline user tracking

\- Last seen timestamps

\- Typing indicators

\- Read receipts

\- Active socket registration



\### User Experience

\- Responsive dashboard layout

\- Room creation modal

\- User profile modal

\- Search users

\- Unread message badges

\- Notification bell



\### Engineering

\- Modular backend architecture

\- Service layer abstraction

\- REST API + WebSocket architecture

\- Docker support

\- Railway deployment config

\- Vercel deployment config

\- GitHub Actions CI pipeline



\---



\## Tech Stack



\### Frontend

\- React

\- Vite

\- React Router

\- Axios

\- Socket.io Client



\### Backend

\- Node.js

\- Express.js

\- Socket.io

\- MongoDB

\- Mongoose

\- JWT Authentication



\### DevOps / Deployment

\- Docker

\- Docker Compose

\- Railway

\- Vercel

\- GitHub Actions



\---



\## Architecture Overview



```text

Frontend (React + Vite)

&#x20;      |

&#x20;      | REST API + WebSocket

&#x20;      |

Backend (Express + Socket.io)

&#x20;      |

&#x20;      | MongoDB Persistence

&#x20;      |

Database (MongoDB)

```



\---



\## Project Structure



```bash

real-time-chat-app/

├── frontend/

├── backend/

├── docs/

├── .github/

├── docker-compose.yml

└── README.md

```



\---



\## API Endpoints



\### Authentication



POST /api/auth/register  

POST /api/auth/login  

GET /api/auth/me  



\### Chat



GET /api/chat/rooms  

POST /api/chat/rooms  

GET /api/chat/rooms/:roomId/messages  

GET /api/chat/private/:userId  



\### Users



GET /api/users  

GET /api/users/search?q=username  



\---



\## Socket Events



\### Client → Server

\- register\_user

\- join\_room

\- leave\_room

\- send\_message

\- user\_typing

\- stop\_typing

\- read\_receipt



\### Server → Client

\- receive\_message

\- user\_online

\- user\_offline

\- read\_receipt

\- user\_typing

\- stop\_typing



\---



\## Screenshots



\### Login

!\[Login](docs/screenshots/login.png)



\### Dashboard

!\[Dashboard](docs/screenshots/dashboard.png)



\### Private Chat

!\[Private Chat](docs/screenshots/private-chat.png)



\---



\## Local Setup



\### Clone Repository



```bash

git clone https://github.com/yourusername/real-time-chat-app.git

cd real-time-chat-app

```



\---



\### Backend Setup



```bash

cd backend

npm install

cp .env.example .env

npm run dev

```



\---



\### Frontend Setup



```bash

cd frontend

npm install

cp .env.example .env

npm run dev

```



\---



\## Docker Setup



```bash

docker-compose up --build

```



\---



\## Deployment



\### Frontend

Deploy on Vercel



\### Backend

Deploy on Railway



\---



\## Performance Notes



Benchmarked under simulated concurrent socket connections:



\- 50+ active users

\- low-latency message propagation

\- persistent message storage

\- scalable modular socket event handling



\---



\## Future Improvements



\- file sharing

\- emoji reactions

\- voice messaging

\- media uploads

\- message deletion

\- delivery status tracking

\- end-to-end encryption

\- group admin controls

\- dark/light theme toggle

\- mobile PWA support



\---



\## Engineering Highlights



\- clean layered backend architecture

\- modular socket event registration

\- reusable React hooks

\- centralized API abstraction

\- auth context management

\- scalable folder structure

\- deployment-ready configuration



\---



\## License



MIT



\---



\## Author



Kartikey Ram





