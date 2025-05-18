# NestJS User-Task Management API

## ✨ Giới thiệu

API backend dựa trên [NestJS](https://nestjs.com/) cung cấp các chức năng:

* Đăng ký / Đăng nhập / Đăng xuất
* Xác thực bằng JWT
* Phân quyền theo vai trò (Admin, Staff)
* CRUD User
* CRUD Task (mỗi Task thuộc 1 User)
* Swagger UI tài liệu API

---

## 🧰 Công nghệ

* **NestJS**
* **TypeORM**
* **PostgreSQL**
* **Passport + JWT**
* **Swagger (OpenAPI)**

---

## 📁 Cài đặt

```bash
# Clone repo
$ git clone <repo-url>
$ cd <project-folder>

# Cài đặt package
$ npm install
```

## Cấu hình cơ sở dữ liệu
Cấu hình cơ sở dữ liệu được định nghĩa tại:
src/modules/core/database/data-source.ts

Bạn có thể thiết lập các thông số kết nối như host, port, username, password, database name thông qua biến môi trường hoặc chỉnh sửa trực tiếp trong file này (khuyến khích dùng biến môi trường để linh hoạt hơn).





## ▶️ Khởi chạy

```bash
# Chạy dev mode
$ npm run start:dev

# Hoặc production
$ npm run build
$ npm run start:prod
```

---

## 📄 Tài liệu Swagger

Truy cập: [http://localhost:3000/api](http://localhost:3000/api)

---

## 🔐 Xác thực & Phân quyền

* Dùng `@UseGuards(JwtAuthGuard, RolesGuard)` để bảo vệ route
* Dữ liệu JWT bao gồm: `sub`, `email`, `role`
* Vai trò (`UserRole`):

  * `ADMIN`: Quản trị tối cao
  * `STAFF`: Mặc định khi đăng ký

---

## 📂 Cấu trúc thư mục

```
src/
├── common/               # Guard & Decorator dùng chung
├── modules/
    ├── auth/             # Xác thực, JWT, login
│   ├── users/            # CRUD User + Role
│   └── tasks/            # CRUD Task
├── app.module.ts         # Root module
└── main.ts               # Entry point
```

---

## ✅ Kế hoạch tiếp theo

* Refresh token
* Gửi email xác thực
* Phân trang, tìm kiếm Task
* UI client (React / Vue)

---

## 📃 License

MIT © 2025
