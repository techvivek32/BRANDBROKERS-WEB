const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const seedData = {
  services: [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital strategies that drive engagement and conversions across all platforms.",
      features: ["SEO Optimization", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"],
      icon: "megaphone"
    },
    {
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message and reach new audiences.",
      features: ["Influencer Matching", "Campaign Management", "Performance Tracking", "ROI Analysis"],
      icon: "users"
    },
    {
      title: "Social Media Management",
      description: "Build and maintain a strong social presence that engages your community and drives growth.",
      features: ["Content Creation", "Community Management", "Social Strategy", "Brand Monitoring"],
      icon: "share2"
    },
    {
      title: "Marketing Automation",
      description: "Streamline your marketing processes with intelligent automation and personalization.",
      features: ["Email Automation", "Lead Nurturing", "Customer Journeys", "Behavioral Triggers"],
      icon: "zap"
    },
    {
      title: "Talent Management",
      description: "Comprehensive talent representation and career development for digital creators.",
      features: ["Career Development", "Brand Partnerships", "Content Strategy", "Revenue Optimization"],
      icon: "star"
    }
  ],

  team: [
    {
      name: "Jessica Martinez",
      role: "CEO & Founder",
      email: "jessica@brandbrokers.com",
      linkedin: "https://linkedin.com/in/jessicamartinez",
      bio: "Visionary leader with 15+ years in digital marketing and brand strategy. Jessica has helped over 200 brands achieve exponential growth through innovative marketing approaches.",
      image: "/team/jessica.jpg"
    },
    {
      name: "Ryan Thompson",
      role: "Creative Director",
      email: "ryan@brandbrokers.com",
      linkedin: "https://linkedin.com/in/ryanthompson",
      bio: "Award-winning creative director specializing in brand identity and campaigns. Ryan's work has been featured in major publications and won multiple industry awards.",
      image: "/team/ryan.jpg"
    },
    {
      name: "Sophia Chen",
      role: "Head of Strategy",
      email: "sophia@brandbrokers.com",
      linkedin: "https://linkedin.com/in/sophiachen",
      bio: "Data-driven strategist focused on performance marketing and growth. Sophia has managed over $50M in ad spend with an average ROI of 400%.",
      image: "/team/sophia.jpg"
    },
    {
      name: "Marcus Johnson",
      role: "Talent Manager",
      email: "marcus@brandbrokers.com",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      bio: "Expert in influencer relations and talent development. Marcus manages a roster of 100+ top-tier influencers across all major platforms.",
      image: "/team/marcus.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Strategist",
      email: "emily@brandbrokers.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      bio: "Social media expert with expertise in viral content creation and community building. Emily has grown accounts from 0 to millions of followers.",
      image: "/team/emily.jpg"
    },
    {
      name: "David Kim",
      role: "Performance Marketing Lead",
      email: "david@brandbrokers.com",
      linkedin: "https://linkedin.com/in/davidkim",
      bio: "Performance marketing specialist focused on paid advertising and conversion optimization. David consistently delivers 3x+ ROAS for clients.",
      image: "/team/david.jpg"
    }
  ],

  clients: [
    {
      name: "Nike",
      logo: "/logos/nike.svg",
      website: "https://nike.com"
    },
    {
      name: "Apple",
      logo: "/logos/apple.svg",
      website: "https://apple.com"
    },
    {
      name: "Google",
      logo: "/logos/google.svg",
      website: "https://google.com"
    },
    {
      name: "Microsoft",
      logo: "/logos/microsoft.svg",
      website: "https://microsoft.com"
    },
    {
      name: "Amazon",
      logo: "/logos/amazon.svg",
      website: "https://amazon.com"
    },
    {
      name: "Tesla",
      logo: "/logos/tesla.svg",
      website: "https://tesla.com"
    },
    {
      name: "Spotify",
      logo: "/logos/spotify.svg",
      website: "https://spotify.com"
    },
    {
      name: "Airbnb",
      logo: "/logos/airbnb.svg",
      website: "https://airbnb.com"
    }
  ],

  caseStudies: [
    {
      title: "E-commerce Growth Campaign",
      client: "TechStyle Fashion",
      description: "Transformed a struggling fashion brand into a market leader through strategic influencer partnerships and data-driven social campaigns.",
      strategy: "Multi-channel approach combining influencer marketing, paid social, and content marketing to drive brand awareness and sales.",
      results: "Achieved 340% revenue growth, 180% increase in social engagement, and 250% growth in new customers within 6 months.",
      stats: [
        { label: "Revenue Growth", value: "+340%" },
        { label: "Social Engagement", value: "+180%" },
        { label: "New Customers", value: "+250%" }
      ],
      images: ["/case-studies/techstyle-1.jpg", "/case-studies/techstyle-2.jpg"],
      featured: true
    },
    {
      title: "B2B Lead Generation",
      client: "CloudTech Solutions",
      description: "Developed a comprehensive digital marketing strategy that generated high-quality leads and increased conversion rates for a SaaS company.",
      strategy: "Account-based marketing combined with content marketing, LinkedIn advertising, and marketing automation to target enterprise clients.",
      results: "Generated 220% more qualified leads, improved conversion rates by 85%, and reduced cost per lead by 60%.",
      stats: [
        { label: "Lead Quality", value: "+220%" },
        { label: "Conversion Rate", value: "+85%" },
        { label: "Cost per Lead", value: "-60%" }
      ],
      images: ["/case-studies/cloudtech-1.jpg", "/case-studies/cloudtech-2.jpg"],
      featured: true
    },
    {
      title: "Brand Awareness Campaign",
      client: "EcoLife Products",
      description: "Built brand recognition from zero to industry leader through authentic storytelling and strategic content marketing.",
      strategy: "Sustainability-focused content strategy with influencer partnerships and community building to establish thought leadership.",
      results: "Increased brand awareness by 400%, grew organic reach by 300%, and improved customer loyalty by 150%.",
      stats: [
        { label: "Brand Awareness", value: "+400%" },
        { label: "Organic Reach", value: "+300%" },
        { label: "Customer Loyalty", value: "+150%" }
      ],
      images: ["/case-studies/ecolife-1.jpg", "/case-studies/ecolife-2.jpg"],
      featured: true
    },
    {
      title: "App Launch Campaign",
      client: "FitTrack Pro",
      description: "Successfully launched a fitness app with a comprehensive digital marketing campaign targeting health-conscious millennials.",
      strategy: "Influencer partnerships with fitness creators, app store optimization, and targeted social media advertising.",
      results: "Achieved 500K downloads in first month, 4.8 app store rating, and 40% user retention rate.",
      stats: [
        { label: "Downloads", value: "500K+" },
        { label: "App Rating", value: "4.8★" },
        { label: "User Retention", value: "40%" }
      ],
      images: ["/case-studies/fittrack-1.jpg", "/case-studies/fittrack-2.jpg"],
      featured: false
    }
  ],

  rosters: [
    {
      name: "Sarah Johnson",
      platform: "Instagram",
      followers: "2.5M",
      category: "Lifestyle",
      bio: "Lifestyle influencer passionate about sustainable living and wellness. Sarah creates authentic content that inspires her audience to live more mindfully.",
      image: "/influencers/sarah.jpg",
      socialLinks: {
        instagram: "https://instagram.com/sarahjohnson",
        youtube: "https://youtube.com/sarahjohnson"
      },
      featured: true
    },
    {
      name: "Mike Chen",
      platform: "TikTok",
      followers: "4.2M",
      category: "Tech",
      bio: "Tech reviewer and digital creator sharing the latest in innovation. Mike's reviews have influenced millions of purchasing decisions.",
      image: "/influencers/mike.jpg",
      socialLinks: {
        tiktok: "https://tiktok.com/@mikechen",
        twitter: "https://twitter.com/mikechen"
      },
      featured: true
    },
    {
      name: "Emma Rodriguez",
      platform: "YouTube",
      followers: "1.8M",
      category: "Beauty",
      bio: "Beauty expert and makeup artist inspiring confidence through creativity. Emma's tutorials have been viewed over 100 million times.",
      image: "/influencers/emma.jpg",
      socialLinks: {
        youtube: "https://youtube.com/emmarodriguez",
        instagram: "https://instagram.com/emmarodriguez"
      },
      featured: true
    },
    {
      name: "Alex Thompson",
      platform: "Instagram",
      followers: "3.1M",
      category: "Fitness",
      bio: "Fitness coach helping people achieve their health and wellness goals. Alex has transformed thousands of lives through his programs.",
      image: "/influencers/alex.jpg",
      socialLinks: {
        instagram: "https://instagram.com/alexthompson",
        youtube: "https://youtube.com/alexthompson"
      },
      featured: true
    },
    {
      name: "Lisa Park",
      platform: "TikTok",
      followers: "5.7M",
      category: "Food",
      bio: "Food creator sharing delicious recipes and culinary adventures. Lisa's recipes have been recreated by millions worldwide.",
      image: "/influencers/lisa.jpg",
      socialLinks: {
        tiktok: "https://tiktok.com/@lisapark",
        instagram: "https://instagram.com/lisapark"
      },
      featured: true
    },
    {
      name: "David Kim",
      platform: "YouTube",
      followers: "2.9M",
      category: "Gaming",
      bio: "Gaming content creator and esports enthusiast. David's gaming content reaches millions of viewers monthly.",
      image: "/influencers/david.jpg",
      socialLinks: {
        youtube: "https://youtube.com/davidkim",
        twitter: "https://twitter.com/davidkim"
      },
      featured: true
    }
  ],

  products: [
    {
      name: "Brand Strategy Toolkit",
      description: "Comprehensive guide and templates for developing a winning brand strategy. Includes market research templates, brand positioning frameworks, and competitive analysis tools.",
      image: "/products/brand-toolkit.jpg",
      price: "$299",
      link: "/products/brand-toolkit"
    },
    {
      name: "Social Media Mastery Course",
      description: "Complete online course covering advanced social media marketing strategies, content creation, and community building techniques used by top brands.",
      image: "/products/social-course.jpg",
      price: "$497",
      link: "/products/social-course"
    },
    {
      name: "Influencer Marketing Playbook",
      description: "Step-by-step guide to building successful influencer partnerships. Includes contract templates, campaign planning tools, and ROI measurement frameworks.",
      image: "/products/influencer-playbook.jpg",
      price: "$199",
      link: "/products/influencer-playbook"
    },
    {
      name: "Marketing Automation Setup",
      description: "Done-for-you marketing automation setup service. We'll configure your email sequences, lead magnets, and customer journey automation.",
      image: "/products/automation-setup.jpg",
      price: "$1,997",
      link: "/contact"
    }
  ],

  testimonials: [
    {
      name: "Sarah Williams",
      company: "TechStart Inc.",
      review: "Brand Brokers transformed our digital presence completely. Their strategic approach and creative campaigns resulted in a 300% increase in our online engagement and significantly boosted our sales. The team's expertise in influencer marketing was particularly impressive.",
      rating: 5,
      image: "/testimonials/sarah-williams.jpg"
    },
    {
      name: "Michael Chen",
      company: "EcoLife Products",
      review: "Working with Brand Brokers was a game-changer for our brand. Their influencer marketing campaigns helped us reach our target audience authentically and drove incredible results. We saw a 400% increase in brand awareness within just 3 months.",
      rating: 5,
      image: "/testimonials/michael-chen.jpg"
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      review: "The team at Brand Brokers understands our industry inside and out. Their data-driven approach and creative excellence have made them an invaluable partner for our growth. Our ROI has never been better.",
      rating: 5,
      image: "/testimonials/emily-rodriguez.jpg"
    },
    {
      name: "David Thompson",
      company: "CloudTech Solutions",
      review: "Brand Brokers delivered exceptional results for our B2B lead generation campaign. Their strategic approach to LinkedIn advertising and content marketing generated 220% more qualified leads than our previous agency.",
      rating: 5,
      image: "/testimonials/david-thompson.jpg"
    },
    {
      name: "Lisa Martinez",
      company: "FitTrack Pro",
      review: "The app launch campaign exceeded all our expectations. Brand Brokers' influencer partnerships and social media strategy helped us achieve 500K downloads in the first month. Absolutely phenomenal results!",
      rating: 5,
      image: "/testimonials/lisa-martinez.jpg"
    }
  ]
};

async function seedDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('brandbrokers');

    // Clear existing data
    console.log('Clearing existing data...');
    await db.collection('services').deleteMany({});
    await db.collection('team').deleteMany({});
    await db.collection('clients').deleteMany({});
    await db.collection('casestudies').deleteMany({});
    await db.collection('rosters').deleteMany({});
    await db.collection('products').deleteMany({});
    await db.collection('testimonials').deleteMany({});

    // Seed all collections
    console.log('Seeding services...');
    await db.collection('services').insertMany(seedData.services);
    console.log(`✓ Inserted ${seedData.services.length} services`);

    console.log('Seeding team members...');
    await db.collection('team').insertMany(seedData.team);
    console.log(`✓ Inserted ${seedData.team.length} team members`);

    console.log('Seeding clients...');
    await db.collection('clients').insertMany(seedData.clients);
    console.log(`✓ Inserted ${seedData.clients.length} clients`);

    console.log('Seeding case studies...');
    await db.collection('casestudies').insertMany(seedData.caseStudies);
    console.log(`✓ Inserted ${seedData.caseStudies.length} case studies`);

    console.log('Seeding roster (influencers)...');
    await db.collection('rosters').insertMany(seedData.rosters);
    console.log(`✓ Inserted ${seedData.rosters.length} roster members`);

    console.log('Seeding products...');
    await db.collection('products').insertMany(seedData.products);
    console.log(`✓ Inserted ${seedData.products.length} products`);

    console.log('Seeding testimonials...');
    await db.collection('testimonials').insertMany(seedData.testimonials);
    console.log(`✓ Inserted ${seedData.testimonials.length} testimonials`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nSummary:');
    console.log(`- Services: ${seedData.services.length}`);
    console.log(`- Team Members: ${seedData.team.length}`);
    console.log(`- Clients: ${seedData.clients.length}`);
    console.log(`- Case Studies: ${seedData.caseStudies.length}`);
    console.log(`- Roster Members: ${seedData.rosters.length}`);
    console.log(`- Products: ${seedData.products.length}`);
    console.log(`- Testimonials: ${seedData.testimonials.length}`);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

seedDatabase();