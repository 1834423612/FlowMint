-- Merged starter data
-- Keep values generic and safe for local initialization.

INSERT INTO app_user (email, display_name, locale)
VALUES ('demo@example.com', 'Demo User', 'zh')
ON DUPLICATE KEY UPDATE
  display_name = VALUES(display_name),
  locale = VALUES(locale);

INSERT INTO workflow (owner_user_id, slug, name, status, latest_version_no)
SELECT id, 'demo-workflow', '示例流程', 'draft', 1
FROM app_user
WHERE email = 'demo@example.com'
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  status = VALUES(status),
  latest_version_no = VALUES(latest_version_no);
