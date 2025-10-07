import axios from "axios";

const apiInstanceMockapi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// ==========================
// 🚀 REQUEST INTERCEPTOR
// ==========================
apiInstanceMockapi.interceptors.request.use(
  (config) => {
    // 🔹 Belum pakai token, tapi bagian ini siap nanti
    // const token = localStorage.getItem("ACCESS_TOKEN");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    // Logging request
    console.log(`[REQUEST] ${config.method?.toUpperCase()} → ${config.url}`);

    return config;
  },
  (error) => {
    console.error("[REQUEST ERROR]", error);
    return Promise.reject(error);
  }
);

// ==========================
// 🚀 RESPONSE INTERCEPTOR
// ==========================
apiInstanceMockapi.interceptors.response.use(
  (response) => {
    // Log respons singkat
    console.log(`[RESPONSE] ${response.status} ← ${response.config.url}`);
    return response;
  },
  (error) => {
    // Tangani error global sederhana
    if (error.response) {
      const { status, config } = error.response;

      if (status === 404) {
        console.warn(`❌ Endpoint tidak ditemukan: ${config.url}`);
      } else if (status >= 500) {
        console.error("💥 Server error:", error.response.data);
      }
    } else {
      console.error("🌐 Network error:", error.message);
    }

    return Promise.reject(error);
  }
);

export { apiInstanceMockapi };
