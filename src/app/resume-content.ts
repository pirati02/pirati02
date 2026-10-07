export interface ExperienceEntry {
  date: string
  role: string
  company: string
  points: string[]
  stack: string
}

export interface SkillGroupEntry {
  title: string
  items: string[]
}

export interface SelectedSystem {
  name: string
  summary: string
}

export interface ToolkitEntry {
  title: string
  body: string
}

export const profile: string[] = [
  'Lead software engineer with 10+ years of experience designing and modernizing scalable, cloud-native platforms across SaaS, fintech, healthcare, and enterprise domains.',
  'Expert in backend platform engineering with .NET, Azure, Domain-Driven Design, CQRS, event-driven architecture, and Clean Architecture.',
  'Drives AI-native engineering with Claude Code across the full delivery lifecycle, and introduced spec-driven development with OpenSpec for shared team context.',
]

export const selectedSystems: SelectedSystem[] = [
  {
    name: 'Sentinel Systems',
    summary:
      'Multi-tenant operations platform serving hundreds of self-storage facilities.',
  },
  {
    name: 'Climb',
    summary:
      'Cloud software helping research teams accelerate preclinical in vivo studies.',
  },
  {
    name: 'Privilege Management Console',
    summary:
      'Central platform for controlling privileged access across distributed estates.',
  },
  {
    name: 'MyPortfolio',
    summary:
      'Insurance CRM for sales, underwriting, planning, and administration.',
  },
]

export const coreSkills: SkillGroupEntry[] = [
  {
    title: 'Backend',
    items: [
      '.NET 8/9/10',
      'C#',
      'ASP.NET Core',
      'EF Core',
      'Dapper',
      'gRPC',
      'GraphQL',
      'OData',
      'SignalR',
      'Hangfire',
    ],
  },
  {
    title: 'Architecture',
    items: [
      'DDD',
      'CQRS',
      'Event-driven',
      'Clean Architecture',
      'Microservices',
      'Multi-tenant SaaS',
    ],
  },
  {
    title: 'Frontend & mobile',
    items: ['Angular', 'TypeScript', 'React', 'Redux', 'Kotlin', 'Xamarin Forms'],
  },
  {
    title: 'Testing & quality',
    items: ['NUnit', 'SpecFlow', 'Selenium', 'Application Insights', 'Sentry'],
  },
]

export const experiences: ExperienceEntry[] = [
  {
    date: 'July 2024 — Present',
    role: 'Lead Software Engineer',
    company: 'Limestone Digital / Sentinel Systems',
    points: [
      'Drive modernization of a multi-tenant SaaS platform managing bookings, payments, access control, and security across hundreds of self-storage facilities.',
      'Design and implement core platform capabilities with Clean Architecture, Domain-Driven Design, and CQRS.',
      'Migrate legacy components into a cloud-native Azure environment built on App Services, Functions, Service Bus, PostgreSQL clusters, and Redis.',
      'Established an AI-native lifecycle with Claude Code, used daily from requirements and tech-debt analysis through planning, implementation, review, and delivery.',
      'Introduced spec-driven development with OpenSpec, keeping versioned business and technical specs in the repositories so the team and AI agents share context.',
      'Lead reviews, mentor engineers, and establish engineering standards across an 11-person development team.',
    ],
    stack:
      '.NET 8/9 · C# · Angular · TypeScript · DDD · CQRS · Clean Architecture · Azure (App Services, Functions, Service Bus, PostgreSQL, Redis, Key Vault, Front Door, Blob Storage, Application Insights) · SignalR · Selenium · SpecFlow · NUnit · Sentry · GitHub Actions · Docker · Claude Code · OpenSpec',
  },
  {
    date: 'May 2023 — July 2024',
    role: 'Senior Software Engineer',
    company: 'Quantori / RockStep Solutions',
    points: [
      'Built features for Climb, a cloud platform that helps researchers unlock the value of preclinical data and accelerate in vivo studies.',
      'Worked with Azure SQL storage and database sharding across a multi-tenant research dataset.',
      'Delivered in an agile team of ten developers, five QA engineers, a PM, and a BA, covering code review and unit testing.',
    ],
    stack:
      'Azure SQL · database sharding · Azure Functions · Blob Storage · MemoryCache · Microsoft OData · Angular (Breeze) · Azure DevOps CI/CD',
  },
  {
    date: 'September 2022 — April 2023',
    role: 'Senior Software Engineer',
    company: 'EPAM Systems / Title Resource Group',
    points: [
      'Developed features and components for a real-estate platform at MVP stage.',
      'Built Web APIs in C# and .NET 6 backed by Azure SQL storage.',
      'Identified and addressed performance bottlenecks, and produced technical documentation for reference and reporting.',
    ],
    stack:
      '.NET 6 · C# · Dapper · Azure SQL · Azure Functions · Blob Storage · App Service · Application Insights · Swagger · HealthChecks · Azure DevOps CI/CD · Jira',
  },
  {
    date: 'April 2022 — August 2022',
    role: 'Senior Software Engineer',
    company: 'EPAM Systems / Thomson Reuters',
    points: [
      'Delivered features for Onvio, a cloud-native tax and accounting platform covering document management, time and billing, client collaboration, and project management.',
      'Implemented WCAG accessibility rules across the frontend.',
      'Identified and addressed performance bottlenecks, reviewed code, and wrote unit tests.',
    ],
    stack:
      'Angular 10+ · AngularJS · NgRx · TypeScript · HTML5 · SCSS · PostgreSQL · Karma · Jasmine · Azure DevOps · JFrog',
  },
  {
    date: 'July 2021 — April 2022',
    role: 'Senior Software Engineer',
    company: 'EPAM Systems / BeyondTrust',
    points: [
      'Planned and implemented backend and frontend features for Privilege Management Console, a central platform for managing privileged access.',
      'Built a third-party API and implemented Okta SCIM 2.0 integration.',
      'Analyzed and improved performance, resolved defects, and wrote automation, unit, and integration tests.',
    ],
    stack:
      '.NET 5 · C# · Angular · IdentityServer4 · EF Core · Quartz · Azure SQL · Blob Storage · Key Vault · Docker · Azure DevOps · SpecFlow · Selenium',
  },
  {
    date: 'December 2019 — May 2021',
    role: 'Lead Software Engineer',
    company: 'GPI Holding',
    points: [
      'Architected, designed, and developed a high-scale insurance CRM with sales, underwriting, planning, and administration modules.',
      'Led architecture discussions and mentored a cross-functional team of backend, frontend, QA, and design engineers.',
      'Delivered the platform on .NET Core with CQRS, MediatR, gRPC, SignalR, and Hangfire.',
    ],
    stack:
      'C# .NET Core 3.1 · PostgreSQL · Redis · IdentityServer · SignalR · Firebase Messaging · Hangfire · gRPC · Ocelot · MediatR · CQRS · Angular 9 · Docker · CI/CD',
  },
  {
    date: 'February 2018 — January 2020',
    role: 'Senior Software Engineer',
    company: 'GPI Holding',
    points: [
      'Designed the architecture for MyGPI, a mobile app for buying policies, booking doctor visits, and handling medical and auto reimbursements.',
      'Implemented Web APIs with WCF service references along with the supporting business logic and mobile UI.',
      'Wrote MyGPI.Stepper in Kotlin using Android sensors and integrated it with the Xamarin application.',
    ],
    stack:
      'C# .NET Core 2.0 · WCF · SQL Server · Xamarin.Forms · Kotlin · Firebase Messaging & Analytics · App Center · CI/CD',
  },
  {
    date: 'June 2017 — June 2018',
    role: 'Software Engineer',
    company: '2G / Servier',
    points: [
      'Built a pharmacy document import and export web application for client and company use.',
      'Implemented ASP.NET MVC Web APIs and integrated them with a React/Redux frontend.',
    ],
    stack: 'ASP.NET MVC Web API · C# · React · Redux · SQL Server · Jira',
  },
  {
    date: 'May 2016 — June 2017',
    role: 'Xamarin Mobile Developer',
    company: 'Wandio / Unicard',
    points: [
      'Implemented Android and iOS clients for a loyalty app covering point collection, balance and statement checks, and gift ordering.',
      'Participated in BLE device integration alongside REST API integration.',
    ],
    stack: 'C# · Xamarin.Native · Android SDK · iOS SDK · BLE · Jira',
  },
  {
    date: 'February 2015 — May 2016',
    role: 'Junior Software Engineer',
    company: 'BlueBerry Development',
    points: [
      'Built the admin panel for 360 Advertise in a two-developer team.',
    ],
    stack: 'C# · ASP.NET MVC · SQL Server',
  },
]

export const toolkit: ToolkitEntry[] = [
  {
    title: 'Azure',
    body: 'App Services, Functions, Service Bus, PostgreSQL, Azure SQL, Redis Cache, Key Vault, App Configuration, Front Door, Blob Storage, Application Insights',
  },
  {
    title: 'Delivery',
    body: 'Docker, GitHub Actions, Azure DevOps, CI/CD pipelines, automated testing, observability with Application Insights and Sentry',
  },
  {
    title: 'AI engineering',
    body: 'Claude Code, OpenSpec, spec-driven development, AI-assisted review, prompt and context engineering',
  },
]
