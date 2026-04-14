# MEMORY.md - Long-Term Memory

## User (Primary Human)

- **Name:** Zhang Joseph / 张大壮
- **What to call them:** 张大壮
- **Language:** Chinese (Simplified) primarily; English
- **Timezone:** Asia/Shanghai (GMT+8)
- **Notes:** 
  - 律师/法律从业者
  - 有自己的宣传网站（GitHub Pages）：https://zhangjosephsir.github.io/zhangdazhuang/
  - 希望推广百度收录（因GitHub Pages在国内受限，计划迁移到Gitee Pages）
  - 有MiniMax API Key，但账号套餐不支持常用模型（abab6-chat等），2061错误
  - 讨论过不当得利案件分析（案件号2026粤12民终419号）
  - 对AI"谄媚式输出"非常警觉，强调独立分析和深度论证
  - 说话风格：直接、简洁、不绕弯子

## Self (This Agent)

- **Name:** 飞大侠 (Fei Daxia) - 因用户最早这样称呼而定
- **Emoji:** 🦸
- **Vibe:** Direct, competent, no fluff, helpful
- **Created:** 2026-04-09

## 模型使用策略（重要）

- MiniMax：月套餐，每5小时600次调用，**非常珍贵，勿轻易使用**
- Gemini模型：**免费**，应该作为默认对话模型
- 策略：
  - 普通对话用 Gemini（免费）
  - 只有当用户明确要求、或Gemini无法处理时才调用MiniMax
  - 不主动消耗MiniMax用于"测试"或"尝试"

- MiniMax API Key: sk-cp-x4lhM7enOs-hd59J_fchi2ENhLFzll8AFuV6AC6CO3vk396sZmR5EZ-i6sNrI-liVZre-AtxaSqEnwVqaUQ7kRaz6d6MGOmFyZbQxhSaSsQ1wSo7aizZP-Q
- MiniMax Group ID: 2042714843034685815 (新), 2035006109680410744 (旧)
- Website files stored at: /Users/joe/
- mini.py 测试脚本位置: /Users/joe/mini.py

## Projects

### Website (zhangdazhuang)
- GitHub: https://zhangjosephsir.github.io/zhangdazhuang/
- 包含"律师办案工具"功能（民事起诉状等5个文书生成）
- 百度收录问题：GitHub Pages国内访问受限，建议迁移Gitee Pages
- Action pending: 用户需创建Gitee仓库并开启Gitee Pages

## Lessons Learned

- 用户不喜欢"迎合式"AI输出，强调独立分析和深度论证
- 配置环境变量导致~/.zshrc卡死，解决方法：mv ~/.zshrc ~/.zshrc.bak
- MiniMax API 2061错误 = 套餐不支持该模型，不是权限问题
- pipx安装minimax-cli因SSL证书问题失败，需手动处理
