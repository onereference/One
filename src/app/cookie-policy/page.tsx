
export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <article className="prose prose-invert prose-lg lg:prose-xl prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80">
          <h1>Cookie Policy</h1>
          <p className="lead text-slate-300">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>This Cookie Policy explains what cookies are and how OneReference ("us", "we", or "our") uses them on the OneReference website (the "Service"). You should read this policy so you can understand what type of cookies we use, the information we collect using cookies and how that information is used.</p>
          <p>By using the Service, you consent to the use of cookies in accordance with this Cookie Policy.</p>

          <h2>What are cookies?</h2>
          <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you've been to the website before.</p>
          <p>Cookies are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

          <h2>How we use cookies</h2>
          <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
          
          <h3>Types of Cookies We Use</h3>
          <h4>Essential Cookies</h4>
          <p>These cookies are necessary for the Service to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work.</p>
          
          <h4>Performance and Analytics Cookies</h4>
          <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Service. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>

          <h4>Functionality Cookies</h4>
          <p>These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly. For example, we use functionality cookies to remember your user type selection or theme preference.</p>

          <h4>Third-Party Cookies</h4>
          <p>In some special cases, we also use cookies provided by trusted third parties. For example, our Service may use Google Analytics, which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
          <p>If we integrate with third-party authentication providers (e.g., Google, LinkedIn, Facebook), these services may also set their own cookies to manage the authentication process.</p>

          <h2>Your choices regarding cookies</h2>
          <p>If you'd prefer to avoid the use of cookies on the Service, you can disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.</p>
          <p>If you do not accept our cookies, you may experience some inconvenience in your use of the Service and some features may not function properly.</p>
          <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>
          <p>Find out how to manage cookies on popular browsers:</p>
          <ul>
            <li><a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          </ul>

          <h2>Changes to This Cookie Policy</h2>
          <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Cookie Policy, please contact us:</p>
          <ul>
            <li>By email: legal@onereference.com</li>
            <li>By visiting this page on our website: <a href="/contact">Contact Page</a></li>
          </ul>
        </article>
      </div>
    </div>
  );
}
