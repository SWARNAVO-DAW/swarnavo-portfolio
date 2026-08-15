import udemyCertificate from "../assets/certificates/udemy-python-data-science-ml.jpg";
import dataCampCertificate from "../assets/certificates/datacamp-sql.jpg";
import microsoftCertificate from "../assets/certificates/microsoft-linkedin-data-analysis.jpg";

const certificates = [
  {
    id: 1,
    title: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
    date: "June 12, 2025",
    duration: "25 Hours",
    category: "Python & Machine Learning",
    image: udemyCertificate,
    skills: [
      "Python",
      "Data Science",
      "Machine Learning"
    ],
  },

  {
    id: 2,
    title: "Data Manipulation in SQL",
    issuer: "DataCamp",
    date: "August 20, 2025",
    duration: "4 Hours",
    category: "SQL & Data Analytics",
    image: dataCampCertificate,
    skills: [
      "SQL",
      "Data Manipulation",
      "Data Analysis"
    ],
  },

  {
    id: 3,
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    date: "January 11, 2025",
    duration: "9 Hours 13 Minutes",
    category: "Data Analytics",
    image: microsoftCertificate,
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Data Analytics"
    ],
  },
];

export default certificates;