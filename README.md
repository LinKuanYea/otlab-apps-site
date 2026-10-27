# otlab-apps-site

apps.otlab.org 的靜態網站：otlab 各個 App 的支援頁面與隱私權政策。

- `/` — App 列表
- `/meowblock/` — meowBlock 支援頁
- `/meowblock/privacy.html` — meowBlock 隱私權政策

純 HTML/CSS，沒有建置步驟，也不載入任何外部資源。部署在 Cloudflare Pages（建置指令留空，輸出目錄 `/`）。

新增 App 時：建立 `/<app>/index.html` 與 `/<app>/privacy.html`，並在根目錄 `index.html` 加一張卡片。
