// Generated by Wrangler
// After adding bindings to `wrangler.toml`, regenerate this interface via `npm run cf-typegen`

interface Env {
    // 执行转换的服务 默认https://url.v1.mk
    BACKEND?: string;
    // 默认选择的后端
    DEFAULT_BACKEND?: string;
    // 自定义添加的后端列表
    CUSTOM_BACKEND?: string;
    // 是否锁定后端
    LOCK_BACKEND?: boolean;
    // 远程配置
    REMOTE_CONFIG?: string;
    // 分块数量
    CHUNK_COUNT?: string;
    // 数据库
    DB?: D1Database;
}

