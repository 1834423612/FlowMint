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

INSERT INTO provider_account (user_id, name, type, protocol, is_default, base_url, encrypted_api_key, default_model)
SELECT id, 'OpenAI Demo', 'openai', 'openai_compatible', 1, 'https://api.openai.com/v1', 'demo_api_key_replace_me', 'gpt-4o-mini'
FROM app_user
WHERE email = 'demo@example.com'
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  default_model = VALUES(default_model),
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO environment_profile (user_id, name, is_active, variables_json)
SELECT id, 'Default', 1, JSON_OBJECT('baseUrl', 'https://example.com')
FROM app_user
WHERE email = 'demo@example.com'
ON DUPLICATE KEY UPDATE
  variables_json = VALUES(variables_json),
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO workflow_version (workflow_id, version_no, graph, changelog)
SELECT w.id, 1,
  JSON_OBJECT(
    'nodes', JSON_ARRAY(
      JSON_OBJECT('id', 'n1', 'type', 'custom', 'data', JSON_OBJECT('type', 'open_url', 'label', 'Open URL', 'config', JSON_OBJECT('url', 'https://example.com'))),
      JSON_OBJECT('id', 'n2', 'type', 'custom', 'data', JSON_OBJECT('type', 'screenshot', 'label', 'Take Screenshot', 'config', JSON_OBJECT()))
    ),
    'edges', JSON_ARRAY(
      JSON_OBJECT('id', 'e1', 'source', 'n1', 'target', 'n2')
    )
  ),
  'seeded initial workflow'
FROM workflow w
WHERE w.slug = 'demo-workflow'
ON DUPLICATE KEY UPDATE
  graph = VALUES(graph),
  changelog = VALUES(changelog);
