import { expect, test } from '@playwright/test'

// TODO: complete the e2e test
test('should navigate to the homepage', async ({ page }) => {
  await page.goto('http://localhost:3000/')
})
