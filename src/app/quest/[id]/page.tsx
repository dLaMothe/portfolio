import React from "react";
import { Clock, Users, Target, Lightbulb } from "lucide-react";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";
import portfolioData from "@/data/portfolio.json";

// Generate static params for all quest IDs
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

interface QuestPageProps {
  params: {
    id: string;
  };
}

export default function QuestDetailPage({ params }: QuestPageProps) {
  const questId = params.id;
  const { quests, skills } = portfolioData;

  // Find the current quest data
  const currentQuest = quests.find((quest) => quest.id === parseInt(questId));
  if (!currentQuest) {
    return notFound();
  }

  // Utility function to handle base path for GitHub Pages
  const getImageSrc = (path: string) => {
    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
    return `${basePath}${path}`;
  };

  // Function to get skill tag colors matching the Skills section
  const getSkillTagColor = (skillName: string) => {
    const skill = skills.find((skill) => skill.category === skillName);
    if (skill) {
      switch (skill.color) {
        case "skill-blue":
          return "bg-blue-100 text-blue-800";
        case "skill-green":
          return "bg-green-100 text-green-800";
        case "skill-pink":
          return "bg-pink-100 text-pink-800";
        case "skill-purple":
          return "bg-purple-100 text-purple-800";
        case "skill-orange":
          return "bg-orange-100 text-orange-800";
        case "skill-yellow":
          return "bg-yellow-100 text-yellow-800";
        default:
          return "bg-cyan-100 text-cyan-800";
      }
    }
    return "bg-blue-100 text-blue-800";
  };

  // Quest 1: A design system for all teams
  if (questId === "1") {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Image */}
        <div
          className="h-64 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://www.notion.so/images/page-cover/met_william_morris_1875.jpg')`,
            backgroundPosition: "center 0%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-6 left-6">
            <BackButton />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
          {/* Title Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              A design system for all teams
            </h1>

            {/* Properties Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Duration
                  </p>
                  <p className="text-gray-800">6 Month</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    The Team
                  </p>
                  <p className="text-gray-800 text-sm">
                    5 Designers, 1 Product Owner, 2 Developers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Applied Skills
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {currentQuest.appliedSkills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded ${getSkillTagColor(
                          skill
                        )}`}
                      >
                        {skill.split(" | ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="border-t pt-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {currentQuest.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Question */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              How might we create a design system that each role and team will
              benefit from?
            </h2>
          </div>

          {/* Problem, Goal, Challenge */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Problem</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Different teams where spending time on building the same UI
                elements in different ways. This was not only costly but would
                also fracture the look and feel of the brand.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Goal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Create a single source of truth that all teams can use no matter
                which customer group (B2B or B2C), platform (web, app) or
                touchpoint (in store, at home) they are working on.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Challenge
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Make it easier for for everyone to use the Design System and
                provided components, than creating new ones.
              </p>
            </div>
          </div>

          {/* The Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              The Process
            </h2>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    {
                      phase: "Internal Interviews",
                      description:
                        "We conducted internal interviews to understand the unique needs of various roles. From these discussions, we translated their expectations for the design system into meaningful improvements to their daily workflows we could deliver.",
                    },
                    {
                      phase: "UI Audit",
                      description:
                        "We conducted a UI audit to catalog all existing components, their use cases, and the various touchpoints to consider when creating a unified source of truth.",
                    },
                    {
                      phase: "Workshop a Visual Language",
                      description:
                        "We held a workshop to develop a visual language that accounts for diverse use cases, ensuring that interfaces and components not yet included in the design system can be created with a consistent look and fee in the future.",
                    },
                    {
                      phase: "Brainstorm & Decide",
                      description:
                        "We brainstormed and finalized key guidelines to communicate, ensuring all designers are aligned on decisions regarding the architecture and anatomy of interfaces.",
                    },
                    {
                      phase: "Write the Content",
                      description:
                        "We drafted content outlining the guidelines to present and discuss collaboratively, iterating until we established a shared understanding and consistent language. The content was later refined by a professional writer before being officially included in the design system.",
                    },
                    {
                      phase: "Create Infographics",
                      description:
                        "We created infographics to effectively communicate the guidelines, leveraging the power of visuals to convey complex concepts more clearly, especially for these visual topics.",
                    },
                    {
                      phase: "Document & Build",
                      description:
                        "We documented and built all identified UI components, providing designers with a comprehensive resource to browse, understand, and evaluate existing components. This allows them to determine whether they can use existing elements for their projects or actually need to create new ones.",
                    },
                    {
                      phase: "Create Libraries",
                      description:
                        "We created libraries for daily use, with resources tailored to different roles: Sketch libraries for designers and React component libraries for developers.",
                    },
                  ].map((step, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800 w-1/3 border-r border-gray-200">
                        {step.phase}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                        {step.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Learnings & Decisions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Learnings & Decisions
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Atomic Structure",
                  content:
                    'With all the different colours that where introduced to our interfaces over time, we knew we had to begin at the very foundation. Our design system\'s structure draws inspiration from Atomic Design by Brad Frost. To better align with our needs, we customised the pillars of Atomic Design. "Atoms" became "Basics," "Molecules" turned into "UI Elements," and "Organisms" evolved into "UI Patterns," which we found more intuitive and descriptive. Instead of "Templates" and "Pages," we opted to provide detailed information about the navigation architecture and common page structures across our various products.',
                },
                {
                  title: "Futura-Inspired Design",
                  content:
                    "Our brand's primary font, Futura, was a significant source of inspiration. Its distinct characteristics—such as rounded shapes, sharp corners, proportions, and spacing—influenced key aspects of our design, from border radii to sizing and spacing guidelines. To maintain visual cohesion, we also developed an icon font based on Futura, ensuring seamless integration when used together.",
                },
                {
                  title: "DIY Design Thinking",
                  content:
                    "We aimed to go beyond documenting UI elements by embedding our company's design philosophy into our guidelines. This approach empowered every role to think like a designer. To achieve this, we created a wiki that not only served as a repository but also included interactive features. These allowed users to explore design behaviors such as state changes and responsive stretching across screen sizes, enabling both experiential learning and deeper understanding.",
                },
                {
                  title: "Based on it's users",
                  content:
                    "Our company wasn't small; it consisted of many teams catering to diverse user groups. We developed interfaces tailored to the end customer, the optician, shared optician-customer use, and the office employee. We made sure to take their different needs into consideration. For example, customer-facing interfaces emphasised white space and legibility—especially important for those who need glasses. In contrast, opticians' interfaces prioritised displaying more information and options simultaneously to support their workflow.",
                },
                {
                  title: "Built-In Flexibility",
                  content:
                    "With multiple teams working on diverse products, new needs and UI elements were always emerging. To foster a continuous feedback loop, we used the software Abstract to keep everyone aligned and to streamline suggestions from other teams. Additionally, we held biweekly meetings to present new designs, identify redundancies, and ensure smooth collaboration across teams.",
                },
              ].map((learning, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 flex gap-4"
                >
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {learning.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {learning.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fun Fact</h2>
            <p className="text-gray-700 leading-relaxed">
              The wording and definition of Basics, UI Elements and UI Patterns
              sticks with me to this date.
            </p>
          </div>

          {/* Lesson Learned */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Lesson learned
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded">
              <p className="text-gray-700 leading-relaxed">
                Because everything was built on a platform we even wrote
                ourselves, the design system not evolved anymore after my team
                left the company a couple years later. If we had done this with
                a more accessible online tool, the design system could have been
                carried on by anyone, not only us.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quest 2: Easy ordering for every diet
  if (questId === "2") {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Image */}
        <div
          className="h-64 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://www.notion.so/images/page-cover/met_william_morris_1878.jpg')`,
            backgroundPosition: "center 0%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-6 left-6">
            <BackButton />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
          {/* Title Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Easy ordering for every diet
            </h1>

            {/* Properties Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Duration
                  </p>
                  <p className="text-gray-800">1 Month</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    The Team
                  </p>
                  <p className="text-gray-800 text-sm">
                    3 Designers, 1 CEO, 1 Product Owner, 1 Developer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Applied Skills
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {currentQuest.appliedSkills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded ${getSkillTagColor(
                          skill
                        )}`}
                      >
                        {skill.split(" | ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="border-t pt-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {currentQuest.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Question */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              How might we make altering a dish in an app as quick as telling it
              to a person?
            </h2>
          </div>

          {/* Problem, Goal, Challenge */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Problem</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Finding a restaurant can take quite some time and discussion
                with your lunch group. You want something that is quickly
                prepared because time is short. But also something healthy that
                still suits the diverse set of diets within your group of
                coworkers.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Goal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Create an ordering experience that is as quick as the
                preparation while still highlighting the flexibility of the
                restaurants dishes.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Challenge
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The restaurant has no human employees. Instead a robot arm will
                prepares the healthy meals. Although a robot cook is
                fascinating, it is not supposed to be the center of attention.
                The flexible menu is.
              </p>
            </div>
          </div>

          {/* The Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              The Process
            </h2>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    {
                      phase: "Market Research",
                      description:
                        "We began by studying existing restaurant ordering apps to understand their user experiences, the steps involved, and the common design patterns familiar to users. This provided a foundation for creating a user-friendly and intuitive interface.",
                    },
                    {
                      phase: "Conduct a Design Sprint",
                      description:
                        "To quickly arrive at a testable prototype, we conducted a one-week Design Sprint. This intensive process included: 1) Workshops to explore the field and define the problem space. 2) Setting clear KPIs to measure success. 3) Ideating potential solutions. 4) Creating a prototype ready for user testing. 5) Testing the prototype with potential users to gather valuable insights. This approach allowed us to allocate time for at least one iteration within the project timeline.",
                    },
                    {
                      phase: "Build the final Design",
                      description:
                        "Using the feedback from user testing, we refined and finalized the design. Every decision, along with detailed documentation of screens, was prepared to ensure seamless handoff to the internal development team for implementation.",
                    },
                  ].map((step, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800 w-1/3 border-r border-gray-200">
                        {step.phase}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                        {step.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Learnings & Decisions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Learnings & Decisions
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "A Human Touch",
                  content:
                    "In the absence of human interaction, we brought warmth to the experience through a conversational tone in the interface, making the restaurant feel welcoming and personable.",
                },
                {
                  title: "Filter, Don't Search",
                  content:
                    "We prioritized a filtering system on the initial view, allowing users to quickly input dietary preferences. The filter was designed as a sentence completion task, creating the feel of a waiter taking their order. Popular tags were prominently displayed, while more specific options were tucked behind a 'more' button for accessibility.",
                },
                {
                  title: "Quick Overview",
                  content:
                    "The menu was designed to be extensive and adaptable, evolving over time. Here our focus was to ensure users could effortlessly navigate the options and quickly find the perfect meal. For that we reused the wording and color coding that was designed for the filter as a tagging system.",
                },
                {
                  title: "Transparency",
                  content:
                    "To accommodate users' specific health needs, we made key nutritional information and ingredients easy to discover and scan. This transparency empowered users to make informed choices.",
                },
                {
                  title: "Flexibility",
                  content:
                    "With countless diets and personal preferences, we focused on the usability for the 'create your own meal from scratch' flow. We also adapted the same patterns to the customisation of an existing dish to streamline their experience.",
                },
                {
                  title: "Fun and Easy Identification",
                  content:
                    "To notify users about their ready orders, we asked them to input their initials, which were paired with a unique emoji to avoid confusion in cases of duplicate initials. This small touch not only ensured clarity but also added an element of curiosity, surprise and delight, bringing smiles as users discovered their assigned emoji.",
                },
              ].map((learning, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 flex gap-4"
                >
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {learning.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {learning.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fun Fact</h2>
            <p className="text-gray-700 leading-relaxed">
              With a lot of sweat but thankfully no tears the design sprint was
              held in a tiny room, mid summer. Still, the interface was
              validated and ready for development within 2 weeks.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Quest 4: Custom lists for self organisation
  if (questId === "4") {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Image */}
        <div
          className="h-64 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://www.notion.so/images/page-cover/met_silk_kashan_carpet.jpg')`,
            backgroundPosition: "center 50%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-6 left-6">
            <BackButton />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
          {/* Title Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Custom lists for self organisation
            </h1>

            {/* Properties Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Duration
                  </p>
                  <p className="text-gray-800">2 Month</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    The Team
                  </p>
                  <p className="text-gray-800 text-sm">
                    2 Designers, 1 Product Owner, 6 Developers, 1 Marketing
                    Consultant, 1 Content Consultant
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Applied Skills
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {currentQuest.appliedSkills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded ${getSkillTagColor(
                          skill
                        )}`}
                      >
                        {skill.split(" | ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="border-t pt-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {currentQuest.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Question */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              How might we offer users a way to organise and customise their own
              yoga practices?
            </h2>
          </div>

          {/* Problem, Goal, Challenge */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Problem</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                User accumulated many many videos in their favourites list over
                time which made it hard to find a specific one when needed. They
                were leaving comments and contacting support about this issue
                for quite some time already and suggesting their own possible
                solutions.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Goal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Reduce the friction between deciding to do yoga and starting a
                session by helping users to organise their favourite videos.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Challenge
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Identify a solution with focus on feasibility, so we can
                implement it quickly without overthrowing the existing favourite
                lists of our customers or the apps current navigation.
              </p>
            </div>
          </div>

          {/* The Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              The Process
            </h2>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    {
                      phase: "Categorise Feedback and Brainstorm Solutions",
                      description:
                        "To organise and address our customers' accumulated suggestions from feedback and support messages, I facilitated a session to categorise feedback and brainstorm solutions. Colleagues from marketing and customer support joined us for this session, as they frequently hear user suggestions directly and can provide valuable insights.",
                    },
                    {
                      phase: "Test 2 different ideas",
                      description:
                        "We decided on testing two competing approaches (a calendar and a list feature) using simple, rough click-dummies to determine which solution addresses the problem more effectively.",
                    },
                    {
                      phase: "Tree Testing",
                      description:
                        "I set up a tree test to determine the optimal placement of the feature within our existing information architecture.",
                    },
                    {
                      phase: "Adapt the Design",
                      description:
                        "We adapted the design for all platforms (tablet and web) to ensure a seamless cross-platform experience, recognising that users frequently discover and watch videos across multiple devices.",
                    },
                  ].map((step, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800 w-1/3 border-r border-gray-200">
                        {step.phase}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                        {step.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Learnings & Decisions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Learnings & Decisions
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Stay authentic while being digital",
                  content:
                    "Digital yoga should preserve the essence of real yoga. When testing a prototype that allowed users to schedule specific yoga videos by date and time, we discovered it created a sense of pressure and obligation—feelings that go against the spirit of yoga. Instead we continued with the competing idea, the possibility to crate personal, flexible lists that keep up the spirit of Yoga.",
                },
                {
                  title: "Allow planing while avoiding pressure",
                  content:
                    "We found that our users wanted not only to save videos but also to plan them in a way that aligned with the principles of yoga. Instead of offering a traditional calendar, we provided the ability to arrange and reorder videos within a customizable list. This allowed users to plan for specific time frames or design their own personalized programs.",
                },
                {
                  title: "It is not a playlist",
                  content:
                    "Users typically watch the same video just once per session, making an auto-play feature more of an annoyance than a benefit. It would require them to quit videos more often than it would be helpful.",
                },
                {
                  title: "Embrace what users already do",
                  content:
                    'Users expressed a desire for variety, mentioning they didn\'t want to repeat the same video too often. Some even managed this manually with paper lists, noting which videos to avoid because "I just did that last week." To address this need, we added a "last seen" date to each video in the list, making it easier to track and plan.',
                },
                {
                  title: "Use familiar places",
                  content:
                    'Through tree testing, we aimed to determine where this feature should be placed within our existing structure to ensure it was easily discoverable by new users and embraced by existing ones. Ultimately, we decided to build on top of the "favorites" section. This location was not only highly rated but also addressed a pain point in its current form. The choice of placement also influenced the design of the signifier. We modified the heart icon (added a little plus) to reflect its expanded functionality while retaining its basic shape to maintain familiarity and association.',
                },
              ].map((learning, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 flex gap-4"
                >
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {learning.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {learning.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Feedback */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Feedback from our users
            </h2>
            <div className="space-y-6">
              <blockquote className="bg-blue-50 border-l-4 border-blue-400 p-6 italic">
                &quot;...I also enjoy filling my own categories at Favorieten,
                so that I can find my favorite courses very quickly. Please by
                all means keep up the good work, I&apos;m a really big
                fan!&quot;
              </blockquote>
              <blockquote className="bg-green-50 border-l-4 border-green-400 p-6 italic">
                &quot;Very good app to practice yoga at home. Now also with list
                function for favorites. Super handy and great yoga videos and
                meditations.&quot;
              </blockquote>
            </div>
          </div>

          {/* Lesson Learned */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Lesson learned
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded">
              <p className="text-gray-700 leading-relaxed">
                Researching, designing and building this feature was nothing but
                a joy as it wasn&apos;t too complex but would have a big impact.
                Releasing it on the other hand brought difficulties with it I
                haven&apos;t encountered before. We were having
                miscommunications about how to introduce this new feature in
                different places to our users. Now I know to start syncing early
                enough.
              </p>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fun Fact</h2>
            <p className="text-gray-700 leading-relaxed">
              Because this is a German app we had several lengthy discussions
              about the name of the feature that would appear in the navigation.
              As it is German tradition it ended up being quite the lengthy
              &quot;Favorietenlisten&quot;.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Quest 5: A filter for every yogi
  if (questId === "5") {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Image */}
        <div
          className="h-64 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('${getImageSrc(
              "/images/quests/filter-header.jpg"
            )}')`,
            backgroundPosition: "center 63%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-6 left-6">
            <BackButton />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
          {/* Title Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              A filter for every yogi
            </h1>

            {/* Properties Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Duration
                  </p>
                  <p className="text-gray-800">4 Month</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    The Team
                  </p>
                  <p className="text-gray-800 text-sm">
                    1 Product Owner, 2 Designers (UI & UX), 6 Developer, 1
                    Content consultant
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Applied Skills
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {currentQuest.appliedSkills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded ${getSkillTagColor(
                          skill
                        )}`}
                      >
                        {skill.split(" | ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="border-t pt-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {currentQuest.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Question */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              How might we redesign a feature that is loved by existing but
              misunderstood by new user?
            </h2>
          </div>

          {/* Problem, Goal, Challenge */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Problem</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Time to video is shorter when the filter is being used and
                completion rates more successful. But new users have trouble
                understanding the terminology and categories.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Goal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Improve the filter so new users can find suitable videos quickly
                while being considerate towards long lived habits of existing
                customers.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Challenge
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Understand the users mental model and redesign the legacy video
                metadata based on that.
              </p>
            </div>
          </div>

          {/* The Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              The Process
            </h2>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    {
                      phase: "Open interviews",
                      description:
                        "We conducted sessions with existing and potential customers to observe how they interacted with the current filter. This helped identify strengths and pinpoint pain areas for improvement.",
                    },
                    {
                      phase: "Internal Interviews",
                      description:
                        "Next I collaborated with the development and content teams to understand how the filter functioned on the backend and how it interacted with various metadata types.",
                    },
                    {
                      phase: "Card Sorting",
                      description:
                        "A card-sorting exercise helped to uncover the mental models of users regarding filter parameters and groupings. This insight informed the restructuring of the filter for better alignment with user expectations.",
                    },
                    {
                      phase: "Tree Testing",
                      description:
                        "The new filter structure from the card-sorting was used to create a tree test. This method not only validated the redesign but also served as a proof of concept, especially since the original filter had been designed by the CEO.",
                    },
                    {
                      phase: "Prototype Usability Testing",
                      description:
                        "Afterwards we moved to conducting iterative user tests with prototypes to identify and resolve usability issues. This process was repeated until users could navigate the filter effortlessly.",
                    },
                    {
                      phase: "Cross-Platform Adaptation",
                      description:
                        "Lastly we ensured the filter design was optimised for all platforms, providing a consistent and seamless filtering experience for all users, regardless of the device they used.",
                    },
                  ].map((step, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800 w-1/3 border-r border-gray-200">
                        {step.phase}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                        {step.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Learnings & Decisions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Learnings & Decisions
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "A New Structure",
                  content:
                    "The redesigned categories and tags were built around the users' mental models, not our internal perspective. This structure was informed by insights from card sorting and tree testing, ensuring alignment with user expectations.",
                },
                {
                  title: "Quick Access",
                  content:
                    "Since filtering was often the first action users took, discoverability was key. On desktop: The filter was designed to appear expanded on the homepage for logged-in users. On mobile: Space constraints meant users needed one tap to open the filter, but it was visually emphasised as a primary action for easy access.",
                },
                {
                  title: "Use-case Terminology",
                  content:
                    "We updated the language of some tags to describe the benefits of specific yoga sessions, making them clear and relatable to everyone, regardless of their familiarity with yoga.",
                },
                {
                  title: "Constant Feedback",
                  content:
                    "Given the many available tags, we ensured the filter provided real-time feedback. Users were always informed of the impact their selections had on the search results. If a combination of inputs would yield no results, the system prevented the filter from being applied, avoiding confusion.",
                },
                {
                  title: "Simple and Complex Options",
                  content:
                    "The filter was designed to accommodate both beginners and experts: For beginners: Categories were arranged to highlight the most common and straightforward options at the top for quick and intuitive filtering. For experts: Advanced categories were placed further down and, on desktop, hidden behind a 'more' button, enabling more nuanced filtering without overwhelming new users.",
                },
                {
                  title: "Time Filter Redesign",
                  content:
                    "We observed users constantly misunderstanding the duration filter – a slider to set a min. and max. value. As users would always only set one but not the other they were confused about the results. To address this confusion, we replaced the dual-knob slider with a single-knob design. This automatically calculated a range of ±5 minutes, making it simpler and more intuitive for users to set their desired session length.",
                },
              ].map((learning, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 flex gap-4"
                >
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {learning.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {learning.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Interface Images */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Filter Interface Design
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={getImageSrc("/images/quests/filter-before.png")}
                    alt="Filter interface before redesign - showing teacher selection and duration filter"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  Before: Complex filter with dual-knob slider and multiple
                  categories
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={getImageSrc("/images/quests/filter-after.png")}
                    alt="Filter interface after redesign - showing improved teacher and style selection"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  After: Streamlined interface with clear visual categories and
                  improved navigation
                </p>
              </div>
            </div>
          </div>

          {/* User Feedback */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Feedback from our users
            </h2>
            <div className="space-y-6">
              <blockquote className="bg-blue-50 border-l-4 border-blue-400 p-6 italic">
                &quot;Suuuper app but the filter/search function should be
                improved. EDIT: THERE WAS JUST A NEW FILTER. NICE!!&quot;
              </blockquote>
              <blockquote className="bg-green-50 border-l-4 border-green-400 p-6 italic">
                &quot;...Your improved filter in the app is great, by the way.
                It helps me find what I need even faster.&quot;
              </blockquote>
            </div>
          </div>

          {/* Lesson Learned */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Lesson learned
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded">
              <p className="text-gray-700 leading-relaxed mb-4">
                Changing how the time filter works was a misguided decision. We
                got loads of feedback about the wish from not only old but also
                new users to offer the possibility to set a range instead of a
                single time stamp. Looking back we should have worked out the
                usability of the existing time filter, not changed it
                completely.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Providing constant feedback had the side effect that users payed
                attention to the amount of results they would get. So they based
                their choices on the amount of results it would give them. This
                proved to be quite useful data for us to gather.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quest 6: OOUXing my Portfolio
  if (questId === "6") {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Image */}
        <div
          className="h-64 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544830281-1d5169d6b2af?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb')`,
            backgroundPosition: "center 72%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-6 left-6">
            <BackButton />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
          {/* Title Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              OOUXing my Portfolio
            </h1>

            {/* Properties Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Duration
                  </p>
                  <p className="text-gray-800">1 Month</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    The Team
                  </p>
                  <p className="text-gray-800">Just me</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Applied Skills
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {currentQuest.appliedSkills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded ${getSkillTagColor(
                          skill
                        )}`}
                      >
                        {skill.split(" | ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="border-t pt-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {["Miro ❤️", "Notion ❤️", "ORCA ❤️", "Figma ❤️"].map(
                  (tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Main Question */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              How might I show my work but also my personality in a portfolio
              using OOUX?
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-sm text-amber-800">
                This Case Study contains a lot of OOUX jargon which might be
                difficult to understand for some. However, I don&apos;t want to
                explain the process here so if you&apos;d like to learn more
                about OOUX feel free to reach out or go to{" "}
                <a
                  href="https://www.ooux.com/"
                  className="underline hover:text-amber-900"
                >
                  https://www.ooux.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Problem, Goal, Challenge */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Problem</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The website builder I used to build and host my portfolio had
                some weird bugs and I was not able to edit it anymore.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Goal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use the opportunity of the task to &quot;OOUX your own
                portfolio&quot; during the OOUX Foundations course to build a
                new portfolio with tools I have better excess to.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Challenge
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Keep to the deadline for the concept and then actually finish it
                afterwards (it&apos;s surprisingly hard when it&apos;s
                &quot;personal&quot; work).
              </p>
            </div>
          </div>

          {/* The Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              The Process
            </h2>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    {
                      phase: "Forging for Nouns",
                      description:
                        'To start off, we all got a questionnaire to fill out about what we want from a future position and for our future career to not only self reflect, but also create some "research material" to reference. Once answered I took what I wrote to hunt for nouns, as they might be indicators for objects (the building blocks of my new portfolio).',
                    },
                    {
                      phase: "Identifying the Objects",
                      description:
                        "After gathering quite the amount of post its, I started sorting them into group of potential instances and synonyms. I also sorted all important words that where potential attributes of Objects and sat them aside for later reference.",
                    },
                    {
                      phase: "Defining the Objects",
                      description:
                        "With everything boiled down to a handful of potential Objects, I jolted down some example attributes, instances, and purposes for each Object to check if they were sound enough to stand on their own. I also fleshed them out further with a description in a small table to have something thats quick to reference and tweak.",
                    },
                    {
                      phase: "Creating a nested Object Matrix",
                      description:
                        "Next I checked how the Objects might be connected to one another. I did start to question some of the Objects and if they are different and defined enough but decided to move forward with the set I had for now as I found them quite fun.",
                    },
                    {
                      phase: "Brainstorm CTAs and a Content Strategy",
                      description:
                        'I got quite broad with the possible CTAs I could offer on my portfolio, staying more hypothetical and in a "yes and…" mindset. Though I was aware that downloading the content is probably nothing anyone would need, but it made me come up with a CTA to book a mentorship session, which I would not have thought of otherwise.',
                    },
                    {
                      phase: "Creating an Object Map",
                      description:
                        "Staying with the &quot;yes and...&quot; mindset, I added all sorts of core content and metadata I was able to come up with. After adding the nested Objects and CTAs I started to scope out everything that seemed too much or unrealistic.",
                    },
                    {
                      phase: "Creating a navigation flow",
                      description:
                        "With a now clearer picture about how the portfolio will &quot;look like&quot; content wise, I created a navigation flow to connect all objects with one another. Here I wanted to pay attention to the possibility to discover all content without having to use the main navigation. I also started to think about sorting and filtering options, though left it in a bit of an unsure state for now.",
                    },
                    {
                      phase: "Wireframing Cards and Screens",
                      description:
                        "I jumped back and forth between designing the cards and screen for each object. When seeing a card in a screen / story telling context I noticed repeatedly small things that did not feel quite right yet. It was very nice to catch these things early as wireframes are so quick to alter.",
                    },
                    {
                      phase: "Iterate",
                      description:
                        "After handing in what I had so far I received a bunch of valuable and helpful feedback from our mentors. With that I went on to tighten the definition of my object and scope down the content, navigation and needed cards and pages.",
                    },
                    {
                      phase: "Build",
                      description:
                        "To be honest, I'm not done. A portfolio is never done, but at the moment I specifically need to look into a better way of building and hosting a website. It will probably be Webflow, I just need to learn the tool (can add that to the list of tools then 😉)",
                    },
                  ].map((step, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800 w-1/3 border-r border-gray-200">
                        {step.phase}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                        {step.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Learnings & Decisions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Learnings & Decisions
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Flavour is fun, but it can be confusing",
                  content:
                    "As you probably noticed, my case studies are called &quot;Quests&quot; and my books are in my &quot;Inventory&quot;. I wanted to convey personality through naming which I enjoyed coming up with. After receiving the feedback it was clear that not everyone will understand the metaphor. To make sure people are not completely confused I tried to make it clear that it is a metaphor through visualisation and also by keeping the structure traditional to a certain degree. I&apos;m always open for feedback so please feel free to reach out!",
                },
                {
                  title: "Many things could, not everything should",
                  content:
                    "As I mentioned, I scoped down quite a bit during the iteration. This was a feedback but also something I noticed when looking at the content I could produce more realistically. It would be cool to be able to present all the work I ever did and filter through even my personal projects, but it would take me way to long to create all that content.",
                },
                {
                  title: "The back and forth was ok!",
                  content:
                    "Even while working on the first draft I jumped between the steps a lot. When noticing that something would not work as I thought or I had a new, fun idea. I was relieved to notice that it was actually quite easy to carry changes through. I take this specifically as nice opportunity to practice the method.",
                },
                {
                  title: "The UI has to wait, but it was made easier",
                  content:
                    "When your excited about an idea, it's hard to hold back from scribbeling and figma-ing sometimes. I did create 2 different mood boards to at least do something with that energy and when it finally got to the visual phase it was very satisfying to be able to concentrate on the UI, as the UX was already done.",
                },
              ].map((learning, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 flex gap-4"
                >
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {learning.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {learning.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fun Fact</h2>
            <p className="text-gray-700 leading-relaxed">
              For my participation I got a shout out as OOUXer of the month (May
              2025) within the community. And I do count that as an achievement!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // For now, we'll show the Effortless Onboarding project for quest ID 3
  if (questId !== "3") {
    // Use notFound() for invalid quest IDs to show 404 page
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg')`,
          backgroundPosition: "center 90%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute top-6 left-6">
          <BackButton />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        {/* Title Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Effortless onboarding with a personalised reward
          </h1>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Duration
                </p>
                <p className="text-gray-800">4 Month</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  The Team
                </p>
                <p className="text-gray-800 text-sm">
                  2 Designers, 1 Product Owner, 6 Developers, 1 Marketing
                  Consultant, 1 Content Consultant
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Applied Skills
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {currentQuest.appliedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded ${getSkillTagColor(
                        skill
                      )}`}
                    >
                      {skill.split(" | ")[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Question */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            How might we help users discover value within their first time using
            our app?
          </h2>
        </div>

        {/* Problem, Goal, Challenge */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Problem</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The pandemic made online yoga boom. Though a dip in new users
              signing up and subscribing was expected, it was more drastic than
              predicted, especially on mobile.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Goal</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Get more mobile users to purchase a subscription after signing up
              and completing the trial period.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Challenge</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Identify why users might miss to learn about the value a
              subscription can give so we can come up with a solution that will
              present it better and more early on in their first time
              experience.
            </p>
          </div>
        </div>

        {/* The Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">The Process</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {[
                  {
                    phase: "Open Interviews",
                    description:
                      "We talked to a hand full of potential users in an open interview to observe them interacting with our app for the first time. This allowed us to identify where problems and doubts arose, as well as pinpoint when and how users discovered value in the app.",
                  },
                  {
                    phase: "Ideation Workshop",
                    description:
                      "Next I facilitated an ideation workshop to brainstorm solutions for the key issues we uncovered and to find ways to deliver value to users more rapidly. The idea we chose to place our bet on was a new onboarding process culminating in a personalised video recommendation.",
                  },
                  {
                    phase: "Testing Competitors",
                    description:
                      "In additional interviews with direct competitors we gained insights into effective onboarding experiences. This helped us understand which approaches work well, which to avoid, and what users expect from onboarding and recommendations.",
                  },
                  {
                    phase: "Market Research",
                    description:
                      "To start the design process I gathered up and analysed several onboarding experiences, identifying common structures and patterns.",
                  },
                  {
                    phase: "Internal Interviews",
                    description:
                      "To inform our onboarding concept, I consulted colleagues from various departments. Yoga teachers helped define key questions for providing valuable recommendations, while the content team assisted in matching answer options with metadata.",
                  },
                  {
                    phase: "Wizard of Oz",
                    description:
                      "After finishing a first draft of the onboarding experience, I built a prototype using the Wizard of Oz technique. This allowed us to assess how well users navigated the onboarding process and what constitutes a valuable recommendation.",
                  },
                  {
                    phase: "Iterate",
                    description:
                      "We iterated on the onboarding process multiple times, continuously engaging with users to identify and resolve usability issues. Through this iterative approach, we refined our concept to its final form.",
                  },
                  {
                    phase: "Technical Proof of Concept",
                    description:
                      "I consulted with the developers on my team to identify and understand potential feasibility issues and address major tasks as early as possible.",
                  },
                  {
                    phase: "Adopt Concept to all Platforms",
                    description:
                      "Once the concept was finalised, we adopted it across all platforms to provide recommendations to users signing up via web or tablet.",
                  },
                ].map((step, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800 w-1/3 border-r border-gray-200">
                      {step.phase}
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                      {step.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Learnings & Decisions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Learnings & Decisions
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "It should be personalised",
                content:
                  "We found that users engage more quickly with the app, when they find a video that meets their immediate needs. To facilitate this, we introduced a new onboarding with questions about their preferences and leveraged the collected metadata to identify suitable video matches. However, we found that not all metadata holds equal importance. As long as the video's duration, style, and title aligned with their preferences, users were sufficiently compelled to watch it.",
              },
              {
                title: "It should be flexible",
                content:
                  "After observing users with a very clear goal in mind feeling board or even annoyed by going through a lengthy onboarding, we also decided that users should not be required to complete it if their primary goal is simply to search for videos independently. Instead, they should be quickly guided to that option.",
              },
              {
                title: "It should be rewarded",
                content:
                  "To encourage users to return the next day, we wanted to offer more than just a feed to browse after completing the onboarding. We created a personalised package based on their answers—a curated list of videos—for users to explore during their trial period. By allowing them to edit their list and give it a name, we fostered an emotional connection, increasing the likelihood that they would fully engage with their trial period.",
              },
              {
                title: "It should be temporary",
                content:
                  "After completing the apps onboarding, users often wanted a video to practice with immediately but voiced that their needs might change tomorrow. To eliminate any sense of being trapped, we ensured it was clear from the start that their answers wouldn't influence a permanent algorithm. Instead, the outcome would be a personalized list designed to help them begin their journey.",
              },
            ].map((learning, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 flex gap-4"
              >
                <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {learning.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {learning.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fun Fact</h2>
          <p className="text-gray-700 leading-relaxed">
            In the click dummies we faked the algorithm for recommended videos
            so convincingly, that users where actually interested in the videos
            they got and signed up after the test.
          </p>
        </div>
      </div>
    </div>
  );
}
