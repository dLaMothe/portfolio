"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, Users, Target, Lightbulb } from "lucide-react";

export default function QuestDetailPage() {
  const params = useParams();
  const router = useRouter();
  const questId = params?.id as string;

  // Quest 5: A filter for every yogi
  if (questId === "5") {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Image */}
        <div
          className="h-64 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/img/filter-header.jpg')`,
            backgroundPosition: "center 63%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-6 left-6">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </button>
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
                    {[
                      "UX Design",
                      "User Research",
                      "Prototyping",
                      "Workshop Facilitation",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                      >
                        {skill}
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
                {[
                  "Optimal Workshop ❤️",
                  "rapid Usertests",
                  "Figma ❤️",
                  "Miro ❤️",
                  "Card Sorting ❤️",
                  "Tree Testing ❤️",
                  "Expert Interviews ❤️",
                ].map((tool, index) => (
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
                    src="/img/filter-before.png"
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
                    src="/img/filter-after.png"
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

          {/* Filter Process Flow */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Applying the Filter - Process Flow
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Filter Application Process
                    </h3>
                    <p className="text-sm max-w-md">
                      Complete flowchart showing the user journey through the
                      filter system, including decision points, user
                      interactions, and resulting outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                This comprehensive flowchart maps out the entire filter
                application process, showing how users navigate through
                different filter options and how the system responds to provide
                relevant yoga content recommendations.
              </p>
            </div>
          </div>

          {/* User Feedback */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Feedback from our users
            </h2>
            <div className="space-y-6">
              <blockquote className="bg-blue-50 border-l-4 border-blue-400 p-6 italic">
                "Suuuper app but the filter/search function should be improved.
                EDIT: THERE WAS JUST A NEW FILTER. NICE!!"
              </blockquote>
              <blockquote className="bg-green-50 border-l-4 border-green-400 p-6 italic">
                "...Your improved filter in the app is great, by the way. It
                helps me find what I need even faster."
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
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </button>
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
                    {["OOUX", "UX Design", "UI Design"].map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                      >
                        {skill}
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
                difficult to understand for some. However, I don't want to
                explain the process here so if you'd like to learn more about
                OOUX feel free to reach out or go to{" "}
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
                Use the opportunity of the task to "OOUX your own portfolio"
                during the OOUX Foundations course to build a new portfolio with
                tools I have better excess to.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Challenge
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Keep to the deadline for the concept and then actually finish it
                afterwards (it's surprisingly hard when it's "personal" work).
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Quest Details Coming Soon</h1>
          <p className="text-gray-600 mb-4">
            This project case study will be available soon.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
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
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </button>
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
                  {[
                    "Prototyping",
                    "User Research",
                    "UX Design",
                    "UX Writing",
                    "Workshop Facilitation",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                    >
                      {skill}
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
