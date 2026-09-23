import Link from "next/link";

// Static hosting has no server-side redirects, so the root picks a language in the browser:
// the saved choice first, then the browser language, falling back to Russian.
const pickLanguage = `(function(){var l;try{l=localStorage.getItem('lang')}catch(e){}
if(l!=='ru'&&l!=='kk'&&l!=='en'){var n=(navigator.languages&&navigator.languages[0]||navigator.language||'ru').toLowerCase();
l=n.indexOf('kk')===0?'kk':n.indexOf('en')===0?'en':'ru'}location.replace('/'+l+'/')})()`;

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: pickLanguage }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/ru/" />
      </noscript>
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", gap: 12 }}>
        <p style={{ display: "flex", gap: 20 }}>
          <Link href="/ru/" style={{ color: "#fff" }}>Русский</Link>
          <Link href="/kk/" style={{ color: "#fff" }}>Қазақша</Link>
          <Link href="/en/" style={{ color: "#fff" }}>English</Link>
        </p>
      </main>
    </>
  );
}
