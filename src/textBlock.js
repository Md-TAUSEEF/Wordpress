import "./App.css";

function TextBlock() {
  return (
    <div id="textblock">
      <div id="textblock-container">
        <h1 id="textblock-title">What is Wordpress?</h1>
        <p id="textblock-content">
          The year was 2003.
          <br />
          <br />
          The most popular way to create
          your own website or blog was developed. In fact, WordPress powers over 43.3% of all
          the websites on the Internet. Yes – more than one in four websites
          that you visit are likely powered by WordPress. <br />
          <br />
          On a slightly more technical level, WordPress is an open-source
          content management system licensed under GPLv2, which means that
          anyone can use or modify the WordPress software for free. A content
          management system is basically a tool that makes it easy to manage
          important aspects of your website – like content – without needing to
          know anything about programming. <br/><br/>
          The end result is that WordPress
          makes building a website accessible to anyone – even people who aren’t
          developers.
        </p>
      </div>
      <footer id="textblock-footer">
        Website Created With 🧡 By&nbsp;
        <a id="textblock-devsense" href="https://youtube.com/c/DevSense19">
          Tauseef
        </a>
      </footer>
    </div>
  );
}

export default TextBlock;
