export const genrateEmailTemplate = (email) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You - Saqlain Mujtaba</title>
        <style>
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              135deg,
              #d0f4de,
              #fef9ef,
              #fbc4ab,
              #a3c4f3,
              #90e0ef
            );
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          }
    
          .email-container {
            max-width: 650px;
            width: 100%;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 16px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            padding: 40px;
            color: #1a1a1a;
            border: 1px solid rgba(255, 255, 255, 0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
    
          .header {
            text-align: center;
          }
    
          .header h1 {
            color: #1b015e;
            margin-bottom: 10px;
          }
    
          .about {
            background-color:#15f1ba9d;
            padding: 20px;
            border-radius: 12px;
            box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.3);
            width: 100%;
          }
    
          .projects {
            width: 100%;
          }
    
          .projects h2 {
            margin-bottom: 16px;
          }
    
          .project-card {
            background: rgba(255, 255, 255, 0.7);
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
    
         
          .project-card h3 {
            margin-top: 0;
          }
    
          .cta {
            margin-top: 16px;
            text-align: center;
          }
    
          .cta a {
            background-color: #ffffff;
            color: #1a1a1a;
            padding: 12px 24px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s;
          }
    
          .cta a:hover {
            background-color: #15f1ba9d;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Thank You ${email} for Reaching Out!</h1>
            <p>
              I truly appreciate your interest and will get back to you shortly.
            </p>
          </div>
    
          <div class="about">
            <h2>👨‍💻 About Me</h2>
            <p>
              I'm <strong>Saqlain Mujtaba</strong>, a passionate
              <strong>Full-Stack / MERN Stack Developer</strong> who builds
              high-quality web applications from frontend to backend.
            </p>
            <p>
              I work with MongoDB, Express.js, React.js, and Node.js — implementing
              clean UI, REST APIs, and secure JWT authentication.
            </p>
          </div>
    
          <div class="projects">
            <h2>📁 Featured Projects</h2>
    
            <div class="project-card">
              <h3>🛒 E-Commerce Platform</h3>
              <p>
                A complete MERN e-commerce app with user authentication, product
                management, cart, and admin dashboard.
              </p>
            </div>
    
            <div class="project-card">
              <h3>📅 Task Manager App</h3>
              <p>
                Productivity-focused app using MERN + JWT + Socket.IO for real-time
                updates and task collaboration.
              </p>
            </div>
    
            <div class="project-card">
              <h3>🧠 Dev Blog CMS</h3>
              <p>
                A custom-built content management system for developers to write and
                manage technical blogs.
              </p>
            </div>
          </div>
          
          <div class="cta">
            <p>Explore more on my website:</p>
            <a href="https://saqlainmujtaba.vercel.app" target="_blank"
              >Visit saqlainmujtaba.vercel.app</a
            >
          </div>
        </div>
      </body>
    </html>
    `;
};


export const generateAdminTemplate = (name, email, message) => `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: Arial; background: #fefefe; padding: 40px; }
      .container {
        background: #fff;
        padding: 30px;
        border-radius: 8px;
        max-width: 600px;
        margin: auto;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        border-left: 5px solid #1a1a40;
      }
      h2 { color: #1a1a40; }
      p { margin: 10px 0; }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  </body>
</html>
`;



export const generateClientTemplate = (name = "there") => `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: Arial; background: #f0f4f8; padding: 40px; }
      .container {
        background: white;
        padding: 30px;
        border-radius: 8px;
        max-width: 600px;
        margin: auto;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      h2 { color: #333; }
      .cta a {
        background: #1a1a40;
        color: white;
        padding: 10px 20px;
        border-radius: 6px;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Thank You, ${name}!</h2>
      <p>I appreciate your message. I'll get back to you as soon as possible.</p>
      <p>Meanwhile, feel free to visit my portfolio:</p>
      <div class="cta">
        <a href="https://saqlainmujtaba.vercel.app" target="_blank">Visit My Website</a>
      </div>
    </div>
  </body>
</html>
`;
