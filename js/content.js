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
  footer: T("Built by hand with HTML, CSS and JavaScript.", "Làm thủ công bằng HTML, CSS và JavaScript."),
};

const HERO = {
  eyebrow: T("Backend developer, open to part-time internships", "Backend developer, tìm thực tập part-time"),
  title: T("Backends where the numbers <em>add up.</em>", "Backend mà con số nào cũng <em>khớp.</em>"),
  sub: T(
    "I build order, inventory and payment backends for online stores, and the data pipelines that check the numbers.",
    "Tôi xây backend đơn hàng, kho và thanh toán cho cửa hàng online, cùng pipeline dữ liệu để đối chiếu mọi con số."
  ),
};

/* The results ledger: label ........ value */
const RESULTS = {
  title: T("What it adds up to", "Kết quả cộng lại"),
  groups: [
    {
      title: T("IMYSM Studio", "IMYSM Studio"),
      rows: [
        { label: T("Direct revenue from the website, first full month", "Doanh thu kênh trực tiếp từ website, tháng đầy đủ đầu tiên"), value: "~60%" },
        { label: T("Haravan orders migrated", "Đơn Haravan đã migrate"), value: "6,281" },
        { label: T("Transaction rows migrated", "Dòng giao dịch đã migrate"), value: "11,392" },
        { label: T("Meta Ads ETL vs cost ledger", "ETL Meta Ads so với sổ chi phí"), value: "<1%" },
      ],
    },
    {
      title: T("BrownVN and ads", "BrownVN và quảng cáo"),
      rows: [
        { label: T("Admin modules built solo", "Module admin tự xây"), value: "13" },
        { label: T("REST endpoints", "REST endpoint"), value: "~71" },
        { label: T("Meta Ads ROAS (Meta-attributed), 09/2026", "ROAS Meta Ads (theo Meta), 09/2026"), value: "3.4x" },
        { label: T("Meta Ads link CTR, 09/2026", "CTR liên kết Meta Ads, 09/2026"), value: "1.5%" },
      ],
    },
  ],
};

const ABOUT = {
  pull: T("Money, stock and data should add up.", "Tiền, tồn kho và dữ liệu phải khớp nhau."),
  paras: [
    T(
      "I'm a fourth-year Information Systems student at the University of Science, VNU-HCM (GPA 8.24/10). Alongside my studies I have designed and shipped two production e-commerce systems for Vietnamese fashion brands: <b>IMYSM Studio</b>, which replaced Haravan, and <b>BrownVN</b>, which I built and run on my own.",
      "Tôi là sinh viên năm 4 ngành Hệ thống thông tin, ĐH Khoa học Tự nhiên, ĐHQG TP.HCM (GPA 8,24/10). Song song việc học, tôi đã thiết kế và đưa vào vận hành hai hệ thống thương mại điện tử cho các thương hiệu thời trang Việt: <b>IMYSM Studio</b>, thay thế Haravan, và <b>BrownVN</b>, do tôi tự xây và vận hành."
    ),
    T(
      "I also run the brand's ads, monthly reports and day-to-day operations, so I know the problems the software has to solve first-hand.",
      "Tôi cũng phụ trách quảng cáo, báo cáo hằng tháng và vận hành shop, nên hiểu rõ bài toán mà phần mềm cần giải quyết."
    ),
    T(
      "<b>How I work:</b> I write the specification, design the schema and architecture, and review every change. I use Claude Code as a pair programmer, and every change goes through my review and automated tests before it ships.",
      "<b>Cách tôi làm việc:</b> tôi viết đặc tả, thiết kế schema và kiến trúc, review mọi thay đổi. Tôi dùng Claude Code như một pair programmer, và mọi thay đổi đều qua review của tôi cùng test tự động trước khi phát hành."
    ),
  ],
  doTitle: T("What I do", "Tôi làm gì"),
  does: [
    {
      title: T("Order and inventory engines", "Lõi đơn hàng và kho"),
      body: T("Transactional order creation and FIFO batch costing, so cost of goods is accurate to the batch.", "Tạo đơn trong transaction và giá vốn FIFO theo lô, để giá vốn chính xác đến từng lô."),
    },
    {
      title: T("Payments that confirm themselves", "Thanh toán tự xác nhận"),
      body: T("VietQR and SePay transfers verified by HMAC-signed webhooks, then a Zalo message to the customer.", "Chuyển khoản VietQR và SePay được xác thực bằng webhook ký HMAC, sau đó gửi tin Zalo cho khách."),
    },
    {
      title: T("Pipelines that check the work", "Pipeline kiểm tra lại số liệu"),
      body: T("Idempotent migrations and a daily ad-data ETL that reconciles with the cost ledger within 1%.", "Migration idempotent và ETL dữ liệu quảng cáo hằng ngày, khớp sổ chi phí trong vòng 1%."),
    },
    {
      title: T("The business side", "Phía kinh doanh"),
      body: T("Paid social, monthly reporting and daily store operations, done before and alongside the code.", "Quảng cáo, báo cáo hằng tháng và vận hành shop hằng ngày, làm trước và song song với việc viết code."),
    },
  ],
};

/* ---------- Work ---------- */
const WORK = {
  title: T("Selected work", "Dự án chính"),
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
      "The brand sells across its website, Facebook, Instagram, Zalo and TikTok, and needed one system for every direct-channel order in place of Haravan.",
      "Thương hiệu bán qua website, Facebook, Instagram, Zalo và TikTok, và cần một hệ thống duy nhất cho mọi đơn kênh trực tiếp thay cho Haravan."
    ),
    built: [
      T("<b>Order and inventory core:</b> transactional order creation, FIFO batch costing for accurate COGS, and role-based access with Supabase Auth and Row-Level Security.", "<b>Lõi đơn hàng và kho:</b> tạo đơn trong transaction, giá vốn FIFO theo lô cho COGS chính xác, phân quyền bằng Supabase Auth và Row-Level Security."),
      T("<b>Automated payments:</b> VietQR/SePay transfers confirmed through HMAC-signed webhooks, triggering Zalo order and shipping notifications.", "<b>Thanh toán tự động:</b> chuyển khoản VietQR/SePay xác nhận qua webhook ký HMAC, kích hoạt thông báo Zalo về đơn và vận chuyển."),
      T("<b>Idempotent migration</b> from Haravan: 6,281 historical orders and 11,392 transaction rows, rehearsed first, with an exceptions queue that never guesses an unmapped SKU.", "<b>Migration idempotent</b> từ Haravan: 6.281 đơn lịch sử và 11.392 dòng giao dịch, chạy thử trước, có hàng đợi ngoại lệ, không bao giờ đoán SKU chưa map được."),
      T("<b>Daily Meta Ads ETL</b> from the Graph API into PostgreSQL, powering ROAS, CTR and CPC dashboards and a rule-based recommender.", "<b>ETL Meta Ads hằng ngày</b> từ Graph API vào PostgreSQL, cấp dữ liệu cho dashboard ROAS, CTR, CPC và bộ đề xuất theo luật."),
      T("<b>Tests:</b> critical flows covered by Playwright end-to-end tests and production smoke tests.", "<b>Kiểm thử:</b> các luồng quan trọng được phủ bằng test end-to-end Playwright và smoke test trên production."),
    ],
    outcome: T(
      "It now handles every direct-channel order. In its first full month (09/2026) the website drove about <b>60% of direct revenue</b>, and the monthly ad figures match the cost ledger and the Meta API within <b>1%</b>.",
      "Hệ thống hiện xử lý mọi đơn kênh trực tiếp. Trong tháng đầy đủ đầu tiên (09/2026), website chiếm khoảng <b>60% doanh thu kênh trực tiếp</b>, số liệu quảng cáo hằng tháng khớp sổ chi phí và Meta API trong vòng <b>1%</b>."
    ),
    labels: { problem: T("Problem", "Vấn đề"), built: T("Built", "Đã xây"), outcome: T("Outcome", "Kết quả") },
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
          { name: T("Transactional create", "Tạo đơn trong transaction"), body: T("The order and its stock movement are written in one database transaction, so a half-saved order cannot exist.", "Đơn hàng và biến động tồn kho được ghi trong một transaction, nên không thể có đơn lưu dở.") },
          { name: T("FIFO costing", "Giá vốn FIFO"), body: T("Stock is consumed from the oldest batch first, so each order carries the true cost of the batch it used.", "Hàng được xuất từ lô cũ nhất trước, nên mỗi đơn mang đúng giá vốn của lô đã dùng.") },
          { name: T("Bank transfer", "Chuyển khoản"), body: T("The customer pays by VietQR. SePay watches the bank account and reports the transfer.", "Khách thanh toán bằng VietQR. SePay theo dõi tài khoản ngân hàng và báo lại giao dịch.") },
          { name: T("HMAC webhook", "Webhook HMAC"), body: T("The webhook signature is verified with HMAC before anything is trusted, then the order is matched and confirmed.", "Chữ ký webhook được xác thực bằng HMAC trước khi tin bất cứ điều gì, sau đó đơn được đối khớp và xác nhận.") },
          { name: T("Zalo notification", "Thông báo Zalo"), body: T("The customer gets order and shipping updates on Zalo, with no one confirming payment by hand.", "Khách nhận cập nhật đơn hàng và vận chuyển qua Zalo, không ai phải xác nhận thanh toán thủ công.") },
        ],
      },
      {
        id: "migration",
        tab: T("Haravan migration", "Migration từ Haravan"),
        steps: [
          { name: T("Haravan export", "Dữ liệu Haravan"), body: T("6,281 historical orders and 11,392 transaction rows exported from the old platform.", "6.281 đơn lịch sử và 11.392 dòng giao dịch được xuất từ nền tảng cũ.") },
          { name: T("Rehearsal", "Chạy thử"), body: T("The whole migration is rehearsed on a copy first, so surprises show up before production does.", "Toàn bộ migration được chạy thử trên bản sao trước, để bất ngờ xuất hiện trước khi chạy thật.") },
          { name: T("Idempotent load", "Nạp idempotent"), body: T("The load can be re-run safely: running it twice gives the same result as running it once.", "Có thể chạy lại an toàn: chạy hai lần cho kết quả giống chạy một lần.") },
          { name: T("Exceptions queue", "Hàng đợi ngoại lệ"), body: T("A row with an unmapped SKU goes to a queue for a person to resolve. The pipeline never guesses.", "Dòng có SKU chưa map được đưa vào hàng đợi để người xử lý. Pipeline không bao giờ đoán.") },
        ],
      },
      {
        id: "ads",
        tab: T("Ad data", "Dữ liệu quảng cáo"),
        steps: [
          { name: T("Meta Graph API", "Meta Graph API"), body: T("Ad spend and performance are pulled from the Graph API once a day.", "Chi phí và hiệu quả quảng cáo được lấy từ Graph API mỗi ngày.") },
          { name: T("ETL", "ETL"), body: T("The raw data is cleaned and shaped into tables that match how the business reads its numbers.", "Dữ liệu thô được làm sạch và chuyển thành bảng khớp với cách doanh nghiệp đọc số liệu.") },
          { name: T("PostgreSQL", "PostgreSQL"), body: T("Everything lands in PostgreSQL next to orders and the cost ledger, so ads and sales can be joined.", "Mọi thứ nằm trong PostgreSQL cạnh đơn hàng và sổ chi phí, nên có thể ghép quảng cáo với doanh số.") },
          { name: T("Dashboards", "Dashboard"), body: T("ROAS, CTR and CPC dashboards, plus a rule-based recommender that suggests where budget should move.", "Dashboard ROAS, CTR, CPC, cùng bộ đề xuất theo luật gợi ý nơi nên chuyển ngân sách.") },
          { name: T("Reconciliation", "Đối chiếu"), body: T("Monthly figures are checked against the cost ledger and the Meta API and agree within 1%.", "Số liệu hằng tháng được đối chiếu với sổ chi phí và Meta API và khớp trong vòng 1%.") },
        ],
      },
    ],
  },
  brown: {
    name: "BrownVN",
    url: "https://brownvn.com",
    urlLabel: "brownvn.com",
    role: T("Freelance Full-stack Developer, 01/2026 - Present", "Freelance Full-stack Developer, 01/2026 - Hiện tại"),
    summary: T("A fashion brand's storefront, admin dashboard and database, built and run by me alone.", "Storefront, trang quản trị và cơ sở dữ liệu của một thương hiệu thời trang, do một mình tôi xây và vận hành."),
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
      body: [T("Designed, built and run IMYSM Studio. The full story is in Selected work above.", "Thiết kế, xây dựng và vận hành IMYSM Studio. Câu chuyện đầy đủ nằm ở phần Dự án chính phía trên.")],
    },
    {
      date: "01/2026 - Present",
      dateVi: "01/2026 - Hiện tại",
      role: T("Freelance Full-stack Developer, BrownVN", "Freelance Full-stack Developer, BrownVN"),
      meta: T("Freelance", "Freelance"),
      body: [T("Built and run the storefront, admin dashboard and database solo. Details are in Selected work above.", "Tự xây và vận hành storefront, trang quản trị và cơ sở dữ liệu. Chi tiết nằm ở phần Dự án chính phía trên.")],
    },
    {
      date: "07/2024 - Present",
      dateVi: "07/2024 - Hiện tại",
      role: T("Marketing and Operations Analyst, IMYSM", "Marketing và Operations Analyst, IMYSM"),
      meta: T("Part-time, fashion brand selling through its website, social channels and marketplaces", "Part-time, thương hiệu thời trang bán qua website, mạng xã hội và sàn TMĐT"),
      body: [
        T("Run Meta ads (about 6.3M VND spend in 09/2026): <b>3.4x Meta-attributed ROAS</b> (7.0x on total direct-channel revenue) and <b>1.5% link CTR</b>.", "Chạy quảng cáo Meta (chi khoảng 6,3 triệu đ trong 09/2026): <b>ROAS 3,4x theo Meta</b> (7,0x trên toàn bộ doanh thu kênh trực tiếp) và <b>CTR liên kết 1,5%</b>."),
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
    stack: ["Angular", "TypeScript", "Node.js", "Spring Boot", "Supabase", "Jest"],
    url: "https://github.com/DomTriet/homestay-dorm-management",
  },
  hospital: {
    name: T("Hospital Data Security on Oracle", "Bảo mật dữ liệu y tế trên Oracle"),
    date: "01/2026 - 05/2026",
    sub: T("Data Security in IS course, team of 5", "Môn An toàn và bảo mật dữ liệu trong HTTT, nhóm 5 người"),
    body: T(
      "Built the core of Subsystem 1: a C# WinForms Oracle admin app to create and drop users and roles, grant and revoke privileges (WITH GRANT OPTION, column-level SELECT and UPDATE) and inspect privileges per user or role. The wider project secured a hospital database with RBAC, VPD, Oracle Label Security, auditing and RMAN recovery.",
      "Xây nền tảng Phân hệ 1: ứng dụng C# WinForms quản trị Oracle, tạo và xóa user, role, cấp và thu hồi quyền (WITH GRANT OPTION, SELECT và UPDATE cấp cột) và xem quyền theo user hoặc role. Toàn đồ án bảo mật CSDL bệnh viện bằng RBAC, VPD, Oracle Label Security, kiểm toán và khôi phục RMAN."
    ),
    stack: ["Oracle", "C#", "WinForms", "RBAC", "VPD", "OLS"],
    url: "https://github.com/DomTriet/oracle-admin-hospital-security",
  },
};

/* ---------- Skills, foundation at the bottom ---------- */
const SKILLS = {
  title: T("Skills", "Kỹ năng"),
  intro: T("Stacked from foundation to growing edge, the way I think about a system.", "Xếp từ nền tảng đến phần đang phát triển, đúng cách tôi nghĩ về một hệ thống."),
  layers: [
    { name: T("Growing edge", "Đang phát triển"), edge: true, items: ["ETL pipelines", "pandas", "PyTorch", "Meta Graph API", "Google Sheets API", "Knowledge-graph recommenders (KGAT)"] },
    { name: T("Delivery and quality", "Triển khai và chất lượng"), items: ["Git / GitHub", "GitHub Actions CI", "Jest", "Playwright (E2E)", "ESLint", "Vercel", "Railway"] },
    { name: T("Frontend and integrations", "Frontend và tích hợp"), items: ["React", "Angular", "Vite", "Tailwind CSS", "SePay / VietQR", "Zalo OA", "GHN", "PayPal", "Cloudinary", "Meta Pixel / CAPI"] },
    { name: T("Services", "Dịch vụ"), items: ["Node.js", "Express", "REST API design", "Zod validation", "Webhooks (HMAC)", "Authentication and RBAC"] },
    { name: T("Data layer", "Tầng dữ liệu"), items: ["PostgreSQL", "SQL Server", "Supabase (Auth, RLS)", "Oracle (RBAC, VPD, OLS, FGA)", "Schema design", "Migrations", "Transactions"] },
    { name: T("Foundations", "Nền tảng"), items: ["JavaScript", "TypeScript", "SQL", "Python", "C#"] },
  ],
  business: {
    name: T("Beside the stack: the business side", "Bên cạnh stack: phía kinh doanh"),
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
    "Part-time, available throughout the week, growing toward Data Engineering. If you have a problem with orders, stock, payments or messy data, I'd like to hear it.",
    "Part-time, làm được cả tuần, định hướng Data Engineering. Nếu bạn có bài toán về đơn hàng, kho, thanh toán hoặc dữ liệu lộn xộn, tôi rất muốn nghe."
  ),
  cvEn: T("CV in English (PDF)", "CV tiếng Anh (PDF)"),
  cvVi: T("CV in Vietnamese (PDF)", "CV tiếng Việt (PDF)"),
};
