import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getPortfolioEntries() {
  const databaseId = process.env.NOTION_PORTFOLIO_DATABASE_ID;

  if (!databaseId) {
    return [];
  }

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results;
}
