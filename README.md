# GitHub Issue Tracker History Scraper

This Node.js script utilizes Axios and Cheerio to scrape and extract historical events from the timeline of a GitHub issue. It is designed to fetch relevant data such as when an issue was moved between projects.

## Note

Works for "Projects (beta)" and issues that are still on board.
Not working for "Projects (classic)".

## Usage

1. Replace the placeholders in the script with your GitHub cookies, owner name, repository name, and issue number.
2. Don't forget to use "**device_id**" and "**user_session**" from GitHub cookie, you can use browser devtools for this.
3. Add "**owner**" of the project, "**repository_name**" and "**issue_number**". Issue number is usually last digits on the url like "....issues/**1189**"
4. Run the script using Node.js.

```bash
node script.js
```

## Dependencies
- [Axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js.
- [Cheerio](https://www.npmjs.com/package/cheerio): Fast, flexible, and lean implementation of core jQuery for the server.

## Script Explanation

The script makes an HTTP request to the GitHub issue's timeline page and extracts relevant information about events where the issue was moved between projects. It outputs the details of these events, including strong text, anchor text, and datetime values.

## Disclaimer
This script is intended for educational and personal use. Use responsibly and in accordance with GitHub's terms of service.
