import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaMicrosoft,
  FaBrain,
  FaCode,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

const skills = [
  {
    icon: FaPython,
    name: "Python",
    level: 90,
    description: "Automation, scripting, data analysis, and backend development.",
  },
  {
    icon: FaDatabase,
    name: "SQL",
    level: 88,
    description: "Database design, joins, queries, optimization, and reporting.",
  },
  {
    icon: FaMicrosoft,
    name: "Advanced Excel",
    level: 92,
    description: "Pivot Tables, Power Query, Lookup functions, dashboards.",
  },
  {
    icon: FaChartBar,
    name: "Power BI",
    level: 85,
    description: "Interactive dashboards, KPIs, and business visualization.",
  },
  {
    icon: FaBrain,
    name: "Machine Learning",
    level: 80,
    description: "Model building using Scikit-learn and predictive analytics.",
  },
  {
    icon: SiPandas,
    name: "Pandas",
    level: 90,
    description: "Cleaning, manipulation, transformation, and EDA.",
  },
  {
    icon: SiNumpy,
    name: "NumPy",
    level: 85,
    description: "Numerical computing and array operations.",
  },
  {
    icon: SiScikitlearn,
    name: "EDA",
    level: 88,
    description: "Exploratory Data Analysis with visualization and insights.",
  },
  {
    icon: FaCode,
    name: "C Programming",
    level: 80,
    description: "Problem solving and programming fundamentals.",
  },
  {
    icon: FaGitAlt,
    name: "Git & GitHub",
    level: 82,
    description: "Version control, repositories, branching, and collaboration.",
  },
];

export default skills;