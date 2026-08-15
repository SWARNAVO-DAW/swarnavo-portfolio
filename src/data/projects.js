import diwaliImage from "../assets/projects/diwali-sales.png";
import blinkitImage from "../assets/projects/blinkit-sales.png";
import heartDiseaseImage from "../assets/projects/heart-disease.png";
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
    id: "heart-disease",
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    image: heartDiseaseImage,

    description:
  "Developed an end-to-end machine learning application for heart disease prediction using clinical patient data. The project includes data preprocessing, exploratory data analysis, feature scaling, Logistic Regression model training, performance evaluation, and deployment through an interactive Streamlit web application.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Logistic Regression",
    "Streamlit"
  ],

  github:
    "https://github.com/SWARNAVO-DAW/Heart_Disease_Prediction",

  live:
    "http://localhost:8501",

  highlights: [
    "Used the UCI Heart Disease dataset containing 303 records and 13 clinical features.",
    "Performed data preprocessing, exploratory data analysis, and feature preparation.",
    "Implemented Logistic Regression for binary heart disease classification.",
    "Evaluated the model using accuracy, confusion matrix, precision, recall, and F1-score.",
    "Developed an interactive Streamlit web application for real-time prediction.",
    "Users can enter clinical parameters and receive a heart disease prediction.",
    "Ongoing extension: developing additional disease prediction models for Parkinson's Disease,Hypothyroidism, and Lung Cancer."
  ],

  status: "Completed + Ongoing Extensions"
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