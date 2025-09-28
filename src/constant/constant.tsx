const aboutUs = {
  address: "Jl. Usman Effendi No. 50 Lowokwaru, Malang",
  phone: "+62-877-7123-1234",
  email: "T6t6o@example.com",

  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

const allMenu = {
  kategori: [
    { title: "Digital & Teknologi", href: "#" },
    { title: "Pemasaran", href: "#" },
    { title: "Manajemen Bisnis", href: "#" },
    { title: "Pengembangan Diri", href: "#" },
    { title: "Desain", href: "#" },
  ],
  perusahaan: [
    { title: "Tentang Kami", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "Kebijakan Privasi", href: "#" },
    { title: "Ketentuan Layanan", href: "#" },
    { title: "Bantuan", href: "#" },
  ],
  komunitas: [
    { title: "Tips Sukses", href: "#" },
    { title: "Blog", href: "#" },
  ],
};

const videoPembelajaran: {
  image: string;
  title: string;
  desc: string;
  category: string[];

  author: string;
  authorImage: string;
  authorTitle: string;
  aurhorCompany: string;

  rating: number;
  review: number;
  price: number;
  href: string;
}[] = [
  {
    image: "/image/cover/1.jpg",
    title: "Belajar React Dasar",
    desc: "Pelajari fundamental React mulai dari konsep komponen, props, state, hingga membuat aplikasi sederhana. Materi ini dirancang khusus untuk pemula yang ingin memahami dasar React sebelum melangkah ke level yang lebih lanjut.",
    category: ["Digital & Teknologi", "Pengembangan Diri"],

    author: "John Doe",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "ABC Company",

    rating: 4.5,
    review: 10,
    price: 100000,
    href: "#",
  },
  {
    image: "/image/cover/2.jpg",
    title: "Strategi Marketing",
    desc: "Kenali strategi pemasaran modern dengan pendekatan digital dan konvensional. Kursus ini membahas cara memahami target pasar, menyusun kampanye yang efektif, serta meningkatkan brand awareness untuk bisnis Anda.",
    category: ["Pemasaran", "Manajemen Bisnis"],

    author: "Jane Smith",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "XYZ Company",

    rating: 2.5,
    review: 8,
    price: 50000,
    href: "#",
  },
  {
    image: "/image/cover/3.jpg",
    title: "Desain UI/UX",
    desc: "Pelajari prinsip dasar desain antarmuka dan pengalaman pengguna. Materi meliputi wireframing, prototyping, hingga praktik terbaik dalam menciptakan produk digital yang estetis sekaligus mudah digunakan.",
    category: ["Desain", "Digital & Teknologi"],

    author: "Mark Johnson",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "ABC Company",

    rating: 3.0,
    review: 5,
    price: 150000,
    href: "#",
  },
  {
    image: "/image/cover/4.jpg",
    title: "Manajemen Proyek Agile",
    desc: "Pahami cara mengelola proyek menggunakan metode Agile. Kursus ini membahas Scrum, Sprint Planning, serta bagaimana membangun kolaborasi tim yang produktif untuk mencapai target dengan fleksibilitas tinggi.",
    category: ["Manajemen Bisnis", "Pengembangan Diri"],

    author: "Emily Davis",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "XYZ Company",

    rating: 4.0,
    review: 12,
    price: 200000,
    href: "#",
  },
  {
    image: "/image/cover/5.jpg",
    title: "SEO untuk Pemula",
    desc: "Belajar langkah-langkah meningkatkan visibilitas website di mesin pencari. Anda akan memahami dasar-dasar keyword research, optimasi on-page, serta strategi link building untuk mendapatkan peringkat yang lebih baik.",
    category: ["Pemasaran", "Digital & Teknologi"],

    author: "Michael Wilson",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "ABC Company",

    rating: 3.5,
    review: 7,
    price: 100000,
    href: "#",
  },
  {
    image: "/image/cover/6.jpg",
    title: "Photoshop Dasar",
    desc: "Pelajari keterampilan dasar menggunakan Adobe Photoshop. Materi meliputi teknik cropping, color adjustment, retouching foto, hingga membuat desain grafis sederhana yang siap digunakan dalam proyek nyata.",
    category: ["Desain"],

    author: "Sarah Thompson",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "XYZ Company",

    rating: 4.5,
    review: 10,
    price: 150000,
    href: "#",
  },
  {
    image: "/image/cover/7.jpg",
    title: "Keterampilan Public Speaking",
    desc: "Tingkatkan kemampuan berbicara di depan umum dengan percaya diri. Kursus ini memberikan tips mengenai struktur presentasi, bahasa tubuh, serta cara mengatasi rasa gugup agar komunikasi lebih efektif.",
    category: ["Pengembangan Diri"],

    author: "David Johnson",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "ABC Company",

    rating: 5.0,
    review: 15,
    price: 200000,
    href: "#",
  },
  {
    image: "/image/cover/8.jpg",
    title: "Data Analysis dengan Excel",
    desc: "Kuasi teknik analisis data menggunakan Microsoft Excel. Dari fungsi dasar, pivot table, hingga visualisasi data, kursus ini membantu Anda mengambil keputusan bisnis berdasarkan data yang akurat.",
    category: ["Digital & Teknologi", "Manajemen Bisnis"],

    author: "Emily Davis",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "XYZ Company",

    rating: 4.5,
    review: 8,
    price: 150000,
    href: "#",
  },
  {
    image: "/image/cover/9.jpg",
    title: "Branding & Positioning",
    desc: "Pelajari bagaimana membangun identitas merek yang kuat. Kursus ini membahas strategi brand positioning, storytelling, dan cara membedakan produk Anda di pasar yang kompetitif.",
    category: ["Pemasaran", "Desain"],

    author: "Michael Wilson",
    authorImage: "/image/avatar-men.png",
    authorTitle: "Pengajar Profesional",
    aurhorCompany: "ABC Company",

    rating: 3.5,
    review: 6,
    price: 100000,
    href: "#",
  },
];

export { aboutUs, videoPembelajaran, allMenu };
