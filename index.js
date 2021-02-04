const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const products = [];
  async function getPageData() {
    await page.goto("https://mx.frubana.com/cmx/");
    // await page.screenshot({
    //   path: "screenshot.png",
    //   fullPage: true,
    // });
    const data = await page.evaluate(() => {
      const $products = document.querySelectorAll(".product-title");
      const data = [];
      $products.forEach(($product) => {
        data.push({
          content: $product.querySelector(".product-title").textContent.trim(),
        });
      });
      return {
        products: data,
      };
    });
    console.log(data);
  }
  getPageData();
  //await browser.close();
}

run();
