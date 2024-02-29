

1. **User Endpoints:**
   - `POST /users/register`: Register a new user
   - `POST /users/login`: Login an existing user
   - `GET /users/profile`: Get user profile (requires authentication)

   ###The GET /users/profile endpoint retrieves the profile information of the currently authenticated user.
   
   - `PUT /users/profile`: Update user profile (requires authentication)
   - `DELETE /users/profile`: Delete user profile (requires authentication)

2. **Blog Endpoints:**
   - `GET /blogs`: Get all blogs
   - `GET /blogs/:id`: Get a specific blog by ID
   - `POST /blogs`: Create a new blog (requires authentication)
   - `PUT /blogs/:id`: Update a blog (requires authentication)
   - `DELETE /blogs/:id`: Delete a blog (requires authentication)

3. **Comment Endpoints:**
   - `GET /blogs/:blogId/comments`: Get all comments for a specific blog
   - `POST /blogs/:blogId/comments`: Add a new comment to a blog (requires authentication)
   - `PUT /blogs/:blogId/comments/:commentId`: Update a comment (requires authentication)
   - `DELETE /blogs/:blogId/comments/:commentId`: Delete a comment (requires authentication)

4. **Like Endpoints:**
   - `POST /blogs/:blogId/like`: Like a blog (requires authentication)
   - `DELETE /blogs/:blogId/like`: Unlike a blog (requires authentication)

5. **View Endpoints:**
   - `POST /blogs/:blogId/view`: Record a view for a blog (requires authentication)

