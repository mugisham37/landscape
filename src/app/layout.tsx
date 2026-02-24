import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

c   <meta charset="utf-8">
    <title>Elevate - Webflow Ecommerce website template</title>
    <meta
        content="Elevate is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        name="description">
    <meta content="Elevate - Webflow Ecommerce website template" property="og:title">
    <meta
        content="Elevate is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        property="og:description">
    <meta
        content="https://cdn.prod.website-files.com/67463b290def428dc18a7933/675a5fe889a7d2497c40d4f6_Ophen%20GraphSerenium.png"
        property="og:image">
    <meta content="Elevate - Webflow Ecommerce website template" property="twitter:title">
    <meta
        content="Elevate is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        property="twitter:description">
    <meta
        content="https://cdn.prod.website-files.com/67463b290def428dc18a7933/675a5fe889a7d2497c40d4f6_Ophen%20GraphSerenium.png"
        property="twitter:image">
    <meta property="og:type" content="website">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="Webflow" name="generator">
    <link
        href="https://cdn.prod.website-files.com/67463b290def428dc18a7933/css/elevates-temlis.webflow.shared.22aeca42d.css"
        rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CInter:300,regular,500,600,700%7CGeist:300,regular,500,600,700%7CSpline+Sans:regular,500,600"
        media="all">
    <script
        type="text/javascript">WebFont.load({ google: { families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Inter:300,regular,500,600,700", "Geist:300,regular,500,600,700", "Spline Sans:regular,500,600"] } });</script>
    <script
        type="text/javascript">!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);</script>
    <link href="https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png"
        rel="shortcut icon" type="image/x-icon">
    <link href="https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png"
        rel="apple-touch-icon">
    <script
        type="text/javascript">window.__WEBFLOW_CURRENCY_SETTINGS = { "currencyCode": "USD", "symbol": "$", "decimal": ".", "fractionDigits": 2, "group": ",", "template": "{{wf {\"path\":\"symbol\",\"type\":\"PlainText\"} }} {{wf {\"path\":\"amount\",\"type\":\"CommercePrice\"} }} {{wf {\"path\":\"currencyCode\",\"type\":\"PlainText\"} }}", "hideDecimalForWholeNumbers": false };</script>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body class="body">
    <div class="page-wrapper">
        <main class="main-wrapper">
          {children}
        </main>
        <footer/>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67463b290def428dc18a7933"
        type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
    <script src="https://cdn.prod.website-files.com/67463b290def428dc18a7933/js/webflow.schunk.0e77e8610c42c2bf.js"
        type="text/javascript"></script>
    <script src="https://cdn.prod.website-files.com/67463b290def428dc18a7933/js/webflow.schunk.835ae68db9d4a638.js"
        type="text/javascript"></script>
    <script src="https://cdn.prod.website-files.com/67463b290def428dc18a7933/js/webflow.04ee3e30.3d8869d9ce8d01eb.js"
        type="text/javascript"></script>
      </body>
    </html>
  );
}
