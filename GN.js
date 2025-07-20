// const $ = new Env("GoodNotes");

// 从请求头中提取 User-Agent
const ua = $request.headers["user-agent"] || $request.headers["User-Agent"];
let dylanlxlx = JSON.parse($response.body);

// 检查请求 URL 是否包含 "graphql"
if ($request.url.indexOf("graphql") != -1) {
    // 返回伪造的 GraphQL 响应，表示 App Store 订阅
    dylanlxlx = {
        data: {
            processAppleReceipt: {
                __typename: "AppStoreReceiptResponse",
                isClassic: false,
                subscription: {
                    productId: "com.goodnotes.gn6_one_time_unlock_3999",
                    originalTransactionId: "012345678901234",
                    tier: "pro",
                    refundedDate: null,
                    refundedReason: null,
                    isInBillingRetryPeriod: false,
                    expirationDate: "2032-09-09T01:04:17Z",
                    gracePeriodExpiresAt: null,
                    overDeviceLimit: false,
                    expirationIntent: "0",
                    __typename: "AppStoreSubscription",
                    user: null,
                    status: "active",
                    originalPurchaseDate: "2023-12-31T13:14:20Z"
                },
                error: 0
            }
        }
    };
} else {
    // 返回伪造的订阅管理 API 响应
    dylanlxlx = {
        request_date: "2025-02-22T14:52:31Z",
        request_date_ms: 6811111111111,
        subscriber: {
            entitlements: {
                apple_access: {
                    grace_period_expires_date: null,
                    purchase_date: "2022-09-08T01:04:17Z",
                    product_identifier: "com.goodnotes.apple_access_1y_0"
                },
                gn5: {
                    grace_period_expires_date: null,
                    purchase_date: "2022-09-08T01:04:17Z",
                    product_identifier: "com.goodnotes.gn6_one_time_unlock_3999"
                },
                crossplatform_access: {
                    grace_period_expires_date: null,
                    purchase_date: "2022-09-08T01:04:17Z",
                    product_identifier: "com.goodnotes.crossplatform_1y_3999"
                }
            },
            first_seen: "2025-02-21T15:10:07Z",
            last_seen: "2025-02-21T15:10:07Z",
            management_url: null,
            original_app_user_id: "$RCAnonymous$",
            original_application_version: "2395679.285305451",
            original_purchase_date: "2023-12-31T13:14:20Z",
            subscriptions: {
                "com.goodnotes.gn6_one_time_unlock_3999": {
                    is_sandbox: false,
                    ownership_type: "PURCHASED",
                    billing_issues_detected_at: null,
                    period_type: "normal",
                    grace_period_expires_date: null,
                    unsubscribe_detected_at: null,
                    original_purchase_date: "2023-12-31T13:14:20Z",
                    purchase_date: "2022-09-08T01:04:17Z",
                    store: "app_store"
                }
            }
        }
    };
}
$done({ body: JSON.stringify(dylanlxlx) });