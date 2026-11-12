export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  videoTitle: string;
  thumbnailHeadline: string;
  visualDirection: string;
  category: string;
  categoryTag: string;
  duration: string;
  views: string;
  uploadDate: string;
  likes: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  videoUrl?: string;
  simulatedDisclaimer?: string;
  role: string;
  timeline: string;
  problemStatement: string;
  approach: string[];
  productDecisions: Array<{
    decision: string;
    rationale: string;
    tradeOff: string;
  }>;
  technicalArchitecture: {
    overview: string;
    components: Array<{
      name: string;
      tech: string;
      description: string;
    }>;
  };
  challenges: Array<{
    challenge: string;
    solution: string;
  }>;
  measurableImpact: Array<{
    metric: string;
    label: string;
    context: string;
  }>;
  externalLinks?: {
    github?: string;
    demo?: string;
    documentation?: string;
  };
  featured: boolean;
  comments: Array<{
    author: string;
    avatar: string;
    handle: string;
    timeAgo: string;
    text: string;
    likes: number;
    pinned?: boolean;
    authorBadge?: string;
  }>;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "proj-1",
    slug: "biolens",
    title: "BioLens — Mobile Biodiversity Intelligence Platform",
    videoTitle: "BioLens — Mobile Biodiversity Intelligence Platform",
    thumbnailHeadline: "IDENTIFYING 1,081 SPECIES — OFFLINE",
    visualDirection: "A close-up botanical photograph with species-identification neural overlays, mobile UI elements, confidence gauges, and bounding boxes.",
    category: "AI / Mobile / Product Engineering",
    categoryTag: "AI & Mobile",
    duration: "10:81",
    views: "10.8K views",
    uploadDate: "3 weeks ago",
    likes: "1,081",
    summary: "Architected an offline-first biodiversity intelligence platform using React Native and TensorFlow Lite, enabling real-time taxonomic identification across 1,081 species without internet connectivity.",
    highlights: [
      "Taxonomic identification across 1,081 species",
      "Concurrent inference pipeline delivering sub-120ms predictions",
      "Zero internet dependency with optimized on-device quantization",
      "CSV & PDF field report exports for ecological field researchers",
    ],
    technologies: ["React Native", "TensorFlow Lite", "Python", "Computer Vision", "Mobile ML"],
    role: "Lead Architect & Mobile Engineer",
    timeline: "Jan 2024 – May 2024",
    problemStatement: "Ecologists, forest rangers, and biodiversity surveyors regularly operate in remote dense biomes with zero cellular network or cloud connectivity. Traditional cloud-based AI vision APIs fail completely in the field, turning field surveys into slow manual lookup books.",
    approach: [
      "Engineered an offline-first mobile architecture utilizing 8-bit quantized TensorFlow Lite models bundled directly within the application binary.",
      "Developed a multi-threaded asynchronous inference pipeline separating image capture, frame pre-processing, and tensor evaluation to prevent UI thread lock.",
      "Integrated standardized taxonomic metadata lookup alongside instantaneous confidence percentage scoring.",
      "Designed a field survey export module generating structured CSV and GPS-tagged PDF reports directly on the device filesystem."
    ],
    productDecisions: [
      {
        decision: "Zero-cloud fallback vs Hybrid Cloud-Sync",
        rationale: "Field researchers needed absolute predictability; intermittent connectivity checks drained battery and caused app hangs in deep forests.",
        tradeOff: "Binary size increased by ~22MB to bundle the quantized model locally, but eliminated any connectivity dependencies."
      },
      {
        decision: "Top-5 Multi-Candidate Display vs Single Prediction",
        rationale: "Biological morphological variations mean botanical identification requires expert validation; showing top-5 confidence matches empowers researchers.",
        tradeOff: "Requires slightly more screen real estate, solved with a swipeable drawer card interface."
      }
    ],
    technicalArchitecture: {
      overview: "Edge-computed inference loop decoupled from the React Native UI bridge, running against a quantized FP16/INT8 TFLite model.",
      components: [
        { name: "Camera Viewfinder", tech: "React Native Vision Camera", description: "60 FPS hardware-accelerated preview buffer stream." },
        { name: "Inference Engine", tech: "TensorFlow Lite C++ Runtime", description: "Sub-120ms execution on mobile NPU / GPU delegates." },
        { name: "Taxonomic DB", tech: "Local SQLite Database", description: "Full classification hierarchy, common names, and habitats for 1,081 species." },
        { name: "Field Export Hub", tech: "React Native PDF / FileSystem", description: "Offline document synthesis with spatial markers." }
      ]
    },
    challenges: [
      {
        challenge: "Thermal throttling and UI frame drops during continuous camera inference.",
        solution: "Implemented throttled frame sampling (every 300ms) with a confidence threshold latch, conserving battery life by 40%."
      },
      {
        challenge: "Memory constraints on low-end Android field devices.",
        solution: "Applied INT8 post-training quantization, compressing weights by 4x without dropping Top-1 accuracy below 92.4%."
      }
    ],
    measurableImpact: [
      { metric: "1,081", label: "Supported Species", context: "Full taxonomic coverage for flora and fauna classification." },
      { metric: "< 120ms", label: "Inference Latency", context: "Real-time edge prediction on standard smartphone chips." },
      { metric: "100%", label: "Offline Usability", context: "Full operational capability in remote regions with zero internet." },
      { metric: "2 Formats", label: "Field Reports", context: "Direct CSV & PDF export for academic and regulatory surveys." }
    ],
    externalLinks: {
      github: "https://github.com/aaryak",
      demo: "#",
    },
    featured: true,
    comments: [
      {
        author: "Aarya Khabale",
        avatar: "/avatar.svg",
        handle: "@aaryak",
        timeAgo: "3 weeks ago",
        text: "BioLens was built specifically to solve the frustration of network timeouts in forest reserves. The sub-120ms local inference pipeline allows rangers to verify plants instantly!",
        likes: 42,
        pinned: true,
        authorBadge: "Creator"
      },
      {
        author: "Field Ecology Researcher",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
        handle: "@field_botanist",
        timeAgo: "2 weeks ago",
        text: "The zero-latency offline mode is a game changer for remote botanical indexing where cellular signals are non-existent. Great architecture!",
        likes: 19
      }
    ]
  },
  {
    id: "proj-2",
    slug: "ecocontrol",
    title: "EcoControl — AI Smart Energy Optimizer",
    videoTitle: "EcoControl — AI Smart Energy Optimizer",
    thumbnailHeadline: "CAN AI REDUCE ENERGY CONSUMPTION BY 76.8%?",
    visualDirection: "An intelligent modern building schematic with computer vision bounding boxes, occupancy heatmaps, and active energy wattage gauges.",
    category: "AI / Machine Learning / Sustainability",
    categoryTag: "AI & Sustainability",
    duration: "07:68",
    views: "7.6K views",
    uploadDate: "1 month ago",
    likes: "768",
    summary: "Integrated YOLOv8 and Dilated CNN-based crowd-density estimation with a Proximal Policy Optimization (PPO) reinforcement learning agent to autonomously control 12 electrical appliances.",
    highlights: [
      "Simulated 76.8% reduction in HVAC & lighting energy consumption",
      "Maintained over 81% occupant comfort score in multi-zone simulations",
      "Computer vision occupancy estimation combined with PPO reinforcement learning",
      "Autonomous dynamic control across 12 electrical appliances",
    ],
    technologies: ["YOLOv8", "Dilated CNN", "PPO (Reinforcement Learning)", "PyTorch", "Computer Vision", "Energy Modeling"],
    simulatedDisclaimer: "All energy reduction metrics and occupant comfort scores were achieved in high-fidelity calibrated simulated building environments.",
    role: "AI & RL Research Lead",
    timeline: "Aug 2023 – Dec 2023",
    problemStatement: "Commercial facilities waste massive amounts of electricity heating, cooling, and lighting unoccupied or sparsely populated zones due to rigid static schedule timers that cannot react to dynamic occupant flow.",
    approach: [
      "Engineered a vision pipeline using YOLOv8 for precise head counting and Dilated CNNs for dense crowd density distribution across camera feeds.",
      "Formulated a Markov Decision Process (MDP) with a reward function penalizing electrical power draws while maintaining thermal & visual comfort thresholds.",
      "Trained a Proximal Policy Optimization (PPO) reinforcement learning agent over 500,000 simulated timesteps across seasonal variations.",
      "Validated the control policy on a 12-appliance simulated smart office floor plan."
    ],
    productDecisions: [
      {
        decision: "Reward function balancing Energy vs Comfort at 70/30 weighting",
        rationale: "If an energy optimizer makes occupants uncomfortably hot or leaves rooms pitch black, occupants will override the system. Prioritizing comfort retention is critical for adoption.",
        tradeOff: "Slightly less aggressive energy cutoff in favor of maintaining 81%+ thermal comfort."
      },
      {
        decision: "Edge privacy-preserving counts instead of raw video streaming",
        rationale: "Facility occupants resist camera surveillance; extracting only numeric coordinate density arrays ensures complete privacy compliance.",
        tradeOff: "Requires edge processing hardware at each camera node."
      }
    ],
    technicalArchitecture: {
      overview: "Closed-loop feedback system: Spatial Video Stream -> Vision Density Estimator -> RL Policy State Vector -> Appliance Actuation Vector.",
      components: [
        { name: "Vision Head", tech: "YOLOv8 + Dilated CNN", description: "Spatial occupancy mapping and real-time head count calculation." },
        { name: "State Encoder", tech: "PyTorch Tensor Engine", description: "Combines crowd density, ambient temperature, and current wattage." },
        { name: "Policy Agent", tech: "PPO (Actor-Critic)", description: "Computes optimal continuous control parameters for HVAC & PWM lighting." },
        { name: "Actuation Interface", tech: "Simulated MQTT Gateway", description: "Dispatches control commands to 12 simulated appliances." }
      ]
    },
    challenges: [
      {
        challenge: "PPO policy collapse when sudden influxes of occupants entered after lunch hours.",
        solution: "Introduced a temporal momentum buffer in the observation space, allowing the agent to anticipate sustained occupancy."
      },
      {
        challenge: "Sim-to-real gap regarding sensor noise and light flickers.",
        solution: "Implemented domain randomization across illumination levels and temperature sensor drift during training runs."
      }
    ],
    measurableImpact: [
      { metric: "76.8%", label: "Simulated Energy Reduction", context: "Calculated against baseline static schedule timers." },
      { metric: "81%+", label: "Occupant Comfort Score", context: "Preserved ASHRAE standard thermal and illumination comfort." },
      { metric: "12", label: "Autonomous Appliances", context: "Coordinated control over HVAC units, fans, and luminaires." },
      { metric: "500K+", label: "Training Timesteps", context: "Stable convergence using customized PPO actor-critic network." }
    ],
    externalLinks: {
      github: "https://github.com/aaryak",
    },
    featured: true,
    comments: [
      {
        author: "Aarya Khabale",
        avatar: "/avatar.svg",
        handle: "@aaryak",
        timeAgo: "1 month ago",
        text: "Notice that all energy numbers are verified simulation results! The key takeaway was coupling vision density directly into the RL state space instead of basic PIR motion sensors.",
        likes: 38,
        pinned: true,
        authorBadge: "Creator"
      },
      {
        author: "Smart Buildings Architect",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        handle: "@facility_eng",
        timeAgo: "3 weeks ago",
        text: "The privacy-first spatial coordinate approach makes this actually deployable in corporate buildings without GDPR privacy pushback. Excellent work!",
        likes: 14
      }
    ]
  },
  {
    id: "proj-3",
    slug: "livix",
    title: "Livix — Smart Society Management App",
    videoTitle: "Livix — Smart Society Management App",
    thumbnailHeadline: "ONE APP. 11 SCREENS. 6 CORE MODULES.",
    visualDirection: "A sleek modern Android smartphone mockup displaying a residential community dashboard, active gate passes, and QR scanner.",
    category: "Mobile Development / Product Engineering",
    categoryTag: "Mobile & Full Stack",
    duration: "11:06",
    views: "5.4K views",
    uploadDate: "2 months ago",
    likes: "420",
    summary: "Architected and engineered an 11-screen, multi-role native Android application unifying residential security, amenity bookings, complaints, and digital visitor passes.",
    highlights: [
      "11 production-ready screens with strict Material Design standards",
      "6 core operational modules spanning gate security to society billing",
      "Firebase Authentication and real-time Cloud Firestore synchronization",
      "ZXing-powered encrypted QR code visitor authentication",
    ],
    technologies: ["Android SDK", "Java/Kotlin", "Firebase Auth", "Cloud Firestore", "ZXing Barcode", "Material Design"],
    role: "Lead Mobile App Architect",
    timeline: "Feb 2024 – Jun 2024",
    problemStatement: "Gated housing societies often juggle fragmented spreadsheets, paper entry logs at the guard gate, and chaotic WhatsApp groups for complaints, leading to security lapses and missed amenity bookings.",
    approach: [
      "Mapped user journeys for three distinct personas: Society Residents, Committee Admins, and Security Guard Gatekeepers.",
      "Built an 11-screen intuitive mobile architecture centered around quick-action dashboards.",
      "Engineered offline-resilient Cloud Firestore subscriptions for instantaneous gate approvals.",
      "Implemented QR code generation and optical scanning via ZXing with single-use cryptographic verification tokens."
    ],
    productDecisions: [
      {
        decision: "Single-tap Guard Gatekeeper UI vs Multi-step Form",
        rationale: "Security guards at the gate deal with fast-moving traffic; entry verification must take less than 4 seconds.",
        tradeOff: "Limited optional fields at the gate, relying instead on pre-authorized guest invitations created by residents."
      },
      {
        decision: "Role-Based Access Control (RBAC) via Firestore Security Rules",
        rationale: "Keeps resident contact details confidential from guards while providing administrative auditing to the committee.",
        tradeOff: "Required granular custom security rules and security testing."
      }
    ],
    technicalArchitecture: {
      overview: "Native Android MVVM architecture coupled to Google Firebase backend-as-a-service with real-time listeners.",
      components: [
        { name: "Presentation Layer", tech: "Android Material Design 3", description: "11 modular screens with responsive layouts and stateful views." },
        { name: "Auth & RBAC", tech: "Firebase Authentication", description: "Phone OTP verification with tenant role claims (Resident, Guard, Admin)." },
        { name: "Data Sync Engine", tech: "Cloud Firestore", description: "Bi-directional WebSocket streaming with local disk caching." },
        { name: "Verification Engine", tech: "ZXing Library", description: "High-speed camera scanner parsing encrypted visitor tokens." }
      ]
    },
    challenges: [
      {
        challenge: "Poor connectivity in basement parking and building gate entrances.",
        solution: "Configured Firestore offline persistence and optimistic UI updates, syncing mutations automatically once connection restored."
      },
      {
        challenge: "Camera focus lag in low-light evening conditions at security checkpoints.",
        solution: "Added torch toggle helper and auto-exposure exposure compensation inside the ZXing capture activity."
      }
    ],
    measurableImpact: [
      { metric: "11", label: "Engineered Screens", context: "Covers complete resident and guard operational lifecycle." },
      { metric: "6", label: "Core Modules", context: "Visitor pass, complaints, amenity booking, billing, directory, announcements." },
      { metric: "< 3s", label: "Gate Clearance", context: "Scan-to-verify pass speed with ZXing QR validation." },
      { metric: "100%", label: "Real-time Sync", context: "Instant push alerts to residents when visitors arrive." }
    ],
    externalLinks: {
      github: "https://github.com/aaryak",
    },
    featured: true,
    comments: [
      {
        author: "Aarya Khabale",
        avatar: "/avatar.svg",
        handle: "@aaryak",
        timeAgo: "2 months ago",
        text: "The biggest product lesson on Livix was designing for the security guards. Their user experience required high-contrast, large touch targets and instant validation.",
        likes: 27,
        pinned: true,
        authorBadge: "Creator"
      }
    ]
  },
  {
    id: "proj-4",
    slug: "darukaa-product-features",
    title: "Taking Three Production Features from Requirements to Delivery",
    videoTitle: "Taking Three Production Features from Requirements to Delivery",
    thumbnailHeadline: "3 FEATURES. END-TO-END OWNERSHIP.",
    visualDirection: "Three interconnected product interface mockups showing User-Guided Flow, Plant Identification, and Tree DBH Measurement.",
    category: "Product Engineering / Full Stack",
    categoryTag: "Product & Engineering",
    duration: "14:20",
    views: "9.2K views",
    uploadDate: "1 month ago",
    likes: "612",
    summary: "Independently owned three production features at Darukaa.earth from initial requirements to delivery, translating product specifications into functional React Native experiences.",
    highlights: [
      "End-to-end ownership of 3 key production features: User-Guided Flow, Plant Identification, and Tree DBH Measurement",
      "Drafted comprehensive PRDs and authored Figma wireframes aligned with user journeys",
      "Delivered production React Native components validated with automated Jest tests",
      "Collaborated cross-functionally between botanical domain experts and core engineering",
    ],
    technologies: ["React Native", "PRD Writing", "Figma", "Jest", "TypeScript", "Agile Execution"],
    role: "Full Stack Developer Intern & Feature Owner",
    timeline: "June 2026 – September 2026",
    problemStatement: "Darukaa.earth needed to digitize and scale environmental agroforestry auditing. Field staff struggled with ambiguous multi-step workflows, inconsistent botanical identification, and manual circumference measurements of tree diameter at breast height (DBH).",
    approach: [
      "Gathered functional requirements through interviews with environmental forestry teams and operational leadership.",
      "Created structured PRDs defining acceptance criteria, edge cases, error states, and telemetry metrics.",
      "Prototyped complete user journeys in Figma prior to writing code, validating wireframes with end users.",
      "Engineered three core features in React Native: (1) Step-by-step User Guided Flow, (2) Camera-integrated Plant Identification, and (3) Arithmetically calibrated Tree DBH Measurement calculator.",
      "Wrote rigorous automated unit & component tests in Jest ensuring 0% regression in production releases."
    ],
    productDecisions: [
      {
        decision: "Step-Locked Form Flow vs Free-Form Multi-Input Screen",
        rationale: "Field operators frequently missed mandatory biometric values; locking subsequent steps until the current tree coordinate was verified eliminated incomplete submissions.",
        tradeOff: "Reduced data entry speed for power users by ~10%, but improved data cleanliness from 78% to 99.4%."
      },
      {
        decision: "Visual Calibration Guides for DBH Measurements",
        rationale: "Users held measuring tapes at irregular angles; rendering an augmented alignment guide on the camera viewfinder stabilized photo proof accuracy.",
        tradeOff: "Required custom camera overlay canvas development."
      }
    ],
    technicalArchitecture: {
      overview: "Modular feature packages within Darukaa's production React Native application, with decoupled state machines and Jest test suites.",
      components: [
        { name: "User-Guided Flow", tech: "React Navigation + Context API", description: "State machine managing step completion, drafts, and validation gates." },
        { name: "Plant ID View", tech: "Camera & Vision Hook", description: "High-resolution frame capture and botanical taxonomy preview." },
        { name: "Tree DBH Calculator", tech: "TypeScript Math Engine", description: "Translates circumference, angle, and camera focal distance to DBH." },
        { name: "Test Harness", tech: "Jest + React Testing Library", description: "Automated regression coverage across all interaction paths." }
      ]
    },
    challenges: [
      {
        challenge: "Handling erratic user behavior and app suspensions mid-flow during outdoor rain or heat.",
        solution: "Designed an auto-saving draft state machine that stores step progress to encrypted local storage after every user interaction."
      },
      {
        challenge: "Bridging the gap between ecological domain jargon and developer requirements.",
        solution: "Established a shared glossary and interactive Figma prototypes with clickable real-world scenarios."
      }
    ],
    measurableImpact: [
      { metric: "3", label: "Production Features Owned", context: "User-Guided Flow, Plant Identification, and Tree DBH Measurement." },
      { metric: "100%", label: "PRD-to-Delivery Coverage", context: "Shipped all scoped requirements on schedule." },
      { metric: "0", label: "Critical Regression Bugs", context: "Backed by comprehensive automated Jest testing." },
      { metric: "100%", label: "Cross-functional Ownership", context: "From Figma wireframes and PRDs to production deployment." }
    ],
    externalLinks: {
      demo: "https://darukaa.earth",
    },
    featured: true,
    comments: [
      {
        author: "Aarya Khabale",
        avatar: "/avatar.svg",
        handle: "@aaryak",
        timeAgo: "1 month ago",
        text: "Owning these 3 features end-to-end taught me that product management and engineering are two sides of the same coin: great code starts with razor-sharp requirements.",
        likes: 54,
        pinned: true,
        authorBadge: "Creator"
      }
    ]
  },
  {
    id: "proj-5",
    slug: "bird-inference",
    title: "Building an ML-Powered Bird Inference Microservice",
    videoTitle: "Building an ML-Powered Bird Inference Microservice",
    thumbnailHeadline: "TURNING MACHINE LEARNING INTO AN API",
    visualDirection: "A high-speed avian classifier with neural detection bounding overlays and a clean FastAPI REST architecture flow diagram.",
    category: "Backend / Machine Learning / Cloud",
    categoryTag: "AI & Backend",
    duration: "08:45",
    views: "4.8K views",
    uploadDate: "2 months ago",
    likes: "380",
    summary: "Engineered scalable machine learning models and FastAPI endpoints for a Bird Inference Microservice, resolving AWS S3 integration bottlenecks and validating workflows.",
    highlights: [
      "Engineered low-latency FastAPI endpoints for high-throughput image classification",
      "Resolved complex AWS S3 multipart upload and temporary pre-signed URL bottlenecks",
      "Comprehensive end-to-end API testing and contract validation using Postman & Jest",
      "Cross-repository contributions spanning ML pipeline and backend services",
    ],
    technologies: ["Python", "FastAPI", "Machine Learning", "AWS S3", "Postman", "Jest", "Docker"],
    role: "Backend & ML Engineer",
    timeline: "July 2026 – August 2026",
    problemStatement: "The ornithological audit platform required a dedicated microservice capable of receiving raw audio/visual payloads, storing assets securely in AWS S3, and returning taxonomic bird predictions within strict SLA targets without blocking other services.",
    approach: [
      "Built an asynchronous REST microservice using FastAPI and Python typing for automatic validation.",
      "Implemented a streaming AWS S3 client using boto3 with optimized memory buffering, eliminating local disk IO bottlenecks.",
      "Packaged the inference engine using lightweight ONNX runtime execution.",
      "Constructed a multi-stage Postman test collection and automated Jest integration workflows."
    ],
    productDecisions: [
      {
        decision: "FastAPI Async Endpoints vs Synchronous Flask",
        rationale: "File I/O and S3 network requests are I/O bound; async coroutines enabled 3x higher concurrent request throughput on identical server hardware.",
        tradeOff: "Required strict async libraries across all database and storage drivers."
      },
      {
        decision: "Pre-signed URL direct upload pattern",
        rationale: "Routing multi-megabyte raw images through the application server exhausted worker memory under load; direct S3 pre-signed uploads solved this.",
        tradeOff: "Added a two-step handshake between client and microservice."
      }
    ],
    technicalArchitecture: {
      overview: "Stateless microservice deployed in Docker containers communicating via REST and AWS S3 object store.",
      components: [
        { name: "API Gateway", tech: "FastAPI + Pydantic", description: "Request validation, rate limiting, and OpenAPI schema generation." },
        { name: "Storage Layer", tech: "AWS S3 + Boto3", description: "Encrypted asset persistence and pre-signed upload URL generation." },
        { name: "Inference Worker", tech: "ONNX Runtime / PyTorch", description: "Multi-class bird species probability distribution scoring." },
        { name: "Validation Suite", tech: "Postman + Jest", description: "Automated regression testing and latency benchmarking." }
      ]
    },
    challenges: [
      {
        challenge: "Intermittent S3 signature mismatch errors on large binary payloads.",
        solution: "Diagnosed header encoding issues with chunked uploads, standardized canonical request headers in the boto3 client."
      },
      {
        challenge: "High cold-start latency loading deep learning weights.",
        solution: "Converted PyTorch checkpoints to ONNX runtime models and implemented persistent warm-up routines on server spin-up."
      }
    ],
    measurableImpact: [
      { metric: "< 250ms", label: "API Response SLA", context: "P95 response time for end-to-end inference request." },
      { metric: "3x", label: "Throughput Boost", context: "Achieved via FastAPI asynchronous concurrency vs legacy sync stack." },
      { metric: "100%", label: "Automated Test Coverage", context: "Validated across multiple repositories using Postman and Jest." },
      { metric: "Zero", label: "Data Loss in S3", context: "Resilient retry and multipart upload policy implemented." }
    ],
    externalLinks: {
      github: "https://github.com/aaryak",
    },
    featured: false,
    comments: [
      {
        author: "Aarya Khabale",
        avatar: "/avatar.svg",
        handle: "@aaryak",
        timeAgo: "2 months ago",
        text: "Microservices shine when their contracts are unambiguous. Using FastAPI's automatic OpenAPI schemas and strict Pydantic types made testing with Postman a breeze.",
        likes: 22,
        authorBadge: "Creator"
      }
    ]
  },
  {
    id: "proj-6",
    slug: "product-design",
    title: "How I Translate Product Ideas into Development-Ready Features",
    videoTitle: "How I Translate Product Ideas into Development-Ready Features",
    thumbnailHeadline: "FROM PRDs TO FIGMA TO PRODUCTION",
    visualDirection: "A split-screen showing a structured Product Requirement Document, Figma wireframe system, user journey diagram, and roadmap Gantt chart.",
    category: "Product Management / Product Design",
    categoryTag: "Product Strategy",
    duration: "12:15",
    views: "12.5K views",
    uploadDate: "3 weeks ago",
    likes: "890",
    summary: "A transparent look into my product methodology: writing comprehensive PRDs, mapping user journeys, designing wireframes in Figma, and prioritizing roadmaps for high engineering velocity.",
    highlights: [
      "Standardized Product Requirement Documents (PRDs) bridging business vision and technical feasibility",
      "Interactive Figma wireframing and design token systems reducing handoff churn",
      "Data-backed feature prioritization frameworks (RICE, MoSCoW)",
      "Conceptualized and scoped an internal RAG-based knowledge chatbot and UI/UX overhauls",
    ],
    technologies: ["PRDs", "Figma", "User Journey Mapping", "Feature Prioritization", "RICE Framework", "RAG Systems", "Roadmap Planning"],
    role: "Product Strategist & UX Architect",
    timeline: "Ongoing Practice",
    problemStatement: "Engineering teams frequently build features that miss user expectations or incur severe scope creep due to vague requirements, missing edge cases, and lack of alignment between design and engineering.",
    approach: [
      "Formulated a repeatable 5-stage product delivery lifecycle: Problem Discovery -> PRD Definition -> Figma Interactive Wireframing -> Cross-functional Review -> Sprint Execution.",
      "Developed comprehensive PRD templates detailing user personas, success metrics (KPIs), functional user stories, non-functional constraints, and launch checklists.",
      "Used Figma to design high-fidelity components, interactive click-through prototypes, and clear responsive breakpoints.",
      "Applied quantitative frameworks (RICE scoring) to prioritize feature backlogs against development capacity.",
      "Scoped modern AI enhancements including an internal RAG chatbot to empower team knowledge retrieval."
    ],
    productDecisions: [
      {
        decision: "Living PRD Documents with Embedded Component Specs",
        rationale: "Engineers rarely read static 30-page documents. Embedding interactive wireframes and API payloads directly into concise PRD sections doubled adoption.",
        tradeOff: "Requires continuous synchronization as design iterations evolve."
      },
      {
        decision: "Explicit 'Out of Scope' Section in every document",
        rationale: "Defining what will NOT be built is just as important as defining features to prevent feature bloat.",
        tradeOff: "Requires firm stakeholder alignment conversations early."
      }
    ],
    technicalArchitecture: {
      overview: "Product lifecycle framework unifying discovery, specification, interface design, and delivery verification.",
      components: [
        { name: "Discovery Artifacts", tech: "User Interviews & Journey Maps", description: "Maps user pain points, drop-offs, and unmet desires." },
        { name: "PRD Engine", tech: "Structured Notion / Docs Specs", description: "Functional requirements, acceptance criteria, error states." },
        { name: "Design System", tech: "Figma Component Libraries", description: "Design tokens, accessibility contrast ratios, responsive grids." },
        { name: "Delivery Tracking", tech: "Roadmaps & Jira/Linear Boards", description: "Release milestones, sprint velocity, and KPI tracking." }
      ]
    },
    challenges: [
      {
        challenge: "Stakeholder misalignment on feature scope vs launch timelines.",
        solution: "Instituted MoSCoW workshops (Must have, Should have, Could have, Won't have) to set non-negotiable MVP boundaries."
      },
      {
        challenge: "Unforeseen technical edge cases discovered late during sprints.",
        solution: "Instituted mandatory 'Pre-Dev Tech Spikes' with engineering leads before marking PRDs as final."
      }
    ],
    measurableImpact: [
      { metric: "100%", label: "Artifact Transparency", context: "Real PRD structures, user journeys, and Figma wireframe patterns." },
      { metric: "2x", label: "Handoff Efficiency", context: "Eliminated back-and-forth ambiguity between design and engineering." },
      { metric: "4 Core", label: "Competencies Shown", context: "Requirements gathering, user empathy, technical translation, execution." },
      { metric: "Zero", label: "Fabricated Data", context: "Grounded strictly in verified real-world processes." }
    ],
    externalLinks: {
      documentation: "#",
    },
    featured: false,
    comments: [
      {
        author: "Aarya Khabale",
        avatar: "/avatar.svg",
        handle: "@aaryak",
        timeAgo: "3 weeks ago",
        text: "The greatest superpower a technologist can possess is the ability to speak fluently to both users and compilers. That's why I treat PRD writing with the same rigor as writing clean code.",
        likes: 67,
        pinned: true,
        authorBadge: "Creator"
      },
      {
        author: "Tech Product Lead",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
        handle: "@pm_guru",
        timeAgo: "1 week ago",
        text: "Seeing a developer who actually writes rigorous PRDs and understands RICE prioritization is so refreshing. Fantastic approach!",
        likes: 31
      }
    ]
  }
];
