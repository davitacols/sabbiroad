export default function CookiesPage() {
  const sections = [
    { id: "what-are-cookies", title: "1. What are cookies?" },
    { id: "why-use-cookies", title: "2. Why do we use cookies?" },
    { id: "cookie-control", title: "3. How can you control cookies?" },
    { id: "cookie-types", title: "4. Types of cookies we use" },
    { id: "policy-changes", title: "5. Changes to this Cookie Policy" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Cookie Policy</h1>
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <p className="text-gray-700">
            This Cookie Policy explains how SABIROAD uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Contents</h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <div key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline block"
                >
                  {section.title}
                </a>
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <section id="what-are-cookies" className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. What are cookies?</h2>
            <p className="text-gray-700">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section id="why-use-cookies" className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Why do we use cookies?</h2>
            <p className="text-gray-700">
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
            </p>
          </section>

          <section id="cookie-control" className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How can you control cookies?</h2>
            <p className="text-gray-700">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner or by setting or amending your web browser controls to accept or refuse cookies.
            </p>
          </section>

          <section id="cookie-types" className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Types of cookies we use</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Essential cookies</h3>
                <p className="text-gray-700">
                  These cookies are strictly necessary to provide you with services available through our website and to use some of its features.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Analytics cookies</h3>
                <p className="text-gray-700">
                  These cookies help us understand how our website is being used, how effective marketing campaigns are, and help us customize and improve our websites for you.
                </p>
              </div>
            </div>
          </section>

          <section id="policy-changes" className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Changes to this Cookie Policy</h2>
            <p className="text-gray-700">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
          </section>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );
}