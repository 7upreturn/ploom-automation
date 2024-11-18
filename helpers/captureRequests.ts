import { Page } from 'playwright';

export async function captureAllRequests(page: Page) {
    const requests: string[] = [];

    page.on('request', request => {
      requests.push(request.url());
    });

    // Wait for network idle to ensure requests are captured
   // await page.waitForLoadState('networkidle');

    // Log all requests after the page load
   // console.log('Captured Requests:', requests);
  }

