#!/usr/bin/env node
/**
 * IndexNow API submission script
 * Run after deploying new content: node scripts/indexnow.js
 * Submits all published URLs to Bing, Yandex, etc. for instant indexing.
 */

const SITE = 'https://dayahimour.org';
const KEY = '334ebed7d28114c09ac658e477975c60';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

async function submitIndexNow(urls) {
  const body = {
    host: 'dayahimour.org',
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    console.log(`IndexNow response: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log(`✅ Successfully submitted ${urls.length} URLs`);
    } else {
      const text = await res.text();
      console.error(`❌ Failed: ${text}`);
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

// Collect URLs from command args or submit key pages
const args = process.argv.slice(2);
if (args.length > 0) {
  submitIndexNow(args);
} else {
  // Default: submit all key pages
  const urls = [
    `${SITE}/ar/`,
    `${SITE}/en/`,
    `${SITE}/ar/blog/`,
    `${SITE}/en/blog/`,
    `${SITE}/ar/models/`,
    `${SITE}/en/models/`,
    `${SITE}/ar/tools/`,
    `${SITE}/en/tools/`,
    `${SITE}/ar/future/`,
    `${SITE}/en/future/`,
    `${SITE}/ar/about/`,
    `${SITE}/en/about/`,
    `${SITE}/sitemap.xml`,
  ];
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  submitIndexNow(urls);
}
