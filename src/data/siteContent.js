/**
 * Site content — aligned with resume (March 2026).
 */
export const profile = {
  name: 'Shashank Kurakula',
  handle: 'Shashank0406',
  title: 'AI Engineer',
  org: 'CVS Health',
  location: 'New Jersey, USA',
  current_location: "Hyderabad, India",
  email: 'shashankkurak@gmail.com',
  github: 'https://github.com/Shashank0406',
  linkedin: 'https://www.linkedin.com/in/shashank-kurakula0408',
};

export const about = {
  /** Short editorial intro — two-column layout with aside image (see About page) */
  editorial: {
    paragraphs: [
      {
        text:
          'I worked as an AI Engineer at CVS Health—building GenAI pipelines, RAG systems, and production ML for enterprise use.',
        footnote: 1,
      },
      {
        text:
          'I like problems at the intersection of machine learning, software systems, algorithms, and reliable deployment—especially in healthcare and regulated environments.',
      },
      {
        text: 'Outside of work: Gym, Badminton, swimming, Gaming, open-source experiments, design...',
      },
    ],
    asideImage: '/about-editorial.png',
    asideCaption: 'Bridging research and production ML systems.',
  },
  summary: [
    'AI Engineer with 4.5+ years of experience building and deploying ML models, GenAI pipelines, and data-driven solutions across healthcare and enterprise domains. Hands-on expertise in LLM fine-tuning, prompt engineering, RAG architecture, LangChain, and vector databases (FAISS). Strong foundation in Python (pandas, NumPy, scikit-learn, PyTorch), MLOps (Docker, Kubernetes, CI/CD), and cloud AI platforms (AWS, Azure, GCP). Experienced in collaborating with cross-functional teams, documenting experiments, and presenting results to both technical and business stakeholders.',
  ],
  experience: [
    {
      company: 'CVS Health',
      role: 'AI Engineer – GenAI & ML Model Development',
      location: 'New Jersey, USA',
      period: 'Nov 2024 – Dec 2025',
      bullets: [
        'Built and fine-tuned LLMs (GPT-4, Mistral-7B, Llama 3) with advanced prompt engineering techniques for domain-specific enterprise applications.',
        'Developed production RAG pipelines using LangChain, Sentence Transformers, and FAISS achieving ~90% retrieval accuracy on domain-specific knowledge bases.',
        'Assisted in building multimodal ML models using Google Gemini and computer vision for food image classification and macronutrient estimation (regression/classification).',
        'Supported containerization and deployment of AI models using Docker and Kubernetes on AWS ECS/EKS; implemented CI/CD pipelines with Jenkins and GitHub Actions.',
        'Performed feature engineering and data preparation on structured/unstructured datasets to support ML model training and evaluation workflows.',
        'Maintained documentation of model experiments, system design, and integration strategies; presented findings to technical and business stakeholders.',
      ],
    },
    {
      company: 'Blue Cross & Blue Shield of Mississippi',
      role: 'AI/ML Engineer – Predictive Analytics & MLOps',
      location: 'United States',
      period: 'Nov 2023 – Oct 2024',
      bullets: [
        'Built ML models (classification, regression, clustering) using Scikit-learn, XGBoost, and LightGBM for predictive analytics in risk management, operational efficiency, and customer experience.',
        'Implemented RAG and LangChain orchestration pipelines for predictive intelligence use cases across enterprise data.',
        'Performed advanced EDA, data cleaning, and feature engineering on structured healthcare datasets, driving a 20% lift in model accuracy.',
        'Supported Docker/Kubernetes containerization and CI/CD pipeline setup using Airflow, Jenkins, and MLflow for ML workflow automation.',
        'Deployed cloud-native solutions on AWS Lambda/S3 and Azure Databricks for scalable real-time data ingestion; configured monitoring with CloudWatch and Prometheus/Grafana.',
      ],
    },
    {
      company: 'Ivy Comptech',
      role: 'Data Engineer (with DevOps orientation)',
      location: '',
      period: 'Jan 2020 – Dec 2020',
      bullets: [
        'Implemented CI/CD pipelines in Jenkins for data integration workflows.',
        'Engineered ETL pipelines handling 3M+ healthcare records, ensuring data integrity and process scalability.',
        'Developed statistical models for patient outcome analysis, optimizing business reporting metrics.',
        'Built interactive visualizations for business intelligence, enhancing executive-level decision-making.',
        'Architected data quality validation frameworks and automated anomaly detection checks across healthcare pipelines, reducing data integrity issues and supporting accurate downstream reporting and compliance.',
        'Optimized SQL queries and Python automation scripts, cutting manual reporting workload by streamlining recurring data extraction and transformation tasks.',
      ],
    },
    {
      company: 'Thio Medicare Pvt LTD',
      role: 'Data Analyst',
      location: '',
      period: 'May 2019 – Dec 2019',
      bullets: [
        'Streamlined reporting workloads using SQL and Python automation scripts.',
        'Conducted statistical analysis on healthcare datasets using R and SQL.',
        'Developed interactive visualization dashboards for monitoring patient care metrics.',
        'Created automated reporting systems for healthcare compliance and resource utilization.',
      ],
    },
  ],
  education: [
    {
      school: 'Texas A&M University – Commerce',
      detail: "Master's, Computer Science · GPA 3.6",
    },
    {
      school: 'Jawaharlal Nehru Technological University',
      detail: "Bachelor's, Computer Science",
    },
  ],
  /** Resume “Projects & outside experience” — highlights separate from GitHub featured list */
  resumeProjects: [
    {
      title: 'Multi-Agent System for Content Automation',
      period: 'Nov 2024',
      bullets: [
        'Deployed autonomous LangChain + GPT-4 agents on AWS ECS/Fargate with serverless execution via CodeDeploy + Lambda; agents autonomously plan, act, and self-refine content end-to-end.',
      ],
    },
    {
      title: 'Telegram ChatBot using GenAI',
      period: 'May 2024 – Jun 2024',
      bullets: [
        'Containerized chatbot deployed on EKS with Kubernetes auto-scaling; configured monitoring with CloudWatch and Prometheus alerting.',
      ],
    },
    {
      title: 'AI Nutrition Monitor',
      period: 'Nov 2024 – Dec 2024',
      bullets: [
        'Automated Streamlit deployment on AWS ECS using Terraform; secured secrets with AWS Secrets Manager; multimodal food image analysis via Google Gemini.',
      ],
    },
    {
      title: 'Doordash ChatBot using GenerativeAI',
      period: 'Apr 2024 – May 2024',
      bullets: [
        'Built full RAG pipeline using Sentence Transformers, VectorStoreIndex, and LangChain; deployed Python-based agentic system via REST APIs for context-aware, goal-directed query resolution.',
      ],
    },
    {
      title: 'Simple Retrieval-Augmented Generation',
      period: 'May 2024 – Jun 2024',
      bullets: [
        'Implemented Mistral-7B-Instruct with prompt engineering, Sentence Transformers, VectorStoreIndex, llama_index, and LangChain for domain-specific knowledge retrieval.',
      ],
    },
  ],
  skillCategories: [
    {
      label: 'Agentic AI & orchestration',
      items:
        'LangChain, CrewAI, AutoGen, multi-agent systems, tool use, memory',
    },
    { label: 'Languages & frameworks', items: 'Python, SQL, R, LangChain, FastAPI' },
    {
      label: 'Workflow orchestration',
      items: 'Apache Airflow, DAG design, MLflow, DVC',
    },
    {
      label: 'LLMs & GenAI',
      items:
        'OpenAI GPT-3/4, Anthropic Claude, Mistral-7B, Llama 3, Google Gemini, Hugging Face',
    },
    {
      label: 'Generative AI',
      items: 'RAG architecture, prompt engineering, embeddings, fine-tuning',
    },
    { label: 'Cloud platforms', items: 'AWS (S3, Lambda), Azure Databricks, GCP' },
    {
      label: 'Production ML',
      items:
        'Model monitoring, performance optimization, MLOps (CI/CD, Docker, Kubernetes), custom observability',
    },
    {
      label: 'CI/CD',
      items: 'Jenkins, GitHub Actions, GitLab CI/CD, AWS CodePipeline, CodeBuild, CodeDeploy',
    },
    {
      label: 'Monitoring',
      items: 'CloudWatch, ELK Stack, Prometheus, Grafana, Datadog',
    },
    { label: 'Collaboration & VCS', items: 'Git, GitHub, GitLab, Bitbucket' },
    {
      label: 'Data engineering',
      items: 'ETL pipelines, Apache Airflow, distributed computing',
    },
    { label: 'Visualization', items: 'Power BI, Plotly, Tableau, Matplotlib' },
    { label: 'NLP', items: 'Hugging Face Transformers, SpaCy, NLTK' },
    {
      label: 'Collaboration & delivery',
      items: 'Strong communication, cross-functional teamwork, stakeholder engagement',
    },
  ],
};

/**
 * Featured work — `href` is the GitHub repo; `liveUrl` is Streamlit Cloud (or other) public URL.
 */
export const featuredProjects = [
  {
    tag: 'GenAI',
    date: '—',
    title: 'Job recommendation system (GenAI)',
    blurb: 'Generative-AI–driven job recommendations in Streamlit.',
    href: 'https://github.com/Shashank0406/Job_recommendation_system_GenAI',
    liveUrl: 'https://jobrecommendationsystemgenai-shahsank.streamlit.app/',
  },
  {
    tag: 'Health',
    date: '—',
    title: 'Medical ChatBot',
    blurb: 'Conversational medical assistant built with Streamlit.',
    href: 'https://github.com/Shashank0406/Medical_ChatBot',
    liveUrl: 'https://shashankmedicalchatbot.streamlit.app/',
  },
  {
    tag: 'Health',
    date: '—',
    title: 'AI Nutrition Monitor',
    blurb: 'Nutrition tracking and insights with an AI-powered UI.',
    href: 'https://github.com/Shashank0406/AI_Nutrition_Monitor',
    liveUrl: 'https://shashank-ainutritionmonitor.streamlit.app/',
  },
];

/** Secondary list — compact repository links */
export const moreProjects = [
  { title: 'MLOPS-DVC-AWSS3', href: 'https://github.com/Shashank0406/MLOPS-DVC-AWSS3' },
  { title: 'Doordash ChatBot using GenAI', href: 'https://github.com/Shashank0406/Doordash_ChatBot_using_GenAI' },
  { title: 'Multi Agents — CrewAI', href: 'https://github.com/Shashank0406/Multi_Agents_CrewAI' },
  { title: 'Simple RAG', href: 'https://github.com/Shashank0406/Simple_RAG' },
  { title: 'RAG Interview Assistant', href: 'https://github.com/Shashank0406/RAG-Interview-Assistant' },
  { title: 'MLOPS Vehicle Insurance Deployment', href: 'https://github.com/Shashank0406/MLOPS-Vehicle-Insurance-Deployment' },
  { title: 'Audio Classification Project', href: 'https://github.com/Shashank0406/Audio_Classification_Project' },
  { title: 'Telegram ChatBot', href: 'https://github.com/Shashank0406/Telegram_ChatBot' },
  { title: 'NLP Project', href: 'https://github.com/Shashank0406/NLP_Project' },
  { title: 'SMS Spam Detection', href: 'https://github.com/Shashank0406/SMS_Spam_Detection' },
  { title: 'Boston House Pricing', href: 'https://github.com/Shashank0406/Boston_House_Pricing' },
  { title: 'Instagram Reach Analysis', href: 'https://github.com/Shashank0406/Instagram_Reach_Analysis' },
  { title: 'quantization-notes', href: 'https://github.com/Shashank0406/quantization-notes' },
];

/** Intro copy for the /work page (professional experience) */
export const workPage = {
  intro:
    'Roles spanning AI engineering, GenAI and MLOps, data engineering, and analytics—enterprise, healthcare, and gaming. Details below mirror my resume.',
};

export const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/work#featured-projects' },
  { label: 'Work', to: '/work' },
];
