# 🌌 Animated Background 2

A mesmerizing animated starfield background with twinkling stars and dynamic sparkle effects. Perfect for creating an immersive, cosmic atmosphere on any web project.

## ✨ Features

- **Animated Starfield**: Smooth, twinkling stars that create a living galaxy effect
- **Dynamic Star Sparkles**: Random spikes on certain stars for a sparkling effect
- **Color Palette**: Cyan and white stars creating a cool, sci-fi aesthetic
- **Responsive Design**: Automatically adapts to any screen size
- **Performance Optimized**: Uses canvas for efficient rendering with `requestAnimationFrame`
- **Smooth Animations**: Stars pulse and twinkle with sine wave animation

## 🎬 Live Demo

Check out the live demo here: https://nirzarah.github.io/animated-background2/

> **Video Demo**: Visit the live website to see a 5-second preview of the animated starfield in action with twinkling stars and dynamic sparkle effects.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nirzarah/animated-background2.git
   cd animated-background2
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

## 📁 Project Structure

```
animated-background2/
├── index.html      # Main HTML file with canvas element
├── style.css       # Styling for full-screen canvas
├── script.js       # JavaScript animation logic
├── LICENSE         # MIT License
└── README.md       # This file
```

## 🎨 How It Works

### Canvas-Based Rendering
The project uses HTML5 Canvas for high-performance rendering of the starfield animation.

### Star Generation
- Stars are randomly distributed across the canvas
- Each star has properties like size, color, opacity, and animation phase
- Star density is optimized based on screen resolution

### Animation
- Stars twinkle using a sine wave function for smooth opacity changes
- Some stars randomly get "spike" effects that appear when twinkling
- The animation runs at 60 FPS using `requestAnimationFrame`

## 🎮 Customization

You can easily customize the appearance by editing `script.js`:

- **Star Colors**: Modify the `COLORS` array (line 5)
  ```javascript
  const COLORS = ['#00bcd4', '#ffffff']; // Add more colors here
  ```

- **Star Density**: Change the calculation on line 18
  ```javascript
  const COUNT = Math.floor((W * H) / 900); // Decrease number = more stars
  ```

- **Animation Speed**: Adjust the `speed` and `t` increment
  ```javascript
  speed: Math.random() * 0.09 + 0.05, // Change this range
  t += 2.2; // Increase for faster animation
  ```

- **Spike Probability**: Modify line 29
  ```javascript
  spike: Math.random() > 0.91, // Increase value = more spikes
  ```

## 🔧 Browser Compatibility

Works on all modern browsers that support:
- HTML5 Canvas
- ES6 JavaScript
- CSS3

## 💡 Use Cases

- Website backgrounds
- Loading screens
- Game backgrounds
- UI animations
- Sci-fi themed projects

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use this project for personal or commercial purposes.

## 🙌 Contributing

Suggestions and improvements are welcome! Feel free to fork and submit pull requests.

---

Made with ❤️ by [Nirzarah](https://github.com/Nirzarah)
