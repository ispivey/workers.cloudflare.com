import React from "react"

import "@cloudflare/workers-brand-assets/css/components/footer.css"

const Footer = () => (
  <footer className="Footer Footer-with-top-separator">
    <div className="Footer--columns">
      <div className="Footer--column Footer--column-logo">
        <a href="https://workers.cloudflare.com" className="Footer--logo-link Link Link-without-underline">
          <img className="Footer--logo-link-image" alt="Workers logo" src="https://workers.cloudflare.com/resources/logo/logo.svg"/>
        </a>
      </div>
      <div className="Footer--column">
        <h2 className="Footer--column-title">Product</h2>
        <ul className="Footer--column-list">
          <li className="Footer--column-list-item"><a href="https://workers.cloudflare.com/sites" className="Link Link-without-underline Link-is-juicy">Workers Sites</a></li>
          <li className="Footer--column-list-item"><a href="https://developers.cloudflare.com/workers/reference/storage/overview/" className="Link Link-without-underline Link-is-juicy">Key-value storage</a></li>
          <li className="Footer--column-list-item"><a href="https://developers.cloudflare.com/workers/about/using-cache/" className="Link Link-without-underline Link-is-juicy">Caching</a></li>
          <li className="Footer--column-list-item"><a href="https://workers.cloudflare.com/#plans" className="Link Link-without-underline Link-is-juicy">Pricing</a></li>
        </ul>
      </div>
      <div className="Footer--column">
        <h2 className="Footer--column-title">Docs</h2>
        <ul className="Footer--column-list">
          <li className="Footer--column-list-item"><a href="https://developers.cloudflare.com/workers/tutorials/" className="Link Link-without-underline Link-is-juicy">Tutorials</a></li>
          <li className="Footer--column-list-item"><a href="https://developers.cloudflare.com/workers/templates/" className="Link Link-without-underline Link-is-juicy">Templates</a></li>
          <li className="Footer--column-list-item"><a href="https://developers.cloudflare.com/workers/reference/tooling/" className="Link Link-without-underline Link-is-juicy">Tooling reference</a></li>
          <li className="Footer--column-list-item"><a href="https://developers.cloudflare.com/workers/reference/runtime/apis/" className="Link Link-without-underline Link-is-juicy">API reference</a></li>
        </ul>
      </div>
      <div className="Footer--column">
        <h2 className="Footer--column-title">About</h2>
        <ul className="Footer--column-list">
          <li className="Footer--column-list-item"><a href="https://developers.cloudflare.com/workers/about/how-it-works/" className="Link Link-without-underline Link-is-juicy">How it works</a></li>
          <li className="Footer--column-list-item"><a href="https://developers.cloudflare.com/workers/about/tips/" className="Link Link-without-underline Link-is-juicy">Tips</a></li>
          <li className="Footer--column-list-item"><a href="https://blog.cloudflare.com/serverlist/" className="Link Link-without-underline Link-is-juicy">Newsletter</a></li>
          <li className="Footer--column-list-item"><a href="https://blog.cloudflare.com/tag/serverless/" className="Link Link-without-underline Link-is-juicy">Blog</a></li>
        </ul>
      </div>
      <div className="Footer--column">
        <h2 className="Footer--column-title">Help</h2>
        <ul className="Footer--column-list">
          <li className="Footer--column-list-item"><a href="https://www.cloudflarestatus.com/" className="Link Link-without-underline Link-is-juicy">Status</a></li>
          <li className="Footer--column-list-item"><a href="https://community.cloudflare.com/c/developers/workers" className="Link Link-without-underline Link-is-juicy">Forum</a></li>
          <li className="Footer--column-list-item"><a href="https://support.cloudflare.com/hc/en-us/sections/360000215372-Cloudflare-Workers" className="Link Link-without-underline Link-is-juicy">Support</a></li>
          <li className="Footer--column-list-item"><a href="https://twitter.com/CloudflareDev" className="Link Link-without-underline Link-is-juicy">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div className="Footer--legal">© 2020 Cloudflare, Inc. · <a className="Link Link-without-underline" href="https://www.cloudflare.com/privacypolicy/">Privacy</a> · <a className="Link Link-without-underline" href="https://www.cloudflare.com/website-terms/">Terms</a></div>
  </footer>
)

export default Footer
