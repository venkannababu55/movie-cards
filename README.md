# 🎬 Netflix Movie Cards

A Netflix-inspired React web app that showcases trending TV series with a cinematic intro animation, dark-themed UI, and interactive movie cards.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🔴 **Netflix "N" Intro Animation** — Cinematic SVG logo zoom with smooth fade transition on page load
- 🎨 **Dark Premium UI** — Glassmorphism cards with hover effects and micro-animations
- 📺 **Trending Series Grid** — Responsive grid layout displaying popular Netflix shows
- ⭐ **Ratings & Details** — Each card shows rating, description, cast, and genre
- 🔗 **Watch Now Links** — Direct links to Netflix for each series
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile screens
- 🔤 **Custom Typography** — Google Fonts (Bebas Neue & Inter) for a premium feel
- 🖼️ **Background Watermark** — Large "NETFLIX" text watermark for added visual depth

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Component Library |
| **Vite 8** | Build Tool & Dev Server |
| **Vanilla CSS** | Styling with animations & gradients |
| **SVG** | Netflix "N" logo with linear gradients |
| **JSON** | Series data storage |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/venkannababu55/movie-cards.git
   cd movie-cards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
movie-cards/
├── public/
│   └── favicon.svg
├── src/
│   ├── api/
│   │   └── seriesdata.json      # TV series data (name, rating, cast, genre)
│   ├── assets/
│   │   ├── Screenshot 2026-07-31 104005.png  # Money Heist poster
│   │   ├── stangerthings.png    # Stranger Things poster
│   │   ├── thewitcher.png       # The Witcher poster
│   │   └── squidgame.png        # Squid Game poster
│   ├── App.jsx                  # Main app component with intro & cards
│   ├── App.css                  # All styles, animations & layout
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global/reset styles
├── index.html
├── package.json
└── vite.config.js
```

---

## 📺 Featured Series

| Series | Rating | Genre |
|--------|--------|-------|
| Money Heist | ⭐ 8.3/10 | Action, Crime, Drama |
| Stranger Things | ⭐ 8.7/10 | Drama, Fantasy, Horror |
| The Witcher | ⭐ 8.2/10 | Action, Adventure, Drama |
| Squid Game | ⭐ 8.1/10 | Action, Drama, Mystery |

---

## 🎬 How It Works

1. **Intro Animation** — On page load, a Netflix-style "N" logo zooms toward the camera over 1.2 seconds with SVG gradients for a 3D ribbon effect
2. **Fade Transition** — The overlay fades out in 0.5 seconds, revealing the main content
3. **Content Reveal** — The series grid fades in with a subtle upward slide animation
4. **Interactive Cards** — Each card lifts on hover with a red glow shadow effect

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint for code quality |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


---

## 👤 Author

**Venkanna Babu**
- GitHub: [@venkannababu55](https://github.com/venkannababu55)

---

> Built with ❤️ using React + Vite
