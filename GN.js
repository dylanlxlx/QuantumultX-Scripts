var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if (url.indexOf("processAppleReceipt") != -1) {
    obj = {
        'data': {
            'processAppleReceipt': {
                '__typename': "ProcessAppleReceiptOutput",
                'isClassic': false,
                'subscription': {
                    'productId': "com.goodnotes.GoodNotes-6-iPad.6m.10_88",
                    'originalTransactionId': "239000010996615",
                    'tier': "platinum",
                    'refundedDate': null,
                    'refundedReason': null,
                    'isInBillingRetryPeriod': false,
                    'expirationDate': "2099-09-09T09:09:09Z",
                    'gracePeriodExpiresAt': null,
                    'overDeviceLimit': false,
                    'expirationIntent': "CUSTOMER_SUPPORT",
                    '__typename': "AppStoreSubscription",
                    'user': null,
                    'status': "ACTIVE",
                    'originalPurchaseDate': "2023-12-31T13:14:20Z"
                },
                'error': 0
            }
        }
    };
} else {
    obj = {
        'request_date': "2025-02-22T14:52:31Z",
        'request_date_ms': 16952e9,
        'subscriber': {
            'entitlements': {
                'apple_access': {
                    'grace_period_expires_date': null,
                    'purchase_date': "2022-09-08T01:04:17Z",
                    'product_identifier': "com.goodnotes.one_time_unlock"
                },
                'gn5': {
                    'grace_period_expires_date': null,
                    'purchase_date': "2022-09-08T01:04:17Z",
                    'product_identifier': "com.goodnotes.one_time_unlock"
                },
                'crossplatform_access': {
                    'grace_period_expires_date': null,
                    'purchase_date': "2022-09-08T01:04:17Z",
                    'product_identifier': "com.goodnotes.gn6_one_time_unlock"
                }
            },
            'first_seen': "2025-02-21T15:10:07Z",
            'last_seen': "2025-02-22T14:52:31Z",
            'management_url': null,
            'original_app_user_id': "B890B95B-64DF-4449-B26C-9642D08E776F",
            'original_application_version': "2395679.285305451",
            'original_purchase_date': "2023-12-31T13:14:20Z",
            'subscriptions': {
                'com.goodnotes.gn6_one_time_unlock_3999': {
                    'is_sandbox': false,
                    'ownership_type': "PURCHASED",
                    'billing_issues_detected_at': null,
                    'period_type': "normal",
                    'grace_period_expires_date': null,
                    'unsubscribe_detected_at': null,
                    'original_purchase_date': "2022-09-08T01:04:17Z",
                    'purchase_date': "2022-09-08T01:04:17Z",
                    'store': "app_store"
                }
            }
        }
    };
}
$done({body: JSON.stringify(obj)});
