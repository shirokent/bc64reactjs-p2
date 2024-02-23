- public: chứa file index.html (toàn bộ dự án sẽ chạy trên file này (SPA) - (single page application)), khi cần thì nhúng file cdn ở file index.html

- package,json: là file chứa tên và phiên bản của các thư viện đã cài trong dự án ở thuộc tính dependenci

- node_modules: là folder chứa các th viện đã cài cho dự án này (cài lại dựa trên lệnh "npm i", cài lại dựa trên file package.json)

- .gitignore: là file chứa các đường dẫn mà mình ko muốn đẩy lên git

- src: toàn bộ ứng dụng sẽ đc code troeen thư mục này (quan trọng nhất index.js)

cú pháp tạo dự án mới trong nodejs:
- npx create-react-app .
