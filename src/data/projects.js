import diwaliImage from "../assets/projects/diwali-sales.png";
import blinkitImage from "../assets/projects/blinkit-sales.png";
import diseasePredictionImage from "../assets/projects/disease-prediction.png";
import weatherImage from "../assets/projects/weather-data-analysis.png";

const projects = [
  {
    id: "diwali",
    title: "Diwali Sales Analysis",
    category: "Data Analytics & EDA",
    image: diwaliImage,

    description:
      "Performed end-to-end exploratory data analysis on Diwali sales data to understand customer purchasing behavior and identify actionable business insights. Analyzed customer demographics, regional sales, occupation, product categories, marital status, and city-wise purchasing patterns to support targeted marketing, inventory planning, and revenue growth.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Excel",
      "EDA",
    ],

    github:
      "https://github.com/SWARNAVO-DAW/Diwali-Sales-Analysis",

    demo: "#",
  },

  {
    id: "blinkit",
    title: "Blinkit Sales Analysis",
    category: "Business Intelligence & Analytics",
    image: blinkitImage,

    description:
      "A comprehensive retail sales and customer satisfaction analysis project using SQL and Power BI. The project analyzes sales performance, product categories, outlet characteristics, customer ratings, and geographic segments to uncover actionable insights for revenue growth and operational planning.",

    technologies: [
      "MySQL",
      "SQL",
      "Power BI",
      "Excel",
      "Data Analysis",
      "Data Visualization",
    ],

    github:
      "https://github.com/SWARNAVO-DAW/Blinkit_Sales_Analysis",

    demo: "#",
  },

  {
  id: "multi-disease-prediction",

  title: "Multi-Disease Prediction System",

  category: "Machine Learning",

  image: diseasePredictionImage,

  description:
    "Developed an end-to-end machine learning application that integrates four disease prediction models into a single interactive Streamlit platform. The system performs data preprocessing, model training, evaluation, model serialization, and real-time prediction for Heart Disease, Thyroid Disease, Lung Cancer, and Parkinson's Disease.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Machine Learning",
    "Scikit-learn",
    "Logistic Regression",
    "Random Forest",
    "Support Vector Machine",
    "Classification metrics",
    "Data Processing",
    "Jupyter Notebook",
    "Pycharm",
    "Streamlit",
    "Pickle"
  ],

  github:
    "https://github.com/SWARNAVO-DAW/Prediction-of-Disease-Outbreaks",

  demo:
    "https://disease-prediction-by-swarnavo.streamlit.app"
},

  {
    id: "weather",
  title: "Weather Data Analysis",
  category: "Data Analytics & EDA",
  image: weatherImage,

  description:
    "Performed exploratory data analysis on weather data to identify temperature trends, correlations, weather-condition patterns, humidity relationships, wind-speed distribution, and visibility trends.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook"
  ],

  highlights: [
    "Analyzed temperature, humidity, pressure, wind speed and visibility.",
    "Created correlation heatmaps to identify relationships between weather variables.",
    "Analyzed temperature trends over time.",
    "Explored frequency of different weather conditions.",
    "Performed statistical and condition-based analysis using Pandas."
  ],

  github:
    "https://github.com/SWARNAVO-DAW/Weather-Data-Analysis"
}
];

export default projects; 