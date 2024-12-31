/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_API_KEY: string
  // Thêm các biến khác nếu cần
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
