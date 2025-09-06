Based on the available information, here's a comprehensive documentation for the Giga Infosoft frontend repository:

---

## 📁 Repository Overview

**Repository Name:** `giga-frontend`
**Owner:** `icarus-20s`
**URL:** [https://github.com/icarus-20s/giga-frontend](https://github.com/icarus-20s/giga-frontend)

This repository hosts the frontend codebase for Giga Infosoft Pvt. Ltd., a leading software company offering high-quality, cost-efficient software applications and business technology solutions. ([gigainfosoft.com.np][1])

---

## 🛠️ Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **React Icons:** A library for including customizable icons in React applications.
* **React Router:** A standard library for routing in React applications.
* **Axios:** A promise-based HTTP client for the browser and Node.js.

---

## 📂 Project Structure

The repository follows a modular structure to ensure scalability and maintainability:

```
giga-frontend/
├── public/
│   ├── assets/              # Static assets like images and fonts
│   └── index.html           # Main HTML file
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page components corresponding to routes
│   ├── services/            # API service functions
│   ├── App.js               # Main application component
│   └── index.js             # Entry point for React
├── .gitignore               # Specifies files to be ignored by Git
├── package.json             # Project metadata and dependencies
└── tailwind.config.js       # Tailwind CSS configuration
```

---

## 🚀 Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/icarus-20s/giga-frontend.git
   cd giga-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## 🧩 Components

The `components` directory contains reusable UI components such as:

* **Navbar:** Navigation bar for the application.
* **Footer:** Footer section with company information and links.
* **Button:** Customizable button component.
* **Card:** Card component for displaying content in a structured manner.

---

## 🗺️ Pages

The `pages` directory includes components corresponding to different routes:

* **Home:** Landing page of the application.
* **About:** Page providing information about the company.
* **Services:** Page detailing the services offered.
* **Contact:** Page with contact information and form.

---

## 🔗 Services

The `services` directory contains functions for interacting with APIs:

* **api.js:** Contains functions for making HTTP requests using Axios.

---

## 🧪 Testing

The project uses Jest for unit testing and React Testing Library for component testing.

To run tests:

```bash
npm test
```

---

## 📦 Deployment

The application is deployed using Vercel, ensuring continuous deployment from the main branch.

---

## 📝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**

2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes and commit:**

   ```bash
   git commit -am 'Add new feature'
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/your-feature
   ```

5. **Create a new Pull Request.**

---

## 📞 Contact

For more information or inquiries, visit [Giga Infosoft Pvt. Ltd.](https://gigainfosoft.com.np/) or contact via:

* **Email:** [info@gigainfosoft.com.np](mailto:info@gigainfosoft.com.np)
* **Phone:** +977 9840073584

---

For a visual overview, you can refer to the video gallery showcasing Giga Infosoft's projects and services: ([gigainfosoft.com.np][2])

---

[1]: https://gigainfosoft.com.np/?utm_source=chatgpt.com "Home | Giga Infosoft Pvt. Ltd."
[2]: https://gigainfosoft.com.np/video-gallery?utm_source=chatgpt.com "Video Gallery | Giga Infosoft Pvt. Ltd."
