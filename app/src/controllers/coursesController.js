const express = require("express");
const Course = require("../models/courseModal");

const router = express();
// Sample course data

// const courseData = {
//   title: "Introduction to Web Development",
//   courseDetails: {
//     mainTitle: "Front-End Development",

//     whoThisCourseIsFor: [
//       {
//         module: "Who this course is for?",
//         topics: [
//           "Manual testers, non-programming aware testers interested in learning Automation.",
//           "Any Software engineer who are interested in Mobile Technologies",
//           "Freshers/Graduates/ Software Testers",
//         ],
//       },
//     ],

//     whyTakeThisCourse: [
//       {
//         module: "Why take this course?",
//         topics: [
//           "You'll learn essential skills like HTML, CSS, and JavaScript, which are fundamental for building user interfaces",
//           "It allows you to express your creativity by designing visually appealing and interactive websites.",
//           "This course offer practical projects that can build your portfolio, showcasing your skills to potential employers.",
//         ],
//       },
//     ],

//     whatYouWillLearn: [
//       {
//         module: "Introduction to Web Development",
//         topics: [
//           "Overview of web technologies",
//           "Client-server architecture",
//           "How the web works (HTTP/HTTPS)",
//         ],
//       },
//       {
//         module: "HTML Basics",
//         topics: [
//           `Meaningful Markup: Use the right HTML elements for the job to make your website easier to understand for both humans and machines.`,
//           "Forms and Data: Create forms for users to enter information and tables to organize data neatly.",
//         ],
//       },

//       {
//         module:
//           "After learning the basics you will be able to create a webpage using HTML.",
//       },
//       {
//         module: "CSS:",
//         topics: [
//           `CSS basics`,
//           `Styling Text and Layout`,
//           `Positioning and Layout`,
//           `Responsive Design Advanced CSS`,
//         ],
//       },

//       {
//         module: "Javascript:",
//         topics: [
//           `JavaScript Basics`,
//           `DOM Manipulation`,
//           `Event Handling`,
//           `Asynchronous JavaScript`,
//         ],
//       },

//       {
//         module: `Frontend Frameworks:`,
//       },

//       {
//         module: "Introduction to Frameworks:",
//         topics: [
//           `Benefits of using frameworks`,
//           `Overview of popular frameworks (React, Vue, Angular)`,
//         ],
//       },

//       {
//         module: "React",
//         topics: [
//           `Component-based architecture`,
//           `Props and state management`,
//           `Lifecycle methods and hooks`,
//           `Managing side effects with useEffect`,
//           `Routing (React Router)`,
//         ],
//       },

//       {
//         module: "State Management",
//         topics: [
//           `Introduction to state management libraries (Redux, Vuex)`,
//           `Context API (for React)`,
//         ],
//       },

//       {
//         module: "Beyond the Basics:",
//         topics: [
//           `Accessibility: Make your website easy to use for everyone, including people with disabilities.`,
//           `Performance: Make your website load fast and run smoothly.`,
//           `Version Control: Keep track of your code changes using Git.`,
//           `Testing: Make sure your website works as expected by writing tests.`,
//           `Deployment: Put your website online for the world to see.`,
//         ],
//       },

//       {
//         module: "Final Project",
//       },

//       {
//         module: "Project Planning:",
//         topics: [`Defining project scope and requirements.`, `UI design.`],
//       },

//       {
//         module: "Development:",
//         topics: [
//           `Building a complete web application or website.`,
//           `Testing and debugging.`,
//         ],
//       },

//       {
//         module: "Presentation:",
//         topics: [
//           `Demonstrating the final project.`,
//           `Gathering and implementing feedback.`,
//         ],
//       },
//       {
//         module: "Continuous Learning and Best Practices",
//         topics: [
//           `Practice sets will be given after completion of every topic for stet by step growth.`,
//         ],
//       },
//     ],
//   },
// };
const FrontEndData = {
  title: "Front-End Development",
  courseDetails: {
    mainTitle: "Front-End Development",

    whoThisCourseIsFor: [
      {
        module: "Who this course is for?",
        topics: [
          "Aspiring web developers looking to specialize in user interface design.",
          "Anyone interested in building visually appealing and interactive websites.",
          "Freshers, Graduates, and Software Engineers aiming to master front-end technologies.",
        ],
      },
    ],

    whyTakeThisCourse: [
      {
        module: "Why take this course?",
        topics: [
          "You'll learn core front-end technologies like HTML, CSS, and JavaScript, which are essential for web development.",
          "The course helps you express creativity by designing dynamic and responsive web pages.",
          "Practical projects will help build your portfolio, making you stand out to potential employers.",
        ],
      },
    ],

    whatYouWillLearn: [
      {
        module: "Introduction to Front-End Development",
        topics: [
          "Overview of front-end technologies",
          "Understanding web architecture (client-side vs. server-side)",
          "The role of a front-end developer",
        ],
      },
      {
        module: "HTML Basics",
        topics: [
          "Introduction to HTML elements and structure",
          "Creating forms and handling user input",
          "Best practices for writing semantic HTML",
        ],
      },
      {
        module: "CSS Fundamentals",
        topics: [
          "Styling text, layouts, and user interfaces",
          "CSS selectors, properties, and values",
          "Responsive design with media queries",
          "CSS frameworks (e.g., Bootstrap)",
        ],
      },
      {
        module: "JavaScript Basics",
        topics: [
          "Core JavaScript syntax and programming concepts",
          "DOM manipulation for dynamic web content",
          "Event handling and user interactions",
          "Introduction to JavaScript frameworks and libraries (React, Vue, Angular)",
        ],
      },
      {
        module: "Responsive Web Design",
        topics: [
          "Creating mobile-friendly web pages",
          "Using CSS Flexbox and Grid for layouts",
          "Ensuring cross-browser compatibility",
        ],
      },
      {
        module: "Front-End Frameworks and Libraries",
        topics: [
          "Introduction to React: Component-based architecture",
          "State and props management in React",
          "Building single-page applications (SPAs)",
          "Routing in React (React Router)",
        ],
      },
      {
        module: "Version Control with Git",
        topics: [
          "Using Git for version control",
          "Collaborating on projects with GitHub",
          "Branching, merging, and pull requests",
        ],
      },
      {
        module: "Final Project",
        topics: [
          "Building a complete front-end web application",
          "Implementing responsive design and interactivity",
          "Deploying your project to a hosting platform",
        ],
      },
      {
        module: "Continuous Learning and Best Practices",
        topics: [
          "Following front-end development trends",
          "Improving performance and accessibility",
          "Best practices for front-end coding and design",
        ],
      },
    ],
  },
};

const backendData = {
  title: "Back-End Development",
  courseDetails: {
    mainTitle: "Back-End Development",

    whoThisCourseIsFor: [
      {
        module: "Who this course is for?",
        topics: [
          "Aspiring web developers, computer science students, and professionals.",
          "Anyone looking to enhance their backend development skills.",
          "Freshers, Graduates, and Software Testers interested in backend technologies.",
        ],
      },
    ],

    whyTakeThisCourse: [
      {
        module: "Why take this course?",
        topics: [
          "You'll learn crucial server-side programming languages and technologies like Node.js, Python, or Java.",
          "It covers database management (SQL, MongoDB) for effective data handling.",
          "Backend development is in high demand, and learning these skills can improve job prospects and salaries.",
        ],
      },
    ],

    whatYouWillLearn: [
      {
        module: "Introduction to Backend Development",
        topics: [
          "Overview of web architecture (client-server model)",
          "Understanding the role of backend development",
          "Differences between frontend and backend development",
        ],
      },
      {
        module: "Programming Languages",
        topics: [
          "JavaScript (Node.js)",
          "Python (Django, Flask)",
          "Ruby (Ruby on Rails)",
          "Java (Spring)",
          "PHP (Laravel)",
          "C# (.NET)",
        ],
      },
      {
        module: "Web Frameworks",
        topics: [
          "Understanding the purpose of web frameworks in backend development",
          "Express.js (Node.js)",
          "Django and Flask (Python)",
          "Ruby on Rails (Ruby)",
          "Spring Boot (Java)",
          "Laravel (PHP)",
        ],
      },
      {
        module: "APIs (Application Programming Interfaces)",
        topics: [
          "Introduction to APIs",
          "API types and methods",
          "RESTful APIs: Principles of REST and HTTP methods (GET, POST, PUT, DELETE)",
        ],
      },
      {
        module: "Databases",
        topics: [
          "Understanding databases vs. file storage",
          "Introduction to relational databases (MySQL, PostgreSQL)",
          "Database design and normalization",
          "Writing SQL queries (SELECT, INSERT, UPDATE, DELETE)",
          "NoSQL databases: MongoDB, Cassandra",
          "Understanding document, key-value, and graph databases",
        ],
      },
      {
        module: "Final Project",
        topics: [
          "Defining project scope and requirements",
          "Designing architecture (API, database, etc.)",
        ],
      },
      {
        module: "Development",
        topics: [
          "Building a complete backend application",
          "Implementing features, testing, and debugging",
        ],
      },
      {
        module: "Presentation",
        topics: [
          "Demonstrating the final project",
          "Gathering and implementing feedback",
        ],
      },
      {
        module: "Continuous Learning and Best Practices",
        topics: [
          "Practice sets for continuous learning after each topic",
          "Following industry best practices for coding, version control, and testing",
        ],
      },
    ],
  },
};

const FullStackData = {
  title: "Full-Stack Development",
  courseDetails: {
    mainTitle: "Full-Stack Development",

    whoThisCourseIsFor: [
      {
        module: "Who this course is for?",
        topics: [
          "Aspiring developers looking to build both front-end and back-end skills.",
          "Students and professionals who want to understand the full spectrum of web development.",
          "Freshers, Graduates, and Software Engineers interested in becoming full-stack developers.",
        ],
      },
    ],

    whyTakeThisCourse: [
      {
        module: "Why take this course?",
        topics: [
          "You'll learn how to develop complete web applications, covering both the front-end and back-end.",
          "Full-stack developers are in high demand as they can handle multiple aspects of a project, from UI to server-side logic.",
          "This course provides practical experience with real-world projects, enhancing your portfolio and job prospects.",
        ],
      },
    ],

    whatYouWillLearn: [
      {
        module: "Introduction to Full-Stack Development",
        topics: [
          "Understanding the roles of front-end and back-end development",
          "How front-end and back-end components work together",
          "Client-server model overview",
        ],
      },
      {
        module: "Front-End Technologies",
        topics: [
          "HTML, CSS, and JavaScript basics",
          "Responsive web design using CSS and frameworks like Bootstrap",
          "Working with front-end frameworks (React, Vue, Angular)",
          "State management with libraries like Redux",
        ],
      },
      {
        module: "Back-End Technologies",
        topics: [
          "Introduction to server-side programming",
          "Working with Node.js, Python (Django, Flask), or Java (Spring)",
          "Database management with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB)",
          "Building RESTful APIs and handling server-side logic",
        ],
      },
      {
        module: "APIs and Web Services",
        topics: [
          "Creating and consuming APIs",
          "Understanding REST principles and HTTP methods",
          "Integrating third-party APIs and services",
        ],
      },
      {
        module: "Full-Stack Project Development",
        topics: [
          "Planning and designing full-stack applications",
          "Developing both front-end and back-end components",
          "Implementing features like authentication, data persistence, and interactivity",
          "Testing and debugging both client-side and server-side code",
        ],
      },
      {
        module: "Version Control and Collaboration",
        topics: [
          "Using Git and GitHub for version control",
          "Collaborating on projects using branching and pull requests",
          "Deploying full-stack applications to cloud platforms",
        ],
      },
      {
        module: "Final Project",
        topics: [
          "Building a complete full-stack web application",
          "Deploying the project to a cloud service (e.g., AWS, Heroku)",
          "Presenting the project and gathering feedback",
        ],
      },
      {
        module: "Continuous Learning and Best Practices",
        topics: [
          "Keeping up with new web technologies and trends",
          "Building a portfolio with real-world projects",
          "Practice sets and challenges for each module to ensure hands-on learning",
        ],
      },
    ],
  },
};
const machineLernigData = {
  title: "Machine Learning",
  courseDetails: {
    mainTitle: "Machine Learning",

    whoThisCourseIsFor: [
      {
        module: "Who this course is for?",
        topics: [
          "Aspiring data scientists, machine learning engineers, and AI enthusiasts.",
          "Students and professionals with a background in mathematics, statistics, or computer science.",
          "Developers looking to expand their skillset into AI and machine learning.",
        ],
      },
    ],

    whyTakeThisCourse: [
      {
        module: "Why take this course?",
        topics: [
          "Machine learning is at the forefront of technology, driving innovations in AI, data science, and predictive analytics.",
          "Learning machine learning can open doors to lucrative and high-demand career opportunities.",
          "The course provides hands-on experience with real-world projects, making you job-ready.",
        ],
      },
    ],

    whatYouWillLearn: [
      {
        module: "Introduction to Machine Learning",
        topics: [
          "Overview of machine learning and its applications",
          "Types of machine learning: Supervised, Unsupervised, and Reinforcement Learning",
          "Understanding AI vs. Machine Learning vs. Deep Learning",
        ],
      },
      {
        module: "Mathematics for Machine Learning",
        topics: [
          "Linear algebra: Vectors, matrices, and transformations",
          "Probability and statistics basics",
          "Calculus for optimization (gradients, partial derivatives)",
        ],
      },
      {
        module: "Data Preprocessing",
        topics: [
          "Data cleaning, normalization, and standardization",
          "Handling missing data",
          "Feature engineering and feature selection",
        ],
      },
      {
        module: "Supervised Learning",
        topics: [
          "Linear and Logistic Regression",
          "Decision Trees and Random Forests",
          "Support Vector Machines (SVM)",
          "K-Nearest Neighbors (KNN)",
          "Model evaluation: Accuracy, precision, recall, F1 score",
        ],
      },
      {
        module: "Unsupervised Learning",
        topics: [
          "Clustering algorithms: K-Means, Hierarchical Clustering",
          "Dimensionality reduction: PCA, LDA",
          "Anomaly detection",
        ],
      },
      {
        module: "Neural Networks and Deep Learning",
        topics: [
          "Introduction to neural networks and deep learning",
          "Understanding the architecture of neural networks",
          "Backpropagation and gradient descent",
          "Building neural networks using frameworks like TensorFlow or PyTorch",
        ],
      },
      {
        module: "Reinforcement Learning",
        topics: [
          "Introduction to reinforcement learning",
          "Exploration vs. exploitation",
          "Markov Decision Processes (MDP)",
          "Q-Learning and Deep Q-Networks (DQN)",
        ],
      },
      {
        module: "Model Deployment and Production",
        topics: [
          "Saving and loading trained models",
          "Deploying machine learning models using APIs",
          "Monitoring model performance and retraining",
        ],
      },
      {
        module: "Final Project",
        topics: [
          "Developing a complete machine learning project from data collection to model deployment",
          "Presenting the project and analyzing results",
          "Implementing feedback and optimizing performance",
        ],
      },
      {
        module: "Continuous Learning and Best Practices",
        topics: [
          "Best practices for working with machine learning models",
          "Continuous learning through advanced topics like NLP, computer vision, and time-series forecasting",
          "Practice sets for every topic to ensure hands-on learning and mastery",
        ],
      },
    ],
  },
};

const AutomationData = {
  title: "Automation Testing",
  courseDetails: {
    mainTitle: "Automation Testing",

    whoThisCourseIsFor: [
      {
        module: "Who this course is for?",
        topics: [
          "Manual testers interested in transitioning to automation testing.",
          "Software engineers wanting to enhance their testing skills.",
          "Freshers and graduates aiming to start a career in automation testing.",
          "QA professionals looking to implement automation in their workflows.",
        ],
      },
    ],

    whyTakeThisCourse: [
      {
        module: "Why take this course?",
        topics: [
          "Automation testing increases testing efficiency, saving time and effort.",
          "You'll learn how to automate repetitive tasks, ensuring better test coverage and accuracy.",
          "Knowledge of automation testing is in high demand, leading to better career opportunities.",
          "Automated testing is crucial for continuous integration and DevOps practices.",
        ],
      },
    ],

    whatYouWillLearn: [
      {
        module: "Introduction to Automation Testing",
        topics: [
          "Overview of manual vs. automation testing",
          "Benefits of automation testing",
          "Understanding the automation testing process and lifecycle",
        ],
      },
      {
        module: "Test Automation Tools",
        topics: [
          "Introduction to popular automation tools: Selenium, Appium, TestNG, JUnit",
          "Understanding tool selection based on project requirements",
          "Setting up and configuring automation tools",
        ],
      },
      {
        module: "Selenium Basics",
        topics: [
          "Introduction to Selenium WebDriver",
          "Understanding locators (XPath, CSS Selectors, etc.)",
          "Writing basic automation scripts with Selenium",
          "Handling dynamic elements and waits",
        ],
      },
      {
        module: "Advanced Selenium",
        topics: [
          "Cross-browser testing with Selenium",
          "Data-driven testing using Excel or databases",
          "Handling alerts, pop-ups, and frames",
          "Parallel execution of test cases",
        ],
      },
      {
        module: "Test Frameworks",
        topics: [
          "Understanding testing frameworks (TestNG, JUnit)",
          "Setting up a test automation framework",
          "Creating reusable test scripts",
          "Generating test reports and logs",
        ],
      },
      {
        module: "API Testing Automation",
        topics: [
          "Introduction to API testing with Postman or RestAssured",
          "Understanding RESTful services and HTTP methods",
          "Automating API test cases and validating responses",
        ],
      },
      {
        module: "Continuous Integration and DevOps",
        topics: [
          "Integrating automated tests into CI/CD pipelines",
          "Using tools like Jenkins for automation builds and execution",
          "Automating regression testing",
        ],
      },
      {
        module: "Mobile Automation Testing",
        topics: [
          "Introduction to Appium for mobile test automation",
          "Handling Android and iOS automation with Appium",
          "Running tests on mobile devices and simulators",
        ],
      },
      {
        module: "Final Project",
        topics: [
          "Planning and creating an automation test suite for a web or mobile application",
          "Testing and refining automation scripts",
          "Presenting the final project and implementing feedback",
        ],
      },
      {
        module: "Continuous Learning and Best Practices",
        topics: [
          "Understanding best practices in automation testing",
          "Regular practice to stay up to date with tools and technologies",
          "Improving test coverage and efficiency with advanced strategies",
        ],
      },
    ],
  },
};

const EthicalHackingData = {
  title: "Ethical Hacking",
  courseDetails: {
    mainTitle: "Ethical Hacking",

    whoThisCourseIsFor: [
      {
        module: "Who this course is for?",
        topics: [
          "IT professionals and security enthusiasts interested in protecting networks and systems.",
          "Aspiring cybersecurity experts looking to understand vulnerabilities and security breaches.",
          "Freshers, Graduates, and Software Engineers interested in learning how to think like a hacker to improve system security.",
        ],
      },
    ],

    whyTakeThisCourse: [
      {
        module: "Why take this course?",
        topics: [
          "Learn to identify and exploit system vulnerabilities to strengthen defenses.",
          "Ethical hackers are in high demand across industries, with cybersecurity becoming increasingly crucial.",
          "This course provides hands-on experience with penetration testing and security tools, enhancing your skills and job prospects.",
        ],
      },
    ],

    whatYouWillLearn: [
      {
        module: "Introduction to Ethical Hacking",
        topics: [
          "Overview of ethical hacking and its importance in cybersecurity.",
          "Difference between ethical hackers, black hat hackers, and gray hat hackers.",
          "Legal implications and certifications for ethical hackers.",
        ],
      },
      {
        module: "Networking Basics",
        topics: [
          "Understanding the fundamentals of networking (TCP/IP, DNS, DHCP).",
          "Network protocols and how they can be exploited.",
          "Introduction to firewalls, routers, and switches.",
        ],
      },
      {
        module: "System Vulnerabilities",
        topics: [
          "Common vulnerabilities in operating systems (Windows, Linux).",
          "Understanding security loopholes in software and applications.",
          "Exploiting misconfigurations and unpatched systems.",
        ],
      },
      {
        module: "Penetration Testing",
        topics: [
          "Introduction to penetration testing and its phases.",
          "Reconnaissance: Gathering information about the target.",
          "Scanning: Identifying open ports and services.",
          "Exploitation: Gaining access to systems using vulnerabilities.",
          "Post-exploitation: Maintaining access and covering tracks.",
        ],
      },
      {
        module: "Tools and Techniques",
        topics: [
          "Using tools like Nmap, Wireshark, and Metasploit for network analysis and exploitation.",
          "Cracking passwords using brute force and dictionary attacks.",
          "Social engineering techniques and phishing attacks.",
        ],
      },
      {
        module: "Web Application Security",
        topics: [
          "Understanding common web vulnerabilities (SQL injection, XSS, CSRF).",
          "Testing the security of web applications and APIs.",
          "Best practices for securing web applications.",
        ],
      },
      {
        module: "Wireless Network Security",
        topics: [
          "Introduction to wireless network vulnerabilities (WEP, WPA, WPA2).",
          "Cracking wireless passwords using tools like Aircrack-ng.",
          "Securing wireless networks from attacks.",
        ],
      },
      {
        module: "Malware and Exploit Development",
        topics: [
          "Understanding how malware works (viruses, worms, Trojans).",
          "Creating and using exploits to target system vulnerabilities.",
          "Developing countermeasures against malware attacks.",
        ],
      },
      {
        module: "Final Project",
        topics: [
          "Performing a full penetration test on a simulated environment.",
          "Documenting vulnerabilities and providing remediation recommendations.",
          "Presenting the project and gathering feedback.",
        ],
      },
      {
        module: "Continuous Learning and Best Practices",
        topics: [
          "Keeping up with the latest security threats and trends.",
          "Building a portfolio with penetration testing reports and security audits.",
          "Practice sets and challenges for improving hacking skills continuously.",
        ],
      },
    ],
  },
};

const DataAnalysisData = {
  title: "Data Analysis",
  courseDetails: {
    mainTitle: "Data Analysis",

    whoThisCourseIsFor: [
      {
        module: "Who this course is for?",
        topics: [
          "Aspiring data analysts or professionals looking to switch to data analysis roles.",
          "Students and professionals who work with large datasets and want to derive insights from them.",
          "Freshers, Graduates, and Software Engineers interested in understanding and working with data.",
        ],
      },
    ],

    whyTakeThisCourse: [
      {
        module: "Why take this course?",
        topics: [
          "Data analysis is a critical skill in today's data-driven world, essential for decision-making across industries.",
          "It helps you become proficient in tools like Excel, Python, R, and SQL, which are widely used in data analysis.",
          "By learning data analysis, you can make better data-driven decisions, improve efficiency, and add value to your organization.",
        ],
      },
    ],

    whatYouWillLearn: [
      {
        module: "Introduction to Data Analysis",
        topics: [
          "Understanding the importance of data in business and decision making.",
          "Overview of the data analysis process.",
          "Types of data (structured vs. unstructured).",
        ],
      },
      {
        module: "Data Collection and Cleaning",
        topics: [
          "Methods of data collection (surveys, web scraping, databases, etc.).",
          "Cleaning and preparing data for analysis (handling missing data, duplicates, and outliers).",
          "Tools and libraries for data cleaning (Pandas, Excel).",
        ],
      },
      {
        module: "Exploratory Data Analysis (EDA)",
        topics: [
          "Techniques for summarizing and visualizing data.",
          "Descriptive statistics (mean, median, standard deviation, etc.).",
          "Using libraries like Matplotlib, Seaborn, and Excel for data visualization.",
        ],
      },
      {
        module: "Data Analysis with Python",
        topics: [
          "Introduction to Python for data analysis.",
          "Working with libraries like Pandas, Numpy, and Matplotlib.",
          "Performing data manipulation, aggregation, and filtering in Python.",
        ],
      },
      {
        module: "Data Analysis with Excel",
        topics: [
          "Using Excel for basic and advanced data analysis.",
          "Working with pivot tables, charts, and formulas for summarizing data.",
          "Excel shortcuts and tips for efficient data handling.",
        ],
      },
      {
        module: "SQL for Data Analysis",
        topics: [
          "Introduction to databases and SQL for querying data.",
          "Writing SQL queries for data extraction, filtering, and aggregation.",
          "Combining data from multiple tables using JOINs and subqueries.",
        ],
      },
      {
        module: "Statistical Analysis",
        topics: [
          "Introduction to probability and statistics in data analysis.",
          "Hypothesis testing and confidence intervals.",
          "Understanding correlation and regression analysis.",
        ],
      },
      {
        module: "Data Visualization",
        topics: [
          "Best practices for visualizing data effectively.",
          "Creating dashboards using tools like Tableau, Power BI, or Matplotlib.",
          "Choosing the right type of visualization (bar charts, line graphs, heatmaps, etc.).",
        ],
      },
      {
        module: "Final Project",
        topics: [
          "Working on a real-world dataset to apply data analysis skills.",
          "Conducting EDA, performing statistical analysis, and visualizing the findings.",
          "Presenting insights and making data-driven recommendations.",
        ],
      },
      {
        module: "Continuous Learning and Best Practices",
        topics: [
          "Practice sets and datasets for continuous learning.",
          "Staying updated with new data analysis tools and methodologies.",
          "Building a portfolio with data projects.",
        ],
      },
    ],
  },
};

const DigitalMarketingData = {
  title: "Digital Marketing",
  courseDetails: {
    mainTitle: "Digital Marketing",

    whoThisCourseIsFor: [
      {
        module: "Who this course is for?",
        topics: [
          "Aspiring digital marketers looking to build foundational skills.",
          "Business owners and entrepreneurs seeking to promote their business online.",
          "Marketing professionals wanting to upgrade their digital marketing skills.",
          "Students and professionals interested in learning online marketing strategies.",
        ],
      },
    ],

    whyTakeThisCourse: [
      {
        module: "Why take this course?",
        topics: [
          "You will learn how to effectively promote brands and products through digital platforms.",
          "The course covers essential skills like SEO, social media marketing, and content marketing.",
          "Digital marketing is critical for business growth in today's online-dominated marketplace.",
          "Practical projects and case studies will provide hands-on experience.",
        ],
      },
    ],

    whatYouWillLearn: [
      {
        module: "Introduction to Digital Marketing",
        topics: [
          "Overview of digital marketing concepts and strategies",
          "Importance of online presence and brand visibility",
          "Understanding the buyer's journey in the digital space",
        ],
      },
      {
        module: "Search Engine Optimization (SEO)",
        topics: [
          "Keyword research and on-page SEO",
          "Technical SEO and website optimization",
          "Off-page SEO and link-building strategies",
          "Tools for SEO analysis (Google Analytics, SEMrush, etc.)",
        ],
      },
      {
        module: "Social Media Marketing",
        topics: [
          "Creating and managing social media profiles (Facebook, Instagram, Twitter, LinkedIn)",
          "Building engagement through social content and storytelling",
          "Running paid social media campaigns (Facebook Ads, Instagram Ads)",
          "Social media analytics and reporting",
        ],
      },
      {
        module: "Content Marketing",
        topics: [
          "Creating valuable and engaging content",
          "Content distribution strategies",
          "Blogging, video marketing, and email marketing",
          "Building a content calendar and measuring success",
        ],
      },
      {
        module: "Pay-Per-Click (PPC) Advertising",
        topics: [
          "Introduction to Google Ads and paid search",
          "Setting up and managing PPC campaigns",
          "Ad targeting, bidding strategies, and conversion tracking",
          "A/B testing and optimizing ad performance",
        ],
      },
      {
        module: "Email Marketing",
        topics: [
          "Building an email list and creating email campaigns",
          "Email automation and segmentation",
          "Measuring email marketing success (open rates, click-through rates)",
          "Avoiding spam and adhering to email marketing laws",
        ],
      },
      {
        module: "Analytics and Reporting",
        topics: [
          "Tracking website traffic and user behavior with Google Analytics",
          "Measuring campaign performance with key metrics (KPIs)",
          "Using data to improve marketing strategies",
          "Understanding ROI in digital marketing campaigns",
        ],
      },
      {
        module: "Final Project",
        topics: [
          "Developing a comprehensive digital marketing strategy for a real-world brand",
          "Implementing SEO, social media, content, and paid advertising strategies",
          "Analyzing results and optimizing based on performance data",
          "Presenting the final marketing plan and gathering feedback",
        ],
      },
      {
        module: "Continuous Learning and Best Practices",
        topics: [
          "Staying updated on the latest trends in digital marketing",
          "Adopting new tools and technologies in the digital space",
          "Practice sets after each module for hands-on experience",
          "Following ethical and best practices in online marketing",
        ],
      },
    ],
  },
};

// Insert the course data into the database

router.post("/createCourses", async (req, res, next) => {
  try {
    const course = await Course.create({
      title: FrontEndData?.title,
      courseDetails: FrontEndData,
    });

    res.status(201).json({ course, sucess: true });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ error: error.message, sucess: false });
  }
});

router.get("/getAllCourse", async (req, res, next) => {
  try {
    const course = await Course.findAll();

    res.status(201).json({ course, sucess: true });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ error: error.message, sucess: false });
  }
});

module.exports = router;
