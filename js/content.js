/*
  CONTENT: everything the site says lives in this file.
  Each text is { en: "...", vi: "..." }. Edit the words here; the layout renders itself.
  - Add a project: copy one object inside PROJECTS and edit it.
  - Add a certificate: add a row inside a group in CERTS.
  - Allowed inline markup in text: <b>bold</b> only.
*/
const T = (en, vi) => ({ en, vi });

const PROFILE = {
  name: "Đởm Quang Minh Triết",
  short: "Triết",
  email: "domquangminhtriet17@gmail.com",
  portrait: "assets/portrait.jpg",
  github: "https://github.com/DomTriet",
  linkedin: "https://www.linkedin.com/in/domquangminhtriet",
  cvEn: "assets/DomQuangMinhTriet_CV_EN_Backend-Intern.pdf",
  cvVi: "assets/DomQuangMinhTriet_CV_VI_Backend-Intern.pdf",
};

const UI = {
  nav: [
    { id: "work", label: T("Work", "Dự án") },
    { id: "experience", label: T("Experience", "Kinh nghiệm") },
    { id: "university", label: T("University", "Học thuật") },
    { id: "skills", label: T("Skills", "Kỹ năng") },
    { id: "education", label: T("Education", "Học vấn") },
  ],
  cta: T("Get in touch", "Liên hệ"),
  seeWork: T("See the work", "Xem dự án"),
  portraitAlt: T("Portrait of Đởm Quang Minh Triết", "Chân dung Đởm Quang Minh Triết"),
  langBtn: T("VI", "EN"),
  langLabel: T("Chuyển sang tiếng Việt", "Switch to English"),
  themeLabel: T("Toggle light and dark theme", "Đổi giao diện sáng và tối"),
  cvNav: T("CV", "CV"),
  cvNavLabel: T("Download CV (PDF)", "Tải CV (PDF)"),
  demo: T("Live demo", "Bản demo"),
  visit: T("Visit site", "Mở website"),
  github: T("GitHub repository", "Repo GitHub"),
  privateNote: T(
    "Source code is private (company code). This page covers the architecture and the outcomes.",
    "Mã nguồn là của công ty nên không công khai. Trang này mô tả kiến trúc và kết quả."
  ),
  footer: T("Made with HTML, CSS and JavaScript.", "Làm bằng HTML, CSS và JavaScript."),
};

const HERO = {
  eyebrow: T("Backend developer, open to part-time internships", "Backend developer, tìm thực tập part-time"),
  title: T("I work on backends for <em>online stores.</em>", "Tôi làm backend cho <em>cửa hàng online.</em>"),
  sub: T(
    "Mostly orders, inventory, payments and the data pipelines around them, while finishing my Information Systems degree.",
    "Chủ yếu là đơn hàng, kho, thanh toán và pipeline dữ liệu đi kèm, song song với việc hoàn thành chương trình Hệ thống thông tin."
  ),
};

/* The results ledger: label ........ value */
const RESULTS = {
  title: T("A few numbers", "Một vài con số"),
  groups: [
    {
      title: T("IMYSM Studio", "IMYSM Studio"),
      rows: [
        { label: T("Direct revenue from the website, first full month", "Doanh thu kênh trực tiếp từ website, tháng đầy đủ đầu tiên"), value: "~60%" },
        { label: T("Haravan orders migrated", "Đơn Haravan đã migrate"), value: "6,281" },
        { label: T("Transaction rows migrated", "Dòng giao dịch đã migrate"), value: "11,392" },
        { label: T("Meta Ads ETL vs cost ledger", "ETL Meta Ads so với sổ chi phí"), value: "<1%" },
        { label: T("Meta Ads ROAS (Meta-attributed), 09/2026", "ROAS Meta Ads (theo Meta), 09/2026"), value: "3.4x" },
        { label: T("Meta Ads link CTR, 09/2026", "CTR liên kết Meta Ads, 09/2026"), value: "1.5%" },
      ],
    },
    {
      title: T("BrownVN", "BrownVN"),
      rows: [
        { label: T("Admin modules", "Module quản trị"), value: "13" },
        { label: T("REST endpoints", "REST endpoint"), value: "~71" },
      ],
    },
  ],
};

const ABOUT = {
  pull: T("About me", "Về tôi"),
  paras: [
    T(
      "I'm a fourth-year Information Systems student at the University of Science, VNU-HCM (GPA 8.24/10). Alongside my studies I work on two e-commerce systems used by Vietnamese fashion brands: <b>IMYSM Studio</b>, which replaced Haravan, and <b>BrownVN</b>, which I built and maintain.",
      "Tôi là sinh viên năm 4 ngành Hệ thống thông tin, ĐH Khoa học Tự nhiên, ĐHQG TP.HCM (GPA 8,24/10). Song song việc học, tôi làm trên hai hệ thống thương mại điện tử đang được các thương hiệu thời trang Việt sử dụng: <b>IMYSM Studio</b>, thay thế Haravan, và <b>BrownVN</b>, do tôi xây dựng và bảo trì."
    ),
    T(
      "I also help with the brand's ads, monthly reports and day-to-day operations, which helps me understand what the software needs to do.",
      "Tôi cũng hỗ trợ quảng cáo, báo cáo hằng tháng và vận hành shop, nhờ vậy hiểu rõ hơn phần mềm cần làm gì."
    ),
    T(
      "<b>How I work:</b> I start from a written specification and the database schema, use Claude Code as a pair programmer, and review changes and run automated tests before release.",
      "<b>Cách tôi làm việc:</b> tôi bắt đầu từ đặc tả và schema cơ sở dữ liệu, dùng Claude Code như một pair programmer, review thay đổi và chạy test tự động trước khi phát hành."
    ),
  ],
  doTitle: T("What I work on", "Những việc tôi làm"),
  does: [
    {
      title: T("Orders and inventory", "Đơn hàng và kho"),
      body: T("Transactional order creation and FIFO batch costing for cost of goods.", "Tạo đơn trong transaction và tính giá vốn FIFO theo lô."),
    },
    {
      title: T("Payment confirmation", "Xác nhận thanh toán"),
      body: T("VietQR and SePay transfers confirmed through HMAC-signed webhooks, with a Zalo notification to the customer.", "Chuyển khoản VietQR và SePay được xác nhận qua webhook ký HMAC, kèm thông báo Zalo cho khách."),
    },
    {
      title: T("Data pipelines", "Pipeline dữ liệu"),
      body: T("Idempotent data migration and a daily ad-data ETL that is reconciled against the cost ledger.", "Migration dữ liệu idempotent và ETL dữ liệu quảng cáo hằng ngày, được đối chiếu với sổ chi phí."),
    },
    {
      title: T("Operations", "Vận hành"),
      body: T("Paid social, monthly reporting and daily store tasks alongside development.", "Quảng cáo, báo cáo hằng tháng và công việc shop hằng ngày, song song với phát triển."),
    },
  ],
};

/* ---------- Work ---------- */
const WORK = {
  title: T("Work", "Dự án"),
  imysm: {
    name: "IMYSM Studio",
    url: "https://imysmstudio.com",
    urlLabel: "imysmstudio.com",
    role: T("Full-stack Developer, part-time, 08/2026 - Present", "Full-stack Developer, part-time, 08/2026 - Hiện tại"),
    summary: T(
      "The bilingual (VI/EN) e-commerce platform and admin system that replaced Haravan for a Vietnamese fashion brand.",
      "Nền tảng thương mại điện tử song ngữ (Việt/Anh) và hệ thống quản trị thay thế Haravan cho một thương hiệu thời trang Việt."
    ),
    stack: ["React", "Node.js", "Express", "Supabase PostgreSQL", "Row-Level Security", "SePay / VietQR", "Zalo OA", "Meta Graph API", "Playwright", "Vercel", "Railway"],
    problem: T(
      "The brand sells through its website, Facebook, Instagram, Zalo and TikTok, and wanted one system for direct-channel orders instead of Haravan.",
      "Thương hiệu bán qua website, Facebook, Instagram, Zalo và TikTok, và muốn có một hệ thống chung cho đơn kênh trực tiếp thay cho Haravan."
    ),
    built: [
      T("<b>Orders and inventory:</b> transactional order creation, FIFO batch costing for COGS, and role-based access with Supabase Auth and Row-Level Security.", "<b>Đơn hàng và kho:</b> tạo đơn trong transaction, giá vốn FIFO theo lô cho COGS, phân quyền bằng Supabase Auth và Row-Level Security."),
      T("<b>Automated payments:</b> VietQR/SePay transfers confirmed through HMAC-signed webhooks, triggering Zalo order and shipping notifications.", "<b>Thanh toán tự động:</b> chuyển khoản VietQR/SePay xác nhận qua webhook ký HMAC, kích hoạt thông báo Zalo về đơn và vận chuyển."),
      T("<b>Idempotent migration</b> from Haravan: 6,281 historical orders and 11,392 transaction rows, rehearsed first, with an exceptions queue for unmapped SKUs.", "<b>Migration idempotent</b> từ Haravan: 6.281 đơn lịch sử và 11.392 dòng giao dịch, chạy thử trước, có hàng đợi ngoại lệ cho SKU chưa map được."),
      T("<b>Daily Meta Ads ETL</b> from the Graph API into PostgreSQL, powering ROAS, CTR and CPC dashboards and a rule-based recommender.", "<b>ETL Meta Ads hằng ngày</b> từ Graph API vào PostgreSQL, cấp dữ liệu cho dashboard ROAS, CTR, CPC và bộ đề xuất theo luật."),
      T("<b>Tests:</b> critical flows covered by Playwright end-to-end tests and production smoke tests.", "<b>Kiểm thử:</b> các luồng quan trọng được phủ bằng test end-to-end Playwright và smoke test trên production."),
    ],
    outcome: T(
      "The system is used for direct-channel orders. In its first full month (09/2026) the website accounted for about 60% of direct revenue, and monthly ad figures were within 1% of the cost ledger and the Meta API.",
      "Hệ thống đang được dùng cho đơn kênh trực tiếp. Trong tháng đầy đủ đầu tiên (09/2026), website chiếm khoảng 60% doanh thu kênh trực tiếp, số liệu quảng cáo hằng tháng chênh dưới 1% so với sổ chi phí và Meta API."
    ),
    labels: { problem: T("Context", "Bối cảnh"), built: T("What I worked on", "Phần tôi làm"), outcome: T("Results so far", "Kết quả đến nay") },
  },
  map: {
    title: T("How it fits together", "Các phần khớp nhau thế nào"),
    hint: T("Pick a flow, then step through it.", "Chọn một luồng rồi bấm từng bước."),
    flows: [
      {
        id: "order",
        tab: T("Order to payment", "Từ đơn đến thanh toán"),
        steps: [
          { name: T("Order placed", "Đặt đơn"), body: T("A customer orders on the website or through a social channel. All direct channels land in the same system.", "Khách đặt đơn trên website hoặc qua kênh mạng xã hội. Mọi kênh trực tiếp cùng đổ về một hệ thống.") },
          { name: T("Transactional create", "Tạo đơn trong transaction"), body: T("The order and its stock movement are written in one database transaction to avoid partially saved orders.", "Đơn hàng và biến động tồn kho được ghi trong một transaction để tránh đơn lưu dở.") },
          { name: T("FIFO costing", "Giá vốn FIFO"), body: T("Stock is taken from the oldest batch first, and each order records the cost of the batch it used.", "Hàng được xuất từ lô cũ nhất trước, mỗi đơn ghi nhận giá vốn của lô đã dùng.") },
          { name: T("Bank transfer", "Chuyển khoản"), body: T("The customer pays by VietQR. SePay watches the bank account and reports the transfer.", "Khách thanh toán bằng VietQR. SePay theo dõi tài khoản ngân hàng và báo lại giao dịch.") },
          { name: T("HMAC webhook", "Webhook HMAC"), body: T("The webhook signature is verified with HMAC, then the transfer is matched to the order and confirmed.", "Chữ ký webhook được xác thực bằng HMAC, sau đó giao dịch được đối khớp với đơn và xác nhận.") },
          { name: T("Zalo notification", "Thông báo Zalo"), body: T("The customer receives order and shipping updates on Zalo.", "Khách nhận cập nhật đơn hàng và vận chuyển qua Zalo.") },
        ],
      },
      {
        id: "migration",
        tab: T("Haravan migration", "Migration từ Haravan"),
        steps: [
          { name: T("Haravan export", "Dữ liệu Haravan"), body: T("6,281 historical orders and 11,392 transaction rows exported from the old platform.", "6.281 đơn lịch sử và 11.392 dòng giao dịch được xuất từ nền tảng cũ.") },
          { name: T("Rehearsal", "Chạy thử"), body: T("The migration is rehearsed on a copy first to catch issues before the real run.", "Migration được chạy thử trên bản sao trước để phát hiện lỗi trước khi chạy thật.") },
          { name: T("Idempotent load", "Nạp idempotent"), body: T("The load can be re-run safely: running it twice gives the same result as running it once.", "Có thể chạy lại an toàn: chạy hai lần cho kết quả giống chạy một lần.") },
          { name: T("Exceptions queue", "Hàng đợi ngoại lệ"), body: T("Rows with an unmapped SKU go to a queue for manual review.", "Dòng có SKU chưa map được đưa vào hàng đợi để xem xét thủ công.") },
        ],
      },
      {
        id: "ads",
        tab: T("Ad data", "Dữ liệu quảng cáo"),
        steps: [
          { name: T("Meta Graph API", "Meta Graph API"), body: T("Ad spend and performance are pulled from the Graph API once a day.", "Chi phí và hiệu quả quảng cáo được lấy từ Graph API mỗi ngày.") },
          { name: T("ETL", "ETL"), body: T("The raw data is cleaned and shaped into tables that match how the business reads its numbers.", "Dữ liệu thô được làm sạch và chuyển thành bảng khớp với cách doanh nghiệp đọc số liệu.") },
          { name: T("PostgreSQL", "PostgreSQL"), body: T("The data is stored in PostgreSQL next to orders and the cost ledger, so ads and sales can be compared.", "Dữ liệu được lưu trong PostgreSQL cạnh đơn hàng và sổ chi phí, nên có thể so sánh quảng cáo với doanh số.") },
          { name: T("Dashboards", "Dashboard"), body: T("ROAS, CTR and CPC dashboards, plus simple rule-based budget suggestions.", "Dashboard ROAS, CTR, CPC, cùng gợi ý ngân sách đơn giản theo luật.") },
          { name: T("Reconciliation", "Đối chiếu"), body: T("Monthly figures are checked against the cost ledger and the Meta API (difference under 1%).", "Số liệu hằng tháng được đối chiếu với sổ chi phí và Meta API (chênh dưới 1%).") },
        ],
      },
    ],
  },
  brown: {
    name: "BrownVN",
    url: "https://brownvn.com",
    urlLabel: "brownvn.com",
    role: T("Freelance Full-stack Developer, 01/2026 - Present", "Freelance Full-stack Developer, 01/2026 - Hiện tại"),
    summary: T("Storefront, admin dashboard and database for a fashion brand, which I built and maintain.", "Storefront, trang quản trị và cơ sở dữ liệu cho một thương hiệu thời trang, do tôi xây dựng và bảo trì."),
    figures: [
      { value: "13", label: T("admin modules", "module admin") },
      { value: "~71", label: T("REST endpoints", "REST endpoint") },
    ],
    points: [
      T("<b>Bilingual storefront (VI/EN)</b> with VND and USD pricing, COD, bank and PayPal checkout, GHN shipping fees and real-time order tracking.", "<b>Storefront song ngữ (VI/EN)</b> với giá VND và USD, thanh toán COD, chuyển khoản và PayPal, phí ship GHN và theo dõi đơn thời gian thực."),
      T("<b>Admin dashboard:</b> products and variants, FIFO inventory, orders, vouchers, expenses and financial reports for revenue, profit and COGS.", "<b>Trang quản trị:</b> sản phẩm và biến thể, kho FIFO, đơn hàng, voucher, chi phí và báo cáo tài chính về doanh thu, lợi nhuận, giá vốn."),
    ],
    stack: ["React 19", "Vite", "Tailwind CSS", "Express 5", "Supabase", "PayPal", "GHN", "Cloudinary"],
  },
};

/* ---------- Experience timeline ---------- */
const EXPERIENCE = {
  title: T("Experience", "Kinh nghiệm"),
  items: [
    {
      date: "08/2026 - Present",
      dateVi: "08/2026 - Hiện tại",
      role: T("Full-stack Developer, IMYSM", "Full-stack Developer, IMYSM"),
      meta: T("Part-time, Ho Chi Minh City", "Part-time, TP. Hồ Chí Minh"),
      body: [T("Work on IMYSM Studio. Details are in the Work section above.", "Làm trên IMYSM Studio. Chi tiết ở phần Dự án phía trên.")],
    },
    {
      date: "01/2026 - Present",
      dateVi: "01/2026 - Hiện tại",
      role: T("Freelance Full-stack Developer, BrownVN", "Freelance Full-stack Developer, BrownVN"),
      meta: T("Freelance", "Freelance"),
      body: [T("Built and maintain the storefront, admin dashboard and database. Details are in the Work section above.", "Xây dựng và bảo trì storefront, trang quản trị và cơ sở dữ liệu. Chi tiết ở phần Dự án phía trên.")],
    },
    {
      date: "07/2024 - Present",
      dateVi: "07/2024 - Hiện tại",
      role: T("Marketing and Operations Analyst, IMYSM", "Marketing và Operations Analyst, IMYSM"),
      meta: T("Part-time, fashion brand selling through its website, social channels and marketplaces", "Part-time, thương hiệu thời trang bán qua website, mạng xã hội và sàn TMĐT"),
      body: [
        T("Run Meta ads (about 6.3M VND spend in 09/2026): 3.4x Meta-attributed ROAS (7.0x on total direct-channel revenue) and 1.5% link CTR.", "Chạy quảng cáo Meta (chi khoảng 6,3 triệu đ trong 09/2026): ROAS 3,4x theo Meta (7,0x trên toàn bộ doanh thu kênh trực tiếp) và CTR liên kết 1,5%."),
        T("Prepare monthly business reports (revenue, costs and profit by channel and SKU) from stock counts and sales data.", "Làm báo cáo kinh doanh hằng tháng (doanh thu, chi phí, lợi nhuận theo kênh và SKU) từ kiểm kho và dữ liệu bán hàng."),
        T("Handle store operations: order packing, stock checks, goods receiving and expense tracking.", "Vận hành shop: soạn đơn, kiểm kho, nhập hàng và theo dõi chi tiêu."),
      ],
    },
  ],
};

/* ---------- University projects (thesis + 3 cells) ---------- */
const UNIVERSITY = {
  title: T("Projects from university", "Dự án ở trường"),
  thesis: {
    name: T("Graduation thesis", "Khóa luận tốt nghiệp"),
    date: T("06/2026 - In progress", "06/2026 - Đang thực hiện"),
    sub: T("A time-aware knowledge-graph recommender", "Hệ gợi ý knowledge graph có yếu tố thời gian"),
    body: T(
      "Extending KGAT, a knowledge-graph attention network, with temporal signals. I built pandas and PyTorch pipelines for preprocessing, knowledge-graph construction, leakage-free time-based splits and Recall, NDCG and Hit Ratio evaluation on Foursquare NYC and Amazon Music, benchmarked against Matrix Factorization.",
      "Mở rộng KGAT, mạng attention trên knowledge graph, với tín hiệu thời gian. Tôi xây pipeline pandas và PyTorch cho tiền xử lý, dựng knowledge graph, chia tập theo thời gian không rò rỉ dữ liệu, đánh giá Recall, NDCG, Hit Ratio trên Foursquare NYC và Amazon Music, so sánh với Matrix Factorization."
    ),
    stack: ["Python", "pandas", "PyTorch", "KGAT"],
  },
  voucher: {
    name: T("Voucher marketplace", "Sàn voucher giảm giá"),
    date: "06/2026 - 08/2026",
    sub: T("E-Commerce course, team of 4", "Môn Thương mại điện tử, nhóm 4 người"),
    body: T(
      "Customers buy and redeem discount vouchers, partners manage stock and verify redemptions, and admins approve partners and vouchers. The Express and TypeScript backend is layered as route, controller, service and repository on Drizzle ORM and Supabase PostgreSQL, with Supabase Auth, PayPal and Stripe sandbox payments, password recovery and per-client rate limiting behind Railway's proxy. I worked across the backend and the Next.js frontend.",
      "Khách mua và dùng voucher giảm giá, đối tác quản lý tồn kho và xác nhận sử dụng, admin duyệt đối tác và voucher. Backend Express và TypeScript chia lớp route, controller, service, repository trên Drizzle ORM và Supabase PostgreSQL, có Supabase Auth, thanh toán sandbox PayPal và Stripe, khôi phục mật khẩu và giới hạn tần suất theo từng client sau proxy của Railway. Tôi làm cả backend lẫn frontend Next.js."
    ),
    stack: ["TypeScript", "Express", "Drizzle ORM", "Supabase", "Next.js 14", "Cloudinary"],
    url: "https://github.com/DomTriet/voucher-marketplace",
    demo: "https://ec-nhom3.vercel.app",
  },
  homestay: {
    name: "HomeStay Dorm",
    date: "02/2026 - 06/2026",
    sub: T("Dormitory management system, team of 4", "Hệ thống quản lý ký túc xá, nhóm 4 người"),
    body: T(
      "Backend developer for the IS Analysis and Design course. Took part in requirements and design, built room and bed search, rental requests with ID upload and viewing bookings, and fixed CI to pass a 70% Jest coverage gate.",
      "Backend developer cho môn Phân tích và Thiết kế HTTT. Tham gia phân tích yêu cầu và thiết kế, xây tìm phòng và giường, yêu cầu thuê phòng kèm tải CCCD và đặt lịch xem phòng, sửa CI để đạt ngưỡng coverage Jest 70%."
    ),
    stack: ["Angular", "TypeScript", "Node.js", "Express", "Supabase", "Jest"],
    url: "https://github.com/DomTriet/homestay-dorm-management",
  },
  hospital: {
    name: T("Hospital Data Security on Oracle", "Bảo mật dữ liệu y tế trên Oracle"),
    date: "01/2026 - 05/2026",
    sub: T("Data Security in IS course, team of 5", "Môn An toàn và bảo mật dữ liệu trong HTTT, nhóm 5 người"),
    body: T(
      "Worked on Subsystem 1: a C# WinForms Oracle admin app to create and drop users and roles, grant and revoke privileges (WITH GRANT OPTION, column-level SELECT and UPDATE) and inspect privileges per user or role. The wider project secured a hospital database with RBAC, VPD, Oracle Label Security, auditing and RMAN recovery.",
      "Làm Phân hệ 1: ứng dụng C# WinForms quản trị Oracle, tạo và xóa user, role, cấp và thu hồi quyền (WITH GRANT OPTION, SELECT và UPDATE cấp cột) và xem quyền theo user hoặc role. Toàn đồ án bảo mật CSDL bệnh viện bằng RBAC, VPD, Oracle Label Security, kiểm toán và khôi phục RMAN."
    ),
    stack: ["Oracle", "C#", "WinForms", "RBAC", "VPD", "OLS"],
    url: "https://github.com/DomTriet/oracle-admin-hospital-security",
  },
};

/* ---------- Skills, foundation at the bottom ---------- */
const SKILLS = {
  title: T("Skills", "Kỹ năng"),
  intro: T("Grouped from fundamentals at the bottom to what I am still learning at the top.", "Xếp từ kiến thức nền ở dưới đến những thứ tôi đang học ở trên."),
  layers: [
    { name: T("Currently learning", "Đang học"), edge: true, items: ["ETL pipelines", "pandas", "PyTorch", "Meta Graph API", "Google Sheets API", "Knowledge-graph recommenders (KGAT)"] },
    { name: T("Delivery and quality", "Triển khai và chất lượng"), items: ["Git / GitHub", "GitHub Actions CI", "Jest", "Playwright (E2E)", "ESLint", "Vercel", "Railway"] },
    { name: T("Frontend and integrations", "Frontend và tích hợp"), items: ["React", "Angular", "Vite", "Tailwind CSS", "SePay / VietQR", "Zalo OA", "GHN", "PayPal", "Cloudinary", "Meta Pixel / CAPI"] },
    { name: T("Services", "Dịch vụ"), items: ["Node.js", "Express", "REST API design", "Zod validation", "Webhooks (HMAC)", "Authentication and RBAC"] },
    { name: T("Data layer", "Tầng dữ liệu"), items: ["PostgreSQL", "SQL Server", "Supabase (Auth, RLS)", "Oracle (RBAC, VPD, OLS, FGA)", "Schema design", "Migrations", "Transactions"] },
    { name: T("Foundations", "Nền tảng"), items: ["JavaScript", "TypeScript", "SQL", "Python", "C#"] },
  ],
  business: {
    name: T("Other", "Khác"),
    items: ["Meta Ads", "P&L, COGS and ROAS reporting", "Excel", "Google Sheets", "Inventory management"],
  },
};

/* ---------- Education and certificates ---------- */
const EDU = {
  title: T("Education and certificates", "Học vấn và chứng chỉ"),
  school: {
    name: T("University of Science, VNU-HCM", "ĐH Khoa học Tự nhiên, ĐHQG TP.HCM"),
    meta: T("B.S. Information Technology, Information Systems major", "Cử nhân Công nghệ thông tin, chuyên ngành Hệ thống thông tin"),
    rows: [
      { label: T("Years", "Năm học"), value: T("2023 - 2027 (expected)", "2023 - 2027 (dự kiến)") },
      { label: T("GPA", "GPA"), value: T("8.24 / 10", "8,24 / 10") },
      { label: T("English", "Tiếng Anh"), value: T("IELTS 7.0 (2023)", "IELTS 7.0 (2023)") },
      { label: T("Vietnamese", "Tiếng Việt"), value: T("Native", "Bản ngữ") },
    ],
  },
  certsTitle: T("Certificates", "Chứng chỉ"),
  certs: [
    {
      group: T("Databases", "Cơ sở dữ liệu"),
      rows: [
        { name: "Microsoft SQL Server Professional Certificate", by: "Microsoft", date: "10/2025", url: "https://www.coursera.org/account/accomplishments/specialization/1UMZ56BSDU99" },
        { name: "SQL Window Functions for Analytics", by: "Coursera", date: "12/2025", url: "https://www.coursera.org/account/accomplishments/verify/KOU4P5JTOOZE" },
      ],
    },
    {
      group: T("Python", "Python"),
      rows: [{ name: "Python for Everybody Specialization", by: "University of Michigan", date: "09/2025", url: "https://www.coursera.org/account/accomplishments/specialization/I9EJ1SMUDCQ2" }],
    },
    {
      group: T("Web, from Meta", "Web, từ Meta"),
      rows: [
        { name: "Programming with JavaScript", by: "Meta", date: "10/2025", url: "https://www.coursera.org/account/accomplishments/verify/YQZQUB2K0YSA" },
        { name: "Version Control", by: "Meta", date: "10/2025", url: "https://www.coursera.org/account/accomplishments/verify/9U40183GYLVR" },
        { name: "HTML and CSS in depth", by: "Meta", date: "10/2025", url: "https://www.coursera.org/account/accomplishments/verify/UY9TSR3HTEVQ" },
        { name: "Introduction to Front-End Development", by: "Meta", date: "10/2025", url: "https://www.coursera.org/account/accomplishments/verify/YIMVUSC29MVM" },
      ],
    },
  ],
};

const CONTACT = {
  title: T("Looking for a backend internship in Ho Chi Minh City.", "Đang tìm thực tập Backend tại TP. Hồ Chí Minh."),
  body: T(
    "Part-time, available throughout the week, with an interest in Data Engineering. I would be glad to hear about suitable openings.",
    "Part-time, làm được cả tuần, quan tâm đến Data Engineering. Tôi rất mong nhận được thông tin về các vị trí phù hợp."
  ),
  cvEn: T("CV in English (PDF)", "CV tiếng Anh (PDF)"),
  cvVi: T("CV in Vietnamese (PDF)", "CV tiếng Việt (PDF)"),
};
