import {expect, test} from '@playwright/test';

test('X win', async ({page}) => {
    await page.goto('http://localhost:3000/tic-tac-toe');

    await page.locator('#cell-0').click();
    await page.locator('#cell-4').click();
    await page.locator('#cell-1').click();
    await page.locator('#cell-5').click();
    await page.locator('#cell-2').click();

    await expect(page.locator('#root')).toContainText('The winner is X');
});

test('O win', async ({page}) => {
    await page.goto('http://localhost:3000/tic-tac-toe');

    await page.locator('#cell-0').click();
    await page.locator('#cell-4').click();
    await page.locator('#cell-1').click();
    await page.locator('#cell-3').click();
    await page.locator('#cell-7').click();
    await page.locator('#cell-5').click();

    await expect(page.locator('#root')).toContainText('The winner is O');
});

test('computer is playing', async ({page}) => {
    await page.goto('http://localhost:3000/tic-tac-toe');

    await page.locator('label div').click()
    await page.locator('#cell-0').click();

    await expect(page.getByRole('button', { name: 'O' })).toBeVisible();
});

test('can start a new game', async ({ page }) => {
    await page.goto('http://localhost:3000/tic-tac-toe');

    await page.locator('#cell-1').click();
    await page.locator('#cell-2').click();
    await page.locator('#cell-4').click();
    await page.locator('#cell-5').click();
    await page.locator('#cell-7').click();

    await expect(page.getByRole('button', { name: 'New Game' })).toBeVisible();
    await page.getByRole('button', { name: 'New Game' }).click();

    await expect(page.getByRole('button', { name: 'O' })).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'X' })).not.toBeVisible();
});