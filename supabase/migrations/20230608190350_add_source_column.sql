ALTER TABLE public.trees ADD COLUMN source TEXT NOT NULL DEFAULT 'unknown';
ALTER TABLE public.trees ALTER COLUMN source DROP DEFAULT;
