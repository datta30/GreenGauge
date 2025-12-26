# 🌍 GreenGauge

**Smart Sustainability Tracking Platform**

GreenGauge is a comprehensive web application designed to help individuals and communities track, monitor, and reduce their environmental footprint. The platform provides tools for monitoring resource consumption, tracking tree planting initiatives, logging eco-friendly actions, and accessing sustainability knowledge.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## ✨ Features

### 📊 Dashboard
- Real-time visualization of environmental metrics
- CO₂ emissions tracking with bar charts
- Water usage monitoring
- Waste distribution pie charts
- Eco score display and tracking

### ⚡ Resources Monitoring
- **Electricity Tracking**: Monitor electricity consumption and calculate CO₂ emissions
- **Water Tracking**: Track water usage across different categories (drinking, bathing, cleaning, etc.)
- **Waste Management**: Categorize and track waste (recyclable, organic, non-recyclable)
- **History**: View historical data for all resource consumption

### 🌳 Tree Tracking
- **Tree Tracker**: Log newly planted trees with details (name, location, category)
- **Tree Dashboard**: View statistics on planted trees and their environmental impact
- **Tree Map**: Interactive map visualization using Leaflet to show tree locations
- **Impact Calculation**: Automatic calculation of CO₂ absorption, oxygen production, and green cover per tree

### ♻️ Eco Actions
- **Action Logging**: Record eco-friendly activities (recycling, composting, cycling, etc.)
- **Eco Score**: Gamified point system to encourage sustainable behaviors
- **Streak Tracking**: Monitor consecutive days of eco-friendly actions
- **Leaderboard**: Community engagement through competitive sustainability

### 📚 Knowledge Hub
- Educational resources about sustainability
- Tips and best practices for reducing environmental impact
- Awareness content about climate change and conservation

### 🌱 Plant Care
- Plant care tips and reminders
- Guidance for maintaining healthy trees and gardens

## 🛠️ Technologies Used

### Frontend
- **React** (v19.2.3) - UI library for building interactive user interfaces
- **Chart.js** (v4.5.1) - Data visualization library for creating charts
- **react-chartjs-2** (v5.3.1) - React wrapper for Chart.js
- **Leaflet** (v1.9.4) - Open-source library for interactive maps
- **react-leaflet** (v5.0.0) - React components for Leaflet maps
- **React Scripts** (v5.0.1) - Configuration and scripts for Create React App
- **@testing-library** - Testing utilities for React components

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** (v5.2.1) - Web application framework for Node.js
- **bcryptjs** (v3.0.3) - Password hashing library
- **jsonwebtoken** (v9.0.3) - JWT authentication implementation
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing middleware

### Development Tools
- **Create React App** - Frontend build tooling
- **npm** - Package management
- **Git** - Version control

## 📁 Project Structure

```
GreenGauge/
├── backend/
│   ├── models/
│   │   └── User.js              # User model schema
│   ├── routes/
│   │   └── auth.js              # Authentication routes
│   ├── server.js                 # Express server and API endpoints
│   └── package.json              # Backend dependencies
│
├── frontend/
│   ├── public/                   # Static files
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.js      # Main dashboard component
│   │   │   ├── Electricity.js    # Electricity tracking
│   │   │   ├── Water.js          # Water tracking
│   │   │   ├── Waste.js          # Waste tracking
│   │   │   ├── History.js        # Historical data view
│   │   │   ├── KnowledgeHub.js   # Educational content
│   │   │   ├── trees/
│   │   │   │   ├── TreeTracker.js    # Tree logging
│   │   │   │   ├── TreeDashboard.js  # Tree statistics
│   │   │   │   └── TreeMap.js        # Interactive tree map
│   │   │   ├── eco/
│   │   │   │   ├── EcoActionLog.js   # Eco action tracking
│   │   │   │   ├── EcoStreak.js      # Streak monitoring
│   │   │   │   └── Leaderboard.js    # Community leaderboard
│   │   │   └── plantcare/
│   │   │       └── PlantCare.js      # Plant care tips
│   │   ├── App.js                # Main application component
│   │   ├── App.css               # Application styles
│   │   └── index.js              # Application entry point
│   └── package.json              # Frontend dependencies
│
└── README.md                     # This file
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
node server.js
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend application will run on `http://localhost:3000`

## 💻 Usage

1. **Start the Backend**: Ensure the backend server is running on port 5000
2. **Start the Frontend**: Launch the React application on port 3000
3. **Access the Application**: Open your browser and navigate to `http://localhost:3000`
4. **Navigate Tabs**:
   - Click on **Dashboard** to view your environmental metrics
   - Use **Resources** to track electricity, water, and waste
   - Visit **Trees** to log planted trees and view their locations
   - Access **Eco Actions** to log sustainable activities
   - Explore **Knowledge** for sustainability tips and information

## 🔌 API Endpoints

### Backend API (Port 5000)

#### Health Check
- `GET /` - Server health check

#### Electricity
- `POST /api/electricity` - Save electricity consumption data
  - Body: `{ consumption, date }`

#### Water
- `POST /api/water` - Save water usage data
  - Body: `{ usage, category, date }`

#### Waste
- `POST /api/waste` - Save waste data
  - Body: `{ amount, category, date }`

#### History
- `GET /api/history` - Retrieve all historical data
  - Returns: `{ electricity: [], water: [], waste: [] }`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the ISC License.

## 🌟 Future Enhancements

- Database integration (MongoDB/PostgreSQL) for persistent data storage
- User authentication and personal dashboards
- Mobile application development
- Social sharing features
- Advanced analytics and reporting
- Community challenges and events
- Integration with IoT devices for automatic tracking
- Carbon footprint calculator
- Sustainability goal setting and tracking

---

**Made with 💚 for a sustainable future**
