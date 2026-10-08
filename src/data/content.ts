import avatar from '../assets/images/profile-hero.jpeg'
import phone1 from '../assets/images/phone-1.svg'
import phone2 from '../assets/images/phone-2.svg'
import phone3 from '../assets/images/phone-3.svg'
import phone4 from '../assets/images/phone-4.svg'
import phone5 from '../assets/images/phone-5.svg'
import phone6 from '../assets/images/phone-6.svg'
import phone7 from '../assets/images/phone-7.svg'
import phone8 from '../assets/images/phone-8.svg'
import phone9 from '../assets/images/phone-9.svg'
import phone10 from '../assets/images/phone-10.svg'
import phone11 from '../assets/images/phone-11.svg'
import article1 from '../assets/images/article-1.svg'
import article2 from '../assets/images/article-2.svg'
import article3 from '../assets/images/article-3.svg'

/**
 * All personal/editable content lives here. Replace values (and the images in
 * src/assets/images) to make this portfolio your own — components never
 * hardcode copy or asset paths.
 */

export const personal = {
  name: 'Asif Ali Sheikh',
  role: 'Mobile Developer',
  resumeUrl: '/myresume.pdf',
  profileImage: avatar,
}

export const heroContent = {
  typedPhrases: [
    'Code is my canvas, and design is my palette.',
    'Together, we build experiences people love.',
    'Transforming ideas into mobile masterpieces.',
  ],
  headingLines: ['Building Digital', 'Products for Mobile & Web', 'Native Apps SDKs,', '& Systems that Scale'],
  ctaLabel: 'Download CV',
  phoneScreens: [phone1, phone2, phone3, phone4, phone5, phone6, phone7, phone8, phone9, phone10, phone11],
  brandCards: [
    { name: 'Biometric Access', src: phone2, accentClass: 'from-emerald-600 via-teal-500 to-lime-400' },
    { name: 'IndusInd Bank', src: phone4, accentClass: 'from-blue-800 via-sky-600 to-cyan-500' },
    { name: 'BLE Device', src: phone5, accentClass: 'from-cyan-600 via-sky-500 to-indigo-500' },
    { name: 'Cab Booking', src: phone3, accentClass: 'from-sky-700 via-cyan-500 to-teal-400' },
    { name: 'Digital Wallet', src: phone8, accentClass: 'from-orange-500 via-amber-400 to-yellow-300' },
    { name: 'Payment Sheet', src: phone9, accentClass: 'from-violet-600 via-indigo-500 to-sky-500' },
    { name: 'Home Services', src: phone10, accentClass: 'from-emerald-700 via-green-500 to-lime-400' },
    { name: 'Jobs Portal', src: phone11, accentClass: 'from-fuchsia-600 via-violet-500 to-indigo-500' },
    { name: 'Talent Apps', src: phone6, accentClass: 'from-fuchsia-600 via-violet-500 to-indigo-500' },
  ],
}

export type SocialLink = {
  name: string
  url: string
  icon: 'linkedin' | 'github' | 'medium' | 'twitter' | 'instagram' | 'facebook'
}

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/asif-ali-72546b224', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/Dev-Asif-Ali/AsifAli119', icon: 'github' },
  { name: 'Medium', url: 'https://medium.com/@aasifalee.114', icon: 'medium' },
  { name: 'Twitter', url: 'https://x.com/@mr_eemaan', icon: 'twitter' },
  { name: 'Instagram', url: 'https://www.instagram.com/asifali__19', icon: 'instagram' },
  { name: 'Facebook', url: 'https://www.facebook.com/ibni.ali.316267/?rdid=ampGv7c5orpFCj2D', icon: 'facebook' },
]

export const aboutContent = {
  label: 'About Me',
  description:
    'I build thoughtful mobile and SDK experiences across fintech, on-demand services, job platforms, hospitality, and payment SDKs. Over four years, I have worked across the full product journey: shaping the idea, building the interface, connecting reliable platforms, integrating real-world capabilities, and polishing the details people remember.',
  eyebrow: 'Four years of turning product ideas into useful software',
  highlights: ['Mobile-first product thinking', 'Native performance', 'Reliable platform foundations'],
  stack: ['Flutter', 'Kotlin', 'Swift', 'Java', 'Spring Boot', 'SDK design'],
  specialties: [
    { label: 'Mobile Development', icon: 'smartphone', detail: 'Interfaces that feel native on every touch.' },
    { label: 'Cross-platform Development', icon: 'layers', detail: 'One thoughtful system, many great surfaces.' },
    { label: 'Android', icon: 'android', detail: 'Kotlin-first apps with resilient foundations.' },
    { label: 'iOS', icon: 'apple', detail: 'Swift experiences with quiet attention to detail.' },
    { label: 'Backend Development', icon: 'server', detail: 'Spring Boot services that keep products moving.' },
  ],
  workExperience: [
    { label: 'Fintech', client: 'IndusInd Bank', detail: 'Secure banking and financial product experiences.' },
    { label: 'On-demand Home Services', client: 'Service marketplace', detail: 'Booking, provider, and real-time service workflows.' },
    { label: 'Job Search Portal', client: 'Talent platform', detail: 'Search, discovery, profiles, and application journeys.' },
    { label: 'Hospitality', client: 'Guest experiences', detail: 'Smooth reservations, service, and operations tooling.' },
    { label: 'Payment SDK Development', client: 'Reusable platform SDKs', detail: 'Payment flows designed for dependable integration.' },
  ],
  stats: [
    { icon: 'rocket', value: 10, suffix: '+', label: 'Projects Completed' },
    { icon: 'trending-up', value: 4, suffix: '+', label: 'Years Experience' },
    { icon: 'heart', value: 100, suffix: '%', label: 'Client Satisfaction' },
  ] as const,
}

export type Skill = { icon: string; label: string; description: string; priority?: 'primary' | 'supporting' }

export type SkillCategory = {
  label: string
  description: string
  skills: Skill[]
}

export const skillsContent = {
  heading: 'Technical Skills',
  intro: 'A practical toolkit for building polished mobile products and the systems behind them.',
  categories: [
    {
      label: 'Mobile Development',
      description: 'Product surfaces with native feel and cross-platform reach.',
      skills: [
        { icon: 'flutter', label: 'Flutter', description: 'Fast, expressive product interfaces.', priority: 'primary' },
        { icon: 'kotlin', label: 'Kotlin', description: 'Modern Android applications.', priority: 'primary' },
        { icon: 'swift', label: 'Swift', description: 'Focused iOS experiences.', priority: 'primary' },
      ],
    },
    {
      label: 'Programming Languages',
      description: 'Clear, maintainable code across the product stack.',
      skills: [
        { icon: 'java', label: 'Java', description: 'Reliable application foundations.', priority: 'primary' },
        { icon: 'kotlin', label: 'Kotlin', description: 'Concise, type-safe Android code.', priority: 'primary' },
        { icon: 'swift', label: 'Swift', description: 'Native Apple platform development.', priority: 'primary' },
        { icon: 'dart', label: 'Dart', description: 'The language behind Flutter.' },
      ],
    },
    {
      label: 'Backend',
      description: 'Supporting services that stay simple and dependable.',
      skills: [{ icon: 'springboot', label: 'Spring Boot', description: 'Production-ready APIs and services.', priority: 'supporting' }],
    },
    {
      label: 'State & Architecture',
      description: 'Patterns that keep complex products understandable.',
      skills: [
        { icon: 'box', label: 'BLoC', description: 'Predictable Flutter state management.', priority: 'primary' },
        { icon: 'layers', label: 'Provider', description: 'Simple, composable dependency flow.' },
        { icon: 'monitor', label: 'MVVM', description: 'Presentation logic with clear boundaries.' },
        { icon: 'shield-check', label: 'Clean Architecture', description: 'Maintainable layers that remain easy to evolve.' },
        { icon: 'code-2', label: 'SOLID Principles', description: 'Code designed for change.' },
      ],
    },
    {
      label: 'Tools & Platforms',
      description: 'The everyday workspace behind reliable delivery.',
      skills: [
        { icon: 'android-studio', label: 'Android Studio', description: 'Native Android development and profiling.', priority: 'primary' },
        { icon: 'xcode', label: 'Xcode', description: 'Apple platform builds, testing, and signing.', priority: 'primary' },
        { icon: 'firebase', label: 'Firebase', description: 'Connected app infrastructure.' },
        { icon: 'figma', label: 'Figma', description: 'Turning product intent into precise interfaces.' },
        { icon: 'trello', label: 'Trello', description: 'Visible, collaborative planning.' },
        { icon: 'jira', label: 'Jira', description: 'Structured product delivery.' },
        { icon: 'git', label: 'Git', description: 'Safe, reviewable engineering workflows.' },
      ],
    },
    {
      label: 'AI Workspace',
      description: 'Thoughtful AI assistance for faster exploration and delivery.',
      skills: [
        { icon: 'claude', label: 'Claude', description: 'Reasoning, writing, and code exploration.' },
        { icon: 'chatgpt', label: 'ChatGPT', description: 'Rapid ideation, debugging, and synthesis.' },
        { icon: 'antigravity', label: 'Antigravity', description: 'Experimental workflows for ambitious ideas.' },
        { icon: 'codex', label: 'Codex', description: 'Focused implementation and code assistance.' },
      ],
    },
    {
      label: 'Delivery & Distribution',
      description: 'From automated builds to reliable releases in users’ hands.',
      skills: [
        { icon: 'infinity', label: 'CI/CD', description: 'Automated testing, builds, and release pipelines.' },
        { icon: 'sdk', label: 'SDK Distribution', description: 'Packaging and publishing reusable developer tools.' },
        { icon: 'app-store', label: 'App Store Distribution', description: 'iOS release preparation, signing, and delivery.' },
        { icon: 'play-store', label: 'Play Store Distribution', description: 'Android release tracks, signing, and delivery.' },
      ],
    },
    {
      label: 'Integrations',
      description: 'Device capabilities and real-world product connections.',
      skills: [
        { icon: 'bluetooth', label: 'BLE', description: 'Low-energy device communication.' },
        { icon: 'fingerprint', label: 'Biometrics', description: 'Secure, frictionless identity flows.' },
        { icon: 'credit-card', label: 'AEPS', description: 'Assisted payment and financial integrations.' },
        { icon: 'plug', label: 'Hardware Integration', description: 'Software that speaks to physical systems.' },
        { icon: 'cloud', label: 'REST API', description: 'Clear service communication.' },
        { icon: 'file-json', label: 'JSON', description: 'Portable data contracts.' },
      ],
    },
    {
      label: 'Other Technologies / Tools',
      description: 'The surrounding practices that keep delivery healthy.',
      skills: [
        { icon: 'firebase', label: 'Firebase', description: 'Connected app infrastructure.' },
        { icon: 'code-2', label: 'OOPs', description: 'Reusable domain modeling.' },
        { icon: 'database', label: 'Hive', description: 'Fast local persistence.' },
        { icon: 'lock', label: 'Secure Storage', description: 'Sensitive data handled carefully.' },
        { icon: 'undo-2', label: 'SharedPrefs', description: 'Lightweight local preferences.' },
        { icon: 'infinity', label: 'Agile Methodologies', description: 'Small, useful delivery loops.' },
        { icon: 'code', label: 'C/C++', description: 'Low-level foundations.' },
        { icon: 'trello', label: 'Trello', description: 'Visible, collaborative planning.' },
        { icon: 'jira', label: 'Jira', description: 'Structured product delivery.' },
        { icon: 'sdk', label: 'SDK Design', description: 'Developer experiences that scale.' },
      ],
    },
  ] as SkillCategory[],
}

export type Article = {
  tag: string
  date: string
  title: string
  excerpt: string
  image: string
  url: string
}

export const mediumProfileUrl = 'https://medium.com/@aasifalee.114'
export const mediumFeedUrl = 'https://medium.com/feed/@aasifalee.114'

export const articlesContent = {
  heading: 'Latest Articles',
  subheading: 'Thoughts, tutorials and insights about Flutter development',
  articles: [
    {
      tag: 'Flutter',
      date: 'Sep 21, 2026',
      title: 'Flutter SDK, Demystified: Build One from Scratch',
      excerpt:
        'Flutter makes it surprisingly easy to build reusable packages. A few Dart files, a pubspec.yaml, and you already have something another application can depend on. But there is a big difference between a reusable Flutter package and a well-designed SDK.',
      image: article1,
      url: 'https://medium.com/@aasifalee.114/flutter-sdk-demystified-build-one-from-scratch-0beae312f9dd',
    },
    {
      tag: 'Flutter',
      date: 'Apr 15, 2026',
      title: "Docker Didn't Fix My Bugs. It Just Made Them Reproducible Everywhere",
      excerpt:
        'I learned Docker because my application refused to run anywhere except my laptop, like a spoiled child with commitment issues. Let’s begin with a universal truth in software development.',
      image: article2,
      url: mediumProfileUrl,
    },
    {
      tag: 'Flutter',
      date: 'Nov 24, 2025',
      title: 'Expo Just Befriended Flutter... and Developers Are Losing Their Minds',
      excerpt:
        'A surprisingly wholesome story about two rivals teaming up. If you’ve been around the mobile-development world long enough, you know that Flutter and Expo have always behaved like classmates who sit on opposite ends of the room.',
      image: article3,
      url: mediumProfileUrl,
    },
  ] as Article[],
}
