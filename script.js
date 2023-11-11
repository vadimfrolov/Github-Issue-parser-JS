const axios = require('axios');
const cheerio = require('cheerio');

const device_id = 'get from_github cookies';
const user_session = 'get from_github cookies';
const owner = 'name of the owner';
const repository_name = 'name of the repository';
const issue_number = 'issue number';

const headers = {
  'authority': 'github.com',
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
  'cache-control': 'no-cache',
  'cookie': `tz=Europe%2FLondon; _device_id=${device_id}; user_session=${user_session}; logged_in=yes; dotcom_user=Galadirith;`,
  'pragma': 'no-cache',
  'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
  'user-agent': 'your-user-agent'
};

axios.get(`https://github.com/${owner}/${repository_name}/issues/${issue_number}`, { headers })
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const timelineItems = $('div.TimelineItem-body');
    timelineItems.each((index, element) => {
      const itemText = $(element).text();
      if (itemText.includes('moved this from')) {
        const strongText = [];
        const anchorText = [];
        const datetimeValues = [];

        $(element).find('strong').each((index, strongElement) => {
          strongText.push($(strongElement).text().trim());
        });

        $(element).find('a[href*="projects"]').each((index, anchorElement) => {
          anchorText.push($(anchorElement).text().trim());
        });

        $(element).find('.Link--secondary > relative-time').each((index, datetimeElement) => {
          datetimeValues.push($(datetimeElement).attr('datetime'));
        });

        console.log(strongText, anchorText, datetimeValues);
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
