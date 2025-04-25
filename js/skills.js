// Certificates Data
const certificates = [
  {
    name: "IBM Back-End Development Professional Certificate",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_Back_End_Development_Professional_Certificate.png",
    skills: [
      "Agile and Scrum", "Application Development", "Artificial Intelligence", "Back-End Applications", 
      "Shell Scripting", "Cloning and Forking", "Cloud Applications", "Cloud Native", "Containers", 
      "Data Analysis", "Data Science", "Distributed Version Control Systems", "Django", "Docker", 
      "Extract Transform and Load (ETL)", "Flask", "GitHub", "Git", "Kubernetes", "Linux", 
      "Linux Commands", "Logging", "Microservices", "MongoDB", "Monitoring", "NumPy", 
      "Object-Relational Mapping", "Observability", "OpenShift", "Open Source", 
      "Open Web Application Security Project (OWASP)", "Pandas", "Python", 
      "Relational Database", "Representational State Transfer (REST)", "Security", "Serverless", 
      "Shell Scripting", "Software Architecture", "Software Development Lifecycle", 
      "Software Engineering", "SQL", "Telemetry", "Tracing", "Web Application",
    ]
  },
  {
    name: "IBM Applied Software Engineering Fundamentals Specialization",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_applied_software_engineering_fundamentals.png",
    skills: [
      "Application Architecture and Design", "Data Structures", "Distributed Version Control Systems", 
      "Git", "Linux", "Python", "Shell Scripting", "Software Development Lifecycle", 
      "Software Engineering", "Software Testing and Deployment"
    ]
  },
  {
    name: "IBM Python Project for AI and Application Development",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_python_project_for_ai_and_application_development.png",
    skills: ["Artificial Intelligence", "Data Science", "Python"]
  },
  {
    name: "IBM Python for Data Science and AI",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_python_for_data_science_and_ai.png",
    skills: ["Bokeh", "Matplotlib", "Python"]
  },
  {
    name: "IBM Application Development using Microservices and Serverless",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_application_development_using_microservices_and_serverless.png",
    skills: [
      "Containers", "cURL", "Docker", "Flask", "GraphQL", "Microservices", "Postman", 
      "Representational State Transfer (REST)", "Serverless", "Swagger"
    ]
  },
  {
    name: "IBM Back-end Application Development Capstone Project",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_back_end_application_development_capstone_project.png",
    skills: ["Back-End Development", "Django", "Docker", "MongoDB"]
  },
  {
    name: "IBM Developing Applications with SQL, Databases, and Django",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_developing_applications_with_sql_databases_and_django.png",
    skills: [
      "Cloud Database Fundamentals", "CSS", "Django", "GitHub", "HTML", 
      "Object-Oriented Programming", "Object-Relational Mapping", "Python", "SQL"
    ]
  },
  {
    name: "IBM Monitoring and Observability for Development and DevOps",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_monitoring_and_observability_for_development_and_devops.png",
    skills: ["Logging", "Monitoring", "Observability", "Telemetry", "Tracing"]
  },
  {
    name: "IBM Container & Kubernetes Essentials V2",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_container_and_kubernetes_essentials_V2.png",
    skills: [
      "Auto-scaling", "Cloud", "Containers", "Istio", "Kubernetes", "OpenShift", 
      "ReplicaSets", "YAML"
    ]
  },
  {
    name: "IBM Linux Commands & Shell Scripting Essentials",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_linux_commands_and_shell_scripting_essentials.png",
    skills: [
      "Shell Scripting", "Cron Jobs", "Crontab", "Linux", "Shebang", "UNIX Shell Commands"
    ]
  },
  {
    name: "IBM Git and GitHub Essentials",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_git_and_github_essentials.png",
    skills: [
      "Code Repositories", "Collaboration", "Distributed Version Control Systems", "Git", "GitHub", 
      "GitLab", "Merge", "Open Source", "Pull Request", "Social Coding", "Software Development"
    ]
  },
  {
    name: "IBM Software Engineering Essentials",
    verifiedBy: "Credly",
    badgeImage: "./images/certificates/IBM_software_engineering_essentials.png",
    skills: [
      "Basic Programming Concepts", "Software Architecture", "Software Development Lifecycle", 
      "Software Development Tools", "Software Engineering"
    ]
  },
  {
    name: "IBM Application Security for Developers and DevOps Professionals",
    verifiedBy: "Coursera",
    badgeImage: "./images/certificates/IBM_application_security_for_developers_and_devops_professionals.png",
    skills: [
      "Security", "Security Engineering", "DevOps", "Programming Principles", "Logging", 
      "Monitoring", "Open Web Application Security Project (OWASP)", "Observability"
    ]
  }
];

// Skills data
const skills = [
  { name: "Software Engineering", badgeSupported: true, statuses: ['IN DEMAND', 'FUTURE PROOF'] },
  { name: "Agile and Scrum", badgeSupported: true, statuses: [] },
  { name: "Application Development", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Artificial Intelligence", badgeSupported: true, statuses: ["IN DEMAND", "TRENDING", "FUTURE PROOF"] },
  { name: "Back-End Applications", badgeSupported: true, statuses: [] },
  { name: "Back-End Development", badgeSupported: true, statuses: [] },
  { name: "Cloning and Forking", badgeSupported: true, statuses: [] },
  { name: "Cloud Applications", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Cloud Database Fundamentals", badgeSupported: true, statuses: [] },
  { name: "Cloud Native", badgeSupported: true, statuses: [] },
  { name: "Containers", badgeSupported: true, statuses: [] },
  { name: "CSS", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Data Analysis", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Data Science", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Distributed Version Control Systems", badgeSupported: true, statuses: [] },
  { name: "Django", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Docker", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Extract Transform and Load (ETL)", badgeSupported: true, statuses: [] },
  { name: "Flask", badgeSupported: true, statuses: [] },
  { name: "GitHub", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Git", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Kubernetes", badgeSupported: true, statuses: ["IN DEMAND"] },
  { name: "Linux", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Linux Commands", badgeSupported: true, statuses: [] },
  { name: "Logging", badgeSupported: true, statuses: [] },
  { name: "Microservices", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "MongoDB", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Monitoring", badgeSupported: true, statuses: ["IN DEMAND"] },
  { name: "NumPy", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Object-Relational Mapping", badgeSupported: true, statuses: [] },
  { name: "Object-Oriented Programming", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Observability", badgeSupported: true, statuses: ["IN DEMAND"] },
  { name: "OpenShift", badgeSupported: true, statuses: [] },
  { name: "Open Source", badgeSupported: true, statuses: [] },
  { name: "Open Web Application Security Project (OWASP)", badgeSupported: true, statuses: [] },
  { name: "Pandas", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Python", badgeSupported: true, statuses: ["IN DEMAND", "TRENDING", "FUTURE PROOF"] },
  { name: "Relational Database", badgeSupported: true, statuses: [] },
  { name: "Representational State Transfer (REST)", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Security", badgeSupported: true, statuses: ["IN DEMAND"] },
  { name: "Serverless", badgeSupported: true, statuses: [] },
  { name: "Software Architecture", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Software Development Lifecycle", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "SQL", badgeSupported: true, statuses: [] },
  { name: "Telemetry", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Tracing", badgeSupported: true, statuses: [] },
  { name: "Web Application", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Application Architecture and Design", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Data Structures", badgeSupported: true, statuses: [] },
  { name: "Shell Scripting", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Software Testing and Deployment", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Bokeh", badgeSupported: true, statuses: [] },
  { name: "Matplotlib", badgeSupported: true, statuses: [] },
  { name: "cURL", badgeSupported: true, statuses: [] },
  { name: "GraphQL", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Postman", badgeSupported: true, statuses: [] },
  { name: "Swagger", badgeSupported: true, statuses: [] },
  { name: "Auto-scaling", badgeSupported: true, statuses: [] },
  { name: "Cloud Computing", badgeSupported: true, statuses: ["IN DEMAND", "TRENDING"] },
  { name: "Istio", badgeSupported: true, statuses: [] },
  { name: "ReplicaSets", badgeSupported: true, statuses: [] },
  { name: "YAML", badgeSupported: true, statuses: [] },
  { name: "HTML", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Cron Jobs", badgeSupported: true, statuses: [] },
  { name: "Crontab", badgeSupported: true, statuses: [] },
  { name: "Shebang", badgeSupported: true, statuses: [] },
  { name: "UNIX Shell Commands", badgeSupported: true, statuses: ["FUTURE PROOF"] },
  { name: "Code Repositories", badgeSupported: true, statuses: [] },
  { name: "Collaboration", badgeSupported: true, statuses: ["IN DEMAND", "TRENDING", "FUTURE PROOF"] },
  { name: "GitLab", badgeSupported: true, statuses: [] },
  { name: "Merge", badgeSupported: true, statuses: [] },
  { name: "Pull Request", badgeSupported: true, statuses: [] },
  { name: "Social Coding", badgeSupported: true, statuses: [] },
  { name: "Software Development", badgeSupported: true, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Basic Programming Concepts", badgeSupported: true, statuses: [] },
  { name: "Software Development Tools", badgeSupported: true, statuses: [] },
  { name: "Security Engineering", badgeSupported: true, statuses: [] },
  { name: "Programming Principles", badgeSupported: true, statuses: [] },
  { name: "Web Development", badgeSupported: false, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "Database Development", badgeSupported: false, statuses: ["IN DEMAND", "FUTURE PROOF"] },
  { name: "JavaScript", badgeSupported: false, statuses: [] }

];

// Skill summaries
const skillSummaries = {
  "Agile and Scrum": "Agile and Scrum methodologies focus on iterative development, collaboration, and adaptability, making them essential for managing complex IT projects.",
  "Application Development": "Application Development involves creating software applications to solve specific problems or meet user needs, forming the backbone of the IT industry.",
  "Artificial Intelligence": "Artificial Intelligence enables machines to simulate human intelligence, revolutionizing industries with applications in automation, decision-making, and predictive analytics.",
  "Back-End Applications": "Back-End Applications handle server-side logic, databases, and APIs, ensuring seamless functionality and scalability of software systems.",
  "Cloning and Forking": "Cloning and Forking are essential version control operations that enable developers to collaborate on and customize software projects.",
  "Cloud Applications": "Cloud Applications leverage cloud computing to provide scalable, flexible, and cost-effective solutions for businesses and users.",
  "Cloud Native": "Cloud Native development focuses on building applications optimized for cloud environments, ensuring scalability, resilience, and agility.",
  "Containers": "Containers package applications and their dependencies, ensuring consistency across environments and simplifying deployment.",
  "Data Analysis": "Data Analysis involves examining datasets to extract meaningful insights, driving data-driven decision-making in businesses.",
  "Data Science": "Data Science combines statistical analysis, machine learning, and data visualization to uncover patterns and insights from data.",
  "Distributed Version Control Systems": "Distributed Version Control Systems like Git enable developers to track changes, collaborate, and manage codebases efficiently.",
  "Django": "Django is a high-level Python web framework that simplifies the development of secure and scalable web applications.",
  "Docker": "Docker is a platform for developing, shipping, and running applications in containers, ensuring consistency across environments.",
  "Extract Transform and Load (ETL)": "ETL processes extract data from sources, transform it into a usable format, and load it into a target system, enabling data integration and analysis.",
  "Flask": "Flask is a lightweight Python web framework that provides flexibility and simplicity for building web applications.",
  "GitHub": "GitHub is a platform for hosting and collaborating on Git repositories, widely used in software development.",
  "Git": "Git is a distributed version control system that tracks changes in code, enabling collaboration and maintaining project history.",
  "Kubernetes": "Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications.",
  "Linux": "Linux is a powerful and versatile operating system widely used in servers, development, and embedded systems.",
  "Linux Commands": "Linux Commands provide direct access to operating system functions, enabling efficient system management and automation.",
  "Logging": "Logging captures system events and application behavior, aiding in debugging, monitoring, and compliance.",
  "Microservices": "Microservices architecture breaks down applications into smaller, independent services, improving scalability and maintainability.",
  "MongoDB": "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, ideal for modern applications.",
  "Monitoring": "Monitoring tools track the performance and health of IT systems, ensuring reliability and efficiency.",
  "NumPy": "NumPy is a Python library for numerical computing, widely used in data analysis, machine learning, and scientific computing.",
  "Object-Relational Mapping": "Object-Relational Mapping (ORM) simplifies database interactions by mapping objects to database tables, reducing development complexity.",
  "Observability": "Observability provides insights into system behavior, helping identify and resolve issues proactively.",
  "OpenShift": "OpenShift is a Kubernetes-based platform for deploying and managing containerized applications, enhancing productivity and scalability.",
  "Open Source": "Open Source software promotes collaboration and innovation by making source code freely available for use and modification.",
  "Open Web Application Security Project (OWASP)": "OWASP provides guidelines and tools for securing web applications, protecting them from vulnerabilities and threats.",
  "Pandas": "Pandas is a Python library for data manipulation and analysis, offering powerful tools for handling structured data.",
  "Python": "Python is a versatile programming language known for its simplicity and readability, widely used in web development, data analysis, AI, and more.",
  "Relational Database": "Relational Databases store data in structured tables, enabling efficient querying and management of large datasets.",
  "Representational State Transfer (REST)": "REST is an architectural style for designing APIs, enabling seamless communication between software systems.",
  "Security": "Security focuses on protecting systems and data from unauthorized access, ensuring confidentiality, integrity, and availability.",
  "Serverless": "Serverless computing allows developers to build and run applications without managing servers, reducing operational complexity and costs.",
  "Shell Scripting": "Shell Scripting automates repetitive tasks in Linux and Unix environments, improving productivity.",
  "Software Architecture": "Software Architecture defines the structure and design of software systems, ensuring scalability, maintainability, and performance.",
  "Software Development Lifecycle": "The Software Development Lifecycle (SDLC) outlines the stages of software development, from planning to deployment and maintenance.",
  "Software Engineering": "Software Engineering applies engineering principles to software development, ensuring reliability, efficiency, and scalability.",
  "SQL": "SQL (Structured Query Language) is used to manage and manipulate relational databases, making it essential for data storage and retrieval.",
  "Telemetry": "Telemetry collects and transmits data from systems for monitoring and analysis, aiding in performance optimization.",
  "Tracing": "Tracing tracks the flow of requests through systems, helping identify bottlenecks and optimize performance.",
  "Web Application": "Web Applications are software programs that run in web browsers, providing interactive and dynamic user experiences.",
  "Application Architecture and Design": "Application Architecture and Design focuses on structuring software systems to meet functional and non-functional requirements.",
  "Data Structures": "Data Structures organize and store data efficiently, enabling faster access and manipulation in software applications.",
  "Software Testing and Deployment": "Software Testing and Deployment ensure the quality and reliability of software before and after release.",
  "Bokeh": "Bokeh is a Python library for creating interactive visualizations, enabling data exploration and storytelling.",
  "Matplotlib": "Matplotlib is a Python library for creating static, animated, and interactive visualizations, widely used in data analysis.",
  "cURL": "cURL is a command-line tool for transferring data with URLs, commonly used for testing APIs and downloading files.",
  "GraphQL": "GraphQL is a query language for APIs that provides flexibility and efficiency in retrieving data.",
  "Postman": "Postman is a tool for testing and documenting APIs, streamlining the development and debugging process.",
  "Swagger": "Swagger is a framework for designing, building, and documenting APIs, improving collaboration and consistency.",
  "Auto-scaling": "Auto-scaling automatically adjusts system resources based on demand, ensuring optimal performance and cost-efficiency.",
  "Cloud": "Cloud computing delivers scalable and flexible IT resources over the internet, transforming how businesses operate.",
  "Istio": "Istio is a service mesh that provides traffic management, security, and observability for microservices-based applications, enabling enterprises to deliver resilient and secure services at scale.",
  "ReplicaSets": "ReplicaSets in Kubernetes ensure that a specified number of pod replicas are running at all times, providing high availability and fault tolerance for containerized workloads.",
  "YAML": "YAML is a human-friendly data-serialization language used extensively for configuration files, making infrastructure and application definitions clear, concise, and version-controlled.",
  "HTML": "HTML (HyperText Markup Language) structures web content and interfaces, forming the foundation of every web application and enabling interoperable, accessible user experiences.",
  "Cron Jobs": "Cron Jobs automate scheduled tasks on Unix-based systems, allowing organizations to run scripts or jobs at predefined times without manual intervention, thus improving reliability and efficiency.",
  "Crontab": "Crontab is the configuration file for scheduling Cron Jobs, giving administrators fine-grained control over task timing and recurrence for routine maintenance or batch processes.",
  "Shebang": "A Shebang (`#!`) at the top of a script specifies the interpreter to execute it, ensuring consistent behavior across environments and simplifying script portability.",
  "UNIX Shell Commands": "UNIX Shell Commands provide powerful, text-based operations for system administration, text processing, and automation, critical for efficient DevOps and backend management.",
  "Code Repositories": "Code Repositories host and manage source code versions, enabling traceability, collaboration, and rollback capabilities essential to modern software development workflows.",
  "Collaboration": "Collaboration tools and practices foster real-time communication, code review, and shared ownership of projects, driving faster delivery and higher quality in software teams.",
  "GitLab": "GitLab is an integrated DevOps platform offering Git hosting, CI/CD pipelines, and security scanning, streamlining the entire software delivery lifecycle under one roof.",
  "Merge": "A Merge operation integrates changes from one branch into another in version control systems, enabling teams to combine workstreams safely and maintain code integrity.",
  "Pull Request": "A Pull Request is a mechanism for proposing, discussing, and reviewing code changes before merging them into a main branch, ensuring quality and preventing regressions.",
  "Social Coding": "Social Coding leverages public and private platforms for code sharing, review, and community feedback, accelerating innovation through open collaboration.",
  "Software Development": "Software Development encompasses the full process of designing, coding, testing, and maintaining applications, delivering digital solutions that power modern businesses.",
  "Basic Programming Concepts": "Basic Programming Concepts—like variables, control flow, and data types—are the building blocks that underpin all software, ensuring developers can write correct and efficient code.",
  "Software Development Tools": "Software Development Tools—including IDEs, debuggers, and build systems—boost developer productivity and code quality by streamlining everyday tasks.",
  "Security Engineering": "Security Engineering applies rigorous design, testing, and monitoring practices to protect applications and infrastructure from threats, safeguarding organizational assets and reputation.",
  "Programming Principles": "Programming Principles—such as SOLID, DRY, and KISS—guide developers toward writing maintainable, scalable, and robust code that stands the test of time.",
  "Back-End Development": "Back-End Development involves building and maintaining the server-side components of applications—handling database interactions, business logic, APIs, and server performance—which form the backbone of any web or mobile service. Back-end development empowers companies to deliver data-driven features and maintain high availability, directly impacting user satisfaction and operational costs.",
  "Cloud Database Fundamentals": "Cloud Database Fundamentals cover the principles of deploying and managing databases on cloud platforms—public, private, or hybrid—so organizations can leverage on-demand provisioning, automated patching, and global distribution of data.",
  "CSS": "CSS (Cascading Style Sheets) is the standard styling language that controls the look, layout, and responsive behavior of web applications, allowing businesses to craft visually engaging and brand-consistent user interfaces.",
  "Object-Oriented Programming": "Object-Oriented Programming (OOP) is a software design paradigm that uses objects—encapsulating data and behavior—to model real-world entities, promoting modularity, reusability, and maintainability in large codebases."}

const ul = document.querySelector('#skills-wallet .ps-list');

// Render into the DOM
skills.forEach(skill => {
  const li = document.createElement('li');
  li.className = 'skill-card';

  // Skill name & link
  li.innerHTML = `
    ${skill.badgeSupported
      ? `<div class="verified-skill" data-skill="${skill.name}" data-badge-provider="credly">
          <span class="tooltip">
            <div class="tooltip-title">CERTIFIED <img src="images/icons/certified-skill.svg" alt="Certified Skill" class="certified-skill-icon"></div>
            <div class="tooltip-certificates"></div>
            <div class="tooltip-summary"></div>
          </span>
        </div>`
      : ''
    }
    <div class="skill-name">
      ${skill.name}
    </div>
    <div class="status-tags">
      ${skill.statuses?.map(tag => {
        const cls = tag.toLowerCase().replace(' ', '-');
        const tooltipText = {
          'in-demand': 'Skills that employers consistently prioritize in the current labor market.',
          'trending': 'Skills that show consistent month-to-month growth in job ad mentions, signifying sustained demand and increasing prominence over time.',
          'future-proof': 'Skills that stand the test of time and will continue to have relevance and value in the evolving landscape on the IT industry.'
        }[cls] || '';
        return `
          <span class="status-tag ${cls}">
            ${tag}
            <span class="tooltip status-text">${tooltipText}</span>
          </span>`;
      }).join('') || ''}
    </div>
  `;

  ul.appendChild(li);
});

// Populate tooltips for verified skills
document.querySelectorAll('.verified-skill').forEach(icon => {
  const skillName = icon.getAttribute('data-skill');
  const tooltip = icon.querySelector('.tooltip');
  const certificatesContainer = tooltip.querySelector('.tooltip-certificates');
  const summaryContainer = tooltip.querySelector('.tooltip-summary');

  // Add certificates
  const relatedCertificates = certificates.filter(cert => cert.skills.includes(skillName));

  relatedCertificates.forEach(cert => {
    const certHTML = `
      <div class="certificate">
        <img src="${cert.badgeImage}" alt="${cert.name}" class="certificate-badge">
        <div>
          <div class="certificate-name">${cert.name}</div>
          <div class="verified-by-${cert.verifiedBy.toLowerCase()}">
            <img src="images/icons/verify_badge_${cert.verifiedBy.toLowerCase()}.svg" alt="Verified by ${cert.verifiedBy}" class="${cert.verifiedBy.toLowerCase()}-icon">
            Verified by ${cert.verifiedBy}
          </div>
        </div>
      </div>
    `;
    certificatesContainer.innerHTML += certHTML;
  });

  // Add skill summary
  summaryContainer.innerHTML = skillSummaries[skillName] || "No summary available.";
});

// Adjust tooltip position dynamically within #skills-wallet
document.querySelectorAll('.tooltip').forEach(tooltip => {
  const parent = tooltip.parentElement;

  parent.addEventListener('mouseenter', () => {
    const tooltipRect = tooltip.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const walletRect = document.getElementById('skills-wallet').getBoundingClientRect();

    // Check if tooltip overflows on the left of #skills-wallet
    if (tooltipRect.left < walletRect.left) {
      tooltip.classList.add('adjust-right');
      tooltip.style.left = `${parentRect.width}px`; // Align tooltip's left edge with parent's right edge
      tooltip.style.transform = 'translateX(0)';
    }

    // Check if tooltip overflows on the right of #skills-wallet
    if (tooltipRect.right > walletRect.right) {
      tooltip.classList.add('adjust-left');
      tooltip.style.left = `-${tooltipRect.width}px`; // Align tooltip's right edge with parent's left edge
      tooltip.style.transform = 'translateX(0)';
    }
  });
});
