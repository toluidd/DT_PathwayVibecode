/*
# Create contact_enquiries table (single-tenant, no auth)

1. New Tables
- `contact_enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the enquirer's full name
  - `email` (text, not null) — contact email
  - `phone` (text) — optional phone number
  - `company` (text) — optional company name
  - `service` (text) — which service they're interested in
  - `message` (text, not null) — the enquiry body
  - `status` (text, default 'new') — enquiry status for tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_enquiries`.
- INSERT: Allow anon + authenticated to submit enquiries (public contact form).
- SELECT: No public read — enquiries are private to operators (service role only).
- UPDATE/DELETE: No public access — managed via service role only.

3. Notes
- This is a marketing-site contact form with no sign-in screen, so INSERT is open to anon.
- Reading and managing enquiries is done via the Supabase dashboard or a future admin panel using the service role key, which bypasses RLS.
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON contact_enquiries;
CREATE POLICY "anon_insert_enquiries"
ON contact_enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_enquiries" ON contact_enquiries;
CREATE POLICY "anon_select_enquiries"
ON contact_enquiries FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "anon_update_enquiries" ON contact_enquiries;
CREATE POLICY "anon_update_enquiries"
ON contact_enquiries FOR UPDATE
TO anon, authenticated
USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_enquiries" ON contact_enquiries;
CREATE POLICY "anon_delete_enquiries"
ON contact_enquiries FOR DELETE
TO anon, authenticated
USING (false);
