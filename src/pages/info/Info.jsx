const Info = ({support}) => {
  return (
    <>
      <div className="max-w-12xl mx-auto p-6 bg-gradient-to-r from-indigo-200 via-blue-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">About This Website</h1>
      <p className="text-lg mb-6 leading-relaxed">
        Together Against Violence is a platform dedicated to supporting survivors of gender-based violence, raising awareness, and fostering equality in Tajikistan. Our goal is to create a safe and empowering space where individuals can access resources, share their stories, and find the support they need to build a better future.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">Gender-Based Violence in Tajikistan</h2>
      <h3 className="text-2xl font-semibold mb-2">The Reality</h3>
      <p className="mb-4 text-gray-700">
        In Tajikistan, gender-based violence remains a significant challenge, often rooted in societal norms and traditional practices. Many survivors face barriers to reporting abuse, such as:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Fear of stigma or judgment.</li>
        <li>Limited access to trusted support systems.</li>
        <li>Lack of awareness about their rights and available resources.</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-indigo-700">The Numbers</h3>
      <p className="mb-6 text-gray-700">
        While exact statistics are often underreported, studies and NGOs highlight that a significant percentage of women and children in Tajikistan experience some form of violence in their lifetimes.
      </p>

      <h3 className="text-2xl font-semibold mb-2 text-indigo-700">Our Response</h3>
      <p className="mb-4 text-gray-700">
        This website was created to address these issues by:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Providing anonymous support to survivors.</li>
        <li>Raising awareness about gender-based violence and how to combat it.</li>
        <li>Offering resources specific to Tajikistan, including local organizations, safe spaces, and hotlines.</li>
      </ul>

      <div className="mb-8">
        <img
          src={support}
          alt="Gender-based Violence"
          className="rounded-lg shadow-xl w-full h-auto"
        />
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">How This Website Works</h2>
      <h3 className="text-2xl font-semibold mb-2 text-indigo-700">Get Support</h3>
      <p className="mb-4 text-gray-700">Visit the Support section to access confidential help and resources.</p>
      <h3 className="text-2xl font-semibold mb-2 text-indigo-700">Stay Informed</h3>
      <p className="mb-4 text-gray-700">Read stories, tips, and guides to better understand the fight against gender violence and how you can help.</p>
      <h3 className="text-2xl font-semibold mb-2 text-indigo-700">Join the Movement</h3>
      <p className="mb-4 text-gray-700">Share your story, volunteer, or advocate for change in your community.</p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">Why Focus on Tajikistan?</h2>
      <p className="mb-4 text-gray-700">
        Cultural Context: Tajikistan’s unique cultural and social fabric requires tailored solutions to address issues like domestic violence and gender inequality.
      </p>
      <p className="mb-4 text-gray-700">
        Rural Challenges: Many survivors in rural areas face additional obstacles due to lack of infrastructure and access to support services.
      </p>
      <p className="mb-4 text-gray-700">
        Advocating Change: By addressing these challenges, we aim to empower individuals and communities to break the cycle of violence and promote equality.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">Key Features of the Website</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Anonymous Support: A safe place to seek help without fear of judgment.</li>
        <li>Comprehensive Resources: Information on local NGOs, shelters, and emergency hotlines.</li>
        <li>Educational Content: Guides, articles, and FAQs to raise awareness about rights and prevention strategies.</li>
        <li>Community Stories: Anonymous stories from survivors to inspire hope and resilience.</li>
        <li>Legal Guidance: Information about laws and policies in Tajikistan that protect survivors and promote gender equality.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">Our Mission in Tajikistan</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Empower Survivors: Help individuals reclaim their lives through access to resources, mental health support, and safe spaces.</li>
        <li>Raise Awareness: Educate communities about the importance of gender equality and the consequences of violence.</li>
        <li>Promote Legal Action: Advocate for stronger enforcement of laws that protect survivors and hold perpetrators accountable.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">Did You Know? (Tajikistan-Specific Information)</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>In Tajikistan, several NGOs actively work to support survivors, such as [insert NGO names here].</li>
        <li>The Tajik government has taken steps to address gender-based violence, including the adoption of [insert law or policy details].</li>
        <li>More than 50% of violence cases in rural Tajikistan go unreported due to lack of awareness and societal stigma.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">Let’s Create Change Together</h2>
      <p className="mb-6 text-gray-700">
        By learning, sharing, and acting, you can contribute to a safer, more equal Tajikistan. Explore the resources and information on this website to see how you can make a difference.
      </p>
    </div>
    </>
  )
}

export default Info