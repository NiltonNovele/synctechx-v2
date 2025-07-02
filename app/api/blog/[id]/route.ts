import { NextResponse } from "next/server";

// This would typically come from a database
const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2023",
    excerpt:
      "Discover the latest web design trends that are shaping the digital landscape this year.",
    content: `
  <p>Web design never sits still — it evolves fast, and if you’re building anything online, staying updated isn’t optional. Whether you're refreshing your site or building from scratch, these are the top 10 web design trends making waves in 2023:</p>
  
  <h2>1. Dark Mode</h2>
  <p>Still a fan favorite. Dark mode isn’t just easy on the eyes (especially at night), but it also gives your site a sleek, modern look — and bonus: it saves battery on OLED screens. Win-win.</p>
  
  <h2>2. Micro-interactions</h2>
  <p>Those little hover effects, animated buttons, or subtle loading states? They’re called micro-interactions — and they make your site feel alive. It's the digital equivalent of good vibes.</p>
  
  <h2>3. 3D Elements</h2>
  <p>Thanks to better browser support and tools like WebGL and Three.js, 3D elements are getting mainstream. Use them to add wow-factor and visual depth — just don’t overdo it.</p>
  
  <h2>4. Glassmorphism</h2>
  <p>Frosted-glass effects, layered blur, and glowing borders — glassmorphism is that futuristic, soft vibe you’re seeing all over. It looks especially dope in dark UI themes.</p>
  
  <h2>5. Minimalist Navigation</h2>
  <p>Less is more, especially on mobile. Minimal navs (think hamburger menus, bottom bars, or hidden tabs) keep things clean and help users focus on what really matters — your content.</p>
  
  <h2>6. Voice User Interface</h2>
  <p>“Hey website, show me your portfolio.” Yup, voice is creeping into web UIs, and it’s not just for accessibility — it's a hands-free convenience feature too.</p>
  
  <h2>7. Horizontal Scrolling</h2>
  <p>Breaking the scroll norm, horizontal layouts are getting popular in portfolios and creative sites. Just make sure it works well across devices — it’s cool when done right, annoying when not.</p>
  
  <h2>8. Augmented Reality</h2>
  <p>Online stores are bringing products into your space with AR — trying on glasses, visualizing furniture, previewing art. It’s interactive, helpful, and feels like magic.</p>
  
  <h2>9. Asymmetric Layouts</h2>
  <p>Not everything has to be centered and boxy. Asymmetric layouts help your site stand out and guide users’ eyes in a more dynamic, creative way.</p>
  
  <h2>10. Accessibility-First Design</h2>
  <p>Accessibility isn’t just a nice-to-have — it’s essential. Design with screen readers, color contrast, keyboard nav, and inclusivity in mind. It's good UX for everyone.</p>
  
  <p>Trend-chasing can be fun, but thoughtful design always wins. If you’re planning a redesign, test what works for your audience, mix in a few of these 2023 trends, and keep your brand's vibe strong and clear.</p>
`,
    image: "/blog/6.jpg?height=600&width=800",
    date: "June 15, 2025",
    author: "Henzel Tibana",
    authorImage: "/blog/authors/jumpex.jpg?height=100&width=100",
    authorBio:
      "Henzel is our leader of operations. He is the one who develops the strategies and ensure our activities contribute to the end common objective.",
    category: "Design",
    readTime: "5 min read",
    featured: true,
    tags: ["Web Design", "UI/UX", "Trends", "Design"],
    relatedPosts: [2, 3, 6],
  },
  {
    id: 2,
    title: "How to Choose the Right Tech Stack for Your Project",
    excerpt:
      "A comprehensive guide to selecting the perfect technology stack for your next web development project.",
    content: `
  <p>Picking the right tech stack is kinda like choosing your tools before building a house. Choose wisely, and you’ll have a solid, scalable project. Choose wrong, and... well, you’re in for some serious tech headaches. Let’s break down how to make the best call for your next project.</p>
  
  <h2>Understanding Your Project Requirements</h2>
  <p>First things first — don’t even look at frameworks or databases until you’ve nailed down what you’re actually building. Ask yourself:</p>
  <ul>
    <li>What kind of app is it? (e-commerce, social media, CMS, SaaS, etc.)</li>
    <li>How many users do you expect (now and later)?</li>
    <li>Does it need to be super fast or real-time?</li>
    <li>Will it need to scale over time?</li>
    <li>Any specific security or compliance needs?</li>
    <li>What’s your budget and deadline looking like?</li>
  </ul>
  
  <h2>Frontend Technologies</h2>
  <p>This is what users will see and interact with, so make it count. Some go-to options:</p>
  <ul>
    <li><strong>React</strong>: Great for modern, dynamic single-page apps (huge ecosystem too)</li>
    <li><strong>Vue.js</strong>: Lightweight, beginner-friendly, and perfect for progressive enhancement</li>
    <li><strong>Angular</strong>: Built for big, complex apps — especially in the enterprise world</li>
    <li><strong>Next.js</strong>: Ideal if you want React + server-side rendering + SEO goodness</li>
  </ul>
  
  <h2>Backend Technologies</h2>
  <p>The backend is your app’s engine. Here’s a quick look at what’s hot:</p>
  <ul>
    <li><strong>Node.js</strong>: JavaScript everywhere! Great for real-time apps and full-stack JS setups</li>
    <li><strong>Python (Django/Flask)</strong>: Fast to build, easy to read — awesome for data-heavy or AI-powered stuff</li>
    <li><strong>Ruby on Rails</strong>: Super productive, especially for MVPs and startups</li>
    <li><strong>PHP (Laravel)</strong>: Still alive and kicking — great ecosystem and hosting options</li>
    <li><strong>Java (Spring)</strong>: Rock-solid for enterprise-scale apps, banks, etc.</li>
  </ul>
  
  <h2>Database Selection</h2>
  <p>Data storage — pick what fits your structure and speed needs:</p>
  <ul>
    <li><strong>Relational (MySQL, PostgreSQL)</strong>: Great for structured data and complex queries</li>
    <li><strong>NoSQL (MongoDB, Firebase)</strong>: Flexible, fast, and built for scale — perfect for JSON-style data</li>
    <li><strong>Graph (Neo4j)</strong>: Built for relationships — think social networks, recommendations, etc.</li>
  </ul>
  
  <h2>Hosting and Deployment</h2>
  <p>Where will your app live? Options include:</p>
  <ul>
    <li><strong>Traditional hosting</strong>: Cheap and simple — fine for small projects or static sites</li>
    <li><strong>Cloud platforms (AWS, GCP, Azure)</strong>: Super scalable, but has a learning curve</li>
    <li><strong>PaaS (Heroku, Vercel)</strong>: Zero config, fast deployments — amazing for developers who want to focus on code</li>
  </ul>
  
  <h2>Team Expertise</h2>
  <p>If your team knows React and Node like the back of their hand, maybe don’t throw them into a Django project. Use what you know — or be ready to invest in learning if you’re experimenting with new tech.</p>
  
  <h2>Future Maintenance</h2>
  <p>Your stack should still make sense 6–12 months from now. Look for tools and frameworks that:</p>
  <ul>
    <li>Have strong community support</li>
    <li>Are actively maintained with regular updates</li>
    <li>Have good docs and tutorials</li>
    <li>Are popular enough that you can hire developers later if needed</li>
  </ul>
  
  <p>There’s no one-size-fits-all answer, but if you’re thoughtful about your choices, your tech stack will help you build faster, scale smoother, and avoid redoing stuff down the road. Happy building 🚀</p>
`,
    image: "/blog/5.jpg?height=600&width=800",
    date: "May 28, 2025",
    author: "Nilton Novele",
    authorImage: "/blog/authors/nilton.jpeg?height=100&width=100",
    authorBio:
      "Nilton is our lead of technology. Tthe guy who guarantees that our projects use the latest technologies, ensure they are secure, scalable and most of all reliable.",
    category: "Development",
    readTime: "8 min read",
    featured: false,
    tags: [
      "Web Development",
      "Technology",
      "Programming",
      "Software Architecture",
    ],
    relatedPosts: [1, 4, 5],
  },
  {
    id: 3,
    title: "The Importance of User Experience in Digital Products",
    excerpt:
      "Learn why user experience is crucial for the success of your digital products and how to improve it.",
    content: `
  <p>User Experience (UX) isn’t just some trendy design buzzword — it’s the backbone of any digital product that actually *works*. In today’s fast-moving digital world, a great UX can make your product stand out, keep people coming back, and honestly, stop it from flopping.</p>
  
  <h2>What is User Experience?</h2>
  <p>UX is basically how people feel when they interact with your product — whether it’s a website, an app, or even a digital service. It’s about making sure things feel natural, smooth, and useful. Good UX comes from understanding real users: their goals, struggles, needs, and expectations. When you get that part right, everything else just clicks.</p>
  
  <h2>Why UX Matters</h2>
  
  <h3>Increased User Satisfaction</h3>
  <p>Happy users = happy product. When your product is easy to use and just makes sense, people feel good using it. That good vibe often leads to positive reviews, referrals, and repeat visits.</p>
  
  <h3>Higher Conversion Rates</h3>
  <p>A smooth user journey turns browsers into buyers. If users can get what they need without friction — like finding a product, signing up, or making a payment — they’re way more likely to follow through.</p>
  
  <h3>Reduced Development Costs</h3>
  <p>Think of UX as planning before building. If you catch usability issues early through UX design and research, you won’t need to fix them later with costly redesigns and dev time. It’s a smarter investment.</p>
  
  <h3>Brand Loyalty</h3>
  <p>When people have a consistently good experience with your product, they start trusting your brand. That trust turns into loyalty — and loyal users don’t just stick around; they tell their friends too.</p>
  
  <h2>Key Elements of Good UX</h2>
  
  <h3>Usability</h3>
  <p>Things should be easy to use — no manuals required. Clear navigation, helpful buttons, and intuitive layouts go a long way.</p>
  
  <h3>Accessibility</h3>
  <p>Good UX works for *everyone*. That means building for folks using screen readers, navigating by keyboard, or needing higher contrast. Accessibility isn’t extra — it’s essential.</p>
  
  <h3>Performance</h3>
  <p>Speed matters. If your app or site lags, people bounce. Quick load times and smooth interactions are non-negotiable today.</p>
  
  <h3>Visual Design</h3>
  <p>Looks matter — but not just for aesthetics. A clean, on-brand, and intentional design builds trust and sets the tone for the experience.</p>
  
  <h3>Content</h3>
  <p>No fluff. Just clear, concise, and helpful copy that guides users and makes them feel confident about what to do next.</p>
  
  <h2>How to Improve UX</h2>
  
  <h3>User Research</h3>
  <p>Don’t guess — ask. Interview users, run surveys, and dig into your analytics to see what’s working (and what’s not).</p>
  
  <h3>Usability Testing</h3>
  <p>Watch real people use your product. You’ll spot problems fast — like confusing buttons or dead-end flows — and learn how to fix them.</p>
  
  <h3>Iterative Design</h3>
  <p>UX is a cycle, not a checkbox. Design, test, tweak, repeat. Every round of feedback helps your product get stronger.</p>
  
  <h3>Consistency</h3>
  <p>Keep it cohesive. Repeating patterns, design styles, and language builds confidence and makes the product feel reliable.</p>
  
  <p>At the end of the day, investing in UX isn’t just about making something pretty — it’s about building something that *works* for your users and grows your business. If your users win, you win.</p>
`,
    image: "/blog/4.jpg?height=600&width=800",
    date: "April 12, 2025",
    author: "Bionda Shirley",
    authorImage: "/blog/authors/bionda1.png?height=100&width=100",
    authorBio:
      "Bionda is our marketing lead. She is the one that ensures that our delivery is tailored to our clients and guarantees the effectiveness of each, whether it's the website, linkedin page or any other.",
    category: "UX/UI",
    readTime: "6 min read",
    featured: false,
    tags: ["UX Design", "User Experience", "Product Design", "UI Design"],
    relatedPosts: [1, 6],
  },
  {
    id: 4,
    title: "Optimizing Website Performance for Better Conversion Rates",
    excerpt:
      "Discover how improving your website's performance can lead to higher conversion rates and better user engagement.",
    content: `
  <p>Your website's performance isn’t just a technical detail — it’s a major player in how users experience your brand and whether they actually stick around. In a world where people expect everything instantly, slow load times can kill conversions faster than you can say “refresh.”</p>
  
  <h2>The Impact of Website Performance on Conversions</h2>
  
  <p>Stats don’t lie — performance has a direct impact on how well your site converts:</p>
  
  <ul>
    <li>A 1-second delay in load time can lead to a 7% drop in conversions 😬</li>
    <li>53% of mobile users bounce if a site takes longer than 3 seconds to load</li>
    <li>Even improving load speed by 100ms can bump conversions by 1%</li>
    <li>Faster sites = lower bounce rates and more time spent on your pages</li>
  </ul>
  
  <h2>Key Performance Metrics to Monitor</h2>
  
  <h3>Core Web Vitals</h3>
  <p>Google’s Core Web Vitals are basically your performance report card:</p>
  <ul>
    <li><strong>Largest Contentful Paint (LCP)</strong>: Measures how fast the main content loads. Aim for under 2.5s.</li>
    <li><strong>First Input Delay (FID)</strong>: Tracks responsiveness. Should be under 100ms.</li>
    <li><strong>Cumulative Layout Shift (CLS)</strong>: Measures visual stability. Keep it under 0.1 so your layout doesn’t jump around.</li>
  </ul>
  
  <h3>Additional Metrics</h3>
  <ul>
    <li><strong>Time to First Byte (TTFB)</strong>: How fast your server responds</li>
    <li><strong>Total Blocking Time (TBT)</strong>: How much your main thread gets bogged down</li>
    <li><strong>Speed Index</strong>: How fast stuff shows up as your page loads</li>
  </ul>
  
  <h2>Performance Optimization Strategies</h2>
  
  <h3>Image Optimization</h3>
  <p>Heavy images = slow site. Lighten the load with these tricks:</p>
  <ul>
    <li>Use next-gen formats like WebP or AVIF</li>
    <li>Implement <code>srcset</code> for responsive images</li>
    <li>Lazy load images that aren’t in view yet</li>
    <li>Make sure your images are sized right — no oversized downloads</li>
  </ul>
  
  <h3>Code Optimization</h3>
  <ul>
    <li>Minify and compress your HTML, CSS, and JS files</li>
    <li>Kick out unused libraries and dependencies</li>
    <li>Use code splitting so you’re not loading everything at once</li>
    <li>Tree shake to remove dead code you don’t need</li>
  </ul>
  
  <h3>Caching Strategies</h3>
  <ul>
    <li>Use browser caching with proper headers</li>
    <li>Leverage a CDN to serve content faster from nearby servers</li>
    <li>Use service workers to cache key assets and enable offline use</li>
  </ul>
  
  <h3>Server Optimization</h3>
  <ul>
    <li>Switch to HTTP/2 or HTTP/3 for faster connections</li>
    <li>Enable GZIP or Brotli to compress responses</li>
    <li>Clean up your database queries</li>
    <li>Consider going serverless for better scalability</li>
  </ul>
  
  <h3>Critical Rendering Path Optimization</h3>
  <ul>
    <li>Inline your critical CSS</li>
    <li>Defer JavaScript that isn’t needed right away</li>
    <li>Preload important files like fonts and hero images</li>
    <li>Eliminate render-blocking resources (or at least move them down)</li>
  </ul>
  
  <h2>Measuring and Monitoring Performance</h2>
  
  <p>You can’t improve what you don’t measure. Keep your site in check with tools like:</p>
  <ul>
    <li>Google PageSpeed Insights</li>
    <li>Lighthouse (built right into Chrome DevTools)</li>
    <li>WebPageTest for deep insights</li>
    <li>Chrome’s Performance panel</li>
    <li>Real User Monitoring (RUM) tools for real-world feedback</li>
  </ul>
  
  <h2>Case Studies: Performance Improvements and Conversion Impact</h2>
  
  <p>Real brands are seeing real results from performance tweaks:</p>
  
  <ul>
    <li><strong>Pinterest</strong> cut wait times by 40% and boosted signups and search traffic by 15%</li>
    <li><strong>Mobify</strong> found every 100ms saved led to a 1.11% jump in conversions</li>
    <li><strong>The BBC</strong> discovered they lost 10% of users for every extra second of load time</li>
  </ul>
  
  <p>Bottom line? Speed = trust. If your site is snappy, people stick around longer, engage more, and are way more likely to convert. Optimizing your site’s performance isn’t just a dev task — it’s a business growth strategy.</p>
`,
    image: "/blog/3.jpg?height=600&width=800",
    date: "March 5, 2025",
    author: "Anderson Manjate",
    authorImage: "/blog/authors/manjate.jpg?height=100&width=100",
    authorBio:
      "Anderson is our external relations lead. He ensure cordial communication and a strong relaionship with our clients, partners and prospects.",
    category: "Performance",
    readTime: "7 min read",
    featured: false,
    tags: [
      "Web Performance",
      "Optimization",
      "Conversion Rate",
      "User Experience",
    ],
    relatedPosts: [2, 5],
  },
  {
    id: 5,
    title: "The Future of Mobile App Development",
    excerpt:
      "Explore the emerging trends and technologies that will shape the future of mobile application development.",
    content: `
  <p>Mobile app development isn’t slowing down — it’s evolving faster than ever. With new tech dropping every year, users expecting more, and businesses needing smarter solutions, developers are in a constant race to keep up. If you want to stay ahead of the curve, here’s what’s coming next.</p>
  
  <h2>Cross-Platform Development Evolution</h2>

  <p>Gone are the days of clunky, “almost native” cross-platform apps. The tools have leveled up.</p>

  <h3>React Native and Flutter Maturity</h3>
  <p>React Native and Flutter aren’t the “new kids” anymore — they’re polished, powerful, and production-ready. You can now build buttery-smooth apps that feel native while still saving dev time and budget. And with new updates dropping constantly, they’re only getting better.</p>

  <h3>Web-Based Mobile Apps</h3>
  <p>PWAs (Progressive Web Apps) are finally living up to the hype. They feel like real apps, work offline, and don’t need to be downloaded from the app store. Perfect for MVPs, fast rollouts, or anything where simplicity is key — and they’re only becoming more capable.</p>

  <h2>AI and Machine Learning Integration</h2>

  <p>AI isn’t just for robots anymore — it’s baked into everyday apps, making them smarter and more helpful.</p>

  <h3>On-Device ML</h3>
  <p>AI is moving from the cloud to your pocket. On-device ML can do everything from detecting gestures to recognizing faces — all offline, faster, and with way more privacy.</p>

  <h3>Personalization</h3>
  <p>No more one-size-fits-all apps. AI is personalizing content, layouts, and recommendations so users feel like the app was made just for them — because, in a way, it was.</p>

  <h3>Computer Vision and AR</h3>
  <p>From virtual makeup try-ons to scanning homework problems, AR and computer vision are turning mobile cameras into magic wands. The potential here is wild — and we’re just scratching the surface.</p>

  <h2>5G Impact</h2>

  <p>5G isn’t just “faster internet” — it’s a game-changer for mobile experiences.</p>

  <h3>High-Definition Streaming</h3>
  <p>Stream in 4K (or 8K), game in the cloud, and enjoy content without buffering. 5G unlocks premium media experiences anywhere, anytime.</p>

  <h3>Real-Time Applications</h3>
  <p>Think real-time multiplayer gaming, remote surgeries, and controlling drones from miles away — all made possible thanks to 5G’s ultra-low latency.</p>

  <h3>IoT Integration</h3>
  <p>Apps are becoming remote controls for our smart homes, cars, and gadgets. With 5G, they can handle more devices, faster and more reliably.</p>

  <h2>Super Apps and Mini Programs</h2>

  <p>Inspired by WeChat’s success, super apps are trending globally — and they’re changing how users interact with mobile ecosystems.</p>

  <h3>All-in-One Platforms</h3>
  <p>Why use five different apps when one can do it all? Super apps roll chat, shopping, payments, and bookings into a single seamless experience.</p>

  <h3>Mini Programs</h3>
  <p>These tiny, fast-loading apps inside super apps let users try new services without installing anything. It’s like TikTok meets app store — minus the bloat.</p>

  <h2>Privacy and Security Focus</h2>

  <p>Users care more about their data — and governments do too. Apps need to be built with trust in mind.</p>

  <h3>Privacy by Design</h3>
  <p>Privacy isn’t a patch — it’s a principle. The best apps bake privacy in from the start, not as an afterthought.</p>

  <h3>Transparent Data Practices</h3>
  <p>Users want to know what you collect, why, and what they can control. The more honest and clear your app is, the more users will trust it.</p>

  <h3>Enhanced Authentication</h3>
  <p>Say goodbye to passwords. Biometrics, magic links, and multi-factor auth are becoming the new normal for logging in quickly *and* securely.</p>

  <h2>Low-Code/No-Code Development</h2>

  <p>Not a coder? No problem. App-building is becoming way more accessible.</p>

  <h3>Citizen Developers</h3>
  <p>Low-code and no-code tools let anyone with an idea build something real — fast. Great for startups, MVPs, or automating internal tools.</p>

  <h3>Professional Augmentation</h3>
  <p>Even devs are getting in on the low-code game — using these tools to speed up repetitive tasks so they can focus on the cool, complex stuff.</p>

  <h2>Foldable and Multi-Screen Devices</h2>

  <p>Phones aren’t just rectangles anymore. Foldables, tablets, and dual-screens are changing how apps are designed and used.</p>

  <h3>Adaptive Interfaces</h3>
  <p>Your app needs to look good and work smoothly — whether the screen is folded, stretched, split, or spun. Responsive design is evolving into adaptive design.</p>

  <h3>Multi-Tasking Experiences</h3>
  <p>Users expect to run multiple apps side by side. This opens up new use cases — and new challenges — for mobile developers.</p>

  <p>The future of mobile app development is bold, dynamic, and full of potential. Developers who keep learning and embracing these trends will be the ones building the next generation of apps — apps that aren’t just functional, but delightful, inclusive, and insanely powerful.</p>
`,
    image: "/blog/2.jpg?height=600&width=800",
    date: "May 20, 2025",
    author: "Henzel Tibana",
    authorImage: "/blog/authors/jumpex.jpg?height=100&width=100",
    authorBio:
      "Henzel is our leader of operations. He is the one who develops the strategies and ensure our activities contribute to the end common objective.",
    category: "Mobile",
    readTime: "9 min read",
    featured: false,
    tags: [
      "Mobile Development",
      "App Development",
      "Technology Trends",
      "Cross-Platform",
    ],
    relatedPosts: [2, 4],
  },
  {
    id: 6,
    title: "Building Accessible Websites: A Complete Guide",
    excerpt:
      "Learn how to create websites that are accessible to all users, including those with disabilities.",
    content: `
  <p>Web accessibility is all about making the web usable for *everyone* — including people with disabilities. It’s more than just ticking a legal box; it’s about creating inclusive experiences that are thoughtful, human, and helpful. When you build accessibly, you’re making the internet a better place — for *everyone*.</p>

  <h2>Understanding Web Accessibility</h2>

  <h3>Who Benefits from Accessibility?</h3>
  <p>Accessibility mainly helps folks with disabilities, like:</p>
  <ul>
    <li>Visual impairments (blindness, low vision, color blindness)</li>
    <li>Hearing impairments (deafness, hard of hearing)</li>
    <li>Motor impairments (limited fine motor control, slower response time)</li>
    <li>Cognitive impairments (learning disabilities, attention deficit disorders)</li>
  </ul>

  <p>But here’s the thing: accessibility isn't just for people with disabilities. Captions help when you’re watching videos in public, good contrast helps when you're out in the sun, and clear navigation helps everyone — especially when you're in a rush or multitasking.</p>

  <h3>Legal and Ethical Considerations</h3>
  <p>Yes, some laws require it — like:</p>
  <ul>
    <li>The Americans with Disabilities Act (ADA) in the US</li>
    <li>The Equality Act in the UK</li>
    <li>The European Accessibility Act in the EU</li>
  </ul>

  <p>But even beyond the legal stuff, it’s just the right thing to do. Everyone deserves access to the digital world — period.</p>

  <h2>Web Content Accessibility Guidelines (WCAG)</h2>

  <p>The WCAG (Web Content Accessibility Guidelines) are kind of like the go-to rulebook for making your website accessible. They’re built on four key principles:</p>

  <h3>1. Perceivable</h3>
  <p>Your content should be easy to *see, hear*, and understand.</p>
  <ul>
    <li>Use alt text for images</li>
    <li>Provide captions for videos</li>
    <li>Let users customize how they view content (like zoom or high contrast)</li>
    <li>Make sure your content isn’t hidden or overly flashy</li>
  </ul>

  <h3>2. Operable</h3>
  <p>Users need to be able to use your site — with a mouse, keyboard, or other devices.</p>
  <ul>
    <li>Everything should work with just a keyboard</li>
    <li>Give users enough time to interact</li>
    <li>Avoid flashing stuff that can trigger seizures</li>
    <li>Make navigation smooth and simple</li>
  </ul>

  <h3>3. Understandable</h3>
  <p>People should be able to understand both the content *and* how to use the interface.</p>
  <ul>
    <li>Keep language clear and simple</li>
    <li>Be consistent — don’t confuse users with surprises</li>
    <li>Offer helpful error messages and guidance</li>
  </ul>

  <h3>4. Robust</h3>
  <p>Your site should work across different devices, browsers, and assistive tech — not just the latest iPhone or browser.</p>
  <ul>
    <li>Make sure your code is clean and compatible</li>
  </ul>

  <h2>Practical Implementation Guidelines</h2>

  <h3>Semantic HTML</h3>
  <p>Using the right HTML elements isn’t just good practice — it makes a huge difference for screen readers and accessibility tools:</p>
  <ul>
    <li>Use <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, etc. — not just a bunch of <code>&lt;div&gt;</code>s</li>
    <li>Follow heading order (no jumping from <code>&lt;h1&gt;</code> to <code>&lt;h4&gt;</code>)</li>
    <li>Use real <code>&lt;button&gt;</code>s for actions and <code>&lt;a&gt;</code> for links — not clickable <code>&lt;div&gt;</code>s</li>
  </ul>

  <h3>Images and Media</h3>
  <p>Make sure your visuals work for everyone:</p>
  <ul>
    <li>Describe important images with alt text</li>
    <li>Use <code>alt=""</code> for decorative images</li>
    <li>Offer transcripts for audio content</li>
    <li>Include captions and audio descriptions for videos</li>
  </ul>

  <h3>Keyboard Accessibility</h3>
  <p>Some people don’t use a mouse at all — so your site needs to work with just a keyboard:</p>
  <ul>
    <li>All interactive stuff should be keyboard focusable</li>
    <li>Tab order should follow the layout</li>
    <li>Use visible focus outlines (don’t remove them!)</li>
    <li>Watch out for keyboard traps where users can’t tab away</li>
  </ul>

  <h3>Color and Contrast</h3>
  <p>Color shouldn’t be the only way you convey information, and contrast should be strong enough to read easily:</p>
  <ul>
    <li>Use at least 4.5:1 contrast for normal text, 3:1 for big text</li>
    <li>Don’t just rely on color to show success, errors, etc. — use icons or text too</li>
    <li>Make sure your UI is usable in dark mode, grayscale, or high contrast settings</li>
  </ul>

  <h3>Forms</h3>
  <p>Forms are tricky — but vital. Here’s how to make them accessible:</p>
  <ul>
    <li>Use the <code>for</code> attribute to link labels to inputs</li>
    <li>Group related fields with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code></li>
    <li>Give users clear, helpful error messages</li>
    <li>Let users fix mistakes easily</li>
  </ul>

  <h3>ARIA (Accessible Rich Internet Applications)</h3>
  <p>ARIA can help when plain HTML isn’t enough — but don’t overuse it:</p>
  <ul>
    <li>Use ARIA landmarks to organize the page</li>
    <li>Label elements with <code>aria-label</code> or <code>aria-labelledby</code></li>
    <li>Use ARIA states like <code>aria-expanded</code> and <code>aria-hidden</code> for dynamic content</li>
    <li>Important: no ARIA is better than bad ARIA</li>
  </ul>

  <h2>Testing for Accessibility</h2>

  <h3>Automated Testing</h3>
  <p>Start with these tools to catch common issues fast:</p>
  <ul>
    <li>Chrome’s Lighthouse</li>
    <li>axe by Deque Systems</li>
    <li>WAVE by WebAIM</li>
    <li>Pa11y for CI pipelines</li>
  </ul>

  <h3>Manual Testing</h3>
  <p>Don’t stop at automation — test it like a real human would:</p>
  <ul>
    <li>Navigate everything with a keyboard</li>
    <li>Use screen readers like NVDA, JAWS, or VoiceOver</li>
    <li>Try high contrast mode and zoom settings</li>
    <li>Test with reduced motion preferences enabled</li>
  </ul>

  <h3>User Testing</h3>
  <p>Nothing beats real user feedback:</p>
  <ul>
    <li>Work with users who have diverse disabilities</li>
    <li>Watch how they use your site</li>
    <li>Listen to what’s hard or confusing — and fix it</li>
  </ul>

  <h2>Conclusion</h2>

  <p>At the end of the day, accessibility isn’t just a checklist — it’s a mindset. When you build with inclusion in mind, you’re making the internet better for *everyone*. It’s one of the most meaningful things you can do as a designer or developer.</p>

  <p>Keep testing. Keep improving. Keep caring. Accessibility is a journey, and it starts right where you are.</p>
`,
    image: "/blog/1.jpg?height=600&width=800",
    date: "April 8, 2025",
    author: "Nilton Novele",
    authorImage: "/blog/authors/nilton.jpeg?height=100&width=100",
    authorBio:
      "Nilton is our lead of technology. Tthe guy who guarantees that our projects use the latest technologies, ensure they are secure, scalable and most of all reliable.",
    category: "Accessibility",
    readTime: "10 min read",
    featured: false,
    tags: ["Accessibility", "Web Development", "Inclusive Design", "WCAG"],
    relatedPosts: [1, 3],
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);

    // Find the blog post with the matching ID
    const post = blogPosts.find((post) => post.id === id);

    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Get related posts
    let relatedPosts: any[] = [];
    if (post.relatedPosts && post.relatedPosts.length > 0) {
      relatedPosts = post.relatedPosts
        .map((relatedId) => {
          const relatedPost = blogPosts.find((p) => p.id === relatedId);
          if (relatedPost) {
            return {
              id: relatedPost.id,
              title: relatedPost.title,
              excerpt: relatedPost.excerpt,
              image: relatedPost.image,
              category: relatedPost.category,
              date: relatedPost.date,
            };
          }
          return null;
        })
        .filter(Boolean);
    }

    // Return the post with related posts
    return NextResponse.json(
      {
        post,
        relatedPosts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
