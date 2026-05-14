\# API Reference



\## Authentication



POST /api/auth/register

Create a new user account



POST /api/auth/login

Authenticate user



GET /api/auth/me

Get current authenticated user



\---



\## Chat



GET /api/chat/rooms

Fetch all chat rooms



POST /api/chat/rooms

Create room



GET /api/chat/rooms/:roomId/messages

Fetch room messages



GET /api/chat/private/:userId

Fetch direct messages



\---



\## Users



GET /api/users

Fetch all users



GET /api/users/search?q=

Search users

