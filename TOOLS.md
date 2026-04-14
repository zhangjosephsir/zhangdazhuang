# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## API Keys

- MiniMax API Key: `sk-cp-x4lhM7enOs-hd59J_fchi2ENhLFzll8AFuV6AC6CO3vk396sZmR5EZ-i6sNrI-liVZre-AtxaSqEnwVqaUQ7kRaz6d6MGOmFyZbQxhSaSsQ1wSo7aizZP-Q`
- MiniMax Group ID: `2042714843034685815`

## 法律检索账号

- 裁判文书网: username `13613010303`, password `ZSFytls1029#`
- 网站: https://wenshu.court.gov.cn

## Browser Automation

- 需要安装 Playwright 以自动登录裁判文书网等需要认证的网站
- 安装命令: `npx playwright install chromium`
- 安装后需要: 能够控制浏览器完成登录、搜索、读取内容

## 模型使用策略（重要）

- MiniMax：月套餐，每5小时600次调用，**非常珍贵，勿轻易使用**
- Gemini模型：**免费**，应该作为默认对话模型
- 策略：
  - 普通对话用 Gemini（免费）
  - 只有当用户明确要求、或Gemini无法处理时才调用MiniMax
  - 不主动消耗MiniMax用于"测试"或"尝试"

---

Add whatever helps you do your job. This is your cheat sheet.
