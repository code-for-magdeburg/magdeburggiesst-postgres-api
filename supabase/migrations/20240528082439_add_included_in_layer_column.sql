ALTER TABLE trees_watered ADD COLUMN included_in_map_layer BOOLEAN DEFAULT FALSE;

CREATE OR REPLACE FUNCTION public.watered_today()
 RETURNS TABLE(tree_id text, total_amount integer)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
	RETURN query
	
	WITH today_midnight AS (SELECT DATE_TRUNC('day', NOW()) AS midnight)
	SELECT 
	    trees_watered.tree_id as tree_id,
	    SUM(amount)::integer AS total_amount
	FROM 
	    trees_watered
	WHERE 
	    timestamp >= (SELECT midnight FROM today_midnight) AND included_in_map_layer = FALSE
	GROUP BY 
	    trees_watered.tree_id;
		
END;
$function$;