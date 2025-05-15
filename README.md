# 💪 IronMentor - Smart Fitness Companion

A smart fitness application powered by AI, offering **personalized workout and diet programs** through a **voice-enabled assistant**. Built with cutting-edge technologies like **Next.js**, **Tailwind CSS**, **Vapi**, **Clerk**, **Convex**, and **Gemini AI**.

---

## 🚀 Tech Stack

- **Next.js** – Full-stack React framework  
- **React.js** – Frontend UI components  
- **Tailwind CSS + Shadcn UI** – Utility-first styling & elegant UI  
- **Vapi** – Voice AI assistant integration  
- **Gemini AI** – LLM for intelligent fitness recommendations  
- **Clerk** – User authentication and authorization  
- **Convex** – Real-time database and backend  
- **Typescript** – Type-safe development  

---

## 🎯 Features

- 🎙️ **AI Voice Assistant**  
  Converse with an intelligent voice agent to discuss your fitness goals, preferences, and injuries.

- 🏋️ **Personalized Workout Plans**  
  Automatically generated workouts tailored to your level and needs.

- 🥗 **Custom Diet Programs**  
  Nutrition plans adapted to your dietary requirements and allergies.

- 🔐 **Authentication**  
  Login via GitHub, Google, or email/password using Clerk.

- 🧠 **LLM-Generated Fitness Programs**  
  Backed by Gemini AI for hyper-personalized training.

- 💾 **Program Management**  
  View, manage, and activate your fitness routines with ease.

- 🎬 **Real-time Updates**  
  Programs update instantly with Convex DB.

- 💻 **Modern UI/UX**  
  Fully responsive layouts with client/server components.

---

## 📁 Project Structure

- `app/` – Pages and layouts  
- `components/` – Reusable UI elements  
- `lib/` – Helper functions and API clients  
- `convex/` – Convex DB functions  
- `hooks/` – Custom React hooks  
- `middleware.ts` – Clerk middleware  
- `.env` – API keys and secrets  

---

## ⚙️ Environment Variables

Create a `.env.local` file and add the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Vapi Voice AI
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_VAPI_API_KEY=

# Convex Database
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
