# Quan-ly-banner
Trang Quản lý banner
    Thiết lập chương trình:
# BACKEND:
- Chuyển sang backend "cd backend"
- Thiết lập database được tạo ra từ backend qua file application.properties ở "/backend/src/main/resource" và config các giá trị sau theo db muốn sử dụng:
    spring.datasource.username = "tên DB"
    spring.datasource.password = "mật khẩu DB"
    server.port = "port sử dụng" VD:8080
    backend.app.jwtSecret= "tên Token"
    backend.app.jwtExpirationMs= "thời gian của token"
- Chạy backend bằng lệnh "mvn spring-boot:run" hoặc sử dụng Eclipse / Intellij IDEA để chạy chương trình.
- Bổ sung DB bảng Roles vừa lập từ backend:
    INSERT INTO roles(name) VALUES('ROLE_USER');
    INSERT INTO roles(name) VALUES('ROLE_ADMIN');
- Backend được chạy theo port đang sử dụng.

# FRONTEND:
- Chuyển sang frontend: "cd frontend"
- Thiết lập frontend: "npm install"
- Chạy frontend: "npm start"
