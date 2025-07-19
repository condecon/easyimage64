# EasyImage64

A simple and efficient web application that converts images to base64 data URLs. Upload an image file or paste from clipboard to get the base64 encoded string instantly.

## ✨ Features

- 📁 **File Upload**: Select and convert image files from your device
- 📋 **Clipboard Support**: Paste images directly from your clipboard
- 🖼️ **Image Format Support**: Works with all common image formats (PNG, JPEG, GIF, etc.)
- ⚡ **Real-time Conversion**: Instant base64 encoding with live preview
- 🎨 **Clean Interface**: Simple and intuitive user interface
- 📱 **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/condecon/easyimage64.git
   cd easyimage64
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Usage

1. **Upload Method**: Click "Choose File" to select an image from your device
2. **Clipboard Method**: Copy an image to your clipboard and click "Read file from clipboard"
3. **Get Result**: The base64 encoded string will appear in the text area below

The generated base64 string can be used in:
- HTML `<img>` tags: `<img src="data:image/png;base64,YOUR_BASE64_STRING">`
- CSS backgrounds: `background-image: url(data:image/png;base64,YOUR_BASE64_STRING)`
- APIs and databases for image storage
- Email templates and web applications

## 🏗️ Built With

- **React 19** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

This application uses modern web APIs:
- **File API** for file reading
- **Clipboard API** for clipboard access
- Requires a modern browser with support for ES6+ features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/condecon/easyimage64/issues).

---
