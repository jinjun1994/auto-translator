import * as puppeteer from "puppeteer";
import fs from "fs";
import markdownMagic from "markdown-magic"; //假设你已经引入了一个将HTML转化为Markdown的库
import { NodeHtmlMarkdown } from "node-html-markdown";

const ext = "D:\\jinjun\\auto-translator\\chrome-immersive-translate-0.7.11";
console.log(ext);

const urls = [
  "https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/",
  // "https://google.com"
];

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function run() {
  console.log("start");
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${ext}`,
      `--load-extension=${ext}`,
      `--window-size=1920,1080`,
    ],
    protocolTimeout: 1000*60*60,

    // save data to disk
    userDataDir: "./tmp",
    // browser width and height
    defaultViewport: {
      width: 1200,
      height: 800,
    },
  });
  const page = await browser.newPage();

  for (let i = 0; i < urls.length; i++) {
    //打开url
    await page.goto(urls[i]);

    //保存为HTML
    const html = await page.content();

    // 同时按下Alt+W，切换到沉浸式阅读模式
    // await page.keyboard.down('Alt');
    // await page.keyboard.press('W');
    // await page.keyboard.up('Alt');
    await sleep(1000);

    // 找到 html 元素 通过鼠标点击
    await page.bringToFront();
    // move mouse to the top left corner of the page
    await page.mouse.move(200, 200);

    // await page.click("html");
    // await page.keyboard.down("Alt");
    // await sleep(1000);

    // await page.keyboard.down("W");
    // await sleep(1000);
    // await page.keyboard.up("W");
    // await sleep(1000);

    // await page.keyboard.up("Alt");

    // click right button
    // await page.mouse.move(200, 200);
    // await page.mouse.click(200, 200, { button: "right" });
    // await page.mouse.move(250, 390);

    // await page.mouse.click(250, 390, { button: "left" });

    // 无效，选择总是翻译英语就行了


    // set timeout
  
    // 缓慢滚动到底部
    await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
        var totalHeight = 0;
        var distance = 100;
        var timer = setInterval(() => {
          var scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 500);
      });
    });

    fs.writeFile(`output_${i}.html`, html, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    //保存为PDF
    await page.pdf({ path: `output_${i}.pdf`, format: "A4" });

    //保存为Markdown

    const markdown = NodeHtmlMarkdown.translate(html);

    fs.writeFile(`output_${i}.md`, markdown, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

  await browser.close();
}
run();
