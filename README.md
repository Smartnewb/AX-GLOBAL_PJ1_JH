# Mezmo Change

> "Change your scribbles into smart notes in 5 seconds."

**Mezmo Change** is an AI-powered handwriting analysis tool that transforms messy notes into structured, actionable digital documents in seconds.

## ✨ Features

- **Handwriting Correction**: Context-aware analysis to restore illegible handwriting.
- **Smart Structure**: Automatically organizes content into **Summary**, **Action Items**, and **Key Notes**.
- **Super Fast**: detailed analysis in ~3-5 seconds.
- **Multilingual**: Supports 15+ languages including Korean, English, Japanese, etc.
- **Privacy First**: "Zero Data Storage" policy. Your notes are processed and immediately discarded.

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
- **Design**: Glassmorphism UI, culturally neutral mesh gradients
- **AI**: Google Gemini 2.0 Flash (via Google Generative AI SDK)
- **Deployment**: Vercel

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mezmo-change.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔒 Security

- **No Data Storage**: We do not store any images or text processed by the service.
- **SSL Encryption**: All data is transmitted securely via SSL.

## 📄 License

This project is licensed under the MIT License.
