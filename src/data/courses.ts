
import { 
  Brain, 
  Bot, 
  Cpu, 
  Network, 
  Code2, 
  MessageSquare, 
  Sparkles, 
  FileCode,
  Terminal
} from "lucide-react";

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  mode: string;
  gradient: string;
  level: string;
  features: string[];
  outline: CourseOutline;
  handsOnProjects: HandsOnProject[];
}

export interface CourseOutline {
  modules: {
    title: string;
    topics: string[];
  }[];
}

export interface HandsOnProject {
  title: string;
  description: string;
  technologies: string[];
}

export const courses: Course[] = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Master the fundamentals of AI and build intelligent systems from scratch.",
    icon: Brain,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-violet-500 to-purple-600",
    level: "Intermediate",
    features: ["Machine Learning", "Neural Networks", "AI Agents", "Python"],
    outline: {
      modules: [
        {
          title: "Module 1: AI Fundamentals",
          topics: [
            "Introduction to Artificial Intelligence",
            "History and Evolution of AI",
            "Types of AI: Narrow vs General AI",
            "AI Applications in Modern Industry",
            "Setting Up AI Development Environment"
          ]
        },
        {
          title: "Module 2: Machine Learning Foundations",
          topics: [
            "Supervised vs Unsupervised Learning",
            "Regression and Classification Algorithms",
            "Feature Engineering and Selection",
            "Model Training and Validation",
            "Overfitting and Underfitting"
          ]
        },
        {
          title: "Module 3: Neural Networks Deep Dive",
          topics: [
            "Understanding Perceptrons",
            "Multi-layer Neural Networks",
            "Activation Functions",
            "Backpropagation Algorithm",
            "Building Neural Networks from Scratch"
          ]
        },
        {
          title: "Module 4: AI Project Development",
          topics: [
            "End-to-End AI Project Lifecycle",
            "Data Collection and Preprocessing",
            "Model Deployment Strategies",
            "AI Ethics and Responsible AI",
            "Capstone AI Project"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "🤖 Smart Chatbot with Sentiment Analysis",
        description: "Build an intelligent chatbot that understands user emotions and responds accordingly",
        technologies: ["Python", "TensorFlow", "NLTK", "Flask"]
      },
      {
        title: "🖼️ Image Classification System",
        description: "Develop a CNN-based image classifier for real-world objects with 95%+ accuracy",
        technologies: ["Python", "Keras", "OpenCV", "CNN"]
      },
      {
        title: "📊 Predictive Analytics Dashboard",
        description: "Create an end-to-end ML pipeline with interactive visualizations and deployment",
        technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"]
      }
    ]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description: "Build autonomous AI agents that can reason, plan, and execute tasks independently.",
    icon: Bot,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-emerald-500 to-teal-600",
    level: "Advanced",
    features: ["AI Agents", "Autonomous Systems", "LangChain", "LLM Integration"],
    outline: {
      modules: [
        {
          title: "Module 1: Agentic AI Introduction",
          topics: [
            "What are AI Agents?",
            "Agent Architecture Fundamentals",
            "Agent vs Traditional AI Systems",
            "Use Cases for Agentic AI",
            "Agent Development Frameworks"
          ]
        },
        {
          title: "Module 2: Building Autonomous Agents",
          topics: [
            "Agent Perception and Sensing",
            "Reasoning and Decision Making",
            "Action Selection Strategies",
            "Memory and Context Management",
            "Multi-Agent Systems"
          ]
        },
        {
          title: "Module 3: LLM-Powered Agents",
          topics: [
            "Integrating LLMs with Agents",
            "Prompt Engineering for Agents",
            "Tool Use and Function Calling",
            "RAG with Agent Systems",
            "Building Custom Agent Tools"
          ]
        },
        {
          title: "Module 4: Agent Deployment",
          topics: [
            "Agent Security and Safety",
            "Scaling Agent Systems",
            "Monitoring Agent Performance",
            "Agent Testing Strategies",
            "Real-World Agent Projects"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "🎯 Multi-Task AI Assistant Agent",
        description: "Build a sophisticated agent that researches, writes code, and answers questions autonomously",
        technologies: ["LangChain", "OpenAI API", "Vector Database", "Python"]
      },
      {
        title: "🔍 Autonomous Research Agent",
        description: "Create an agent that autonomously researches topics and generates comprehensive reports",
        technologies: ["LangGraph", "DuckDB", "Serper API", "React"]
      },
      {
        title: "⚡ Task Automation Agent Swarm",
        description: "Develop a swarm of collaborative agents for complex task automation workflows",
        technologies: ["AutoGen", "Python", "Docker", "Redis"]
      }
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Comprehensive Machine Learning training covering algorithms, implementation, and real-world applications.",
    icon: Network,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-blue-500 to-cyan-500",
    level: "Intermediate",
    features: ["ML Algorithms", "Data Science", "Python", "Scikit-learn"],
    outline: {
      modules: [
        {
          title: "Module 1: ML Fundamentals",
          topics: [
            "Introduction to Machine Learning",
            "Types of Machine Learning",
            "Setting Up ML Environment",
            "Python for Machine Learning",
            "Data Preprocessing Techniques"
          ]
        },
        {
          title: "Module 2: Supervised Learning",
          topics: [
            "Linear Regression",
            "Logistic Regression",
            "Decision Trees",
            "Random Forests",
            "Support Vector Machines"
          ]
        },
        {
          title: "Module 3: Unsupervised Learning",
          topics: [
            "K-Means Clustering",
            "Hierarchical Clustering",
            "Dimensionality Reduction",
            "Principal Component Analysis",
            "Anomaly Detection"
          ]
        },
        {
          title: "Module 4: Advanced ML Topics",
          topics: [
            "Ensemble Methods",
            "Cross-Validation Techniques",
            "Hyperparameter Tuning",
            "ML Model Deployment",
            "Real-World ML Project"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "🏠 House Price Prediction System",
        description: "Build a production-ready ML model to predict house prices with 90%+ accuracy",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Flask"]
      },
      {
        title: "📈 Customer Churn Prediction",
        description: "Develop an ML system to predict customer churn for telecom companies",
        technologies: ["Python", "Pandas", "Random Forest", "MLflow"]
      },
      {
        title: "📧 Spam Email Classifier",
        description: "Create a production-grade spam detection system with 99% precision",
        technologies: ["Python", "Naive Bayes", "NLP", "FastAPI"]
      }
    ]
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "Master deep learning techniques including CNNs, RNNs, and modern neural network architectures.",
    icon: Cpu,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-red-500 to-orange-500",
    level: "Advanced",
    features: ["Neural Networks", "CNN", "RNN", "TensorFlow/PyTorch"],
    outline: {
      modules: [
        {
          title: "Module 1: Deep Learning Basics",
          topics: [
            "Neural Networks Fundamentals",
            "Biological to Artificial Neural Networks",
            "Deep Learning vs Machine Learning",
            "Deep Learning Frameworks",
            "Building Your First Neural Network"
          ]
        },
        {
          title: "Module 2: Convolutional Neural Networks",
          topics: [
            "CNN Architecture",
            "Convolutional Layers",
            "Pooling Layers",
            "Image Classification with CNNs",
            "Object Detection Basics"
          ]
        },
        {
          title: "Module 3: Recurrent Neural Networks",
          topics: [
            "RNN Fundamentals",
            "Long Short-Term Memory (LSTM)",
            "Gated Recurrent Units (GRU)",
            "Sequence-to-Sequence Models",
            "Time Series Analysis"
          ]
        },
        {
          title: "Module 4: Modern Deep Learning",
          topics: [
            "Transfer Learning",
            "Generative Adversarial Networks",
            "Attention Mechanisms",
            "Transformer Architecture",
            "Deep Learning Capstone Project"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "👤 Face Recognition Attendance System",
        description: "Build a real-time face recognition system for automatic attendance tracking",
        technologies: ["Python", "TensorFlow", "OpenCV", "DeepFace"]
      },
      {
        title: "🫁 Lung Cancer Detection from X-Ray",
        description: "Develop a CNN model to detect lung cancer from chest X-ray images with 94% accuracy",
        technologies: ["Python", "Keras", "Medical Imaging", "CNN"]
      },
      {
        title: "✍️ Handwritten Digit Recognition App",
        description: "Create a deep learning application for handwritten digit recognition using MNIST",
        technologies: ["PyTorch", "Flask", "React", "MNIST Dataset"]
      }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build modern, responsive websites and web applications using industry-standard technologies.",
    icon: Code2,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-green-500 to-emerald-500",
    level: "Beginner Friendly",
    features: ["HTML", "CSS", "JavaScript", "React"],
    outline: {
      modules: [
        {
          title: "Module 1: Web Fundamentals",
          topics: [
            "Introduction to Web Development",
            "How the Web Works",
            "HTML5 Structure and Semantics",
            "CSS3 Styling and Layouts",
            "Responsive Design Principles"
          ]
        },
        {
          title: "Module 2: JavaScript Essentials",
          topics: [
            "JavaScript Syntax and Basics",
            "DOM Manipulation",
            "Events and Event Handling",
            "ES6+ Modern Features",
            "Asynchronous JavaScript"
          ]
        },
        {
          title: "Module 3: Frontend Development",
          topics: [
            "React Fundamentals",
            "Components and Props",
            "State Management",
            "React Hooks",
            "Building Interactive UIs"
          ]
        },
        {
          title: "Module 4: Full Stack Basics",
          topics: [
            "Introduction to APIs",
            "RESTful Services",
            "Connecting Frontend to Backend",
            "Web Development Best Practices",
            "Portfolio Website Project"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "🛒 E-Commerce Platform",
        description: "Build a full-featured e-commerce website with cart, checkout, and payment integration",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
      },
      {
        title: "💬 Real-Time Chat Application",
        description: "Develop a WhatsApp-like chat app with real-time messaging and media sharing",
        technologies: ["React", "Socket.io", "Express", "MongoDB"]
      },
      {
        title: "📋 Task Management System",
        description: "Create a Trello-like project management tool with drag-and-drop functionality",
        technologies: ["React", "TypeScript", "Redux Toolkit", "Firebase"]
      }
    ]
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    description: "Learn to process, analyze, and generate human language using modern NLP techniques.",
    icon: MessageSquare,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-amber-500 to-yellow-600",
    level: "Intermediate",
    features: ["Text Processing", "Transformers", "LLMs", "NLTK"],
    outline: {
      modules: [
        {
          title: "Module 1: NLP Fundamentals",
          topics: [
            "Introduction to NLP",
            "Text Preprocessing Techniques",
            "Tokenization and Normalization",
            "Stop Words and Stemming",
            "Building Text Pipelines"
          ]
        },
        {
          title: "Module 2: Text Analysis",
          topics: [
            "Bag of Words Model",
            "TF-IDF Analysis",
            "Word Embeddings",
            "Sentiment Analysis",
            "Named Entity Recognition"
          ]
        },
        {
          title: "Module 3: Deep Learning for NLP",
          topics: [
            "RNNs for Text",
            "LSTM and GRU for NLP",
            "Attention Mechanisms",
            "Transformer Architecture",
            "BERT and GPT Models"
          ]
        },
        {
          title: "Module 4: Advanced NLP Applications",
          topics: [
            "Text Generation",
            "Question Answering Systems",
            "Text Summarization",
            "Machine Translation",
            "NLP Capstone Project"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "😊 Sentiment Analysis Dashboard",
        description: "Build an interactive dashboard to analyze sentiment from social media posts in real-time",
        technologies: ["Python", "Transformers", "Streamlit", "Twitter API"]
      },
      {
        title: "📰 AI Article Summarizer",
        description: "Create an application that summarizes long articles using advanced NLP models",
        technologies: ["Python", "Hugging Face", "FastAPI", "React"]
      },
      {
        title: "⚖️ Named Entity Recognition System",
        description: "Develop an NER system to extract entities from legal and medical documents",
        technologies: ["Python", "Spacy", "BERT", "Flask"]
      }
    ]
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Master generative AI techniques including LLMs, image generation, and AI content creation.",
    icon: Sparkles,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-pink-500 to-rose-600",
    level: "Advanced",
    features: ["LLMs", "Image Generation", "Prompt Engineering", "Stable Diffusion"],
    outline: {
      modules: [
        {
          title: "Module 1: Generative AI Introduction",
          topics: [
            "What is Generative AI?",
            "Types of Generative Models",
            "History of Generative AI",
            "Applications of Gen AI",
            "Ethics in Generative AI"
          ]
        },
        {
          title: "Module 2: Large Language Models",
          topics: [
            "Understanding LLMs",
            "GPT Architecture",
            "Prompt Engineering Techniques",
            "Fine-tuning LLMs",
            "Building LLM Applications"
          ]
        },
        {
          title: "Module 3: Image Generation",
          topics: [
            "Diffusion Models Basics",
            "Stable Diffusion Fundamentals",
            "Image-to-Image Generation",
            "Inpainting and Outpainting",
            "Custom Model Training"
          ]
        },
        {
          title: "Module 4: Gen AI Projects",
          topics: [
            "Building Chatbots",
            "Content Generation Systems",
            "Multimodal AI Applications",
            "RAG Implementation",
            "Generative AI Capstone"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "✍️ AI-Powered Content Generator",
        description: "Build a multi-purpose content generation system for blogs, social media, and marketing",
        technologies: ["OpenAI API", "LangChain", "React", "Node.js"]
      },
      {
        title: "🎨 Custom Image Generator App",
        description: "Develop a Stable Diffusion-based image generator with custom model fine-tuning",
        technologies: ["Python", "Stable Diffusion", "Hugging Face", "Gradio"]
      },
      {
        title: "❓ RAG-Based Q&A System",
        description: "Create a document Q&A system using Retrieval-Augmented Generation with vector databases",
        technologies: ["LangChain", "Pinecone", "OpenAI", "FastAPI"]
      }
    ]
  },
  {
    id: "python-programming",
    title: "Python Programming",
    description: "Complete Python programming course from basics to advanced concepts.",
    icon: FileCode,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-yellow-500 to-amber-600",
    level: "Beginner Friendly",
    features: ["Python Basics", "OOP", "Data Structures", "Libraries"],
    outline: {
      modules: [
        {
          title: "Module 1: Python Basics",
          topics: [
            "Introduction to Python",
            "Installing and Setting Up Python",
            "Variables and Data Types",
            "Basic Operators",
            "Input and Output"
          ]
        },
        {
          title: "Module 2: Control Flow and Functions",
          topics: [
            "Conditional Statements",
            "Loops: for and while",
            "Functions Definition and Use",
            "Parameters and Return Values",
            "Lambda Functions"
          ]
        },
        {
          title: "Module 3: Data Structures",
          topics: [
            "Lists and List Operations",
            "Tuples and Sets",
            "Dictionaries",
            "List Comprehensions",
            "Working with Files"
          ]
        },
        {
          title: "Module 4: Advanced Python",
          topics: [
            "Object-Oriented Programming",
            "Classes and Objects",
            "Inheritance and Polymorphism",
            "Error Handling and Exceptions",
            "Python Libraries Overview"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "🌤️ Weather Data Scraper & Analyzer",
        description: "Build a complete application to fetch, analyze, and visualize weather data from APIs",
        technologies: ["Python", "Requests", "Pandas", "Matplotlib"]
      },
      {
        title: "🔐 Password Manager CLI Tool",
        description: "Develop a secure command-line password manager with encryption and auto-fill",
        technologies: ["Python", "Cryptography", "SQLite", "Click"]
      },
      {
        title: "📦 Inventory Management System",
        description: "Create a full-featured inventory system with GUI using Tkinter and database",
        technologies: ["Python", "SQLite", "Tkinter", "OOP"]
      }
    ]
  },
  {
    id: "cpp-programming",
    title: "C++ Programming",
    description: "Master C++ programming with hands-on projects and industry best practices.",
    icon: Terminal,
    duration: "2 Months",
    mode: "Online",
    gradient: "from-indigo-500 to-blue-600",
    level: "Intermediate",
    features: ["OOP", "Memory Management", "STL", "Algorithms"],
    outline: {
      modules: [
        {
          title: "Module 1: C++ Fundamentals",
          topics: [
            "Introduction to C++",
            "Setting Up Development Environment",
            "Basic Syntax and Structure",
            "Data Types and Variables",
            "Operators and Expressions"
          ]
        },
        {
          title: "Module 2: Control Flow and Functions",
          topics: [
            "Conditional Statements",
            "Switch Statements",
            "Loops in C++",
            "Functions and Prototypes",
            "Recursion Concepts"
          ]
        },
        {
          title: "Module 3: OOP in C++",
          topics: [
            "Classes and Objects",
            "Constructors and Destructors",
            "Encapsulation",
            "Inheritance",
            "Polymorphism and Virtual Functions"
          ]
        },
        {
          title: "Module 4: Advanced C++",
          topics: [
            "Pointers and References",
            "Memory Management",
            "Standard Template Library (STL)",
            "File Handling",
            "C++ Project Development"
          ]
        }
      ]
    },
    handsOnProjects: [
      {
        title: "🏦 Banking Management System",
        description: "Build a complete banking system with transactions, accounts, and reporting features",
        technologies: ["C++", "File Handling", "OOP", "STL"]
      },
      {
        title: "🐍 Snake Game with AI",
        description: "Develop a classic snake game with an intelligent AI opponent and smooth animations",
        technologies: ["C++", "SFML/SDL", "Game Development", "AI"]
      },
      {
        title: "📚 Library Management System",
        description: "Create a comprehensive library management system with search and book issuing",
        technologies: ["C++", "Data Structures", "File I/O", "OOP"]
      }
    ]
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCourseIcon = (id: string) => {
  const course = getCourseById(id);
  return course ? course.icon : Brain;
};

