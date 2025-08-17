# 📚 Real-Time Class Routine Web App

A responsive, real-time class routine tracker built with **React** and **Tailwind CSS**. It shows live countdowns to your current and upcoming classes, supports break time logic, and delivers a clean, motivational UI.

---

## ✨ Features

- ⏳ **Live countdown** to class start and end (hours, minutes, seconds)
- 📘 **Current class details**: subject, code, teacher, room
- 🔜 **Next class preview** (non-clickable)
- 🧘 **Break time support** with countdown and labels
- 🕒 **12-hour time format** with AM/PM
- 🗓️ **Only today's routine shown**
- ✅ **"Enough for today"** message when the day ends
- 🎬 **GIF** when classes are over
- 📅 **Next day class preview** with day name

---

## 🛠️ Tech Stack

- ⚛️ React
- 🎨 Tailwind CSS
- 🧠 Custom time logic (IST timezone)
- 📦 Modular component structure

---

## 🤝 Contributing

We welcome contributions to improve this project! Here's how you can help:

### 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork locally**
   ```bash
   git clone https://github.com/smalakargh/liveRoutine.git
   cd live-routine
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start development server**
   ```bash
   npm start
   ```

### 📝 Contribution Guidelines

- 🐛 **Bug Reports**: Create detailed bug reports with steps to reproduce
- 💡 **Feature Requests**: Suggest new features with clear use cases
- 🧩 **Pull Requests**: Submit well-documented pull requests
- 📚 **Documentation**: Help improve code comments and README
- 🧪 **Testing**: Add tests for new functionality

### 🔄 Pull Request Process

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Make your changes and commit (`git commit -m 'Add amazing feature'`)
3. Push to your branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request with clear description
5. Ensure all checks pass and code follows project style

### 📋 Code Standards

- Follow existing code style and formatting
- Add appropriate comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── BottomBar.jsx   # Bottom navigation bar
│   ├── CenterStatus.jsx # Main status display
│   ├── FullRoutineViewer.jsx # Complete routine view
│   ├── Report.jsx      # Reporting component
│   ├── Rou-Footer.jsx  # Footer component
│   ├── Rou-Navbar.jsx  # Navigation bar
│   └── TopBar.jsx      # Top status bar
├── constants/           # Application constants
│   └── days.js         # Day-specific configurations
├── data/               # Configuration and data files
│   ├── holiday.js      # Holiday and special day settings
│   └── schedule.js     # Class schedule configuration
├── hooks/              # Custom React hooks
│   └── useTicker.js    # Time ticker hook
├── utils/              # Utility functions
│   ├── findTodayAndNext.js # Schedule logic utilities
│   └── time.js         # Time-related utilities
└── assets/             # Static assets
    ├── Favicon-png.png # Application favicon
    └── react.svg       # React logo
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation
```bash
# Clone the repository
git clone https://github.com/smalakargh/liveRoutine.git
cd live-routine

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## ⚙️ Configuration

### Schedule Configuration
Edit `src/data/schedule.js` to customize your class schedule:

```javascript
{
  day: "Monday",
  classes: [
    {
      subject: "Mathematics",
      code: "MATH101",
      teacher: "Dr. Smith",
      room: "Room 201",
      startTime: "09:00",
      endTime: "10:30"
    }
  ]
}
```

### Holiday Settings
Configure holidays and special days in `src/data/holiday.js`:

```javascript
export const holidays = [
  {
    date: "2024-12-25",
    name: "Christmas Day",
    type: "holiday"
  }
];
```

---

## 🔧 Customization

### Adding New Components
1. Create your component in `src/components/`
2. Import and use it in `App.jsx`
3. Follow the existing component structure and naming conventions

### Modifying Time Logic
- Update time utilities in `src/utils/time.js`
- Modify schedule logic in `src/utils/findTodayAndNext.js`
- Customize the ticker hook in `src/hooks/useTicker.js`

### Styling Changes
- Modify `src/index.css` for global styles
- Use Tailwind CSS classes for component-specific styling
- Update color schemes and themes as needed

---

## 🌟 Key Features Explained

### Real-Time Countdown
- **Live Updates**: Countdown refreshes every second
- **Smart Formatting**: Shows hours, minutes, and seconds appropriately
- **Break Detection**: Automatically identifies break periods

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Cross-Platform**: Works on desktop, tablet, and mobile
- **Touch-Friendly**: Optimized for touch interactions

### Time Management
- **12-Hour Format**: User-friendly AM/PM display
- **IST Timezone**: Configured for Indian Standard Time
- **Automatic Updates**: Real-time synchronization

---

## 🧪 Development

### Code Quality
- **ESLint**: Configured for React best practices
- **TypeScript Support**: Ready for type safety
- **Component Structure**: Modular and reusable components

### Performance
- **Vite Build**: Fast development and build times
- **React 19**: Latest React features and optimizations
- **Tailwind CSS**: Utility-first CSS framework

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🚨 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process using port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Dependencies not installing**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Check for linting errors
npm run lint
# Clear build cache
npm run build -- --force
```

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) for the user interface
- Styled with [Tailwind CSS](https://tailwindcss.com/) for beautiful design
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Smooth scrolling with [Lenis](https://studio-freight.com/lenis/)

---

## 📞 Support & Community

- 🐛 **Bug Reports**: [Create an issue](https://github.com/smalakargh/liveRoutine/issues)
- 💡 **Feature Requests**: [Suggest new features](https://github.com/smalakargh/liveRoutine/issues)
- 📚 **Documentation**: Check this README and code comments
- 🤝 **Contributions**: See the Contributing section above

---

**Live Routine** - Making your daily schedule management simple and efficient. ⏰✨
