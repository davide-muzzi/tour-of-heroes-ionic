# Tour of Heroes – Ionic Angular App

This project is a small **Ionic + Angular mobile application** inspired by Angular’s classic **Tour of Heroes** tutorial.

It demonstrates how existing Angular application logic can be reused while building a **mobile-friendly UI with Ionic**, using modern **standalone components**, routing, and Ionic UI patterns.

## 🚀 Features

### Heroes

- Display a list of heroes
- Red Ionic toolbar with action button
- Add new heroes using an **Ionic Alert** form
- Swipe gestures on list items showing **Edit** and **Delete** options (UI only)
- Data handled via an Angular service (in-memory)

### Settings

- Separate settings page generated via Ionic CLI
- `Person` model with the following attributes:
  - Firma
  - Name
  - Email
- Simple form using Ionic inputs and `ngModel`

## 🧱 Tech Stack

- **Ionic Framework**
- **Angular (Standalone Components)**
- **TypeScript**
- **Ionicons**
- **Angular Router**
- **Ionic CLI**

## 📁 Project Structure (simplified)

```
src/app/
├── heroes/          # Heroes page (list + add hero)
├── settings/        # Settings page
├── models/          # Hero & Person interfaces
├── services/        # Hero service (logic)
├── app.routes.ts    # Application routing
```

## 🔗 Related Project

Related Angular version: https://github.com/davide-muzzi/tour-of-heroes

## 🛠️ Development

Install dependencies:

```bash
npm install
npx cap sync
```

Run the app locally:

```bash
ionic serve
```

## 🎓 Notes

This project was created as a **school exercise** to practice:

- Ionic CLI generators
- Standalone Angular components
- Separation of logic (services) and UI (pages)
- Mobile UI patterns such as swipe gestures and alerts

No backend or persistent storage is used.

## 📜 License

This project is for educational purposes.
