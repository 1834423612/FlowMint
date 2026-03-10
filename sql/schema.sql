-- Merged initialization schema
-- This is a starter placeholder and should be expanded safely over time.

CREATE TABLE IF NOT EXISTS app_user (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NULL COMMENT 'bcrypt hashed password for local auth',
  display_name VARCHAR(120) NULL,
  locale VARCHAR(10) NOT NULL DEFAULT 'zh',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_session (
  id VARCHAR(64) PRIMARY KEY,
  user_id BIGINT NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_session_user (user_id),
  KEY idx_session_expires (expires_at),
  CONSTRAINT fk_session_user FOREIGN KEY (user_id) REFERENCES app_user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS workflow (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  owner_user_id BIGINT NOT NULL,
  slug VARCHAR(120) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  status VARCHAR(40) NOT NULL DEFAULT 'draft',
  latest_version_no INT NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_workflow_owner FOREIGN KEY (owner_user_id) REFERENCES app_user(id)
);

CREATE TABLE IF NOT EXISTS auth_identity (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  provider VARCHAR(50) NOT NULL,
  provider_user_id VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uk_auth_provider_user (provider, provider_user_id),
  KEY idx_auth_user (user_id),
  CONSTRAINT fk_auth_identity_user FOREIGN KEY (user_id) REFERENCES app_user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS provider_account (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  name VARCHAR(120) NOT NULL,
  type VARCHAR(40) NOT NULL,
  protocol VARCHAR(40) NOT NULL DEFAULT 'openai_compatible',
  is_default TINYINT(1) NOT NULL DEFAULT 0,
  base_url VARCHAR(512) NULL,
  encrypted_api_key TEXT NOT NULL,
  default_model VARCHAR(120) NULL,
  metadata JSON NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_provider_user (user_id),
  CONSTRAINT fk_provider_user FOREIGN KEY (user_id) REFERENCES app_user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS workflow_version (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  workflow_id BIGINT NOT NULL,
  version_no INT NOT NULL,
  graph JSON NOT NULL,
  changelog TEXT NULL,
  created_by BIGINT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uk_workflow_version (workflow_id, version_no),
  KEY idx_workflow_version_workflow (workflow_id),
  CONSTRAINT fk_workflow_version_workflow FOREIGN KEY (workflow_id) REFERENCES workflow(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS workflow_run (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  workflow_id BIGINT NOT NULL,
  workflow_version_id BIGINT NULL,
  trigger_type VARCHAR(40) NOT NULL DEFAULT 'manual',
  status VARCHAR(40) NOT NULL DEFAULT 'queued',
  started_at DATETIME NULL,
  finished_at DATETIME NULL,
  error_message TEXT NULL,
  logs JSON NULL,
  metadata JSON NULL,
  created_by BIGINT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_workflow_run_workflow (workflow_id),
  KEY idx_workflow_run_status (status),
  CONSTRAINT fk_workflow_run_workflow FOREIGN KEY (workflow_id) REFERENCES workflow(id) ON DELETE CASCADE,
  CONSTRAINT fk_workflow_run_version FOREIGN KEY (workflow_version_id) REFERENCES workflow_version(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS workflow_run_step (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  workflow_run_id BIGINT NOT NULL,
  node_id VARCHAR(120) NOT NULL,
  node_type VARCHAR(80) NOT NULL,
  status VARCHAR(40) NOT NULL DEFAULT 'queued',
  attempts INT NOT NULL DEFAULT 0,
  input JSON NULL,
  output JSON NULL,
  error_message TEXT NULL,
  started_at DATETIME NULL,
  finished_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_run_step_run (workflow_run_id),
  CONSTRAINT fk_run_step_run FOREIGN KEY (workflow_run_id) REFERENCES workflow_run(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS asset (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  workflow_run_id BIGINT NULL,
  type VARCHAR(40) NOT NULL,
  bucket VARCHAR(120) NOT NULL,
  object_key VARCHAR(512) NOT NULL,
  public_url VARCHAR(1024) NULL,
  metadata JSON NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_asset_run (workflow_run_id),
  CONSTRAINT fk_asset_run FOREIGN KEY (workflow_run_id) REFERENCES workflow_run(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS environment_profile (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  name VARCHAR(120) NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 0,
  variables_json JSON NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_env_profile_user (user_id),
  CONSTRAINT fk_env_profile_user FOREIGN KEY (user_id) REFERENCES app_user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS review_note (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  workflow_id BIGINT NULL,
  run_id BIGINT NULL,
  author_user_id BIGINT NULL,
  source_model VARCHAR(120) NULL,
  severity VARCHAR(40) NOT NULL DEFAULT 'info',
  content TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_review_workflow (workflow_id),
  KEY idx_review_run (run_id),
  KEY idx_review_author (author_user_id),
  CONSTRAINT fk_review_author FOREIGN KEY (author_user_id) REFERENCES app_user(id) ON DELETE SET NULL
);
