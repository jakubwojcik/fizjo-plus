import { useQuery } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";

import { searchResultsAtom, searchTermAtom } from "@/atoms/searchAtom.ts";
import { supabase } from "@/lib/supabase";
import { DBTables } from "@/types/db";
import { SearchResultSchema } from "@/types/search";

export const SEARCH_QUERY_KEY = "search";

const DBTestObjectSearchableField = "name";

export const useSearch = () => {
  const searchTerm = useAtomValue(searchTermAtom);
  const [, setSearchResults] = useAtom(searchResultsAtom);

  const searchQuery = useQuery<SearchResultSchema, Error>({
    queryFn: async () => {
      let queryResults: SearchResultSchema = {
        testObjects: [],
      };

      if (searchTerm.length === 0) {
        const testObjectsResult = await supabase
          .from(DBTables.TEST_OBJECTS)
          .select();

        queryResults = {
          testObjects: testObjectsResult.data || [],
        };

        setSearchResults(queryResults);
        return queryResults;
      } else if (searchTerm.length < 3) {
        setSearchResults(queryResults);
        return queryResults;
      } else {
        const testObjectsResults = await supabase
          .from(DBTables.TEST_OBJECTS)
          .select()
          .textSearch(DBTestObjectSearchableField, searchTerm);

        queryResults = {
          testObjects: testObjectsResults.data || [],
        };

        setSearchResults(queryResults);
        return queryResults;
      }
    },
    queryKey: [SEARCH_QUERY_KEY, searchTerm],
  });

  const { error, isError, isLoading } = searchQuery;

  return {
    error,
    isError,
    isLoading,
  };
};
